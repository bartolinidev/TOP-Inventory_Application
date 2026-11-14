const getRoomCreate = (req, res, next) => {
  res.render('createRoom', {
    title: 'Create Room',
  });
};

module.exports = getRoomCreate;
