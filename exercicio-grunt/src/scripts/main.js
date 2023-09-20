$(document).ready(function() {
    $('.botao-menu button').click(function() {
        $('.menu').slideToggle();
        animateMenu(); // Função para animar o menu
    });

    function animateMenu() {
        const menu = document.querySelector('.menu');
        const animation = anime.timeline({
            duration: 300,
            autoplay: false
        });
        animation
            .add({
                targets: menu,
                opacity: [0, 1],
                translateY: [-20, 0],
                easing: 'easeOutQuad'
            })
            .add({
                targets: '.submenu',
                opacity: [0, 1],
                translateY: [-10, 0],
                easing: 'easeOutQuad',
                duration: 200,
                delay: anime.stagger(90)
            });
        animation.play();
    }
});