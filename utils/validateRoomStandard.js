const { body } = require('express-validator');

const validateRoomStandard = [
  body('name')
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage(`Room standard name length must be 1-20`),
  body('price')
    .trim()
    .isDecimal({
      decimal_digits: 2,
      force_decimal: true,
    })
    .isLength({ min: 1, max: 11 })
    .withMessage(`Price must contain max 10 digits`),
  body('coffee_machine').optional().toBoolean(),
  body('bathtub').optional().toBoolean(),
];

module.exports = validateRoomStandard;