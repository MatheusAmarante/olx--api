require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');

const apiroutes = require('./src/routes');

mongoose.set("strictQuery", false); //aqui tira o erro do mongoose 
    
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
    console.log("erro: ", error.message);
});



const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(fileupload());

server.use(express.static(__dirname+'/public'));

server.use('/', apiroutes);

server.listen(process.env.PORT, () =>{
    console.log( `Rodando no endereço: ${process.env.BASE}` );
});