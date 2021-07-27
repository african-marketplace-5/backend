const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../secrets');
const User = require('../users/users-model');


const checkUsernameExists = async (req, res, next) => {
  const { username } = req.body;

  const user = await User.findByUsername(username);

  if (user){
    next();
  } else {
    res.status(400).json({
      message: 'invalid username'
    })
  }
}

const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token){
    res.status(400).json({ message: 'You are not authorized to access this API' });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err){
        res.status(401).json({ message: 'token invalid' })
      } else {
        req.decodedJWT = decoded;
        next();
      }
    })
  }
}

module.exports = {
  checkUsernameExists,
  restricted
}