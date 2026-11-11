const db = require('../db/queries/queriesRoomStandards');

const getAllRoomStandards = async (req, res, next) => {
  try {
    const standards = await db.getAllRoomStandards();

    res.render('roomStandards', {
      title: 'Room Standards',
      standards,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllRoomStandards;
