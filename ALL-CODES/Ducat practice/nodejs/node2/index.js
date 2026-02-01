// import fs from "fs"

// fs.writeFileSync("apple.txt","this is an apple file!!")
// console.log("java")
// const res = fs.readFileSync("apple.txt","utf-8")
// console.log(res)
// console.log("c++")

//==============================async===================//

// console.log("javascript")
// fs.readFile("apple.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }

// })
// console.log("c++")


//=========================edit========================//

// fs.appendFileSync("apple.txt","this is apple company!!!!")
//  fs.unlinkSync("apple.txt")
//  fs.mkdirSync("first folder")
//  fs.writeFileSync("./first folder/one.html","<h1>HELLO NODEJS</h1>")
//  fs.mkdirSync("css")
//  fs.rmdirSync("css")

//==================command line arguments =============//

import fs from "fs"

// console.log(process.argv)
// console.log(process.argv[1])

let input = process.argv;
if (input[2]=="add")
{
    fs.writeFileSync(input[3],input[4])
}

else if (input[2]=="remove"){
    fs.unlinkSync(input[3])
}

else{
    process.stdout.write("invalid input")
}
