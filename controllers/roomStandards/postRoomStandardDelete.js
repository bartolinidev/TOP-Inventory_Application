const db = require('../db/queries/queriesRoomStandards');

const postRoomStandardsDelete = async (req, res, next) => {
  const { name } = req.params;

  try {
    const roomsUsingStandard = await db.countRoomsInStandard(name);

    if (roomsUsingStandard > 0) {
      const allStandards = await db.getAllRoomStandards();
      const otherStandards = allStandards.filter((std) => std.name !== name);

      return res.status(400).render('deleteRoomStandard', {
        title: 'Delete Room Standard',
        standardName: name,
        otherStandards,
        error:
          'Cannot delete this standard because there are rooms assigned to it.',
      });
    }

    await db.deleteRoomStandard(name);
    res.redirect('/room-standards');
  } catch (err) {
    next(err);
  }
};

module.exports = postRoomStandardsDelete;
