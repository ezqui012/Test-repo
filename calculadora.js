
let btnOp=document.getElementById('btn-operate');



let inData=document.getElementById('inData');

function addData(char){
    inData.value=inData.value+char;
}

btnOp.addEventListener("click",(e)=>{
    let total=inData.value;    
    console.log(operarData(total))
});

let operarData=(expresion)=>{

    let operations=expresion.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if(!operations)throw new Error("Operacion invalida");

    let i = 0;
    while (i < operations.length) {
      if (operations[i] === '*' || operations[i] === '/') {
        const operador = operations[i];
        const a = parseFloat(operations[i - 1]);
        const b = parseFloat(operations[i + 1]);
        const resultado = operador === '*' ? a * b : a / b;
  
        operations.splice(i - 1, 3, resultado.toString());
        i = 0; 
      } else {
        i++;
      }
    }


     
  i = 0;
  while (i < operations.length) {
    if (operations[i] === '+' || operations[i] === '-') {
      const operador = operations[i];
      const a = parseFloat(operations[i - 1]);
      const b = parseFloat(operations[i + 1]);
      const resultado = operador === '+' ? a + b : a - b;

      operations.splice(i - 1, 3, resultado.toString());
      i = 0;
    } else {
      i++;
    }
  }

  return operations[0];
}




