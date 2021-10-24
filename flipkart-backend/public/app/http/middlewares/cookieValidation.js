const jwt = require("jsonwebtoken");

const validation = (req, res, next) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) {
    req.message = "userNotIdentified";
    next();
    // return res.json({ message: "userNotIdentified" });
  }
  try {
    const validToken = jwt.verify(accessToken, process.env.COOKIE_SECRET);
    if (validToken) {
      const decoded = jwt.decode(accessToken);
      console.log("decoded", decoded);
      req.message = "verifiedUser";
      req.role = decoded.role;
      // res.json({ message: "verifiedUser", role: decoded.role });
      return next();
    } else {
      req.message = "not verified";
      // res.json({ message: "not verified" });
      return next();
    }
  } catch (err) {
    return res.json({ message: err });
  }
};

module.exports = { validation };
