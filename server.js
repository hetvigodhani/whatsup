const express=require("express");
const app=express();
const http=require("http").createServer(app);

app.use(express.static(__dirname+'/public'));

const PORT=process.env.PORT || 3000;

http.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

//socket.io

const io=require("socket.io")(http);

io.on("connection",(socket)=>{
    console.log("Connected....");
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg);
    });
});
