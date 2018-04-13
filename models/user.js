var db = require('../config/db.js');


module.exports.all = function getall(uname, callback) {
    //console.log(uname);
    db.query('SELECT * FROM name', (err, rows) => {
        if (err)
            callback(err, null);
        else
            callback(null, rows);



    });

}

module.exports.add = function add(uname, callback) {
    // console.log(uname);
    //check where user name already exist
    db.query('select name from `name` where `name` = ? ', [uname], (err, rows) => {
        if (err)
            callback(err, null);
        else {
            if (rows.length != 0) {
                callback(null, "data exist");

            }
            else {
                db.query("INSERT INTO `name` (name) VALUES ('" + uname + "')", (err, rows) => {
                    if (err)
                        callback(err, null);
                    else
                        callback(null, rows);



                });


            }
        }


    });

}
/*
model for edit name table  */

module.exports.editData = function editData(name, id, callback) {
    console.log("name=" + name + "id=" + id);
    db.query(
        'UPDATE name SET name = ? Where id = ?',
        [name, id],
        (err, result) => {
            if (err)
                callback(err, null);
            else
                callback(null, result);

        }
    );

}

/*
model for delete the data
*/
module.exports.deleteData = function deleteData(id, callback) {
    console.log("inside the delete" + id);
    db.query(
        'Delete from name Where id = ?',
        [id],
        (err, result) => {
            if (err)
                callback(err, null);
            else
                callback(null, result);

        }
    );

}


