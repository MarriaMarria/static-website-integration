let modalBtn = document.querySelector('.sign-up-btn');
console.log(modalBtn, "HELLO"); // grabbing sign in btn which is a modal btn as well
let modalBg = document.querySelector('.modal-bg');
console.log(modalBg);
let modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
    console.log("Added");
})

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
})