var user = require('../models/user');

exports.Index = function (request, response) {
    response.title = 'Hello World';
    var testdata = null;
    user.all("ashwini", function (err, data) {
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
        } else {
            // code to execute on data retrieval
            //console.log("result from db is : ", data);
            response.render('home/Index', { value: data });


        }
    });
};

exports.Add = function (request, response) {
    console.log("this is called");
    response.title = 'Add';
    if (request.body) {
        console.log(request.body.name);
        user.add(request.body.name, function (err, data) {
            if (err) {
                // error handling code goes here
                console.log("ERROR : ", err);
            } else {
                // code to execute on data retrieval
                console.log("result from db is : ", data);
                response.render('home/Index', { value: data });


            }
        });

    }



    response.render('home/Add', response);
};

/*
method for edit name
*/
exports.edit=function (request,response)
{
    //console.log("edit is called");
   // console.log(request.params.id);
    response.title = 'Edit';
    response.id=request.params.id;
    
    if (request.body) {
      
        console.log(request.body);
        user.editData(request.body.name,request.body.id,function (err, data) {
            if (err) {
                // error handling code goes here
                console.log("ERROR : ", err);
            } else {
                // code to execute on data retrieval
                console.log("result from db is : ", data);
               // response.render('home/edit', { value: data });


            }
        });

    }



    response.render('home/edit', response);

}

/*
method for delete
*/
exports.delete=function(request,response)
{
    if(request.body.id)
        {
           id= request.body.id;
    user.deleteData(id,function(err,result){
    if(err) throw err;
    else
        console.log("data is deleted"+result);
    });
        }
    //response.render('home/Index', response);
}