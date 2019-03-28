/*---------------------------------
    MENU HAMBURGUESA
 ----------------------------------*/
const menu = document.querySelector('.menu');
const burger = document.querySelector('.hamburguesa');
const ipad = window.matchMedia("screen and (max-width:768px)");

console.log(ipad);

ipad.addListener(validation);

function validation(event){
  console.log(event);
  if( ipad.matches ){
    burger.addEventListener('click', hideShow);
    console.log("es True el matches. agreguo el evento");
  } else{
    burger.removeEventListener('click', hideShow);
  }
};
validation(ipad);

function hideShow(){
  if( menu.classList.contains('is-active') ){
    menu.classList.remove('is-active');
  } else{
    menu.classList.add('is-active');
  }
  console.log("Ejecutando el hideShow");
};


/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/

 var scroll = new SmoothScroll('a[href="#encabezado"]', {
 	speed: 600
 });

$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn(500); // cambie el fadeIn() por ese .hide()
        } else {
            $(".ir-arriba").fadeOut(); // cambie el fadeOut() por ese .show()
        }
    });

});

/*---------------------------------
    WOW JS Y ANIMATE CSS
 ----------------------------------*/
new WOW().init();
