// responsavel pelo comunicação com uma api de pacientes.
//console.log("buscarei os pacientes");
//https://api-pacientes.herokuapp.com/pacientes


var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes...");

    var xhr = new XMLHttpRequest();//responsável por fazer requisições 

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;     
        var pacientes = JSON.parse(resposta);
      
        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);

        });
    });

    xhr.send();

});