const db = require('../db/queries/queriesRoomStandards');
const { validationResult, matchedData } = require('express-validator');
const validateRoomStandard = require('../../utils/validationRoomStandards');

const postRoomStandardsCreate = [
  ...validateRoomStandard,
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
