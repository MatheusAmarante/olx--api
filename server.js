require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');

const apiroutes = require('./src/routes');

<<<<<<< HEAD
=======
mongoose.set("strictQuery", false);//aqui tira o erro do mongoose 

>>>>>>> 5a43d62c03f66c5669aa458cfb57e40169cf2870
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