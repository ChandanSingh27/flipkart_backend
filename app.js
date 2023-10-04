const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const DatabaseConnection = require('./databases/database_connection.js')
const router = require('./routes/products_routes/get_products.js')

app.use(bodyParser.json())
app.use(cors({
        credentials: true,
        methods: ['GET,POST,PUT,DELETE'],
        origin: ['*']
}))
DatabaseConnection()

app.get('/',(req,res)=>{
        res.json({
                "done":"hey"
        })
})
app.use('/',router)



app.listen(5250,()=>{
        console.log("server started");
})