let numberOne=document.getElementById('btn1');
let numberTwo=document.getElementById('btn2');
let numberThree=document.getElementById('btn3');
let numberFour=document.getElementById('btn4');
let numberFive=document.getElementById('btn5');
let numberSix=document.getElementById('btn6');
let numberSeven=document.getElementById('btn7');
let numberEight=document.getElementById('btn8');
let numberNine=document.getElementById('btn9');
let numberZero=document.getElementById('btn0');

let btnPlus=document.getElementById('btn-plus');
let btnMin=document.getElementById('btn-min');
let btnCross=document.getElementById('btn-cross');
let btnDiv=document.getElementById('btn-division');
let btnOp=document.getElementById('btn-operate');


let inData=document.getElementById('inData');

numberOne.addEventListener("click",(e)=>{
        inData.value=inData.value + 1; 
});
numberTwo.addEventListener("click",(e)=>{
    inData.value=inData.value + 2; 
});
numberThree.addEventListener("click",(e)=>{
    inData.value=inData.value + 3; 
});
numberFour.addEventListener("click",(e)=>{
    inData.value=inData.value + 4; 
});
numberFive.addEventListener("click",(e)=>{
    inData.value=inData.value + 5; 
});
numberSix.addEventListener("click",(e)=>{
    inData.value=inData.value + 6; 
});
numberSeven.addEventListener("click",(e)=>{
    inData.value=inData.value + 7; 
});
numberEight.addEventListener("click",(e)=>{
    inData.value=inData.value + 8; 
});
numberNine.addEventListener("click",(e)=>{
    inData.value=inData.value + 9; 
});
btnPlus.addEventListener("click",(e)=>{
    inData.value=inData.value + "+"; 
});
btnMin.addEventListener("click",(e)=>{
    inData.value=inData.value + "-"; 
});
btnCross.addEventListener("click",(e)=>{
    inData.value=inData.value + "x"; 
});
btnDiv.addEventListener("click",(e)=>{
    inData.value=inData.value + "/"; 
});
btnOp.addEventListener("click",(e)=>{
    let res=0;
    let total=inData.value;
   // res=total.split(/[+x\-.\/]/);
    let sumador=total.split('+');
    let restador=total.split('-');
    if(sumador){
        res=plusNumber(sumador);
    }
    if(restador){
        res=minusNumber(restador);
        console.log(restador);
    }
    
    
    console.log(res);
   
});

let plusNumber=(num)=>{
    let total=0;
    for (let i = 0; i < num.length; i++) {
        total +=parseInt(num[i]);
    }
    return total;
}
let minusNumber=(num)=>{
    let total=parseInt(num[0]);
    for (let i = 1; i < num.length; i++) {
        total = total-parseInt(num[i]);   
    }
    return total;
}




