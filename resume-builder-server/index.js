// import jsonServer

const jsonServer = require('json-server')

//create a server for resumebuilder

const resumeServer = jsonServer.create()

// router

const router = jsonServer.router('db.json')

// middleware

const middleware = jsonServer.defaults()

// PORT

const PORT = 3000 || process.env.PORT

// use middleware for json server

resumeServer.use(middleware)

// use router for client request

resumeServer.use(router)

// use router for client request

resumeServer.use(router)

resumeServer.listen(PORT,()=>{
    console.log(`ResumeBuilder-server started running at PORT:${PORT}... and waiting for client request`)
})