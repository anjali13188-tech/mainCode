// class Test 
// {
//     x =10 ; //intance variable
//     msg() //intance methods
//       {
//     console.log("msg fun!")
//       }   
// }


// let T1 =new Test()
// console.log(T1.x)
// T1.msg()

// let T2= new Test()
// console.log(T2.x)
// T2.msg()

//===============Constructor function=========

//  class Demo
//  {
//     constructor(tittle)
//     {
//         console.log("consturctor fun ", tittle)

//     }
//  }

//  let d1 = new Demo ("ducat")


// class Mobile
// {
//     constructor(modleno,color, price)
//     {
//         this.modleno = modleno
//         this.color = color
//         this.price = price
        
//     }
//     mobileDetials()
//     {
//         console.log(`modele no: ${this.modleno}`)
//         console.log(`color:  ${this.color}`)
//         console.log(`price:  ${this.price}`)

//     }
// }

// let samsung = new Mobile ("m30","black", 10000)
// console.log("==========samsung mobile details")
// samsung.mobileDetials()

// let redmi= new Mobile ("m30","black", 10000)
// console.log("==========redmi mobile details")
// samsung.mobileDetials()

//  //============inheretence============
// // extends//

//  class  A
//  {
//     fun1 
//     fun2
    
//  }
 
//  class  B
//  {
//     fun1 
//     fun2
//     fun3
//     fun4
    
//  }

//  class  C
//  {
//     fun1 
//     fun2
//     fun3
//     fun4
//     fun5
//     fun6
    
//  }


class parentt{
    constructor(title)
    {
        console.log("Parentt class consturctor!==",title)

    }
}

class Child extends  parentt{
 constructor(title)
 {
    super(title)
    console.log("Child class consturctor!")
 }
}


let c1 = new Child("ducat")
