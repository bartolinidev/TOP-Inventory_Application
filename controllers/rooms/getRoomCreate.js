const getRoomCreate = (req, res) => {
  res.render('rooms/createRoom', {
    title: 'Create Room',
  });
};

module.exports = getRoomCreate;
