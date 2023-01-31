const loader = document.querySelector("#preloader");
document.querySelector("main").style.display = "none";
loader.classList.add("preloader");
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.remove("preloader");
        document.querySelector("main").style.display = "block";
    }, 2000);
});

const nav = document.querySelector(".nav");
const toogleBtn = document.querySelector(".toogle_btn");
const navList = document.querySelector(".nav_list"); 
const blueButton = document.querySelector(".blue_button"); 

document.addEventListener('scroll', () => {
    nav.style.backgroundColor = "#CCE6F1";
    if (window.scrollY == 0){
        nav.style.backgroundColor = "transparent";
    }
})
toogleBtn.addEventListener('click', () => {
    nav.classList.toggle("active");
    toogleBtn.classList.toggle("is_active");
    navList.classList.toggle("active");
    nav.style.backgroundColor = "#cce6f1";
})

var count = 0
blueButton.addEventListener('click', () => {
    if (count == 0){
        blueButton.style.backgroundColor = "#2B97C6";
        count = 1
    }
    else{
        blueButton.style.backgroundColor = "#006C9B";
        count = 0
    }
})

const navLists = document.querySelectorAll(".nav_list li a"); 
    navLists[0].addEventListener('click', () =>{
            navLists[0].classList.add("first-child")
            navLists[1].classList.remove("first-child")
            navLists[2].classList.remove("first-child")
            navLists[3].classList.remove("first-child")
            navLists[4].classList.remove("first-child")
    })
    navLists[1].addEventListener('click', () =>{
        navLists[1].classList.add("first-child")
        navLists[0].classList.remove("first-child")
        navLists[2].classList.remove("first-child")
        navLists[3].classList.remove("first-child")
        navLists[4].classList.remove("first-child")
})
navLists[2].addEventListener('click', () =>{
    navLists[2].classList.add("first-child")
    navLists[1].classList.remove("first-child")
    navLists[0].classList.remove("first-child")
    navLists[3].classList.remove("first-child")
    navLists[4].classList.remove("first-child")
})
navLists[3].addEventListener('click', () =>{
    navLists[3].classList.add("first-child")
    navLists[1].classList.remove("first-child")
    navLists[2].classList.remove("first-child")
    navLists[0].classList.remove("first-child")
    navLists[4].classList.remove("first-child")
})
navLists[4].addEventListener('click', () =>{
    navLists[4].classList.add("first-child")
    navLists[1].classList.remove("first-child")
    navLists[2].classList.remove("first-child")
    navLists[3].classList.remove("first-child")
    navLists[0].classList.remove("first-child")
})

