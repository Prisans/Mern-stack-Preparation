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

// const frequentNum = (arr)=>{
//     let obj = {}
//     let mostFrequent = null
//     let maxCount = 0

//     for(let i=0; i<arr.length; i++){
//         let num = arr[i]

//         obj[num] = (obj[num] || 0) +1

//         if(obj[num]>maxCount){
//             maxCount = obj[num]
//             mostFrequent = num
//         }
//     }

//     return mostFrequent
// }

// let arr= [1, 2, 2, 3, 3, 3, 4]
// console.log(frequentNum(arr))



//Q->>>>>>>>>>>>>>Find longest word in a string

// Input: "I love programming"

// Output: "programming"

// const solve = (str)=>{
//     let count = 0
//     let longest = null
//     let arr = str.split(" ")
//     console.log(arr)
    
//     for(let i=0; i<arr.length; i++){
//         let n = arr[i].length

//         if(n>count){
//             count = n
//             longest = arr[i]
//         }
//     }

//     return longest
// }
// let str = "I love programming"

// console.log(solve(str))


// q->>>>>>>>>>>>>>>>>>>>Count occurrences of each character

// let str = "apple"

// Output: {a:1, p:2, l:1, e:1}

// const solve = (str)=>{
//     let obj = {}

//     for(let ch of str){
//         if(!obj[ch]){
//             obj[ch] = 1
//         }else{
//             obj[ch]++
//         }
//     }

//     return obj
// }

// console.log(solve(str))



//Q--------------->Group objects by property

// Input:

// let arr = [
//   {name:"Alice", role:"dev"},
//   {name:"Bob", role:"tester"},
//   {name:"Eve", role:"dev"}
// ]

// Output:

// {
//   dev: [{name:"Alice", role:"dev"}, {name:"Eve", role:"dev"}],
//   tester: [{name:"Bob", role:"tester"}]
// }

// const solve = (arr)=>{
//     let obj = {}

//     for(let x of arr){
//         if(!obj[x.role]){
//             obj[x.role] = []
//         }

//         obj[x.role].push(x.name)
//     }

//     return obj
// }

// console.log(solve(arr))












