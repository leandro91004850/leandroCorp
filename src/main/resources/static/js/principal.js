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
		paciente.classList.add("paciente-invalido"); // minha classe expecificada no meu css
	}

	if(altura <= 0 || altura >= 3.00){
		console.log("altura invalida");
		alturaValida = false;
		tdImc.textContent="altura inválida";
		paciente.style.backgroundColor="lightcoral";
	}


	if(alturaValida && pesoValido){ // caso os dois sejam verdadeiros
		var imc = peso / (altura * altura); 
		tdImc.textContent = imc.toFixed(2); //controlar o numero de casas decimais
	
	}

}

titulo.addEventListener("click", mostrarMensagem); // escutando o momento do click 
	
	function mostrarMensagem(){
		console.log("ola eu fui clicado!")
	}



