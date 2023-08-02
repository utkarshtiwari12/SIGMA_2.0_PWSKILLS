// You are given with an array of numbers both positive and negative. Your task is to print only the positive
// numbers.

let arr = [1, 2, -3, 4, -5, 6, -7, 8, 9, -10]

for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
        console.log(arr[i]);
    }
}