 let far = document.getElementById('far')
 let celius = document.getElementById('celius')



 far.addEventListener('input',function()
 {
      // console.log(`far:${far.value}`)
      let cel = (far.value - 32) * 5/9
    //  console.log(`cel:${cel}`)
       celius.value = cel.toFixed(3)
       if(far.value=="")
        {
        celius.value==""
       }

})

celius.addEventListener('input', function()
{
  // console.log(celius.value)
  let far1=(celius.value * 9/5) + 32
   far.value= far1.toFixed(6)
   if(celius.value=="")
   {
    far.value==""
   }
  
})
