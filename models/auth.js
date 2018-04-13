var db = require('../config/db.js');



/*
model for registering the user
*/
exports.register = function (data, callback) {
    console.log(callback);
    db.query('select email from users where email = ?', [data.email], (err, rows) => {
        if (rows) {
            callback(null, "email already exist!!");
        }
        else {
            db.query('INSERT INTO users SET ?', data, function (error, results, fields) {
                if (error)
                    callback(err, null);
                else
                    callback(null, results);
            });

        }



    });

}