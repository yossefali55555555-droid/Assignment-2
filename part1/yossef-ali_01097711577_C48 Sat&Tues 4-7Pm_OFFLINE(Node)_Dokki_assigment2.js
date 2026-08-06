// const path = require("path");
import fs from "fs/promises"
import fs2 from "fs"
import os from "os" 
import zlib from "zlib";
const gzip = zlib.createGzip();
// console.log('task 1')
// let myfunction = function (){
//     return `{file:${__filename}, Dir: ${__dirname}}`;
// }
// console.log(myfunction())
// console.log("_______________________________________________________________")

// console.log("task 2")
// let pathe ="/home/dir/file.txt"
// let funce  = (p)=>{
//    return path.basename(p)
// }
// console.log(funce (pathe))
// console.log("_______________________________________________________________")

// console.log("task 3")
// let obj={dir:"/folder", name:"app", ext:".js"}
// let fun=(o)=>{
//     let dire=o.dir;
//     let file=o.name+o.ext
//     return path.resolve(dire,file)

// }
// console.log(fun(obj))
// console.log("_______________________________________________________________")

// console.log("task 4")
// let pa="/home/dir/file.txt"
// let f = (pa)=>{
//     return path.extname(pa)
// }
// console.log(f(pa))
// console.log("_______________________________________________________________")

// console.log("task 5")
// let pn ="/home/app/name/oop.js"
// function parsing (pn){
//     return `{name:${path.parse(pn).name} , Ext :${path.extname(pn)}}`
// }
// console.log(parsing(pn))
// console.log("_______________________________________________________________")

// console.log("task 6")
// let pat= "/home/oop.txt"
// let absornot= function(pat){
//     if (pat[0]==="/"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(absornot(pat))
// console.log("_______________________________________________________________")
// console.log("task 7")
// let normalizer = function(...input){
//  return   path.join(...input)

// }

// console.log(normalizer("src", "components", "App.js"));
// console.log("honstly i used here ai alot")
// console.log("_______________________________________________________________")

// console.log("task 8")
// let relat="src/apps/jo.js"
// function rel (relat){
//     return path.resolve(relat)
// }
// console.log(rel(relat))
// console.log("_______________________________________________________________")


// console.log("task 9")
// let first ="/folder1"
// let second="folder2/file.txt"
// let joiner =(first,second)=>{
//     return path.join(first,second)
// }
// console.log(joiner(first,second))
// console.log("_______________________________________________________________")
// console.log("task 10")
//  await fs.writeFile("./test.txt","yossefali");
// async function dil(file){
//      fs2.unlink(file,(err)=>{
//         if(err){
//         console.log(err)
//         }
//      })
// }
// dil("./test.txt")
// console.log("_______________________________________________________________")

// console.log("task 11")
// function create(){
//     fs2.mkdirSync("test")
//     console.log("success")
// }
// create()
// console.log("_______________________________________________________________")
// console.log("task 12")
// import EventEmitter from "events";
// const event = new EventEmitter();
// event.on("start",(start)=>{
//     console.log("triggered")
// })
// event.emit("start",start)
// console.log("_______________________________________________________________")
// console.log("task 13")
// import EventEmitter from "events";
// const event = new EventEmitter();
// event.on("login",(username)=>{
//     console.log(`the username is ${username}`)
// })
// event.emit("login","yossef")
// console.log("_______________________________________________________________")
// console.log("task 14")
// const data = fs2.readFileSync("./test.txt","utf-8")
// console.log(`file content >> ${data}`)
// console.log("_______________________________________________________________")
// console.log("task 15")
// fs2.writeFile("./async.txt","yossefali",(err)=>{
//     if (err)console.log(err)
// })
// console.log("_______________________________________________________________")
// console.log("task 16")
// function ex(folder) {
//     if (fs2.existsSync(folder)) {
//         console.log("found");
//     } else {
//         console.log("not found");
//     }
// }
// ex("./test")
// console.log("_______________________________________________________________")
// console.log("task 17")
// function display(){
// const info ={
//     plateform:os.platform(),
//     Arch : os.arch()
// }
// console.log(info)
// }
// display()
// console.log("_______________________________________________________________")
// console.log("task 18 ")

// const stream1 =fs2.createReadStream("./async.txt",{highWaterMark:5,encoding:"utf-8"})
// stream1.on("data",(data)=>{
//     console.log(data)
// })
// console.log("_______________________________________________________________")
// console.log("task 19")
// fs2.writeFileSync("b.txt","")
// const stream1 = fs2.createReadStream("./async.txt",{highWaterMark:5,encoding:"utf-8"})
// const stream2=fs2.createWriteStream("./b.txt")
// stream1.on("data",(data)=>{
//     console.log(data)
//     stream2.write(data)
// })
// we can also make  : stream1.pipe(stream2)
// console.log("_______________________________________________________________")
// console.log("task 20")
// fs2.writeFileSync("gzip.txt.gz","")
// const stream1 = fs2.createReadStream("./async.txt",{highWaterMark:5,encoding:"utf-8"})
// const stream2=fs2.createWriteStream("./b.txt.gz")
// stream1.pipe(gzip).pipe(stream2)
// console.log("_______________________________________________________________")