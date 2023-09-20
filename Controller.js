const express=require('express');
const bodyParser=require('body-parser');

const cors=require('cors');


let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json);

//Routes
app.post('/create', async(req,res)=>{
        console.log(req.body.emailUser);
        console.log(req.body.senhaUser)
})


//Start server
let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
})