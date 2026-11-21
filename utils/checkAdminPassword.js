const { body } = require('express-validator');

const checkAdminPassword = body('admin_password')
  .notEmpty()
  .withMessage('Administrator password is required.')
  .custom((value) => {
    if (value !== process.env.ADMIN_PASSWORD) {
      throw new Error('Invalid administrator password.');
    }
    return true;
  });

module.exports = checkAdminPassword;
