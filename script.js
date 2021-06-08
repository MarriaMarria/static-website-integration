let modalBtn = document.querySelector('.sign-up-btn');
console.log(modalBtn, "HELLO"); // grabbing sign in btn which is a modal btn as well
let modalBg = document.querySelector('.modal-bg');
console.log(modalBg);
let modalClose = document.querySelector('.modal-close');
let submitBtn = document.querySelector('.submit-box');
let userDetails = document.querySelector(".user-details");
let modal = document.querySelector('.modal');
let myH2 = document.querySelector('.myH2');
let close = document.querySelector('.close');


modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
    console.log("Added");
})

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
})

submitBtn.addEventListener('click', function () {
    myH2.classList.remove('hidden');
    console.log("myH2");
    console.log(myH2.classList);
    userDetails.classList.add('hidden');
    console.log("added");
    close.classList.remove('hidden');
})