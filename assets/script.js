const element = document.getElementById("demostracao");
let itensflutuantes = document.getElementsByClassName("floatIcons");
let imagensflutuantes = document.getElementsByClassName("floatImg");

var span = "<> Software Solutions FullStack Dev</>";

const myArray = span.split("");

i = 0;

setTimeout(ativaset, 3000);

function ativaset() {
					document.getElementById("demostracao").innerHTML = "";
					i = 0;
					stop = setInterval(hello, 100);
}



function hello() {
		if (i == myArray.length) {clearInterval(stop);setTimeout(ativaset, 300*i);}
		else {document.getElementById("demostracao").innerHTML += myArray[i];
        i = i + 1;}
        }

		
function fadeIn(E1, E2, C1) {

	document.getElementsByClassName("cabecalhoPrincipal")[0].style = `background: ${C1};`;
	document.getElementsByTagName("body")[0].style = "color: white;";

	document.getElementsByClassName("bannerIcon")[0].src = `img/${E2}`;


	for(imagem in imagensflutuantes) {	
		imagensflutuantes[imagem].src = `img/${E1}`;}

	for(item in itensflutuantes) {	
		itensflutuantes[item].style = "visibility: visible";}

}

function fadeOut() {
	document.getElementsByClassName("cabecalhoPrincipal")[0].style = "background: white;";
	document.getElementsByTagName("body")[0].style = "color: black;";

	document.getElementsByClassName("bannerIcon")[0].src = "img/gear_1.png";
	document.getElementsByClassName("gear")[0].style = "animation: giro2 10s infinite linear; top: 30px;";

	for(item in itensflutuantes) {	itensflutuantes[item].style = "visibility: hidden";}

}

async function conselho() {
	numeroConselho = Math.floor(Math.random()*224);
	data = await fetch(`https://api.adviceslip.com/advice/${numeroConselho}`);
	advice = await data.json();

	document.getElementById("conselhoAdvice").innerHTML = "\"-   " + advice.slip.advice;
	document.getElementById("autor").innerHTML = "Conselho <b>N° " + numeroConselho + "</b>";
}



