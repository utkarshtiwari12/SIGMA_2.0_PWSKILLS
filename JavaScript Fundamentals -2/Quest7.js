/* Imagine you are working for a digital banking platform, and your team is tasked with improving the security of customer accounts. Your challenge is to create a function that generates a random 4-digit OTP (One-Time Password) for authentication purposes. */

function generateOTP()
{
    let digit1 = Math.ceil(Math.random() * 9);
    let digit2 = Math.ceil(Math.random() * 9);
    let digit3 = Math.ceil(Math.random() * 9);
    let digit4 = Math.ceil(Math.random() * 9);

    let OTP = `${digit1}${digit2}${digit3}${digit4}`;

    return OTP;
}

console.log(`Here is Your OTP : ${generateOTP()}`);

