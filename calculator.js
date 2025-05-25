function alet() { 
    alert=("wellcome to shivanshu calculator");
}
window.alert("Hello world!");
const button = document.getElementById("display").value;
 console.log(button);


function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
let result = eval(document.getElementById("display").value);
document.getElementById("display").value = result;
}


const clickSound = new Audio("click.mp3");

function playClickSound() {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0; // rewind to start
  sound.play();
}

