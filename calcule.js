//calculatore program
const display = document.getElementById("display")
 
function appendTodisplay(input){
    display.value+=input;
}
function cleardisplay(){
    display.value+="";
}
function calculatore(){
    try{
        display.value=eval(display.value);
    }
    catch(error) {
        display.value="Error";
    }
}