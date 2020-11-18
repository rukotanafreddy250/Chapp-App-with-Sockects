const path = require('path');
const {Client, Pool} = require('pg');
const http = require('http');
const socketio = require('socket.io');
const express = require('express');


const app = express();
const server = http.createServer(app);
const io = socketio(server);


// set static folder
// app.use(express.static(path.join(__dirname + 'public')));

//run when a client connects
io.on('connection', socket => {
    console.log('New WEbSocket Connection Established...');
});

//databases connection 
const client = new Client({
    user : 'RecipeDB',
    host: 'localhost',
    database: 'RecipeDB',
    password: '1234',
    port:'5432'
});

client.connect((err, results) => {
    if(err) throw err;
    console.log('PostgreSQl Database Connected');
});

// client.query('select * from chats', (err, results) => {
//     if(err) throw err;
//     console.log(results.rows);
// });





const port = 4000 /*|| process.env.port*/;
server.listen(port, () => {
    console.log('Server Started at port: '+port);
});