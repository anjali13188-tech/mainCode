let text = document.getElementById("text")
text.addEventListener("input",()=>{
    let data = text.value
   
    let len = 0;
    for(i=0; i<data.length;++i)
    {
        if(data[i]!=" ")
         {
            len++
         }
        
    }
      document.getElementById("chars").innerHTML= len

    let res = data.trim(" ")
      let result = data.split(" ")
      let new_array = result.filter((arr)=>{
        return arr!=""
      })
      
    document.getElementById("words").innerHTML = new_array.length
}) 