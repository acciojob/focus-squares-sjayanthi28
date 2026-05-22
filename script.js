let square1 = document.getElementById("square1")
let square2 = document.getElementById("square2")
let square3 = document.getElementById("square3")

square1.addEventListener("mouseover",()=>{

    square2.style.backgroundColor = "#6F4E37"
    square3.style.backgroundColor = "#6F4E37"

})

square1.addEventListener("mouseout",()=>{

    square2.style.backgroundColor = "#E6E6FA"
    square3.style.backgroundColor = "#E6E6FA"

})

square2.addEventListener("mouseover",()=>{

    square1.style.backgroundColor = "#6F4E37"
    square3.style.backgroundColor = "#6F4E37"

})

square2.addEventListener("mouseout",()=>{

    square1.style.backgroundColor = "#E6E6FA"
    square3.style.backgroundColor = "#E6E6FA"

})

square3.addEventListener("mouseover",()=>{

    square1.style.backgroundColor = "#6F4E37"
    square2.style.backgroundColor = "#6F4E37"

})

square3.addEventListener("mouseout",()=>{

    square1.style.backgroundColor = "#E6E6FA"
    square2.style.backgroundColor = "#E6E6FA"

})