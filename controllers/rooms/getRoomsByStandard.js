const db = require('../../db/queries/queriesRooms');

const getRoomsByStandard = async (req, res, next) => {
  try {
    const { standard } = req.params;

    const rooms = await db.getRoomsByStandard({ standard });

    res.render('filteredRooms', {
      title: `Rooms in ${standard} standard`,
      rooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomsByStandard;
