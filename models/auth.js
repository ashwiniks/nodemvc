var db = require('../config/db.js');
var promise=require('q');


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

/*
example of promise
*/
exports.promiseexp=function add()
{
    return new Promise((resolve,reject)=>{
        db.query("select * from users",function(err,results){
          if(err)
            {
            return reject(err);
            }
            else
                {
                return resolve(results);
                }
        });
    });
}
