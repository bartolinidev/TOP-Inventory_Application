const db = require('../../db/queriesRooms');

const getRoomsByBedType = async (req, res, next) => {
  try {
    const { bed_type } = req.params;

    const rooms = await db.getRoomsByBedType({ bed_type });

    res.render('filteredRooms', {
      title: `Rooms with ${bed_type} bed${bed_type === 'twin' ? 's' : ''}`,
      rooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomsByBedType;
