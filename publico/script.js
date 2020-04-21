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
        RespuestaT.innerHTML = `<h3>Llene todos los campos adecuadamente</h3>`;
        return
    }
    if (arr[0]==0) {
        RespuestaT.innerHTML = `<h3>En ningún campo 0 es valido</h3>`;
        return
    }
    if (arr[0]+arr[1]<arr[2]) {
        RespuestaT.innerHTML = `<h3>No se puede hacer un triangulo</h3>`;
        return
    }
    if (lado1 === lado2 && lado2 === lado3) {
        RespuestaT.innerHTML = 
        `<h3>El triángulo es:</h3>
        <img src="publico/imagenes/equilatero.png">`;
    }else{
        if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
            RespuestaT.innerHTML = 
            `<h3>El triángulo es:</h3>
            <img src="publico/imagenes/isoseles.png">`;       
        }else{
            RespuestaT.innerHTML = 
            `<h3>El triángulo es:</h3>
            <img src="publico/imagenes/escaleno.png">`;
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
        RespuestaC.innerHTML = `<h3>Llene todos los campos adecuadamente</h3>`;
        return
    }
    if (arr[0]==0) {
        RespuestaC.innerHTML = `<h3>En ningún campo 0 es valido</h3>`;
        return
    }
    if (arr[0]+arr[1]+arr[2]<arr[3]) {
        RespuestaC.innerHTML = `<h3>No se puede hacer un cuadrilátero</h3>`;
        return
    }

    if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
        RespuestaC.innerHTML = `
        <h3>El cuadrilátero es:</h3>
        <img src="publico/imagenes/cuadrado.png">`;
    }else{
        if (lado1 == lado3 && lado2 == lado4) {
            RespuestaC.innerHTML = `
            <h3>El cuadrilátero es:</h3>
            <img src="publico/imagenes/rectangulo.png">`;       
        }else{
            RespuestaC.innerHTML = `
            <h3>El cuadrilátero es un trapecio</h3>
            <img src="publico/imagenes/trapecio.png">`;
        }
    }

}