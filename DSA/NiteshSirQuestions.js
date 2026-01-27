// Q - Reverse a string

// Input: "hello"

// Output: "olleh"

//Sol - 


// const reverseString = (str)=>{
//     let arr = str.split("")
//     let left = 0
//     let right = arr.length -1

//     while(left<right){
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp

//         left++
//         right--
//     }

//     return arr.join("")
// }

// console.log(reverseString("hello")) -  All test cases passed

// Intermediate Questions (20)

// Remove duplicates from array

// Input: [1, 2, 2, 3, 4, 4, 5]

// Output: [1, 2, 3, 4, 5]


// const removeDuplicate = (arr)=>{

//     let ans = new Set()

//     arr.forEach(x=>{
//         ans.add(x)
//     })

//     return [...ans]
// }


// Two pointer approach ->

// const removeDuplicate = (arr)=>{
//     let left = 0
    
//     for(let i=1; i<arr.length; i++){
//         if(arr[left] != arr[i]){
//             left++
//             arr[left] = arr[i]
//         }
//     }

//     return arr.slice(0,left+1)
// }


// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5])) - All test cases passed

// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5])) - all test cases run

// Q-------------------->Find second largest number

// Input: [10, 5, 20, 8]

// Output: 10

// Sol  

// const findSecondLargest = (arr)=>{
//     let largest = -Infinity
//     let secondLargest = -Infinity

//     for(let i=0; i<arr.length; i++){
//         let num = arr[i]

//         if(num>largest){
//             secondLargest = largest
//             largest = num
//         }else if(num<largest && num>secondLargest){
//             secondLargest = num
//         }
//     }

//     return secondLargest
    
// }

// let arr  = [10, 5, 20, 8]

// console.log(findSecondLargest(arr))


// Q----------------------->Most frequent element in array

// Input: [1, 2, 2, 3, 3, 3, 4]

// Output: 3

const frequentNum = (arr)=>{
    let demo = new Set()
    let 


}









