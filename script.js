
let buttons = document.querySelectorAll(".btn");
let output = document.querySelector("#result");

buttons.forEach ((btn) => {
    btn.addEventListener("click",()=>{

       const btnvalue = btn.textContent;

       if( btnvalue === "C"){
        clearResult();
       }

       else if( btnvalue === "="){
        calculateResult();
       }

       else {
        appendvalue(btnvalue);
       }

    });
});

function clearResult(){
    output.value="";
}

function calculateResult(){
    try{
        output.value= eval(output.value);
    }

    catch{
        output.value="Error";
    }
   
}

function appendvalue(btnvalue){
    output.value += btnvalue;
}