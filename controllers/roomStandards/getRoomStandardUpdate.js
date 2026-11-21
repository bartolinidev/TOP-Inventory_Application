const db = require('../../db/queriesRoomStandards');

const getRoomStandardUpdate = async (req, res, next) => {
  const { id } = req.params;
  try {
    const standard = await db.getRoomStandard({ id });

    if (!standard) {
      const err = new Error('Standard not found.');
      err.status = 404;
      return next(err);
    }

    res.render('roomStandards/updateRoomStandard', {
      title: `Update ${standard.name} Standard`,
      standard,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomStandardUpdate;
