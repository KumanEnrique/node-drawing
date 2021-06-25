const express = require('express')
const path = require('path')
const socketIO = require('socket.io')
const http = require('http')

//initialization
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

//settings
app.set('port', process.env.PORT || 3000)

require('./socket-io')(io)
//middlewares

//static files
app.use(express.static(path.join(__dirname,'public')))
//starting the server
server.listen(app.get('port'),()=>{
    console.log('server on port 3000');
})