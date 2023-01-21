"use strict";
// window.addEventListener('DOMContentLoaded  ',()=>{

    const tabsParent = document.querySelector(".tabheader__items")
    const tabs = document.querySelectorAll(".tabheader__item");
const tabsContent = document.querySelectorAll(".tabcontent")
const loader = document.querySelector(".loader")

// loader

setTimeout(()=>{
    loader.style.opacity="0";
    // console.log(0)
    setTimeout(()=>{
        loader.style.display = "none"
        // console.log(1)
    },500)
},1000)

// tabs 
function hideTabContent(){
    tabsContent.forEach((e)=>{
        e.style.display = "none"
    })
    
    tabs.forEach((e) =>{
        e.classList.remove('tabheader__item_active')
    })
}
hideTabContent()

function showtabcontent(i){
    tabsContent[i].style.display="block",
    tabs[i].classList.add('tabheader__item_active')
}
showtabcontent(2);
tabsParent.addEventListener("click",(e)=>{
    const target = e.target
    if(target && target.classList.contains("tabheader__item")){
        tabs.forEach((items, idx)=>{
            if(target ==items){
                
                hideTabContent()
                showtabcontent(idx);
            }else{
            }
        })
    }
})

// time 

const deadline = '2023-06.01'
function remainingTime(endTime){
    let days,hours,minutes,seconds
    const timer =   Date.parse(endTime) - Date.parse(new Date());

    if(timer<=0){
        days=0,
        hours=0,
        minutes=0,
        seconds=0
    }else{

        days = Math.floor(timer / (1000 * 60 * 60 *24)),
        hours = Math.floor((timer /(1000 * 60 *60))%24),
        minutes = Math.floor((timer / 1000/60) %60),
        seconds = Math.floor((timer /1000)%60)
    }
    return{timer,days,hours,minutes,seconds}


}


function universalFunction(selectors,endtime){
    const timer = document.querySelector(selectors),
    days = timer.querySelector("#days"),
    hours= timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    timeInterval = setInterval(updateClock,100)
    

    updateClock()
    function updateClock(){
        const t = remainingTime(endtime)
            days.innerHTML = t.days,
            hours.innerHTML = t.hours,
            minutes.innerHTML = t.minutes,
            seconds.innerHTML = t.seconds
        if(t.timer<=0){
            clearInterval(timeInterval)
        }
    }
}

universalFunction(".timer", deadline)

// modal section 
const modalTrigger = document.querySelectorAll("[data-modal]"),

modal = document.querySelector(".modal"),
modalCloseBtn = document.querySelector("[data-close]")

modalTrigger.forEach((item)=>{
    item.addEventListener("click", openModel)
})
// modalCloseBtn.addEventListener("click",closeModel)
modalCloseBtn.addEventListener("click",()=>{
    modal.classList.add("hide"),
    modal.classList.remove("show")
    document.body.style.overflow = ""
    console.log("sak")
})

modal.addEventListener("click",(e)=>{
    if(e.target == modal){
        // modal.classList.add("hide"),
        // modal.classList.remove("show")
        // document.body.style.overflow = ""
        // console.log("sak")
        closeModel()
    }
})
document.addEventListener("keydown",(e)=>{
if(e.code ==="Escape" && modal.classList.contains("show")){
    closeModel()
}
})

function openModel(){
    modal.classList.add("show"),
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
    console.log("salom")
    clearInterval(set)
}
function modalScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModel()
    }
} 
function closeModel(){
    modal.classList.add("hide"),
    modal.classList.remove("show")
    document.body.style.overflow = ""
    console.log("s111ak")
}
// modalTrigger.addEventListener("click",openModel)
// // modalTrigger.addEventListener("click",()=>{
// //     modal.classList.add("show"),
// //     modal.classList.remove("hide")
// //     document.body.style.overflow = "hidden"
// //     console.log("sak")
// // })



// // klaviatura bilan ishlash 
//    const set =  setTimeout(()=>{
//     openModel() 
// },5000)
// })
