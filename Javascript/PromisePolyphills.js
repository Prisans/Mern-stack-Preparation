// what is promise - promise is an object that returns a value that will be available later!!!

const promise  = new Promise((resolve,reject)=>{
    let success = false

    if(success){
        resolve("done")
    }else{
        reject("not done")
    }
})

promise
.then(data=>console.log(data))
.catch(err=>console.log(err))