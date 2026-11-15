const getRoomStandardsCreate = (req, res) => {
  res.render('createRoomStandard', {
    title: 'Create Room Standard',
  });
};

module.exports = getRoomStandardsCreate;
