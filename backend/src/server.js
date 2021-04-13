const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');

const port = 3000;
const hostname = 'localhost';

const pessoaRoutes = require('./routes/pessoa');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/pessoa/', pessoaRoutes)

mongoose.connect('mongodb://root:faesa123@localhost:27017/sysagendamento?authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no Mongo'));
db.once('open', function() {
    console.log("Banco de Dados Mongo conectado com sucesso");
});



app.get('/', function(req, res){
    res.status(200).send({ msg: "Funcionando"})
});

app.listen(port, hostname, () => {
    console.log(`Servidor rodando no endereço: http://${hostname}:${port}`);
});