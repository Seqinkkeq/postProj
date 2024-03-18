const express = require('express')
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRouter')
const Port = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api',userRouter)
app.use('/api', postRouter)

app.listen(Port, ()=>console.log(`server started on Port ${Port}`))