

const Questions = [
    {
      ques: "HTML stands for",
      a: "hyper text markup language",
      b: "hyper text mark language",
      c: "hyper text marks language",
      d: "hyper text mark language",
      correct: "a",
    },

    {
      ques: "which one of the following is not a sematic tag",
      a: "footer",
      b: "div",
      c: "header",
      d: "nav",
      correct: "b",
    },

    {
      ques: "Largest heading in HTML5",
      a: "h2",
      b: "h5",
      c: "h6",
      d: "h1",
      correct: "d",
    },

    {
        ques: "Which one of the following in block element",
        a: "del",
        b: "span",
        c: "div",
        d: "mark",
        correct: "c",
      },
  ];

   let ques =  document.getElementById("ques")
   let options = document.querySelectorAll(".options");

   let index = 0 
  let right = 0 ,  wrong = 0

 function loadQuestion() {
   reset()
  ques.innerHTML = Questions[index].ques;

  options[0].nextElementSibling.innerHTML = Questions[index].a;
  options[1].nextElementSibling.innerHTML = Questions[index].b;
  options[2].nextElementSibling.innerHTML = Questions[index].c;
  options[3].nextElementSibling.innerHTML = Questions[index].d;
}

   loadQuestion()


   function submitQuiz() { 
      if(index===Questions.length)
      
       {
          endQuiz()
       }

       let ans = getAnswer()
      if( ans===Questions[index].value)
      {
        right++
        console.log(`right: ${right}`)
      }
       else{
         wrong++
         console.log(`wrong: ${wrong}`)

      }
        index++
         loadQuestion()
   }

   function getAnswer()
   {
    let ans;
    options.forEach(function(option){
         if(option.checked)
        {
         ans = option.value
        }
      })
      
      return ans ;
    }
    
   function reset()
   {
     options.forEach(function(option){
         option.checked = false
     })
   }

   function endQuiz()
    {
          document.querySelector(".inner").innerHTML=`
          <h1> thanks for playing quiz!</h1>
          <div> Right : ${right}</div>
            <div> wrong: ${wrong}</div>`
    }