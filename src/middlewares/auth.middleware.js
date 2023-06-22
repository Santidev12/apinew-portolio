import jwt from "jsonwebtoken";

async function authenticate(req, res, next) {
  try {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ").pop();
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).send("Sin authenticar!");
  }
}

export default authenticate;
