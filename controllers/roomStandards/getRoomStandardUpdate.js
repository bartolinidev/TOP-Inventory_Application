const db = require('../../db/queriesRoomStandards');

const getRoomStandardUpdate = async (req, res, next) => {
  const { id } = req.params;
  try {
    const standard = await db.getRoomStandard({ id });

    res.render('updateRoomStandard', {
      title: 'Update Room Standard',
      standard,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomStandardUpdate;
