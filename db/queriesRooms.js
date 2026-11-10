const pool = require('./pool');

const getRooms = async () => {
  const { rows } = await pool.query(`
    SELECT 
      rooms.id, 
      rooms.floor, 
      rooms.bed_type, 
      rooms.accessible,
      room_types.name AS room_type_name,
      room_types.coffee_machine,
      room_types.bathtub,
      room_types.price
    FROM rooms
    JOIN room_types ON rooms.room_type_id = room_types.id
    ORDER BY rooms.id ASC;
  `);
  return rows;
};

const createRoom = async ({
  id,
  room_type_id,
  floor,
  bed_type,
  accessible = false,
}) => {
  await pool.query(
    `INSERT INTO rooms
      (
      id,
      room_type_id,
      floor,
      bed_type,
      accessible
      )
    VALUES ($1, $2, $3, $4, $5)`,
    [id, room_type_id, floor, bed_type, accessible],
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
      room_types.name AS room_type_name,
      room_types.coffee_machine,
      room_types.bathtub,
      room_types.price
    FROM rooms
    JOIN room_types ON rooms.room_type_id = room_types.id
    WHERE rooms.floor = $1
    ORDER BY rooms.id ASC;
    `,
    [floor],
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
      room_types.name AS room_type_name,
      room_types.coffee_machine,
      room_types.bathtub,
      room_types.price
    FROM rooms
    JOIN room_types ON rooms.room_type_id = room_types.id
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
      room_types.name AS room_type_name,
      room_types.coffee_machine,
      room_types.bathtub,
      room_types.price
    FROM rooms
    JOIN room_types ON rooms.room_type_id = room_types.id
    WHERE rooms.id = $1
    ORDER BY rooms.id ASC;
    `,
    [id],
  );
  return rows[0];
};

const updateRoom = async (
  originalId,
  { id, room_type_id, floor, bed_type, accessible = false },
) => {
  await pool.query(
    `UPDATE rooms
      SET id = $1, room_type_id = $2, floor = $3, bed_type = $4, accessible = $5
      WHERE id = $6`,
    [id, room_type_id, floor, bed_type, accessible, originalId],
  );
};

const deleteRoom = async (id) => {
  await pool.query(`DELETE FROM rooms WHERE id = $1`, [id]);
};

module.exports = {
  getRooms,
  createRoom,
  getRoomsByFloor,
  getRoomsByBedType,
  getRoomById,
  updateRoom,
  deleteRoom,
};
