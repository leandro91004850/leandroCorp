var pacientes = document.querySelectorAll(".paciente");
var nome = pacientes.textContent;


var imc = paciente.querySelector(".info-imc");


pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(e){
        console.log("fui clicado com duplo click");
        var acerto = 12;
        //this.remove();
        //this.imc;
        id = e.target.id;
        if(id == 1){
            this.style.color= 'green';
            document.getElementById("peso").innerHTML ="voce acertou";
        }else{
            this.style.color= 'red';
        }

    });
});