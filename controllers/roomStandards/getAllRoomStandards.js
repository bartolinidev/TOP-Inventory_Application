const db = require("../../db/queriesRoomStandards");

const getAllRoomStandards = async (req, res, next) => {
  try {
    const standards = await db.getAllRoomStandards();

    const entries = await Promise.all(
      standards.map(async (std) => {
        const c = await db.countRoomsInStandard({ id: std.id });
        return [std.id, c];
      }),
    );
    const count = Object.fromEntries(entries);

    res.render("roomStandards/allRoomStandards", {
      title: "Room Standards",
      standards,
      count,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllRoomStandards;
