var user = require('../models/auth');

exports.register = function (req, res) {
    // console.log("req",req.body);
    if (req.method == "POST") {
        var today = new Date();
        var users = {
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "password": req.body.password,
            "created": today,
            "modified": today
        }
        user.register(users, function(err, data) {
            if (err) {
                res.render("user/register",{ msg: "there is some error" });
            }
            else {
                res.render("user/register",{ msg: data });
            }

        });
    }
    else {

        res.render('user/register');
    }


}
