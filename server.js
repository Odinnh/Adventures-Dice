const express = require('express')
const path = require('path')
const http = require('http')
const PORT = process.env.PORT || 5500
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, 'public')))

server.listen(PORT, () => { console.log(`server listening at ${PORT}`) })
let game = {
    state: {
        wizard:0,
        dice: {
            dice0: 'w',
            dice1: 'v',
            dice2: 'p',
            dice3: 'r',
            dice4: 'h',
            dice5: 'k',
            dice6: 'w',
        },
        heldDice: []
    }
}
const connections = [null, null, null, null]
let connected = 0
io.on('connection', socket => {
    console.log(`[#]    new connection id: ${socket.client.id}`)
    
    socket.on('get-state', () => {
        socket.emit('set-state', game)
    })
    socket.on('set-state', (newState) => {
        game = newState
        socket.broadcast.emit('set-state', game)
    })
    socket.on('anim-roll',()=>{
        socket.broadcast.emit('anim-roll')
    })
})