
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", mostraMensagem); 
 

function mostraMensagem(event){  // event == controla o evento de clicar
	event.preventDefault(); 

	var form = document.querySelector("#form-adiciona"); // selecionando a área onde será manipulado os dados 

	// extraindo informacoes do paciente do form	
	var paciente = obtemPacienteDoForm(form);
	//console.log(paciente);

	// criar a tr do paciente
	var pacienteTr = montaTr(paciente);

	

// adicionando o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes"); 
	tabela.appendChild(pacienteTr);
	form.reset(); // funcao que limpa nosso formulario

}



function obtemPacienteDoForm(form){
	// criando um objeto em javascript para coleta os dados do form
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.peso.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}


function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); 
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}


function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}
