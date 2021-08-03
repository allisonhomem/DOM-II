// Your code goes here


//Nav elements change color when mouse hovers
let navItems = document.getElementsByClassName('nav-link');

for(let i=0; i < navItems.length; i++){
    navItems[i].addEventListener("mouseover", function(event){
        event.target.style.color = "#8ecae6"; 
    });
    navItems[i].addEventListener("mouseout", function(event){
        event.target.style.color = "";
    })
}

//Sign-up for trip message when clicking button
let buttons = document.getElementsByClassName('btn');


buttons[0].addEventListener('click', function(event) {
    event.target.textContent = `You've signed up for our Fun in the Sun trip!`;
    event.target.style.textAlign = 'center';
})

buttons[1].addEventListener('click', function(event) {
    event.target.textContent = `You've signed up for our Mountain Excursion trip!`;
    event.target.style.textAlign = 'center';
})

buttons[2].addEventListener('click', function(event) {
    event.target.textContent = `You've signed up for our Island Getaway trip!`;
    event.target.style.textAlign = 'center';
})


//