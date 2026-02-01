let boxes = document.querySelectorAll(".box")
let msg = document.querySelector(".msg")
let msgcontainer = document.querySelector(".msg-container")
let resetBtn = document.getElementById("reset-btn")

let winPatterns = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
     let turnX = true
  boxes.forEach(function(box){
    box.addEventListener('click',function(){
      if(turnX)
      {
        box.innerHTML="X"
        turnX = false
        box.disabled = true
        box.style.color="red"
      }
      else{
        box.innerHTML="O"
        turnX = true
        box.disabled=true
        box.style.color="blue"
      }
      checkwinner()
      
    })
  })
  

  function checkwinner()
  {
    winPatterns.forEach(function(pattern){
      // console.log(pattern);
      const pos1 = boxes[pattern[0]].innerHTML
      const pos2 = boxes[pattern[1]].innerHTML
      const pos3 = boxes[pattern[2]].innerHTML
      if(pos1!==""||pos2!==""||pos3!=="")
      if(pos1==pos2 && pos2==pos3)
      {
        //  console.log(`wiinner${pos1}`)
       msgcontainer.classList.remove("hide")
        msg.innerHTML = `winner is ${pos1}`
      disableButtons()

      }
    })
  }


  function disableButtons()
  {
    boxes.forEach(function(box){
      box.disabled= true
     
    })
  }

     function reset(){
      boxes.forEach(function(box){
        box.disabled = false
        box.innerHTML=""
        msgcontainer.classList.add("hide")
      })
     }
  
resetBtn.addEventListener("click", function () {
  reset()
})
  