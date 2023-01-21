const box = document.querySelector(".box")
const btn = document.querySelector("button")
const heigh = box.scrollHeight;
btn.addEventListener("click",()=>{
    // box.style.height = box.scrollHeight + "px"
    console.log(box.scrollTop)
})
const style = window.getComputedStyle(box)
console.log(document.documentElement.clientWidth)
// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;
// console.log(width)
console.log(heigh)