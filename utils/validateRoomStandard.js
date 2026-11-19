const { body } = require("express-validator");
const db = require("../db/queriesRoomStandards");

const validateRoomStandard = [
  body("name")
    .trim()
    .toLowerCase()
    .isLength({ min: 1, max: 20 })
    .withMessage(`Room standard name length must be 1-20`)
    // Ensure name uniqueness
    // On create: req.params.id is Number(undefined) = NaN -> s.id !== Number(req.params.id) is TRUE
    // On update: s.id !== Number(req.params.id) is FALSE
    .custom(async (name, { req }) => {
      const allStandards = await db.getAllRoomStandards();
      const duplicate = allStandards.find(
        (s) => s.name === name && s.id !== Number(req.params.id),
      );
      if (duplicate) throw new Error();
    })
    .withMessage(`Room standard already exists`),
  body("price")
    .trim()
    .isDecimal({
      decimal_digits: 2,
    })
    .isLength({ min: 1, max: 11 })
    .withMessage(`Price must contain max 10 digits`),
  body("coffee_machine").optional().toBoolean(),
  body("bathtub").optional().toBoolean(),
];

module.exports = validateRoomStandard;
