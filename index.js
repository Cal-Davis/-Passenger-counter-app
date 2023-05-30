
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0



function increment(){
    
    count += 1
    countEl.textContent = count
  
}



function save(){
    let prev = count + " -  "
    saveEl.textContent += prev
    
    countEl.textContent = 0
    count = 0


    // console.log(count)----- optional
}






// // Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")
// // Create two variables (name & greeting) that contains your name
// let names = "Caldavis Irurah Wangaruro"
// let greeting = "Welcome Back "
// // and the greeting we want to render on the page
// console.log( greeting + names)
// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + names 
// welcomeEl.innerText += "👋 "

