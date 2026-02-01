
// const display =  document.getElementById("display");
// function appendToDisplay(input){
//   display.value += input;
// }

// function Calculate(){
//  try {
//     display.value=eval(display.value)
    
//  } catch (error) {
//      display.value="ERROR"
//  }
// }
// function ClearDisplay(){
//     display.value=("")
// }



const display = document.getElementById("display");

function appendToDisplay(value) {
    const lastChar = display.value.slice(-1);

    // Prevent multiple + in a row
    if (value === '+' && lastChar === '+') {
        return;
    }

    display.value += value;
}

function Calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "ERROR";
    }
}

function ClearDisplay() {
    display.value = "";
}









