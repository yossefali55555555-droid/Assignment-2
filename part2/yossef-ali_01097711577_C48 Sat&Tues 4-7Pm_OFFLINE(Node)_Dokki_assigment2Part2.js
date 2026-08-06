// 1
// import http from "http"
// import fs from "fs"
// http.createServer((req,res)=>{
//     let {url,method}=req
//     let data=""
//     let file =fs.readFileSync('./users.json',"utf-8")
//     if (url=="/user"&&method=="POST"){
//         req.on("data",(buffer)=>{
//             data+=buffer;
//         })
//         req.on("end",()=>{
//             data=JSON.parse(data)
//             file=JSON.parse(file)
//             const user= file.find((ele)=>{
//                 return ele.email===data.email;
//             })
//             if(user){
//                 res.writeHead(400)
//                 res.write("bad request")
//                 res.end()
//             }
//             else{
//              file.push(data)
//             fs.writeFileSync("./users.json",JSON.stringify(file))
//             res.writeHead(201)
//             res.write("user added")
//             res.end()
//             }
//         })
//     }
//     else{
//         res.writeHead(403)
//         res.write("forbbidden")
//         res.end()
//     }
// }).listen(3000)
// finish

// 2
// import http from "http"
// import fs from "fs"
// import { json } from "stream/consumers"
// http.createServer((req,res)=>{
//     let {url,method}=req
//     let data=""
//     let file = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
//     let id=Number(url.split("/")[2])
//     if(url===`/user/${id}`&&method==="PATCH"){
//         req.on("data",(buffer)=>{
//             data+=buffer
//         })
//         req.on("end",()=>{
//             data=JSON.parse(data)
//             const finding= file.find((ele)=>{
//                 return ele.id===id;
//             })
//             if(!finding){
//                 res.writeHead(404)
//                 res.end("user not found")
//             }
//             else{
//                 if(data.name) {
//                     finding.name=data.name
//                 }
//                  if(data.age) {
//                     finding.age=data.age
//                 }
//                  if(data.email) {
//                     finding.email=data.email
//                 }

//                 fs.writeFileSync("./users.json", JSON.stringify(file, null, 2));
//                 res.writeHead(200);
//                 res.end("User updated successfully");
//             }
//         })
//     }
// }).listen(3000)

// 3
// import http from "http"
// import fs from "fs"
// import { json } from "stream/consumers"
// http.createServer((req,res)=>{
//     let {url,method}=req
//     let file = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
//     let id=Number(url.split("/")[2])
//     if(url===`/user/${id}`&&method==="DELETE"){
        
//             const finding= file.findIndex((ele)=>{
//                 return ele.id===id;
//             })
//             if(finding===-1){
//                 res.writeHead(404)
//                 res.end("user not found")
//             }
//             else{
//                 file.splice(finding, 1);
//                 fs.writeFileSync("./users.json",JSON.stringify(file,null,2))
//                 res.writeHead(200);
//                 res.end("User removed successfully");
//             }
     
//     }
// }).listen(3000)


// 4
// import http from "http"
// import fs from "fs"
// http.createServer((req,res)=>{
//     let {url,method}=req
//     let file = fs.readFileSync("./users.json","utf-8")
//     if (url=="/users" && method=="GET"){
//         res.writeHead(200)
//         res.write(file)
//         res.end()
//     }
//     else{
//         res.writeHead(404)
//         res.end()
//     }
// }).listen(3000)

//5
import http from "http"
import fs from "fs"
http.createServer((req,res)=>{
    let {url,method}=req
    let file = JSON.parse(fs.readFileSync("./users.json","utf-8"))
    let id = Number(url.split("/")[2])//["", "user", "5"] so number is index: 2
    if (url==`/user/${id}` && method=="GET"){
        let finding=file.find((ele)=>{
            return ele.id==id;
        })
        if (!finding) {
             res.writeHead(404);
             res.end("User not found");
}
 else {
    res.writeHead(200);
    res.end(JSON.stringify(finding));
}
    }
    else{
        res.writeHead(404)
        res.end()
    }
}).listen(3000)