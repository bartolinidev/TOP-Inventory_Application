const getRoomTypesCreate = (req, res, next) => {
  res.render('createRoomType', {
    title: 'Create Room Type',
  });
};

module.exports = getRoomTypesCreate;
