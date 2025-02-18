const display = document.getElementById("display");

function appendToDisplay(input) {
display.value += input;

}

function clearDisplay(){
    display.value = "";

}
function calculate(){
    let audio = new Audio('gelo.mp3');
    
   if ( display.value = eval(display.value)){
    if (display.value == eval(143)) {
    display.value = 'I Love You';
   
      
            audio.play();
    } else {
     display.value =eval(display.value);}
    } 
}
