

function triangulo() {

    //Nodo 1
    var ladoUno = document.getElementById('ladoUno').value;
    console.log(ladoUno);
    var ladoDos = document.getElementById('ladoDos').value;
    console.log(ladoDos);
    var ladoTres = document.getElementById('ladoTres').value;
    console.log(ladoTres);
     

    if (ladoDos && ladoUno && ladoTres) {

        if (ladoDos > 0 && ladoUno > 0 && ladoTres > 0) {
            // Nodo      2                  3    
            if (ladoUno == ladoDos && ladoDos == ladoTres) {
                // Nodo 4
                alert("Equilatero");
            //Nodo              5                       6                   7
            } else if (ladoUno != ladoDos && ladoUno != ladoTres && ladoDos != ladoTres) {
            //Nodo 8
                alert("Escaleno");
            } else
            //Nodo 9
                alert("Isoceles");
        }else{
            alert("Los valores de los lados deben ser diferentes y mayores que 0")
        }
    } else {
        alert("Ingrese por favor campos válidos para el triángulo")
    }



}

function calcularFigura() {

    //Nodo 1
    var ladoUno = document.getElementById('lado1').value;
    var ladoDos = document.getElementById('lado2').value;
    var ladoTres = document.getElementById('lado3').value;
    var ladoCuatro = document.getElementById('lado4').value;

    if (ladoUno && ladoDos && ladoTres && ladoCuatro) {

    
        if(ladoDos > 0 && ladoUno > 0 && ladoTres > 0 && ladoCuatro >0){
            var lados = [ladoUno, ladoDos, ladoTres, ladoCuatro]
            //Nodo 2 
            var uniqs = lados.filter(function (item, index, array) {
                return array.indexOf(item) === index;
            })
            console.log(uniqs);

            //Nodo 3
            switch(uniqs.length){
                case 1:  
                     //Nodo 4
                    alert("Cuadrado"); 
                    break;
                case 2:
                     //Nodo 5
                    alert("Rectangulo");
                    break;
                case 3:
                     //Nodo 6
                    alert("Trapecio");
                    break;
                default:
                     //Nodo 7
                    alert("Otro tipo");
                    break;       

            }
    
                
        }else{
            alert("Los valores de los lados deben ser diferentes y mayores que 0");
        }
    }else{
        alert("Ingrese por favor todos los campos para el cuadrilátero");
    }


}