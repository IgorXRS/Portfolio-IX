
  //------------------Igor Xaiver-------------------------


// Esta função é chamada quando uma div .box é clicada.
function zomProjeto(element) {
    // Toggle (adiciona ou remove) a classe "activep" na div que foi clicada.
    element.classList.toggle("activep");
  
    // Seleciona a div .blur e adiciona ou remove a classe "activep" nela.
    const blur = document.querySelector('.blur');
    blur.classList.toggle('activep');
  
    // Seleciona o elemento .botoes dentro da div que foi clicada e adiciona ou remove a classe "activep" nele.
    const botoesDiv = element.querySelector(".discricao-projetos");
    botoesDiv.classList.toggle("activep");
  }
  
  // Esta função é chamada para remover a classe "activep" de todos os elementos que a possuem.
  function removerClasseActivep() {
    // Seleciona todos os elementos que possuem a classe "activep".
    const elementosComActivep = document.querySelectorAll(".activep");
  
    // Itera sobre esses elementos e remove a classe "activep" de cada um deles.
    elementosComActivep.forEach((elemento) => {
      elemento.classList.remove("activep");
    });
  }
  
  // Seleciona todas as divs com a classe .box e adiciona um ouvinte de eventos de clique a cada uma delas.
  const projetos = document.querySelectorAll(".box");
  projetos.forEach((projeto) => {
    // Quando uma div .box é clicada, a função zomProjeto será chamada.
    projeto.addEventListener("click", zomProjeto);
  });