let RespuestaC = document.getElementById('RespuestaC');
let RespuestaT = document.getElementById('RespuestaT');

let Tlado1 = document.getElementById('tlado1');
let Tlado2 = document.getElementById('tlado2');
let Tlado3 = document.getElementById('tlado3');

let Clado1 = document.getElementById('clado1');
let Clado2 = document.getElementById('clado2');
let Clado3 = document.getElementById('clado3');
let Clado4 = document.getElementById('clado4');

function triangulo(){
    
    var lado1 = Tlado1.valueAsNumber;
    var lado2 = Tlado2.valueAsNumber;
    var lado3 = Tlado3.valueAsNumber;
    var arr = [ lado1, lado2, lado3];
    function comparar ( a, b ){ return a - b; }
    arr.sort( comparar );  // [ 1, 5, 40,]
    if (arr.includes(NaN)) {
        RespuestaT.innerHTML = `<h3>llene todos los campos<h3/>`;
        return
    }
    if (arr[0]==0) {
        RespuestaT.innerHTML = `<h3>en ningun campo 0 es valido<h3/>`;
        return
    }
    if (arr[0]+arr[1]<arr[2]) {
        RespuestaT.innerHTML = `<h3>no se puede hacer un triangulo<h3/>`;
        return
    }
    if (lado1 === lado2 && lado2 === lado3) {
        RespuestaT.innerHTML = `<h3>El triagulo es equilatero<h3/>`;
        console.log('equilatero')
    }else{
        if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
            RespuestaT.innerHTML = `<h3>El triagulo es isosceles<h3/>`;       
        }else{
            RespuestaT.innerHTML = `<h3>El triagulo es escaleno<h3/>`;
        }
    }

}
function cuadrado(){
    
    var lado1 = Clado1.valueAsNumber;
    var lado2 = Clado2.valueAsNumber;
    var lado3 = Clado3.valueAsNumber;
    var lado4 = Clado4.valueAsNumber;
    var arr = [ lado1, lado2, lado3, lado4];
    function comparar ( a, b ){ return a - b; }
    arr.sort( comparar );  // [ 1, 2, 3, 4 ]
    if (arr.includes(NaN)) {
        RespuestaC.innerHTML = `<h3>llene todos los campos<h3/>`;
        return
    }
    if (arr[0]==0) {
        RespuestaC.innerHTML = `<h3>en ningun campo 0 es valido<h3/>`;
        return
    }
    if (arr[0]+arr[1]+arr[2]<arr[3]) {
        RespuestaC.innerHTML = `<h3>no se puede hacer un cuadrilatero<h3/>`;
        return
    }

    if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
        RespuestaC.innerHTML = `<h3>El cuadrilatero es un cuadrado<h3/>`;
        console.log('equilatero')
    }else{
        if (lado1 == lado3 && lado2 == lado4) {
            RespuestaC.innerHTML = `<h3>El cuadrillatero es un rectangulo<h3/>`;       
        }else{
            RespuestaC.innerHTML = `<h3>El cuadrillatero es un trapesio<h3/>`;
        }
    }

}