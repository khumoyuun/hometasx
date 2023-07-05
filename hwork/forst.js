function calculateCube(){
var number=document.getElementById('numberInput').value;
var cube=number*number*number;
document.getElementById('result').innerHTML="cube value= "+ cube;
}
function changeBackgroundColor() {
    var color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}

function calculateSurfaceArea() {
    var sideA = document.getElementById("sideAInput").value;
    var sideB = document.getElementById("sideBInput").value;
    var surfaceArea = sideA * sideB;
    document.getElementById("result1").innerHTML = "Surface of it=  " + surfaceArea;
}
function diametrcricle(){
    var sidea = document.getElementById("sidea").value ;
    var sideb = document.getElementById("sideb").value ;
    var diametrLenght = 2 * sidea * sideb ;
    document.getElementById("result2").innerHTML = "diameter of the clicle=  " + diametrLenght ; 
}
function temperatura(){
    var sideC = document.getElementById("sideC").value ; 
    var temperaturaFahrenheit = sideC * 1.8 + 32 ;
    document.getElementById("result3").innerHTML="Temperatura in Fahrenheit=   " + temperaturaFahrenheit ; 
}