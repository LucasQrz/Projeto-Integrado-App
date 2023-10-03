const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const UserModel = require('./models/usuario');
const db = require("./db/conect")

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.post('/create', async(req,res)=>{
        let reqs = await UserModel.create({
           'email' : req.body.emailUser,
           'senha' : req.body.emailUser
        })
});

//Start server
let port = process.env.PORT || 3000;
app.listen(port, async (req,res)=>{
    console.log(port,'Servidor Rodando');

    await db.sync({force: false}) // se quiser que o banco

    console.log("banco conectado");
})