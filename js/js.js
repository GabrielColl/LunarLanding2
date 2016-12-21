var y = 12 ; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;

//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	
	//encender/apagar el motor al hacer click en la pantalla
	document.onkey = function () {
 	if (a==g){
  		motorOn();
	} 
	else {
  		motorOff();
		}
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	//Empezar a mover nave
	start();
}

//Definición de funciones
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*400);
	
}

function stop(){
	clearInterval(timer);
	}
function pause(){
	stop();
	}
function play(){
	start();
	
}

function reset(){
	reset = confirm("¿Volver a jugar?");
	if (reset == true){
    	window.location.reload();
	}
	else{
	stop();
	} 
}
function replay(){
	window.location.reload();
	} 
function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(1);
	y +=v*dt;
	document.getElementById("altura").innerHTML=78-y.toFixed(1);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<78){ 
		document.getElementById("nave").style.top =y+"%" ; 
	} else { 
		stop(); 
		aterrizaje();
	}
}
function aterrizaje(){
	if (v<3){
		alert("Has aterrizado, enhorabuena!");
		reset();
		}
	else{
		alert("Te has estrellado, vuelve a intentarlo");
		reset();
		}
} 

function motorOn(){
	a=-g;
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 50);
	document.getElementById("cohete").src="img/cohete1.png";
	}

function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById("cohete").src="img/cohete.png";
	cohete.height=100;
		
	}
function actualizarFuel(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=1;
	document.getElementById("fuel").innerHTML=fuel;	
	if (fuel<=0){
	fuel-=0;
	document.onkeydown = motorOff();
	}
}