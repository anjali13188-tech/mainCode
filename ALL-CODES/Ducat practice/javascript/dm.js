let d = new Date()
console.log(d)
 console.log(d.getFullYear())
 console.log(d.getHours())
 d.setFullYear(2022)
console.log(d)
console.log(d.getTime())

console.log(Math.round(34.56))
console.log(Math.floor(34.56))
console.log(Math.ceil(34.56))

console.log(Math.ceil(Math.random()*1000))

// Function to generate OTP
function generateOTP() {

    // Declare a digits variable
    // which stores all digits 
    let digits = '0123456789';
    let OTP = '';
    let len = digits.length
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * len)];
    }
   
    return OTP; 
}

console.log("OTP of 4 digits: ")
console.log(generateOTP());