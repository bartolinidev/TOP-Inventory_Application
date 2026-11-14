const db = require('../db/queries/queriesRooms');

const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await db.getAllRooms();

    res.render('allRooms', {
      title: 'All Rooms',
      rooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllRooms;
