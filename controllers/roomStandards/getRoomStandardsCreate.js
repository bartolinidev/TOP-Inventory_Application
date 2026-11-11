const getRoomStandardsCreate = (req, res, next) => {
  res.render('createRoomStandard', {
    title: 'Create Room Standard',
  });
};

module.exports = getRoomStandardsCreate;
