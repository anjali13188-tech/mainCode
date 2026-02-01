  import fs from "fs"

fs.writeFileSync("home.txt","this is my home!!")
// console.log("react")
//  const home = fs.readFileSync("home.txt","Utf-8")
//  console.log(home)
//  console.log("java")

// //  ==================async==============

//  console.log("javascript")
//   fs.readFile("home.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
//   })
//   console.log("mern")



// =======================edit===============

//  fs.appendFileSync("home.txt","my home")
// //  fs.unlinkSync("home.txt")
//  fs.mkdirSync("ducat")
//  fs.writeFileSync("./ducat/one.html","<h1>this my first html file</h1>")



// ===========================command line argument=====================

// import fs from  "fs"
// console.log(process.argv[0])
//  let input=process.argv;
//  if(input[2]=="add"){
//     fs.writeFileSync(input[2],input[3])
//  }
//  else if(input[2]=="remove")
// {
//    fs.unlinkSync(input[3])
//  }
//  else{
//     process.stdout.write(`input invalid`)
//  }
