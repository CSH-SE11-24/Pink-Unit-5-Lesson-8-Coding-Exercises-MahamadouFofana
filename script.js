console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button

let hel = document.querySelector("#helloButton")
console.log(hel)

// Select the empty p tag under that button

let para = document.getElementById("helloText")
console.log(para)

// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"

hel.addEventListener("click", function(event){
  para.textContent = "Hello"
})

// Task 2: All caps button flow
// Implement the DOM manipulation code flow such that when you click the all caps button, the text below becomes all caps (i.e. "THERE'S NO NEED TO SHOUT")
// Make sure to add whatever IDs/classes you need to select the necessary elements

let ha = document.getElementById("cli")
console.log(ha)

let paraau = document.getElementById("paraU")
console.log(paraau)

ha.addEventListener("click", function(event){
  paraau.textContent = paraau.textContent.toUpperCase()
})

// Task 3: Dog image flow
// Implement the DOM manipulation code flow such that when your mouse is over the dog image, it shows happy-dog.jpeg and when it is off the dog image, it shows sad-dog.jpeg.
// Make sure to add whatever IDs/classes you need to select the necessary elements

let imag = document.getElementById("ima")

imag.addEventListener("mouseover", function(event){
  imag.src = "happy-dog.jpeg"
})

imag.addEventListener("mouseout", function(event){
  imag.src = "sad-dog.jpeg"
})

// Task 4: Name input flow
// Implement the DOM manipulation code flow such that when you click the submit button, you display "Nice to meet you " with the value typed into the input field
// Make sure to add whatever IDs/classes you need to select the necessary elements


let su = document.getElementById("sub");
let inp = document.getElementById("in")

su.addEventListener("click", function(event){
console.log("Nice to meet you", in.textcontent)  
})
