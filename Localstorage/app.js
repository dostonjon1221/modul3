const email = document.querySelector(".email"),
name= document.querySelector(".name"),
form = document.querySelector("form"),
btn=document.querySelector(".btn")
text = document.querySelector(".text"),
remove = document.querySelector(".remove")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const user ={
        email: email.value,
        name : name.value,

    }
    e.target.reset()
    localStorage.setItem("user",JSON.stringify(user))
})
const user = JSON.parse(localStorage.getItem('user'))
text.textContent = `${user.email}`
// // setItem malumot kiritadi 
// localStorage.setItem("name", "Dostonjon")

// // remove item malumotni tozalaydi 
// remove.addEventListener("click",()=>{
//     localStorage.removeItem("name")
// })
// // getItem matchMedialumotni olib beradi 
// const Newname = localStorage.getItem("name")
// console.log(Newname)
// text.textContent = `${Newname}`