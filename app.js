const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js')
// const ejs = require('ejs')

const app = express();
app.use(express.static('body'))
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');



var items = ["buy food", "cook food","Eat food"]

app.get('/', (req, res)=>{
  
        let Day = date.getDate();
       res.render('index', {listtitle: Day, newlists : items})
  
})
var workitem = ['neat'];


app.get('/work',(req,res)=>{
    res.render('index', {listtitle: "Work list", newlists : workitem})
    
})

// app.post('/work', (req, res)=>{
//     if (req.body.list === "work"){
//     let item = req.body.mytext;
//     workitem.push(item);
//     res.redirect('/work')   
//     }else{
//         items.push(item)
//         res.redirect('/')
//     }
   

// })


app.post('/', (req, res)=>{
    if(req.body.list === "Work"){
    let item = req.body.mytext;
    workitem.push(item);
    res.redirect('/work');
    }else{
    var value =req.body.mytext;
    items.push(value);
   res.redirect('/')}
})

app.listen("8080", ()=>{
    console.log("The port 8080 is running")
})