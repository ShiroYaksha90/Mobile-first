const hamburger = document.querySelector(".hamburger");
const nav_desktop = document.querySelector(".nav-mobile");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    nav_desktop.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    nav_desktop.classList.remove("active");
}))

const popup = document.querySelector('.btn')
const card = document.querySelector('.pr-btn')
const show = document.querySelector(".popcontainer")
const mob = document.querySelector('.overlay')
popup.addEventListener("click",() => {
    show.classList.toggle("active")
} )

card.addEventListener("click",() => {
    show.classList.toggle("active")
} )

// card.addEventListener("click",() => {
//     mob.classList.toggle("active")
// } )
const closebtn = document.querySelector(".closebtn");
closebtn.addEventListener("click", () => {
    show.classList.remove("active")
})
