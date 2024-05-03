const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yoki',
    database: 'finance_installment'
});

db.connect((err) => {
    if (err) {
        res.send(err);
    } else {
        console.log('Connected to the database');

        // Perform a query
        // db.query('SELECT * FROM m_user', (err, results) => {
        //     if (err) {
        //         res.send(err);
        //     } else {
        //         res.send(results);
        //     }
        // });
    }
});

module.exports = db;

    
    // db.connect((err) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     module.exports = db.promise();
    //     // db.query('SELECT * FROM m_user', (err, results) => {
    //     //     if (err) {
    //     //         res.send(err);
    //     //     } else {
    //     //         res.send(results);
    //     //     }
    //     // });
    //     // console.log('Connected to the database');
    //     // res.send('Connected to the database');

    // });


