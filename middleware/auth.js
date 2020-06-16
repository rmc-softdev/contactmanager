const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async (req, res, next) => {
  // Get token from the header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authroization denied" });
  }

  try {
    const decoded = await jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
