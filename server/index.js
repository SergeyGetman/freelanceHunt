const express = require('express')

const appServer = express(); //it's working

appServer.get('/', (req, res, next) => {
    res.send("this working")
})

appServer.listen('2002', () => {
    console.log("this is STARTED", new Date())
})