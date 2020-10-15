const { conn } = require('../db');

async function up() {
  const sql = `
    CREATE TABLE IF NOT EXISTS foods (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT
    )
    `;

    const db = await conn();
    
    await db.run(sql);
}

async function down() {
  const sql = `DROP TABLE flags`;

  const db = await conn();

  await db.run(sql);
}

module.exports = { up, down };
