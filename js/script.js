var spinnerX = document.querySelector('.spinnerX');
var pageX = document.querySelector('#pageX');
var inputX = document.getElementById('inputX');
var titleX = document.getElementById('titleX');

window.addEventListener('load', function () {
    spinnerX.style.display = 'none';
    pageX.style.display = 'block';
    console.log('All assets are loaded');
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

setTimeout(function () {
    inputX.focus();
}, 3300);

function rightAnswerX(answerX) {
    if (answerX.value == 718) {
        titleX.innerText = "Congrats U won a free Workshop ツ";
        titleX.style.fontSize = "125%";
        titleX.style.color = "red";
        console.log('Congrats U won a free Workshop ツ');
        setTimeout(function () {
            window.location.href = "https://goo.gl/forms/gfINEOv2y4X6pOcG3";
        }, 3000);
    }
    answerX.value = "";
}

inputX.addEventListener('blur', function () {
    rightAnswerX(inputX);
});

inputX.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        rightAnswerX(inputX);
    }
});

// Typed.js 
var options = {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    startDelay: 1000
  }
  
  var typed = new Typed("#typed", options);