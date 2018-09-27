const express = require('express')
const mongoose = require('mongoose')
//react set
const DB_URL = 'mongodb://127.0.0.1:27017/react'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

const app = express()

app.get('/',function(req,res){
    res.send('<h1>hello</h1>')
})

app.get('/data',function(req,res){
    res.json({name:'react', type:'IT'})
})

app.listen(9093, function(){
    console.log('Node app start at port 9093')
})