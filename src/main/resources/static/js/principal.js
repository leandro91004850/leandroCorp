var titulo = document.querySelector(".titulo");
	titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

	var tdpeso = paciente.querySelector(".info-peso");
	var peso = tdpeso.textContent; // capiturar somente o valor

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var imc = peso / (altura * altura); // () determina os quais operadores serao executados primeiro

	console.log(imc);


/*
	console.log(paciente); //tr
	console.log(tdpeso); // td aonde esta amarzedo o peso do paciente
	console.log(peso);*/