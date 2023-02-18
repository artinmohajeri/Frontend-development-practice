function classSwitcher(){
    slides.forEach(slide => slide.classList.remove("active"))
    points.forEach(point => point.classList.remove("active"))
    slides[active].classList.add("active")
    points[active].classList.add("active")
}
let goNext = () =>{
    active = (active == slides.length - 1) ? 0 : active + 1
    classSwitcher()
}

let goPrev = () => {
    active = (active == 0) ? slides.length - 1 : active - 1
    classSwitcher()
}

let active = 0
let timer = 4000
let slideShow = document.querySelector(".slideshow")
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

let runSlideShow = setInterval(goNext, timer)

points.forEach((point, index) => {
    point.addEventListener("click", e => {
        active = index
        classSwitcher()
    })
})

next.addEventListener("click", e => goNext())

prev.addEventListener("click", e => goPrev())

slideShow.addEventListener("mouseover", e => clearInterval(runSlideShow))

slideShow.addEventListener("mouseleave", e => runSlideShow = setInterval(goNext, timer))