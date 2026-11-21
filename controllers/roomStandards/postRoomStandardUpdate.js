const db = require('../../db/queriesRoomStandards');
const { validationResult, matchedData } = require('express-validator');
const checkAdminPassword = require('../../utils/checkAdminPassword');
const validateRoomStandard = require('../../utils/validateRoomStandard');

const postRoomStandardUpdate = [
  checkAdminPassword,
  ...validateRoomStandard,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render('roomStandards/updateRoomStandard', {
          standard,
          title: `Update ${standard.name} Standard`,
          errors: errors.array(),
        });
      }

      const originalId = req.params.id;

      const { name, coffee_machine, bathtub, price } = matchedData(req);
      await db.updateRoomStandard(originalId, {
        name,
        coffee_machine,
        bathtub,
        price,
      });

      res.redirect('/room-standards');
    } catch (err) {
      next(err);
    }
  },
];

module.exports = postRoomStandardUpdate;
