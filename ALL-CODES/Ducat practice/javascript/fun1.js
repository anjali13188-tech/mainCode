// //======= 1. function having no arguments but no return value========

// function Anjalisrivastava()
// {
//     console.log("helllooooo")

// }
// Anjalisrivastava()

// if(true)
// {
//     Anjalisrivastava()

// }

// for (i=1; i<=6; ++i)
// {
//     Anjalisrivastava()
// }


// ===== 2.function having arguments but no return====//

// function greeting(tittle,age)
// {
//     console.log(`amit ${tittle}`)
//     console.log(`age ${age}`)
// }
// greeting('amit',18)
// greeting('sanjana',24)



//===== 3. function having return value but no argumnets===//

// function rk()
//  {
//     return "hello"
//  }
//    console.log(rk())
    

// let res = rk()
// console.log(res)


//4. function having arguments and return value both//
  
        //  function add(x,y)
        //  {
        //     let sum = x+y
        //      return sum
        //  }

        //  console.log(add(10,20))

        //   let res = add(10,20)
        //   console.log(res)


        // const ducat = function ()
        // {
        //     console.log(" hello fun")
        // }
        //  ducat()


         //=================== high ordered function===========//
         
        //   function test(x,cb)
        //   {
        //      console.log(x)
        //      cb()
        //   }
        //     test(12,function(){console.log("hello world")})

          

      // function rk() {
      //   return function()  {
      //           console.log("hello rk")
      //   }
      // }
      // let res = rk()
      //  res()


      // arrow function//

    const square = (x)=> x*x
    console.log(square(16))


    const square1 =x=> x*x
    console.log(square1(16))

    