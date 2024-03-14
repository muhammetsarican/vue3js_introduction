const socket= require("socket.io");
const express = require("express");
const http= require("http");

const app=express();

const PORT=process.env.PORT || 2024;

const server= http.createServer(app);

const io=socket(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST", "OPTIONS"],
    },
});

server.listen(PORT, ()=>{
    io.on("connection",(socket)=>{
        console.log("Hopppaaa");
        console.log(socket.id);
        // ! Join method for connect a room
        // socket.join("133")

        //! io.in(roomID).emit() method for sending message to a room

        //! Sending welcome message
        socket.emit("WELCOME_MESSAGE", `Heeyy ${socket.id} bro welcome our server...`);
        // socket.on("CLIENT_MESSAGE", (data)=>{
        //     console.log("New message received: ", data);
        // })

        socket.on("NEW_BOOKMARK_EVENT",(bookmark)=>{
            console.log("new bookmark received: ", bookmark);
            io.emit("NEW_BOOKMARK_ADDED");
        })
    })
})