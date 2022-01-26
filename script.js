// 1. Complete the function solveMeFirst to compute the sum of two integers. 

// function solveMeFirst(a, b) { 
//   return a+b;
// }

//2. Given an array of integers, find the sum of its elements.
// For example, if the array , , so return .

// function simpleArraySum(ar) {
//     // Write your code here
//     let total = 0;
//     for (let i = 0; i < ar.length; i++){
//     total += ar[i]
//     }
//     return total
// }

// 3. Given an array of integers, calculate the ratios of its elements that are 
// positive, negative, and zero. Print the decimal value of each fraction on a new 
// line with  places after the decimal.

// let sample = [1,2,3,45,5,0,0,0,-2,-4,-5,-7,-4,-6]
// let sample2 = [-4, 3, -9, 0, 4, 1]

// function arCheck(arr){
// let pos = [];
// let neg = [];
// let zed = [];

// for (let i = 0; i < arr.length; i++){

//         if (arr[i] > 0) {
//         pos.push(arr[i]);
//         }
//         else if (arr[i] < 0) {
//         neg.push(arr[i]);
//         }
//         else {
//         zed.push(arr[i]);
//         }

//     }
//     let posRat = (pos.length/arr.length).toFixed(6);
//     let negRat = (neg.length/arr.length).toFixed(6);
//     let zedRat = (zed.length/arr.length).toFixed(6);
//     console.log(`${posRat}\n${negRat}\n${zedRat}`);
// }

// 4.
// Staircase detail 
// This is a staircase of size :
//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line 
// is not preceded by any spaces. Write a program that prints a staircase of size.

// function staircase(n){    
//     let rung = [];
//     for (let i = 0; i< n; i++){
//         rung.push(' ');  
//     }

//     for (let i = 0; i< n; i++){
//         rung.shift();
//         rung.push('#');
//         console.log(rung.join(''));
//     }  
// }  

// 5.
// Given five positive integers, find the minimum and maximum values that can be calculated by 
// summing exactly four of the five integers. Then print the respective minimum and maximum 
// values as a single line of two space-separated long integers. 
// Example: 
// arr = [1,3,5,7,9]
// The minimum sum is 1+3+5+7=16 and the maximum sum is 3=5=7=9=24. The function prints
// 16 24

// let nums = [7,5,9,1,3]

// function minMax(arr){
// arr.sort(); 
// let range = 0;
// let min = 0;
// let max = 0;
// for (let i=0; i<arr.length; i++){
//     range = range += arr[i];
//     min = range - arr[4];
//     max = range - arr[0];
//     }
//     console.log(min, max);
// }

console.log('Day 0001: 5 challenges\n5 JavaScript challenges');
// console.log('Day 0001: _ challenges\n_ JavaScript challenges');
