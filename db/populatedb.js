#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');
const roomStandardsArr = require('./roomStandardsArr');
const roomsArr = require('./roomsArr');

const roomStandardsTable = `
CREATE TABLE IF NOT EXISTS room_standards (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE,
  coffee_machine BOOLEAN,
  bathtub BOOLEAN,
  price DECIMAL(10, 2)
)`;

const seedRoomStandardQuery = `
INSERT INTO room_standards
  (name,
  coffee_machine,
  bathtub,
  price)
VALUES ($1, $2, $3, $4)
ON CONFLICT (name) DO NOTHING
`;

const seedRoomStandardValues = (standard) => {
  return [
    standard.name,
    standard.coffee_machine,
    standard.bathtub,
    standard.price,
  ];
};

const roomsTable = `
CREATE TABLE IF NOT EXISTS rooms (
  id INTEGER PRIMARY KEY,
  room_standard_id INTEGER REFERENCES room_standards(id),
  floor INTEGER,
  bed_type TEXT,
  accessible BOOLEAN DEFAULT false
)`;

const seedRoomsQuery = `
INSERT INTO rooms
  (id,
  room_standard_id,
  floor,
  bed_type,
  accessible)
VALUES ($1, $2, $3, $4, $5)
ON CONFLICT (id) DO NOTHING
`;

const seedRoomValues = (room) => {
  return [
    room.id,
    room.room_standard_id,
    room.floor,
    room.bed_type,
    room.accessible,
  ];
};

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    console.log('Seeding...');
    await client.connect();
    await client.query(roomStandardsTable);
    for (const std of roomStandardsArr) {
      await client.query(seedRoomStandardQuery, seedRoomStandardValues(std));
    }
    await client.query(roomsTable);
    for (const room of roomsArr) {
      await client.query(seedRoomsQuery, seedRoomValues(room));
    }
    console.log('Done');
  } catch (err) {
    console.error('Error seeding db', err);
  } finally {
    await client.end();
  }
}

main();
