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