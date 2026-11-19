const db = require("../../db/queriesRooms");

const roomsDashboard = async (req, res, next) => {
  try {
    const [countAllRooms, countAccessibleRooms] = await Promise.all([
      db.countAllRooms(),
      db.countAccessibleRooms(),
    ]);

    res.render("roomsDashboard", {
      title: "Rooms Dashboard",
      countAllRooms,
      countAccessibleRooms,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = roomsDashboard;
