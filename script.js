//isjungia laisva rezima kuris automatiskai taiso kai kurias klaidas
"use strict";
//kintamojo apiibrezimas
var x;
var y;
var z, g, p, i;
var elementas, laipsnis;

//reiksmes kintamajam priskyrimas
x = 16;
y = 16.6;
z = "Labas pasauli";
g = 'Labas pasauli';
p = "Imone 'Geri studentai'";
i = 'Imone "Geri studentai"';

elementas = document.querySelector(".tekstas");

//sudetis
var suma, a, b;
a = 5;
b = 6;
suma = a + b;
a = suma;

//skirtumas
var skirtumas;
a = 11;
b = 3;

skirtumas = a - b;

//daugyba
var sandauga;
sandauga = a * b;

//dalyba
var rez;
rez = sandauga / 2;

//liekanos skaiciavimas
var liekana;
liekana = sandauga % 2;

//kelimas laipsniu
laipsnis = 5 ** 2; 


//Kintamuju isvedimas
console.log(elementas);
console.log("elementas");
console.log(suma);
console.log(skirtumas);
console.log(a);
console.log(sandauga);
console.log(rez);
console.log(liekana);
console.log(laipsnis);

//"1" pridejimas
sandauga++; //sandauga + 1
sandauga = sandauga + 1;
console.log(sandauga);

//"1" atemimas
sandauga--;
console.log(sandauga);

//dalyba is 0
var isnulio = 5 / 0;
console.log(isnulio);

sandauga += 1; //sandauga + skaicius po "=", imanomi visi matematiniai veiksmai (+, -, /, *, %, **)
console.log(sandauga);


var tekstas, skaicius;
tekstas ="Tekstas";
skaicius = 5;
suma = tekstas + skaicius;
console.log(suma);


var bendrastekstas;  //string type
bendrastekstas = "Suma:" + suma +" Skirtumas: " + skirtumas + "Sandauga: " + sandauga;
console.log(bendrastekstas);

var kintamasis;
console.log(kintamasis);


//veiksmai su neigimais skaiciais
var neigiami, sakni;

neigiami = -5 + (-4);

alert(neigiami); //kitas isvedimo budas, ismeta langeli su pranesimu

sakni = Math.sqrt(9);
alert(sakni);

sakni = 9 ** (1/2);
console.log(sakni);




//document.querySelector(".tekstas");
//console.log("Labas pasauli");
//console.log(document.querySelector(".tekstas"));
//console.log(document.querySelector(".tekstas").classList);
//console.log(document.querySelector(".tekstas").textContent);

//document.querySelector(".tekstas").classList.add('javascript-klase');
//document.querySelector(".tekstas").classList.remove('negrazus-tekstas');

//console.log(document.querySelector(".tekstas").classList);
