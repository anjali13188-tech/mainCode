
let input = document.getElementById("upload")
let fileWrapper = document.getElementById(filewrapper)
input.addEventListener("input", (e) => {
    let file = e.target.files[0].name
    let fileType = file.split(".")[1]
    showFile(file, fileType)
})

function showFile(file, fileType) {
    console.log(file, fileType)

  let showFileBox = document.createElement("div")
   showFileBox.classList.add("showfilebox")
   
  let left = document.createElement("div")
    left.classList.add("left")
//    console.log(left)
  

   showFileBox.appendChild(left)
    
    //  console.log(showFileBox)
    let span1 =document.createElement("span")
    // console.log(span1)
    span1.classList.add("filetype")
     span1.innerHTML= "fileType"
     left.appendChild(span1)

     let h3 = document.createElement("h3")
    //  console.log(h3)
     h3.innerHTML=file
      left.appendChild(h3)
    //   console.log(span1)

      let right = document.createElement("div")
      right.classList.add("right")
    //   console.log(right)
    
     let span2 =document.createElement("left")
     span2.classList.add("span")
     span2.innerHTML ='&#215'
     right.appendChild(span2)
     showFileBox.appendChild(right)
     console.log(showFileBox)


}


