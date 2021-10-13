$(window).on('load', function () {
    let $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.contpre_svg');

    $svg_anm.delay(1200).fadeOut();
    $preloader.delay(900).fadeOut('slow');
    setTimeout(function (){
        $("h1").fadeIn().addClass( "animate__animated animate__rotateInUpLeft" );
        $("div#logo").fadeIn().addClass( "animate__animated animate__rotateInDownLeft" );
      }, 1500);
    
});
