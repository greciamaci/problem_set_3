/*
* Excercise 1
*
*/

const clicker = document.getElementById("color-block");
const text = document.getElementById("color-name")

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    
    //Write a condition determine what color it should be changed to
    if(text.innerHTML === "#F08080"){
        //change the background color using JS
        text.innerHTML = "#f5cb42";
        clicker.style.backgroundColor = "#f5cb42";
        //Change the text of the color using the span id color-name

    }

    else{
        //change the background color using JS
        clicker.style.backgroundColor = "#F08080";
        text.innerHTML = "#F08080";
        //Change the text of the color using the span id color-name


    }
}

clicker.addEventListener("click", changeColor);
/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
const input = document.getElementById("f-input")
const button = document.getElementById("convertbtn")

function convertTemp(){
    let number = input.value;
    number = (number - 32)*(5/9);
    document.getElementById("c-output").innerHTML = number;
    //Calculate the temperature here
    
    //Send the calculated temperature to HTML

}

button.addEventListener("click", convertTemp);