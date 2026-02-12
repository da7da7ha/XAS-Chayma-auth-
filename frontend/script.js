

const c = document.getElementById('container');
const signUpbutton = document.querySelector('.overlay-right button');
const signInbutton = document.querySelector('.overlay-left button');

// Quand on clique sur "Sign Up" dans overlay-right
signUpbutton.addEventListener('click', () => {
    c.classList.add('active');
});

// Quand on clique sur "Sign In" dans overlay-left
signInbutton.addEventListener('click', () => {
    c.classList.remove('active');
});