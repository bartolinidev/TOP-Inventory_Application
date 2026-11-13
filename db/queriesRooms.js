const pool = require('./pool');

const getRooms = async () => {
  const { rows } = await pool.query(`
    SELECT 
      rooms.id, 
      rooms.floor, 
      rooms.bed_type, 
      rooms.accessible,
      room_standards.name AS room_standard_name,
      room_standards.coffee_machine,
      room_standards.bathtub,
      room_standards.price
    FROM rooms
    JOIN room_standards ON rooms.room_standard_id = room_standards.id
    ORDER BY rooms.id ASC;
  `);
  return rows;
};

const createRoom = async ({
  id,
  room_standard_id,
  floor,
  bed_type,
  accessible = false,
}) => {
  await pool.query(
    `INSERT INTO rooms
      (
      id,
      room_standard_id,
      floor,
      bed_type,
      accessible
      )
    VALUES ($1, $2, $3, $4, $5)`,
    [id, room_standard_id, floor, bed_type, accessible],
  );
};

const getRoomsByFloor = async ({ floor }) => {
  const { rows } = await pool.query(
    `
    SELECT 
      rooms.id, 
      rooms.floor, 
      rooms.bed_type, 
      rooms.accessible,
      room_standards.name AS room_standard_name,
      room_standards.coffee_machine,
      room_standards.bathtub,
      room_standards.price
    FROM rooms
    JOIN room_standards ON rooms.room_standard_id = room_standards.id
    WHERE rooms.floor = $1
    ORDER BY rooms.id ASC;
    `,
    [floor],
  );
  return rows;
};

const getRoomsByStandard = async ({ standard }) => {
  const { rows } = await pool.query(
    `
    SELECT 
      rooms.id, 
      rooms.floor, 
      rooms.bed_type, 
      rooms.accessible,
      room_standards.name AS room_standard_name,
      room_standards.coffee_machine,
      room_standards.bathtub,
      room_standards.price
    FROM rooms
    JOIN room_standards ON rooms.room_standard_id = room_standards.id
    WHERE room_standards.name = $1
    ORDER BY rooms.id ASC;
    `,
    [standard],
  );
  return rows;
};

const getRoomsByBedType = async ({ bed_type }) => {
  const { rows } = await pool.query(
    `
    SELECT 
      rooms.id, 
      rooms.floor, 
      rooms.bed_type, 
      rooms.accessible,
      room_standards.name AS room_standard_name,
      room_standards.coffee_machine,
      room_standards.bathtub,
      room_standards.price
    FROM rooms
    JOIN room_standards ON rooms.room_standard_id = room_standards.id
    WHERE rooms.bed_type = $1
    ORDER BY rooms.id ASC;
    `,
    [bed_type],
  );
  return rows;
};

const getRoomById = async ({ id }) => {
  const { rows } = await pool.query(
    `
    SELECT 
      rooms.id, 
      rooms.floor, 
      rooms.bed_type, 
      rooms.accessible,
      room_standards.name AS room_standard_name,
      room_standards.coffee_machine,
      room_standards.bathtub,
      room_standards.price
    FROM rooms
    JOIN room_standards ON rooms.room_standard_id = room_standards.id
    WHERE rooms.id = $1
    ORDER BY rooms.id ASC;
    `,
    [id],
  );
  return rows[0];
};

const updateRoom = async (
  originalId,
  { id, room_standard_id, floor, bed_type, accessible = false },
) => {
  await pool.query(
    `UPDATE rooms
      SET id = $1, room_standard_id = $2, floor = $3, bed_type = $4, accessible = $5
      WHERE id = $6`,
    [id, room_standard_id, floor, bed_type, accessible, originalId],
  );
};

const deleteRoom = async (id) => {
  await pool.query(`DELETE FROM rooms WHERE id = $1`, [id]);
};

const countAllRooms = async () => {
  const result = await pool.query(`SELECT COUNT(*) FROM rooms`);
  return Number(result.rows[0].count);
};

const countRoomsInStandard = async ({ standard }) => {
  const result = await pool.query(
    `SELECT COUNT(*) FROM rooms
         JOIN room_standards ON rooms.room_standard_id = room_standards.id
         WHERE room_standards.name = $1`,
    [standard],
  );
  return Number(result.rows[0].count);
};

const countRoomsByBedType = async ({ bed_type }) => {
  const result = await pool.query(
    `SELECT COUNT(*) FROM rooms
         WHERE bed_type = $1`,
    [bed_type],
  );
  return Number(result.rows[0].count);
};

module.exports = {
  getRooms,
  createRoom,
  getRoomsByFloor,
  getRoomsByStandard,
  getRoomsByBedType,
  getRoomById,
  updateRoom,
  deleteRoom,
  countAllRooms,
  countRoomsInStandard,
  countRoomsByBedType,
};
