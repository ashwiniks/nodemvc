var HomeController = require('./controllers/HomeController');
var UserController = require('./controllers/UserController');

// Routes
module.exports = function(app,urlencodedParser){
    
   // Main Routes
    
   app.get('/', HomeController.Index);
   app.get('/adduser', HomeController.Add); 

// POST /login gets urlencoded bodies
app.post('/adduser', urlencodedParser, HomeController.Add);

app.get('/edit/:id',HomeController.edit);
// POST /login gets urlencoded bodies
app.post('/edit', urlencodedParser, HomeController.edit);
app.post('/delete', urlencodedParser, HomeController.delete);
app.post('/register', urlencodedParser, UserController.register);
app.get('/register',UserController.register);
app.get('/promiseexp',UserController.promsieexp);

}