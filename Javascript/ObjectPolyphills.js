// Polyphills for objects -
let data = {name : "Prisans" , age: 22, dev : "SDE"}

// 1. Object.entries

// console.log(Object.entries(obj))

Object.myEntries = function(obj){
    let demo = []

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
             demo.push([key,obj[key]])
        }
    }

    return demo
}

// console.log(Object.myEntries(data))


// ------------------->polyphills for Object.assign <-----------------------

Object.myAssign = function(target, ...sources){
    if(!target){
        throw new Error("target not given")
    }

    let result = Object(target)

    for(let source of sources){
        for(let key in source){
            if(Object.prototype.hasOwnProperty.call(source,key)){
                result[key] = source[key]
            }
        }
    }

    return result
}

// let ans = Object.myAssign({},{a:1},{b:3},{c:4})
// console.log(ans)

