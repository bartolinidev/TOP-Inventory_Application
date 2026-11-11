const db = require('../db/queries/queriesRoomStandards');
const { body, validationResult, matchedData } = require('express-validator');

const validatePayload = [
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

const postRoomStandardsCreate = [
  ...validatePayload,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render('createRoomStandard', {
          title: 'Create Room Standard',
          errors: errors.array(),
        });
      }

      const { name, coffee_machine, bathtub, price } = matchedData(req);
      await db.createRoomStandard({ name, coffee_machine, bathtub, price });

      res.redirect('/room-standards');
    } catch (err) {
      next(err);
    }
  },
];

module.exports = postRoomStandardsCreate;
