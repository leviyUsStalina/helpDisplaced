const sqlite3 = require('sqlite3');

function getCountries(callback) {
    let db = new sqlite3.Database('./database.db')

    let query = `SELECT * FROM countries`
    
    db .all(query, (err , rows) => {
        if (err) {
            callback(err, null);
        } else{
            callback(null , rows);
        }
        db.close()
    })
};

module.exports = {
    getCountries
};