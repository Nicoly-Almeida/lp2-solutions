const { conn } = require('../db');

async function create(data) {
  const sql = `
  INSERT INTO
    flags (id, name, image)
  VALUES
    (?, ?, ?)
  `;

  const db = await conn();

  const { id, name, image} = data;

  const { lastID } = await db.run(sql, [id, name, image]);

  return lastID;
}

async function readAll() {
  const sql = `
    SELECT
      *
    FROM
      flags
  `;

  const db = await conn();

  const flags = await db.all(sql);

  return flags;
}

async function readById(id) {
  const sql = `
    SELECT * FROM flags WHERE flags.id = ?

  `;
  const db = await conn();

  const flags = await db.get(sql, [id]);
  await db.close();
  return flags;
}

module.exports = { create, readAll, readById };
