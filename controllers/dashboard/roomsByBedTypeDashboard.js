const db = require('../../db/queriesRooms');

const roomsByBedTypeDashboard = async (req, res, next) => {
  try {
    const bedTypes = await db.countRoomsGroupedByBedType();

    res.render('roomsByBedTypeDashboard', {
      title: 'Rooms By Bed Type',
      bedTypes,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = roomsByBedTypeDashboard;
