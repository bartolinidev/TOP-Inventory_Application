const db = require('../../db/queries/queriesRooms');

const roomsDashboard = async (req, res, next) => {
  try {
    const countAllRooms = await db.countAllRooms();

    res.render('roomsDashboard', {
      title: 'Rooms Dashboard',
      countAllRooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = roomsDashboard;
