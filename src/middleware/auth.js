const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const checkAuth = async (req, res, next) => {
  const token = req.headers.token;

  try {
    const payload = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ email: payload.email });

    if (!user) {
      return res.status(400).send('Invalid token');
    }

    res.locals.user = user;
    next();
  } catch (error) {
    return res.status(400).send('Invalid token');
  }
};

const checkAdmin = (req, res, next) => {
  if (res.locals.user.role === 'admin') {
    next();
  } else {
    return res.status(401).send('Unauthorized');
  }
};

module.exports = {
  checkAuth,
  checkAdmin
};
