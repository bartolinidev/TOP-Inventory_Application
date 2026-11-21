const dbRooms = require('../../db/queriesRooms');
const dbStandards = require('../../db/queriesRoomStandards');
const BED_TYPES = require('../../db/bedTypes');

const getRoomUpdate = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [room, standards] = await Promise.all([
      dbRooms.getRoomById({ id }),
      dbStandards.getAllRoomStandards(),
    ]);

    if (!room) {
      const err = new Error('Room not found.');
      err.status = 404;
      return next(err);
    }

    res.render('rooms/updateRoom', {
      title: 'Update Room',
      room,
      standards,
      bedTypes: BED_TYPES,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomUpdate;
