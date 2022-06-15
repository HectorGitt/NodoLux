"use strict"
var signup = document.getElementById("signup")
var login = document.getElementById("main")
var signin = document.getElementById("signin")
var signContainer = document.getElementById("signup-container")
var transform = 0
var slideIn
var out
signup.addEventListener("click", function swipe(e) {
    e.preventDefault()
    signContainer.style.visibility = "initial"
    if (transform > -1000){
        slideIn = setInterval(moveLeft, 0.5)
    }
    
})
function moveLeft(){
    if (transform > -1000){
        transform -= 10
        login.style.transform = `translate(${transform}px)`
    }
    else if (transform == -1000){
        clearInterval(slideIn)
    }
    
    
}
function moveRight(){
    if (transform < 0){
        transform += 10
        login.style.transform = `translate(${transform}px)`
    }
    else if (transform == 0){
        clearInterval(out)
    }
    
    
}
signin.addEventListener("click", function swipe(e) {
    e.preventDefault()
    if (transform < 0){
        out = setInterval(moveRight, 0.5)
    }
    
})

//Form Valaidation
var email = document.querySelectorAll("input");
email.forEach(item => {
    item.addEventListener("input", function mail(e){
        if (item.validity.typeMismatch){
            item.setCustomValidity("We expected a valid email, What the fuck is this?");
        }
        else if (item.validity.valueMissing){
            item.setCustomValidity("You forgot to enter a value");
        }
        else {
            item.setCustomValidity("");
        }
    })

})

//Login Ajax
loginbtn = document.getElementById("loginbtn")
loginbtn.addEventListener("click", function stp(e) {
    e.preventDefault();
})
var form = document.querySelector("form");
form.addEventListener("submit", function verif(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    // xhr.open("GET", "asset\login.json", true)
    // if (xhr.status == 200) {
    //     console.log(xhr.responseType)
    // }

})

    


