const db = require('../../config/database/db');  // Import the database connection

function getAllUsers() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM m_user', (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getAllUsers
};
