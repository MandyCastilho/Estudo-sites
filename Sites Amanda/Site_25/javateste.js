function eventoClick() {
    //alert('Aciona um evento de click');
    document.body.style.backgroundColor = "yellow";
}


function eventoDblClick() {
    alert('Evento de clique duplo');
}


function viraRosa() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "pink";
}
function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "aqua";
}


function limpaTexto() {
    document.getElementById("campoTexto").value = "";
}


function teclaPressionada() {
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}