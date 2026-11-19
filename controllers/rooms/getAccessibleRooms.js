const db = require("../../db/queriesRooms");

const getAccessibleRooms = async (req, res, next) => {
  try {
    const rooms = await db.getAccessibleRooms();

    res.render("filteredRooms", {
      title: "Accessible Rooms",
      rooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAccessibleRooms;
