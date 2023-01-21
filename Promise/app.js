// // "use strict";
// // const isMeriied = false;
// // const result = new Promise((resolve,reject) =>{
// //     if(isMeriied){
// //         const msg = "i wanna merried"
// //         resolve(msg)
// //     }
// //     else{
// //         const err = ' already i was merried'
// //         reject(err)
// //     }
// // })
// // result.then((msg)=>console.log(msg)).catch((err) =>console.log(err)).finally(console.log("i merried"))

// console.log("Start data ....")

// const req = new Promise((resolve)=>{
//     setTimeout(()=>{
//         const product ={
//             color:"red",
//             name:"apple",

//         }
//         console.log("prosecccing data ...")
//         resolve(product)
//     },2000)
// })
// req.then((data)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             data.status = 'order'
//             console.log("get data ....")
//             resolve(data)
//         },2000)
//     })
// })
// .then((result)=>console.log(result)).
// finally(()=>console.log("finish data ..."))

const request = (time)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(),time)
            
    })
}

    // request(1000).then(()=>console.log('request 1000 ms')),
    // request(2000).then(()=>console.log('request 2000 ms')),
    // request(3000).then(()=>console.log('request 3000 ms'))

    Promise.all([request(1000),request(2000),request(3000)]).then(()=>{
        console.log("all")
    })
    Promise.race([request(1000),request(2000),request(3000)]).then(()=>{
        console.log("all")
    })