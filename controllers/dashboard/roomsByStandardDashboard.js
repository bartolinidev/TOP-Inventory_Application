const db = require('../../db/queriesRooms');

const roomsByStandard = async (req, res, next) => {
  try {
    const roomStandards = await db.countRoomsGroupedByStandard();

    res.render('roomsByStandardDashboard', {
      title: 'Rooms By Standard',
      roomStandards,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = roomsByStandard;
