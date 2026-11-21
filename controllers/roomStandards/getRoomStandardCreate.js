const getRoomStandardCreate = (req, res) => {
  res.render('roomStandards/createRoomStandard', {
    title: 'Create Room Standard',
  });
};

module.exports = getRoomStandardCreate;
