
  //-------------------------------------------
  function zomProjeto(element) {
    element.classList.toggle("activep");
    const botoesDiv = element.querySelector(".botoes");
    botoesDiv.classList.toggle("activep");
}


function removerClasseActivep() {
    const elementosComActivep = document.querySelectorAll(".activep");

    elementosComActivep.forEach((elemento) => {
        elemento.classList.remove("activep");
    });
}

const projetos = document.querySelectorAll(".box");
projetos.forEach((projeto) => {
    projeto.addEventListener("click", zomProjeto);
});

function zomProjeto(element) {
    element.classList.toggle("activep");
    const boxes = document.querySelectorAll(".box");
    const blur = document.getElementById("blur");
    const atLeastOneActive = [...boxes].some(box => box.classList.contains("activep"));

    if (atLeastOneActive) {
        blur.classList.add("activep");
    } else {
        blur.classList.remove("activep");
    }
}


