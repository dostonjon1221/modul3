"use strict";

const btns = document.querySelectorAll("button")

const wrapper = document.querySelector(".btn-block");
wrapper.addEventListener("click", (e)=>{
    if(e.target && e.target.classList.contains("blue")){
       console.log("btn clic")
    }
    
})

wrapper.addEventListener("click", (e)=>{
   
        const first = document.getElementById("first")
        const newBtn = document.createElement("button")
        newBtn.classList.add('blue')
        first.append(newBtn)
 
    
})
const first = document.getElementById("first")
const newBtn = document.createElement("button")
newBtn.classList.add('blue')
first.append(newBtn)


