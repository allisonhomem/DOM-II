// Your code goes here


//Nav bar changes color when mouse enters: *mouseenter*
let navBar = document.getElementsByClassName('main-navigation');

navBar[0].addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = '#fcbf49';
})

//Nav elements change color when mouse hovers: *mouseover* *mouseout* *click*
//Nav elements don't refresh page
let navItems = document.getElementsByClassName('nav-link');


for(let i=0; i < navItems.length; i++){
    navItems[i].addEventListener('click', function(event){
        event.preventDefault();
    })
    navItems[i].addEventListener("mouseover", function(event){
        event.target.style.color = "#d62828"; 
    });
    navItems[i].addEventListener("mouseout", function(event){
        event.target.style.color = "";
    })
}

//Sign-up for trip message when mousedown: *mousedown*
let buttons = document.getElementsByClassName('btn');

for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener('mousedown', function(event){
        event.target.textContent = "Yayyyy!!!!";
        event.target.textAlign = 'center';
    })
}

//Sign-up for trip message when clicking button: *click*

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


//add pics of destinations when mouse leaves destination divs: *mouseleave*
let destinations = document.getElementsByClassName('destination');

destinations[0].addEventListener('mouseleave', function(event){
    const pic = document.createElement('img');
    pic.setAttribute('src', 'https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    event.target.querySelector('p').textContent = "";
    event.target.appendChild(pic);
});

destinations[1].addEventListener('mouseleave', function(event){
    const pic = document.createElement('img');
    pic.setAttribute('src', 'https://images.unsplash.com/photo-1561134643-668f9057cce4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80');
    event.target.querySelector('p').textContent = "";
    event.target.appendChild(pic);
    
})

destinations[2].addEventListener('mouseleave', function(event){
    const pic = document.createElement('img');
    pic.setAttribute('src', 'https://images.unsplash.com/photo-1576158831003-d41033ec31fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80');
    event.target.querySelector('p').textContent = "";
    event.target.appendChild(pic);
})

//double-clicking bus image links to Instagram #travel: *dblclick*
let pics = document.querySelectorAll('img');

pics[0].addEventListener('dblclick', function(event) {
    window.location.href = 'https://www.instagram.com/explore/tags/travelphotography/';
})

//copyright alert when text is copied: *copy*
let paragraphs = document.querySelectorAll('p');

for(i=0; i<paragraphs.length; i++){
    paragraphs[i].addEventListener('copy', function(event){
        alert `Keep the copyright in mind ;)`;
    })
}

//clicking on an image and a div give alerts: *click*
//prevents propogation
let adventures = document.getElementsByClassName('content-section inverse-content');

adventures[0].addEventListener('click', function(event){
    alert `We'd love to travel with you!`;
    
})

adventures[0].querySelector('img').addEventListener('click', function(event){
    event.stopPropagation();
    alert `You could go to Venice!`;
})