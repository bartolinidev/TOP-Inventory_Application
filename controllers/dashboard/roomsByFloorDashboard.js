const db = require('../../db/queriesRooms');

const roomsByFloorDashboard = async (req, res, next) => {
  try {
    const floors = await db.countRoomsGroupedByFloor();

    res.render('dashboard/roomsByFloorDashboard', {
      title: 'Rooms By Floor',
      floors,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = roomsByFloorDashboard;
