// call -> 

// let obj = {
//     name : "Prisans",
//     age : 22,
//     greet : function(){
//         console.log(this.name,this.age)
//     }
    
// }

// obj.greet()


// Polyphill for call - 


// Function.prototype.myCall = function(obj = {} , ...args){
//     // console.log(this)

//     if(typeof(this) !=="function"){
//         throw new Error("Not callable")
//     }

//     let key = Symbol()
//     obj[key] = this
    
//     const result = obj[key](...args)

//     delete obj[key]
//     return result

// }

// greet.myCall(obj)


// for apply ->>>>>>>>>>>>>>>>>>>>>>>>

// let obj = {
//     name : "Prisans",
//     age : 22
// }

// function greet(city,country){
//     console.log("hello" , this.name, city,country)
// }


// Function.prototype.myApply= function(obj = {} , args =[]){
//     // console.log(this)

//     if(typeof(this) !=="function"){
//         throw new Error("Not callable")
//     }

//     let key = Symbol()
//     obj[key] = this
    
//     const result = obj[key](...args)

//     delete obj[key]
//     return result

// }

// greet.myApply(obj , ["hyd","india"])

// for bind ================================


let obj = {name:"Prisans"}

function greet(city){
    console.log(this.name , "is from" , city)
}


Function.prototype.myBind = function (context = {}, ...bindArgs) {
  if (typeof this !== "function") {
    throw new Error("Not callable")
  }

  const originalFn = this

  return function (...callArgs) {
    return originalFn.apply(context, [...bindArgs, ...callArgs])
  }
}

const newFunction = greet.myBind(obj)

newFunction("hyd")
