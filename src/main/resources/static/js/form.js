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
