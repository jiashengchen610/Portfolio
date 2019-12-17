$(document).ready(function () {
    'use strict';

    // **********loader
    setTimeout(function () {
		$('.loader_bg').fadeIn();
    }, 1000);
    setTimeout(function () {
		$('.loader_bg').fadeToggle(500);
    }, 5000);
    setTimeout(function () {
		$('.svgNames').fadeIn(500);
    }, 5500);
    
    //**********scrollmagic 
        // init controller
        var controller = new ScrollMagic.Controller();

        // loop through all elements
        $('.fullPage').each(function() {
        
        // build a tween
        var tween = TweenMax.from($(this), 0.5, {autoAlpha: 0, scale: 0.9, ease:Linear.easeNone});

        // build a scene
        var scene = new ScrollMagic.Scene({
            triggerElement: this
        })
        .setTween(tween) // trigger a TweenMax.to tween
        // .addIndicators()
        .addTo(controller);
        
        });

	//********** menu background color change while scroll

	$(window).on('scroll', function () {
		var menu_area = $('.nav-area');
		if ($(window).scrollTop() > 200) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');
		}
	});


	//********** menu hides after click (mobile menu)

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });


	//*********** scrollspy js

	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 195
	});

    
    //*********** SmoothScroll js
    const scroll = new SmoothScroll('.navbar a[href*="#"]', {
            speed: 500
        });
    
    //*********** Animated headline js

    new TypeIt('#hero', {
        speed: 50,
        startDelay: 5000,
        loop: true
      })
      .type('Is this a Designer?')
      .pause(1000)
      .delete(10)
      .pause(350)
      .type('n Event Planer?')
      .pause(1000)
      .delete(15)
      .pause(300)
      .type(' Content Curator?')
      .pause(1000)
      .delete(16)
      .type(' Web Developer?')
      .pause(1000)
      .go();


      //***********meme turn
      $(".about").mousemove(function(event) {
        var bee = $("#bee1");
        var position = bee.offset();
        var mousey = event.pageX;

            if(position.left > mousey) {
                $("#bee1").css("transform", "scalex(1)");
            } else {
                $("#bee1").css("transform", "scalex(-1)");
            }
        });


        $(".about").on('mousemove', follow);

        function follow(e) {
            $("#Btfly").offset({
                left: e.pageX,
                top: e.pageY
            });
        }
        //***********isotope js

	var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    // ***********bootstarp Modal
    $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
          })
    });

    // ***********Modal photo
    const activeImage = document.querySelectorAll(".active1");
    const productImages = document.querySelectorAll(".image-list img, #WORKS .row img");

    function changeImage(e) {
    for (i = 0; i < activeImage.length; i++) {
        activeImage[i].src = e.target.src;
    }
    }
    productImages.forEach(image => image.addEventListener("click", changeImage));



 



