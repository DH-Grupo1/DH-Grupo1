const express = require('express');
const path = require ('path')

const app = express()

app.listen(3600,()=> console.log("servidor corriendo"))

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/view/index.html')
)})

app.get("/product", (req,res) =>{
    res.sendFile(path.resolve(__dirname,"./view/product.html"))})

    app.get("/registro", (req,res) =>{
        res.sendFile(path.resolve(__dirname,"./view/registro.html"))})

    app.get("/register", (req,res) =>{
        res.sendFile(path.resolve(__dirname,"./view/login.html"))})
        app.get("/carrito", (req,res) =>{
            res.sendFile(path.resolve(__dirname,"./view/carrito.html"))})
    

       
    