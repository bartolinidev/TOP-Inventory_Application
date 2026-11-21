const checkAdminPassword = (req, res, next) => {
  const { admin_password } = req.body;

  if (!admin_password || admin_password !== process.env.ADMIN_PASSWORD) {
    const err = new Error('Invalid administrator password.');
    err.status = 403;
    return next(err);
  }

  next();
};

module.exports = checkAdminPassword;
