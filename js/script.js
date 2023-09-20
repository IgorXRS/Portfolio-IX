// Função para mostrar ou ocultar o menu suspenso
function menuSuspenso() {
    // Seleciona o elemento com o id "menuLinks"
    var element = document.getElementById("menuLinks");

    // Alterna (adiciona ou remove) a classe "show" no elemento selecionado
    element.classList.toggle("show");

    // Seleciona o elemento com o id "header"
    var element2 = document.getElementById("header");

    // Alterna (adiciona ou remove) a classe "show2" no segundo elemento selecionado
    element2.classList.toggle("show2");
}

// Seleciona todas as seções e os links do menu de navegação
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul li a')

// Evento que é acionado quando a página é rolada
window.onscroll = () => {
    sections.forEach(sec => {
        // Obtém a posição atual da rolagem da página
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Verifica se a posição atual está dentro dos limites da seção atual
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                // Remove a classe 'active' de todos os links do menu
                link.classList.remove('active');

                // Adiciona a classe 'active' ao link correspondente à seção atual
                document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}