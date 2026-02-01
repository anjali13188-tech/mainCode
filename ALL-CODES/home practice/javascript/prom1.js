//===================promise=================//
 
// let promise2 = new Promise(( reslove, reject) =>{
// console.log("hello")
// reslove()
// reject()

//  let status = true
//  status 
//  ? reslove( {id:111,tittle:"laptop", brand:"thinkpad"})
//  :reject({Error:"something went wrong!!!!!!"})
// })

// console.log(promise2)//
// promise2
 //.then((data)=>console.log( data.id,data.brand))
 //.catch(()=> console.log(err.ERROR))
 //.finally(()=>console.log("all done!!"))

 //localStorage//

 //localStorage.setItem("city","Delhi")
 //localStorage.setItem("year","2025")
  
 //let city =  localStorage.getItem("city")
// console.log(city)


// let person = {
//     id:111,
//     name:"Anjali",
//     email:"anjali@123.com",
//     age:18

// }
// localStorage.setItem("data", JSON.stringify(person))

// let res= JSON.parse(localStorage.getItem("data"))
// consolelog(res)


const res = fetch (`https://fakestoreapi.com/products/1`)
    res 
    .then ((response)=>response.json())
    .then((data)=>
    {
        document.writeln(`<table border='1' width='100%'>`)
        document.writeln(`<tr>`)
        document.writeln(`<th> id </th> <th>price<th> <th>image</th>`)
        document.writeln(`</tr>`)

        for(i=0; i<data.length; ++i)
{

     document.writeln(`tr>`)
     document.writeln(`<td> ${ data[i].id}</td>`)
     document.writeln(`<td> ${ data[i].price}</td>`)
     docucument.writeln(`<td>
        <img scr='${data[i].image}' width='100px' height='100px'>
        (/<td>`)

        document.writeln(`</tr>`)
}
    document.writeln(`</table`)
  
     })
