const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const model=require('models');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

//Routes
app.post('/create', async(req,res)=>{

        let reqs = await model.User.create({
           'email' : req.body.emailUser,
           'senha' : req.body.emailUser
        });
        
});

//Start server
let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log(port,'Servidor Rodando');
})