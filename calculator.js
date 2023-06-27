const botonNumeros= document.getElementsByName ('data-number');
const botonOperacion= document.getElementsByName ('data-operation')
const botonIgual= document.getElementsByName ('data-equal')[0];
const botonBorrar= document.getElementsByName ('data-delete')[0];

var result= document.getElementById ('result');
var opeActual= '';
var opeAnterior= '';
var operacion= undefined;

botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        aggNumero(boton.innerText);      
    })   
});

botonOperacion.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperation(boton.innerText);        
    })
});

botonIgual.addEventListener('click', function () {
    calculate();
    updateDisplay();
});

botonBorrar.addEventListener('click', function () {
    clear();
    updateDisplay();
});

function selectOperation (op) {
    if (opeActual ==='') return;
    if (opeAnterior !== '') {
        calculate ()
    }
    operacion= op.toString();
    opeAnterior= opeActual;
    opeActual= '';
}

function calculate() {
    var calculo;
    const anterior= parseFloat (opeAnterior);
    const actual= parseFloat (opeActual);    
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion){
        case '+':
            calculo= anterior+actual;
            break;        
        case '-':
            calculo= anterior-actual;
            break;
        case 'x':
            calculo= anterior*actual;
            break;
        case '/':
            calculo= anterior/actual;
            break;
        default:
            return;
    }
    opeActual= calculo;
    operacion= undefined;
    opeAnterior= '';
}

function aggNumero (num) {
    opeActual= opeActual.toString()+ num.toString();
    updateDisplay();  
}

function clear () {
    opeActual= '';
    opeAnterior= '';
    operacion= undefined;    
}
function updateDisplay () {
    result.value= opeActual;    
}

clear();


