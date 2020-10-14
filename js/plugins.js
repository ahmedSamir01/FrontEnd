// trigger nice scroll
  
let minLarge = window.matchMedia("(min-width: 992px)");

if (minLarge.matches) {
    $(window).on("load", function() {

        setTimeout(function () {
            $("html, body").niceScroll({

                cursorborder: 0,
                cursorborderradius: '25px',
                cursorwidth: '7px',
                cursorcolor: '#dc3545',
                cursorfixedheight: 120,
                zindex:'99999999',
                preventmultitouchscrolling: false,
                cursordragontouch: true


            });
        }, 500);
    }); 
}

//trigger mixer

$(".container").mixItUp();