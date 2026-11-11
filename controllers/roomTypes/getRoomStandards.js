const db = require('../db/queries/queriesRoomStandards');

const getRoomStandards = async (req, res, next) => {
  try {
    const standards = await db.getRoomStandards();

    res.render('roomStandards', {
      title: 'Room Standards',
      standards,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomStandards;
