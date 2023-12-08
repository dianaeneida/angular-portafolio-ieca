//import { createServer } from "http"
const http = require("http");
const PORT = 3000

const server = createServer((req, res) => {
    res.writeHead(200, {"ContentType": "text/plain"})
    res.end("Mi servidor Node.JS")    
 })

server.listen(PORT, () => {
    console.log("El servidor está listo")
})