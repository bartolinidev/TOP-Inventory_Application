const db = require('../db/queries/queriesRoomStandards');

const getRoomStandardUpdate = async (req, res, next) => {
  const { name } = req.params;
  try {
    const standard = await db.getRoomStandard(name);

    res.render('updateRoomStandard', {
      title: 'Update Room Standard',
      standard,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomStandardUpdate;
