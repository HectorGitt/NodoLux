navToggler = document.getElementById("toggler")
nav = document.querySelector(".navbar")
navToggler.addEventListener("click", function toggle(e) {
    if (navToggler.getAttribute("aria-expanded") == "false"){
        nav.style.backgroundColor = "#343a40"
        nav.style.transition = ""
    }
    else {
        nav.style.backgroundColor = ""
        nav.style.transition = "1000ms"
    }
    
})
console.log(nav.style.backgroundColor)