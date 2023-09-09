// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'next-giftfinder',
});

module.exports = {
  query: (text, values) => {
    return new Promise((resolve, reject) => {
      pool.query(text, values, (err, results) => {
        if (err) {
          console.error('Database error:', err); // Log the error for debugging
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};
