// // Polyphills for includes -

// let arr = [2,3,4]

// Array.prototype.myIncludes = function(value,firstIndex=0){
//     let start = firstIndex < 0 ? firstIndex + this.length : firstIndex

//     if(!value){
//         return false
//     }

//     for(let i=start; i<this.length; i++){
//         if(value==this[i]){
//             return true
//         }
//     }

//     return false
// }


// // polyphills for map 

// let arr = [2,3,4]

// Array.prototype.myMap = function(callback){
//     let res = []
//     if(typeof(callback) != "function"){
//         throw new Error("not a function")
//     }

//     if(!callback){
//         return res
//     }

//     for(let i=0; i<this.length; i++){
//         res.push(callback(this[i]))
//     }

//     return res
// }

// let ans = arr.myMap(x=>x)
// console.log(ans)


// // poluphills for reduce

// let arr = [2,3,4,4]

// Array.prototype.myReduce = function(callback,initialValue){
//     let acc = initialValue !== undefined ? initialValue : this[0]

//         if(typeof(callback) ! ="function"){
//             throw new Error("not a function")
//         }

//     let startIndex = initialValue !==undefined? 0 :1

//     for(let i=startIndex; i<this.length; i++){
//         acc = callback(acc,this[i])
//     }

//     return acc
// }

// let ans = arr.myReduce((x,y)=>x+y,0)
// console.log(ans)


// // polyphills for from

// let ans = Array.from([2,3,4],x=>x+2)
// console.log(ans)