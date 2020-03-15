var titulo = document.querySelector(".titulo");
	titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){
	//console.log(pacientes[i]);
	var paciente = pacientes[i];

	var tdpeso = paciente.querySelector(".info-peso");
	var peso = tdpeso.textContent; 

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = true;
	var alturaValida = true;

	if(peso <= 0 || peso >= 1000){
		console.log("peso invalido");
		pesoValido = false;
		tdImc.textContent = "peso inválido";
	}

	if(altura <= 0 || altura >= 3.00){
		console.log("altura invalida");
		alturaValida = false;
		tdImc.textContent="altura inválida";
	}


	if(alturaValida && pesoValido){ // caso os dois sejam verdadeiros
		var imc = peso / (altura * altura); 
		tdImc.textContent = imc.toFixed(2); //controlar o numero de casas decimais
	
	}

}
	



