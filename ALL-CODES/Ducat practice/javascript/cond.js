// let sales =29000;
// let bouns;
// if(sales>20000)

// {
//     bouns = sales*5/100
// }

// else  
// { 
//     bouns=0 
// }

// console.log(`your sales :${sales}`)
// console.log(`your bouns :${bouns}`)


// let a = new Date()
//     console.log(a.getHours())
//     console.log(a.getMinutes())
//     console.log(a.toLocaleString())
//     console.log(a.toLocaleTimeString())
//     document.body.innerHTML += a.toLocaleDateString()
//     document.body.innerHTML += a.toLocaletimeString()


// //==========================if else if else========================================//

// let new_reading =1000 , old_reading = 400,  unit,bill;

// unit = new_reading-old_reading

// if(unit<=200)
// {
//     bill = unit*3
// }
// else if(unit>200 && unit<=400)

// {
//     bill=unit*5
// }
//  else {
//     bill = unit*7
//  }
//  console.log(`unit :${unit}`) 
//   console.log(`bill$:${bill}`)

// let new_reading =1000, old_reading = 400,  unit,bill;

// unit = new_reading-old_reading

// if(unit<=200)
// {
//     bill = unit*3
// }
// else if(unit>200 && unit<=400)

// {
//     let c = unit-200
//     bill= 200*3 + c*5
// }
//  else {
//      let c= unit-400
//     bill = 200*3 + 200*5 +c*7
//  }
//   console.log(`unit :${unit}`) 

//    console.log(`bill$:${bill}`)



let sales = 29000;
let bonus;

if (sales > 20000) {
  bonus = sales * 5 / 100;
} else {
  bonus = 0;
}

console.log(`your sales : ${sales}`);
console.log(`your bonus : ${bonus}`);

// Date
let a = new Date();
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.toLocaleString());
console.log(a.toLocaleTimeString());

document.body.innerHTML += a.toLocaleDateString();
document.body.innerHTML += a.toLocaleTimeString();

// Electricity bill (slab system)
let new_reading = 1000, old_reading = 400, unit, bill;

unit = new_reading - old_reading;

if (unit <= 200) {
  bill = unit * 3;
} else if (unit <= 400) {
  let c = unit - 200;
  bill = 200 * 3 + c * 5;
} else {
  let c = unit - 400;
  bill = 200 * 3 + 200 * 5 + c * 7;
}

console.log(`unit : ${unit}`);
console.log(`bill $: ${bill}`);
