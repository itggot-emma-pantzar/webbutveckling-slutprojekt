// var timer = new Timer();
// timer.start();
// timer.addEventListener('secondsUpdated', function (e) {
//     $('#basicUsage').html(timer.getTimeValues().toString());
// });

function menu() {
    var menu = document.querySelector('.menu')
    menu.classList.toggle("hidden")
    menu.classList.toggle("visible")
}

function prova(event) {
    // console.log("Hello")

    let menu = document.querySelector(".menu")
    menu.classList.toggle("hidden")
    // menu.classList.toggle("visible")
}