import http from 'http';
import { router } from "./routes.js";

const server = http.createServer(router)

server.listen(1337, () =>{
    console.log("sever started on PORT:1337");
})