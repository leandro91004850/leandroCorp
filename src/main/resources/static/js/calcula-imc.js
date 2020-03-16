var titulo = document.querySelector(".titulo");
	titulo.textContent = "Aparecida Nutricionista";

var gordura = document.querySelector(".info-gordura");

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){
	//console.log(pacientes[i]);
	var paciente = pacientes[i];

	var tdpeso = paciente.querySelector(".info-peso");
	var peso = tdpeso.textContent; 

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdgordura = paciente.querySelector(".info-gordura");
	var gordura = tdgordura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	tdpeso.addEventListener("click", clickEvento);

	function clickEvento(){

		
			console.log("o valor ta diferente");
			console.log(tdpeso);
			console.log(tdgordura);

		
	}
	

	var pesoValido = true;
	var alturaValida = true;

	if(peso <= 0 || peso >= 1000){
		console.log("peso invalido");
		pesoValido = false;
		tdImc.textContent = "peso inválido";
		paciente.classList.add("paciente-invalido"); // minha classe expecificada no meu css
	}

	if(altura <= 0 || altura >= 3.00){
		console.log("altura invalida");
		alturaValida = false;
		tdImc.textContent="altura inválida";
		paciente.style.backgroundColor="lightcoral";
	}


	if(alturaValida && pesoValido){ // caso os dois sejam verdadeiros
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	
	}

}


// criacao da funcao para calcula do imc
function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura); 
	return imc.toFixed(2); //controlar o numero de casas decimais
}

