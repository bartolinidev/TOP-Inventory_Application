const dbRooms = require('../../db/queriesRooms');
const dbStandards = require('../../db/queriesRoomStandards');

const getRoomsByStandard = async (req, res, next) => {
  try {
    const { standard_id } = req.params;

    const [standard, rooms] = await Promise.all([
      dbStandards.getRoomStandard({ id: standard_id }),
      dbRooms.getRoomsByStandard({ standard_id }),
    ]);

    if (!standard) {
      return res.status(404).render('404', { title: 'Standard not found' });
    }

    res.render('filteredRooms', {
      title: `Rooms In ${standard.name} Standard`,
      rooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomsByStandard;
