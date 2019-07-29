var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d");

alert("Actividad dinámica javascript");
var nombre=prompt("tu nombre es:" );
document.write("Bienvenido al sistema: "+nombre);

dibujarCuadro("black",10,10,200,10);
dibujarCuadro("blue",250,10,440,10);
dibujarCuadro("red",490,10,680,10);

uno();
dos();
tres();
cuatro();
cinco();
seis();
siete();
ocho();

function dibujarCuadro(color, xinicio, yinicio, xfin, yfin){
dibujarLinea(color,xinicio,yinicio,xfin,yfin);//linea arriba
dibujarLinea(color,xinicio,200,xfin,200);//linea abajo
dibujarLinea(color,xinicio,200,xinicio,yfin);
dibujarLinea(color,xfin,200,xfin,yfin);
}

function dibujarLinea(color,xinicio,yinicio,xfin,yfin)
{
	lienzo.beginPath();
	lienzo.strokeStyle=color;
	lienzo.moveTo(xinicio,yinicio),
	lienzo.lineTo(xfin,yfin);
	lienzo.stroke();
	lienzo.closePath();
}

function uno(){
	for(i=10;i<100;i=i+5){
	dibujarLinea("yellow",10,10,i,100);}
}

function dos(){
	for(i=10;i<100;i=i+5){
	dibujarLinea("blue",10,10,100,i);}
}

function tres(){
	for(i=10;i<100;i=i+5){
	dibujarLinea("red",200,10,100,i);}
}

function cuatro(){
	for(i=100;i<200;i=i+5){
	dibujarLinea("green",i,100,200,10);}
}

function cinco(){
	for(i=100;i<200;i=i+5){
	dibujarLinea("yellow",200,200,i,100);}
}

function seis(){
	for(i=100;i<200;i=i+5){
	dibujarLinea("blue",100,i,200,200);}
}

function siete(){
	for(i=100;i<200;i=i+5){
	dibujarLinea("red",10,200,100,i);}
}

function ocho(){
	for(i=10;i<100;i=i+5){
	dibujarLinea("green",i,100,10,200);}
}



