//import your http
const http = require ("http")


// create server with HTTP
const server = http.createServer((req, res)=> {
    console.log("server is created.")
})

//Initial Port

const PORT= 4000;

//Listen to Port
server.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))