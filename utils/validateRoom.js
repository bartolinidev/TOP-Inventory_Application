const { body } = require('express-validator');
const BED_TYPES = require('../db/bedTypes');

const validateRoom = [
  body('id')
    .trim()
    .isInt({ min: 1 })
    .withMessage(`Room number must be an integer`)
    .toInt(),
  body('room_standard_id')
    .isInt({ min: 1 })
    .withMessage('Please select a valid room standard')
    .toInt(),
  body('floor')
    .trim()
    .isInt({ min: 0 })
    .withMessage('Floor must be 0 or higher')
    .toInt(),
  body('bed_type')
    .trim()
    .isIn(BED_TYPES)
    .withMessage('Please select a valid bed type'),
  body('accessible').customSanitizer(
    (value) => value === 'true' || value === true,
  ),
];

module.exports = validateRoom;
