let runningTotal=0;
let buffer="0";
let previousOperator;

document.querySelector('.calc-buttons').addEventListener('click',
function(event) {
buttonClick(event.target.innerText);
})

function buttonClick(btnValue){
    if (isNaN(parseInt(btnValue))){
        handelBtnAction(btnValue);
    }else{
        handelBtnNumber(btnValue);
    }
}
function handelBtnNumber(btnValue){
    if (buffer=="0")
    {
        buffer=btnValue;
        
    }else{
        buffer+=btnValue;
    }
    refresh();
}
function handelBtnAction(btnValue){
    if (btnValue == "="){
        if (previousOperator == "+"){
            buffer=runningTotal+parseInt(buffer);
        }else if (previousOperator == "-"){
            buffer=runningTotal-parseInt(buffer);
        }else if (previousOperator == "*"){
            buffer=runningTotal*parseInt(buffer);
        }else if (previousOperator == "/"){
            buffer=runningTotal/parseInt(buffer);
        }
        previousOperator = "=";
    }else if(btnValue == "+"){
        runningTotal=parseInt(buffer);
        previousOperator="+";
        buffer="0";
    }else if(btnValue == "-"){
        runningTotal=parseInt(buffer);
        previousOperator="-";
        buffer="0";
    }else if(btnValue == "/"){
        runningTotal=parseInt(buffer);
        previousOperator="/";
        buffer="0";
    }else if(btnValue == "X"){
        runningTotal=parseInt(buffer);
        previousOperator="*";
        buffer="0";
    }else if(btnValue == "CE"){
        runningTotal=0;
        previousOperator=null;
        buffer="0";
    }else if(btnValue == "BS"){
        if (buffer.length > 1)
        {
            buffer=buffer.substr(0,buffer.length-1);
        }else{
            buffer="0";
        }
    }
    refresh();
}
function refresh()
{
    document.querySelector('.display').innerText=buffer;
}