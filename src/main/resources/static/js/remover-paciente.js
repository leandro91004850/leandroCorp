var pacientes = document.querySelectorAll(".info-peso");
var nome = pacientes.textContent;

var imc = paciente.querySelector(".info-imc");


pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(e){
        console.log("fui clicado com duplo click");
        //this.remove();
        //this.imc;
        id = e.target.id;
        if(id == 1){
            this.style.backgroundColor= 'green';
        }else{
            this.style.backgroundColor= 'red';
        }

    });
});