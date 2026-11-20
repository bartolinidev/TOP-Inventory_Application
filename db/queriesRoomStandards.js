const pool = require("./pool");

const getAllRoomStandards = async () => {
  const { rows } = await pool.query(`
    SELECT * FROM room_standards
    ORDER BY id ASC
  `);
  return rows;
};

const getRoomStandard = async ({ id }) => {
  const { rows } = await pool.query(
    `
    SELECT * FROM room_standards
    WHERE id = $1
  `,
    [id],
  );
  return rows[0];
};

const createRoomStandard = async ({
  name,
  coffee_machine = false,
  bathtub = false,
  price = null,
}) => {
  await pool.query(
    `INSERT INTO room_standards (name, coffee_machine, bathtub, price)
    VALUES (INITCAP($1), $2, $3, $4)`,
    [name, coffee_machine, bathtub, price],
  );
};

const updateRoomStandard = async (
  originalId,
  { name, coffee_machine, bathtub, price },
) => {
  await pool.query(
    `UPDATE room_standards
    SET name = INITCAP($1), coffee_machine = $2, bathtub = $3, price = $4
    WHERE id = $5`,
    [name, coffee_machine, bathtub, price, originalId],
  );
};

const deleteRoomStandard = async ({ id }) => {
  await pool.query(`DELETE FROM room_standards WHERE id = $1`, [id]);
};

const countRoomsInStandard = async ({ id }) => {
  const { rows } = await pool.query(
    `SELECT COUNT(*) FROM rooms
     WHERE room_standard_id = $1`,
    [id],
  );
  return Number(rows[0].count);
};

module.exports = {
  getAllRoomStandards,
  getRoomStandard,
  createRoomStandard,
  updateRoomStandard,
  deleteRoomStandard,
  countRoomsInStandard,
};
