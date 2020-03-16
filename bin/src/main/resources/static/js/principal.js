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

// escutando no javaScript um evento de click 
//titulo.addEventListener("click", mostraMensagem); // capiturando o momento do click no titulo html 
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", mostraMensagem); 
 

function mostraMensagem(event){  // event == controla o evento de clicar
	event.preventDefault(); 
	//console.log("Oi eu sou o botao e fui clicado");

	var form = document.querySelector("#form-adiciona"); // selecionando a área onde será manipulado os dados 
	
	//console.log(form.altura.value);
	//console.log(form.peso.value);

	var nome = form.nome.value; // variável nome vai receber o id="nome" e seu valor do mundo html
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

//	console.log(nome);
//	console.log(peso);
//	console.log(altura);
//	console.log(gordura);

var pacienteTr = document.createElement("tr"); // criando minha class pacientes

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;// modificando o valor dentro das 
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd); // função que vai inserir como filhos os elementos Td dentro do pai Tr
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	//console.log(pacienteTr);
	var tabela = document.querySelector("#tabela-pacientes"); // pegando a tabela para fazer a inclusão do elementos coletas pelo javaScript
	tabela.appendChild(pacienteTr);// tradução da linha de codigo == tabela coloca como filho o cara que eu acabei de criar  meu pacienteTr




}



