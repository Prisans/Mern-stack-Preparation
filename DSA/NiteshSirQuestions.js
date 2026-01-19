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

const removeDuplicate = (arr)=>{
    let left = 0
    
    for(let i=1; i<arr.length; i++){
        if(arr[left] != arr[i]){
            left++
            arr[left] = arr[i]
        }
    }

    return arr.slice(0,left+1)
}


// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5])) - All test cases passed

// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5])) - all test cases run








