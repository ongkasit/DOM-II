// Your code goes here

//click
const styleHome = document.querySelectorAll('nav a');
styleHome[0].addEventListener('click', function() {
    alert('I was clicked');
});

//mouseover
const styleH2 = document.querySelector('.welcome-bus');
styleH2.addEventListener('mouseover', function() {
    styleH2.style.color = 'teal';
});


//mouseout
styleH2.addEventListener('mouseout', function() {
    styleH2.style.color = 'red';
});

//drag
styleHome[1].addEventListener('drag', function() {
    styleHome[1].style.color = 'green';
});

//dragend
styleHome[1].addEventListener('dragend', function() {
    styleHome[1].style.color = 'silver';
});

//keydown
document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        alert('The a key was pressed!');
    }
});

//using currentTarget
const makeBgBlue = function() {
    event.stopPropagation();
    event.preventDefault();
    event.currentTarget.style.backgroundColor = 'blue';
}
styleHome[2].addEventListener('click', makeBgBlue);
styleHome[2].addEventListener('click', (event) => {
    event.currentTarget.style.color = 'white';
});

//img change
const imgChange = () => {
    event.stopPropagation();
    event.currentTarget
}

//scroll

//select