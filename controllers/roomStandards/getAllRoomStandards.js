const db = require('../../db/queriesRoomStandards');

const getAllRoomStandards = async (req, res, next) => {
  try {
    const standards = await db.getAllRoomStandards();

    res.render('allRoomStandards', {
      title: 'Room Standards',
      standards,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllRoomStandards;
