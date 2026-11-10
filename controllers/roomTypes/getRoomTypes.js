const db = require('../db/queries/queriesRoomTypes');

const getRoomTypes = async (req, res, next) => {
  try {
    const types = await db.getRoomTypes();

    res.render('roomTypes', {
      title: 'Room Types',
      types,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomTypes;
