const decodeJWT = require("./decodeJWT");

const verifyJWT = async (req, res, next) => {
  try {
    const token = req.get("authorization");
    // const user = await decodeJWT(token);
    const _id = await decodeJWT(token);
    req.userId = _id;
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = verifyJWT;
