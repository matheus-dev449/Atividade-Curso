
let botao = document.getElementById("btnAdicionar");

botao.onclick = function() {

    let nome = document.getElementById("nomeAluno").value;

    if (nome == "") {

        alert("Por favor, digite um nome!");

    } else {

        let novoLi = document.createElement("li");

        novoLi.innerHTML = nome;

        document.getElementById("listaAlunos").appendChild(novoLi);

        document.getElementById("nomeAluno").value = "";
    }

}
