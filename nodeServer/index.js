// node sever which will handle socket io connection

const { Socket } = require("socket.io");

const io=require("socket.io")(1600);

const users={};

io.on('connection',socket=>{
    socket.on('new-user-joined',name=>{
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message, name:users[socket.id]});
    });
});