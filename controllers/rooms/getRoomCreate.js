const getRoomCreate = (req, res) => {
  res.render('createRoom', {
    title: 'Create Room',
  });
};

module.exports = getRoomCreate;
