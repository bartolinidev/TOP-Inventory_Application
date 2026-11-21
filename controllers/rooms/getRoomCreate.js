const dbStandards = require('../../db/queriesRoomStandards');

const BED_TYPES = ['Single', 'Twin', 'Double'];

const getRoomCreate = async (req, res, next) => {
  try {
    const standards = await dbStandards.getAllRoomStandards();

    res.render('rooms/createRoom', {
      title: 'Create Room',
      standards,
      bedTypes: BED_TYPES,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getRoomCreate;
