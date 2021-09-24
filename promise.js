// const getHelloWorldPromise = () => {
//     return new Promise((resolve, reject) =>{
//         // resolve("i am anup")
//         reject("this is error dumbshit");
//     })
// }

// getHelloWorldPromise()
// .then ((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// const promiseExample = () => {
//     return new Promise ((resolve,reject) => {
//         resolve ("i am anup");
//         reject ("this is error");
//     })

// }
//  promiseExample() 
//  .then ((result) => {
//     console.log(result);
//  }) 
//  . catch ((error) => {
//      console.log (error);
//  })

const getUserList = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
             resolve(["anup","anjuli"])
            reject("fetch ta hudi")
        }, 100);

    })

   
    
};


getUserList() .then ((result) => {
    console.log("Bhayo hai ta",result)
})
.catch ((error) => console.log(error))
.finally (() => console.log ("completed"));
