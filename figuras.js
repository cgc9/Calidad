function triangulo() {
    var ladoUno = document.getElementById('ladoUno').value;
    console.log(ladoUno);
    var ladoDos = document.getElementById('ladoDos').value;
    console.log(ladoDos);
    var ladoTres = document.getElementById('ladoTres').value;
    console.log(ladoTres);


    if (ladoUno == ladoDos && ladoDos == ladoTres) {
        alert("equilatero");
    } else if (ladoUno != ladoDos && ladoUno != ladoTres && ladoDos != ladoTres) {
        alert("Escaleno");

    } else
        alert("Isoceles");
}

function calcularFigura(){
    var ladoUno = document.getElementById('lado1').value;
    var ladoDos = document.getElementById('lado2').value;
    var ladoTres = document.getElementById('lado3').value;
    var ladoCuatro = document.getElementById('lado4').value;

    var lados=[ladoUno,ladoDos,ladoTres,ladoCuatro]

    var uniqs = lados.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      })
      console.log(uniqs); 

      if(uniqs.length==1){
          alert("Cuadrado");

      }else if(uniqs.length==2){
          alert("Rectangulo");

      }else if(uniqs.length==3)
        alert("Trapecio");
      

}