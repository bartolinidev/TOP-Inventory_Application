const pool = require('./pool');

const getRoomTypes = async () => {
  const { rows } = await pool.query(`
    SELECT * FROM room_types
  `);
  return rows;
};

const createRoomType = async ({
  name,
  coffee_machine = false,
  bathtub = false,
  price = null,
}) => {
  await pool.query(
    `INSERT INTO room_types (name, coffee_machine, bathtub, price)
    VALUES ($1, $2, $3, $4)`,
    [name, coffee_machine, bathtub, price],
  );
};

const updateRoomType = async (
  originalName,
  { name, coffee_machine, bathtub, price },
) => {
  await pool.query(
    `UPDATE room_types
    SET name = $1, coffee_machine = $2, bathtub = $3, price = $4
    WHERE name = $5`,
    [name, coffee_machine, bathtub, price, originalName],
  );
};

const deleteRoomType = async (name) => {
  await pool.query(`  DELETE FROM room_types WHERE name = $1`, [name]);
};

module.exports = {
  getRoomTypes,
  createRoomType,
  updateRoomType,
  deleteRoomType,
};
