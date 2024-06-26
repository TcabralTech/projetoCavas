
/*letreiro*/
function typeWrite(elemento) {
		const textoArray = elemento.innerHTML.split('');
		elemento.innerHTML = '';
		textoArray.forEach((letra, i) => {
			setTimeout(function(){
				elemento.innerHTML += letra;
			}, 100 * i);
		});
	}

	const utprimers = document.querySelector('.letreiro h2')
	typeWrite(utprimers)

/*menu*/
$(document).ready(function() {
            var timer;
            var fadeTime = 500; // Tempo de fade em milissegundos
            var menu = $('.menu');
            var idleTime = 2000; // Tempo de inatividade em milissegundos

            function resetTimer() {
                clearTimeout(timer);
                menu.fadeIn(fadeTime); // Mostrar o menu

                timer = setTimeout(function() {
                    menu.fadeOut(fadeTime); // Esconder o menu após inatividade
                }, idleTime);
            }

            // Eventos para detectar movimento do mouse e rolagem
            $(document).on('mousemove scroll', resetTimer);

            // Inicializa o timer
            resetTimer();
});

/*Whatsapp*/
$(document).ready(function() {
    var timer;
    var fadeTime = 500; // Tempo de fade em milissegundos
    var icon = $('.whatsapp');
    var idleTime = 2000; // Tempo de inatividade em milissegundos

    function resetTimer() {
        clearTimeout(timer);
        icon.fadeIn(fadeTime); // Mostrar o menu

        timer = setTimeout(function() {
            icon.fadeOut(fadeTime); // Esconder o menu após inatividade
        }, idleTime);
    }

    // Eventos para detectar movimento do mouse e rolagem
    $(document).on('mousemove scroll', resetTimer);

    // Inicializa o timer
    resetTimer();
});

/*Menu rolagem suave*/

 $(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000); // Tempo da animação em milissegundos
        }
    });
});

/*SLIDE*/

$(document).ready(function() {
    var slideWidth = $('.item').outerWidth(); // Largura de cada item do slider
    var totalSlides = $('.item').length; // Número total de slides
    var currentSlide = 0; // Inicializa o slide atual

    // Função para animar a rolagem
    function animateSlide() {
        var movePosition = -slideWidth * currentSlide;
        $('.slide-container').css({
            'transform': 'translateX(' + movePosition + 'px)',
            'transition': 'transform 0.5s ease' // Adiciona a transição diretamente no jQuery
        });
    }

    // Evento para o botão "Próximo"
    $('.next').click(function() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Retorna ao primeiro slide
        }
        animateSlide();
    });

    // Evento para o botão "Anterior"
    $('.prev').click(function() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1; // Vai para o último slide
        }
        animateSlide();
    });
});
