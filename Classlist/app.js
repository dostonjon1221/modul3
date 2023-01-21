
"use strict";
 const btns = document.querySelectorAll('button');

//  btns[1].forEach((e)=>{
//     e.addEventListener("click", ()=>{
//      if(e.classList.length==2){
//         e.remove()
//      }else{
//         e.classList.toggle("red")
//      }
       
//     })
//  })

btns[1].addEventListener("click",()=>{
btns.forEach((e)=>{
    e.classList.toggle("red")
})
})

// btns[2].addEventListener("click", myFunction() ) ;
// function myFunction() {
//     var x = document.createElement("BUTTON");
//     var t = document.createTextNode("Click me");
//     x.appendChild(t);
//     document.div.appendChild(x);
//   }


// btns[0].addEventListener("click",()=>{
//     const first = document.getElementById("first")
//     const newBtn = document.createElement("button")
//     newBtn.classList.add("blue")
//     first.append(newBtn)
// })