const db = require('../../db/queriesRooms');

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
