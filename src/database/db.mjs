import sqlite3 from 'sqlite3';

const { verbose } = sqlite3;

const db = new (verbose().Database)('./sqlite/video_points.db', (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        console.log('Database connected');
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )`);
    }
});

export default db;