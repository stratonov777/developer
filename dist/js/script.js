const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.querySelector('.menu__list'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');
      
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.addEventListener('click', () => {
    // menu.classList.remove('active');
});

const counters = document.querySelectorAll('.diagram__unit-percent'),
      lines = document.querySelectorAll('.diagram__unit-scaleActive');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
    // Smooth scroll and pageup

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

if (window.innerWidth > 760) {
    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                menu.classList.remove('active');
                return false;
        });
    });
} else {
    menuLink.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset');
    });
    return false;
});

new WOW().init(
    {
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,          
        mobile:       false,      
        live:         true        
      }
);
