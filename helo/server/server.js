const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const PORT=4000;
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );
app.use(session({
    secret: 'dgdfg',
    saveUninitialized: false,
    resave: false,
    cookie :{
        maxAge: 1000 *60,
    },

}));
app.get( '/api/posts',controller.getAll );
app.post('/api/posts', controller.create);
app.delete('/api/posts/:id', controller.delete);
app.put('/api/posts/:id', controller.update);
// app.get( '/api/onepost/:id', products_controller.getOne );


//login page
app.post('/api/login', controller.login);
app.post( '/api/logout', controller.logout );




app.listen(PORT, ()=> console.log(`you are running on : ${PORT}`))