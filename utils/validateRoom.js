const { body } = require('express-validator');

const validateRoom = [
  body('id')
    .trim()
    .isInt({ min: 1 })
    .withMessage(`Room number must be an integer`),
  body('room_standard_id').isInt({ min: 1 }),
  body('floor').isInt({ min: 1 }),
  body('bed_type').trim().notEmpty().withMessage('Bed type is required'),
  body('accessible').optional().toBoolean(),
];

module.exports = validateRoom;
