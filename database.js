const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('database.db');


db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    console.log(rows);
    rows.forEach((row) => {
        console.log(row.name);
    });
});

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS countries (
        id INTEGER UNIQUE,
        name TEXT NOT NULL UNIQUE,
        residencePermit NUMBER NOT NULL,
        permanentResident NUMBER NOT NULL,
        visaCost NUMBER NOT NULL,
        worldPart TEXT NOT NULL,
        attitudeTowardsEmigrant TEXT NOT NULL,
        liveComfort TEXT NOT NULL,
        mainReligion TEXT NOT NULL,
        avgSalary NUMBER NOT NULL,
        topCity TEXT NOT NULL,
        population NUMBER NOT NULL
        )`
    )
    db.run(`
    CREATE TABLE IF NOT EXISTS cities(
        id INTEGER UNIQUE,
        name TEXT NOT NULL UNIQUE,
        capitalStatus BOOLEAN,
        countryLevel TEXT NOT NULL,
        country TEXT NOT NULL,
        population NUMBER NOT NULL
        )`
    )
});

db.close()