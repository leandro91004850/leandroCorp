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
		var imc = peso / (altura * altura); 
		tdImc.textContent = imc.toFixed(2); //controlar o numero de casas decimais
	
	}

}


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", mostraMensagem); 
 

function mostraMensagem(event){  // event == controla o evento de clicar
	event.preventDefault(); 
	

	var form = document.querySelector("#form-adiciona"); // selecionando a área onde será manipulado os dados 
	


	var nome = form.nome.value; 
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;


var pacienteTr = document.createElement("tr"); 

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd); 
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	var tabela = document.querySelector("#tabela-pacientes"); 
	tabela.appendChild(pacienteTr);




}



