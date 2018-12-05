//variable with 0 assigned, once a number is chosen and equation
//if picked, the the previous number is stored here.
let firstNum = 0;
//this variable is the the screens original string "0"
//the number presented "realtime"
let theNum = "0";
//this is an 'unassigned' variable for the chosen symbol. (*/-+=<-)
let mathSymbolchoice = 0;
//targets the screen and number within it
const screen = document.querySelector(".screen");

document.querySelector(".buttons").addEventListener("click", function(event) {
    //Targets text inside the  '.buttons' / ^ assigning click event
    buttonClick(event.target.innerText);
})

//button click check wether innerText is not a number first
// symbol or # gets assigned on call-back to the (whatButton) expression.
function buttonClick(whatButton) {
    if(isNaN(whatButton)) {
        symbolRep(whatButton)
    } else {
        numberRep(whatButton)
    }
    render() //updates the screen with the render function declared bottom
}
//numberRep checks expression inside (), asigns it to previously assigned 'theNum' variable
function numberRep(whatButton) {
    if(theNum === "0") {
    theNum = whatButton;
    } else {
        theNum += whatButton;
        }
        console.log(whatButton); 
}
//for symbolRep, switch (whatbutton) goes through a check in each case the respective
//command is executed
function symbolRep(whatButton) {
    switch (whatButton) {
        case 'C':                   //if its C re-assign theNum and nextNum with the values of 0
            theNum = "0";
            firstNum = 0;
            break;
        case '=':
        //there storedVal is now called upon by the new theNum which is converted to an integer first.
            mathGoesDown(parseInt(theNum));  //= will call this, resets the original parameters 
            mathSymbolchoice = 0;
            theNum = "" + firstNum;
            firstNum = 0;
            break;
        case '⬅️':
           if(theNum.length === 1) {
               theNum = "0";
           } else {
               theNum = theNum.substring(0, theNum.length - 1);
           }
            break;
        default:
            mathMoves(whatButton);
            break;
    }
}
// storedVal takes in the previous input string and converts to interger. if 0 assign that. 
function mathMoves(whatButton) {
    const storedVal = parseInt(theNum);
    if (firstNum === 0) {
        firstNum = storedVal;
    } else {
        mathGoesDown(storedVal);//;
    }
    //this is the default switch therefore the sumbol is assigned to mathSymbolChoise and 
    //the string is reset.
    mathSymbolchoice = whatButton
    theNum = "0";
}
//the type of math is performed here, both values are numbers instead of strings by
//parseInt-ing them before hand.
function mathGoesDown(storedVal){
    if (mathSymbolchoice === "+") {
        firstNum += storedVal;
    } else if (mathSymbolchoice ==="-") {
        firstNum -= storedVal;
    } else if (mathSymbolchoice === "×") {
        firstNum *= storedVal;
    } else {
        firstNum /= storedVal;
    }
}
    //function which updates the screen with a string.
function render() {
    screen.innerText = theNum;
}
