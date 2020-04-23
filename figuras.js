

function triangulo() {

    var ladoUno = document.getElementById('ladoUno').value;
    console.log(ladoUno);
    var ladoDos = document.getElementById('ladoDos').value;
    console.log(ladoDos);
    var ladoTres = document.getElementById('ladoTres').value;
    console.log(ladoTres);

    if (ladoDos && ladoUno && ladoTres) {

        if (ladoDos > 0 && ladoUno > 0 && ladoTres > 0) {

            if (ladoUno == ladoDos && ladoDos == ladoTres) {
                alert("Equilatero");
            } else if (ladoUno != ladoDos && ladoUno != ladoTres && ladoDos != ladoTres) {
                alert("Escaleno");
            } else
                alert("Isoceles");
        }else{
            alert("Los valores de los lados deben ser diferentes y mayores que 0")
        }
    } else {
        alert("Ingrese por favor todos los campos para el triángulo")
    }



}

function calcularFigura() {
    var ladoUno = document.getElementById('lado1').value;
    var ladoDos = document.getElementById('lado2').value;
    var ladoTres = document.getElementById('lado3').value;
    var ladoCuatro = document.getElementById('lado4').value;

    if (ladoUno && ladoDos && ladoTres && ladoCuatro) {

        if(ladoDos > 0 && ladoUno > 0 && ladoTres > 0 && ladoCuatro >0){
            var lados = [ladoUno, ladoDos, ladoTres, ladoCuatro]
            var uniqs = lados.filter(function (item, index, array) {
                return array.indexOf(item) === index;
            })
            console.log(uniqs);
    
            if (uniqs.length == 1) {
                alert("Cuadrado");
    
            } else if (uniqs.length == 2) {
                alert("Rectangulo");
    
            } else if (uniqs.length == 3){
                alert("Trapecio");
            }else{
                alert("Otro tipo")
            }
                
        }else{
            alert("Los valores de los lados deben ser diferentes y mayores que 0");
        }
    }else{
        alert("Ingrese por favor todos los campos para el cuadrilátero");
    }


}