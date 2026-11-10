const db = require('../db/queries/queriesRoomTypes');
const { body, validationResult, matchedData } = require('express-validator');

const validatePayload = [
  body('name')
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage(`Room type name length must be 1-20`),
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

const postRoomTypesCreate = [
  ...validatePayload,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render('createRoomType', {
          title: 'Create Room Type',
          errors: errors.array(),
        });
      }

      const { name, coffee_machine, bathtub, price } = matchedData(req);
      await db.createRoomType({ name, coffee_machine, bathtub, price });

      res.redirect('/room-types');
    } catch (err) {
      next(err);
    }
  },
];

module.exports = postRoomTypesCreate;
