"use strict"
// Creates an array which will contain the cart item data-id 
var cart = []

// Creates an array which will contain the cart item data-id
var cartNames = []

// Gets all the buttons
var buttonlst = document.querySelectorAll("#cart");
var cartBtn = document.querySelector(".cartBtn")
var check = document.querySelector(".checkOut")

// Store the link to be followed when checked out 
var link = "https://wa.me/+2348117612041?text=Hi%2CI%20need%20some%20of%20your%20products:"

// Adds an even listener to each button of the corresponding products 
buttonlst.forEach(element => {
    element.addEventListener("click", addToCart);
});

// Creating the function addToCart
function addToCart(e) {
    let dataId = e.target.getAttribute("data-id");

    // Checks if the data-id of the target is already contained in the cart
    if (cart.indexOf(dataId) == -1){ 

        // if not already contained? append to array
        cart.push(dataId)
        e.target.textContent = "Added to Cart"
        e.target.style.backgroundColor = "Grey"

        //create a variable for each properties of the selected item
        var name = e.target.parentElement.firstElementChild.innerText;
        var price = e.target.nextElementSibling.innerText;
        var imgSrc = e.target.parentElement.parentElement.firstElementChild.getAttribute("src")
        
        //Pushing the cart to the frontend
        function addCart(){

            //creating table elements and assigning classes and ids
            var table = document.querySelector(".tBody");
            var tr = document.createElement("tr");
            tr.setAttribute("class", dataId)
            table.appendChild(tr)
            var th = document.createElement("th");
            th.setAttribute("class", "cartObj")
            th.setAttribute("data-id", dataId)
            
            //create table data element
            var td = document.createElement("td");
            var tdOne = document.createElement("td");
            var tdTwo = document.createElement("td");
            var imgEl = document.createElement("img")

            //set image attribute to the product image
            imgEl.setAttribute("src", imgSrc) 

            //set the s/n to the product index in the cart
            var num = 1 + cart.indexOf(dataId)
            var sN = document.createTextNode(num);
            th.appendChild(sN)
            tr.appendChild(th)
            
            td.appendChild(imgEl)
            tr.appendChild(td)

            //creating textnodes of name and proce
            var text = document.createTextNode(name);
            tdOne.appendChild(text)
            tr.appendChild(tdOne)
            var text = document.createTextNode(price);
            tdTwo.appendChild(text)
            tr.appendChild(tdTwo)

            
        }
        //calling the function
        addCart()
        
    }
    //if data-id already contained in the cart? remove from cart
    else {
        function arrayRemove(arr, value) { 
    
            return arr.filter(function(ele){ 
                return ele != value; 
            });
        }
        
        //calling the remove function
        cart = arrayRemove(cart, dataId);

        //redefining texts and colors
        e.target.innerText = "Add to Cart";
        e.target.style.backgroundColor = ""
        var id = "tr" + "." + e.target.getAttribute("data-id");
        var delEl = document.querySelector(id)

        //removing from cart
        delEl.remove()

        //reassingning the cart index number to the s/n tag after a deletion
        for (var i=0; i< cart.length; i++){
            var data = "[data-id=" + "\"" + cart[i] + "\"" +"]"
            var data = "th" + data
            var thTag = document.querySelector(data)
            var num = 1 + cart.indexOf(thTag.parentElement.getAttribute("class"));
            thTag.innerText = num;
        }
        

    }

    //reads out the number of items in the cart
    cartBtn.querySelector("p").innerText = cart.length;

}

//adding events to the checkout function
check.addEventListener("click", function chec(e) {

    //preventing the default click action 
    e.preventDefault();

    //looping throght the data-d in the cart array
    for (var i=0; i < cart.length; i++){

        //creatin a very specific selector out of those data-id
        var data = "[data-id=" + "\"" + cart[i] + "\"" +"]";
        var data = "th" + data;

        //getting the elements with the data-id
        var thTag = document.querySelector(data);

        //getting the name of the products with the data id
        var build = thTag.nextElementSibling.nextElementSibling.innerText;

        /* if a name is sepearted with space? split so as to be easily converted to string */
        var build = build.split(" ");
        console.log(build);
        var buildNew = "";

        //creating a str out of those splitted words
        for (var j =0; j < build.length; j++){
            var rename = "%20" + build[j];
            
            buildNew += rename;
        };
        link = link + buildNew +"%20,";
        

    }
    window.location.href = link


})




