const pool = require('./pool');

const getRoomStandards = async () => {
  const { rows } = await pool.query(`
    SELECT * FROM room_standards
  `);
  return rows;
};

const createRoomStandard = async ({
  name,
  coffee_machine = false,
  bathtub = false,
  price = null,
}) => {
  await pool.query(
    `INSERT INTO room_standards (name, coffee_machine, bathtub, price)
    VALUES ($1, $2, $3, $4)`,
    [name, coffee_machine, bathtub, price],
  );
};

const updateRoomStandard = async (
  originalName,
  { name, coffee_machine, bathtub, price },
) => {
  await pool.query(
    `UPDATE room_standards
    SET name = $1, coffee_machine = $2, bathtub = $3, price = $4
    WHERE name = $5`,
    [name, coffee_machine, bathtub, price, originalName],
  );
};

const deleteRoomStandard = async (name) => {
  await pool.query(`  DELETE FROM room_standards WHERE name = $1`, [name]);
};

module.exports = {
  getRoomStandards,
  createRoomStandard,
  updateRoomStandard,
  deleteRoomStandard,
};
