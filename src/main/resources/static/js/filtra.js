var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    //console.log("digitaram no campo"); //escutando evento de click --> evento de input de dados do javascript
    console.log(campoFiltro.value);
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        console.log("tem algo digitado");
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");// criando uma expressao regular de pesquisa
            
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }


});