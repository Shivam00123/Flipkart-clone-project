const Users = require("../../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createToken } = require("../../../../JWT");

function authController() {
  return {
    async signUp(req, res) {
      const { name, email, password } = req.body;
      Users.exists({ email: email }, (err, data) => {
        if (data) {
          return res.send("Email already exists");
        }
      });
      const hashPassword = await bcrypt.hash(password, 10);

      const user = new Users({
        name,
        email,
        password: hashPassword,
      });
      user
        .save()
        .then((user) => {
          return res.json({ message: "user-registered" });
        })
        .catch((err) => console.log(err));
    },

    async login(req, res) {
      const { email, password } = req.body;
      console.log("cred", email, password);
      const user = await Users.findOne({ email: email });
      if (!user) {
        return res.json({ message: "User not found" });
      }
      bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
          return res.json({ message: "Invalid username and password" });
        }
        const accessToken = createToken(user);
        res.cookie("access-token", accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000,
          httpOnly: true,
        });
        return res.json({ message: "User found" });
      });
    },
    logout(req, res) {
      res.cookie("access-token", "", {
        maxAge: 1,
      });
      res.redirect("/");
    },
  };
}

module.exports = authController;
