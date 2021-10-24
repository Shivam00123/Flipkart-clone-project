const { sign } = require("jsonwebtoken");

const createToken = (user) => {
  const accessToken = sign(
    { userId: user._id, role: user.role },
    process.env.COOKIE_SECRET
  );
  return accessToken;
};
module.exports = { createToken };
