
/*=======================================
        Preloader
=========================================*/
//Using JQuery
//monitor load event +execute anonymous function
$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


//animate Ana Cuza
// Wrap every letter in a span
var textWrapper = document.querySelector('#home-heading-1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 1})
  .add({
    targets: '#home-heading-1 .text-wrapper',
    opacity:0,
    duration:1000
  })
  .add({
    targets: '#home-heading-1 .text-wrapper',
    opacity:1,
    easing: "easeInExpo",
    duration:5,
  })
  .add({
    targets: '#home-heading-1 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    opacity: 1,
    duration: 750,
    delay: (el, i) => 50 * i,
  });



/*=======================================
        Portfolio
=========================================*/
$(window).on('load', function () {
  //initialise isotope plugin
  $('#isotope-container').isotope({
  });
  //filter items on button click
  $('#isotope-filters').on('click', 'button', function() {
    //get filter value
    var filterValue = $(this).attr('data-filter');

    //filter portfolio items
    $('#isotope-container').isotope({
      filter: filterValue
    });

    //active button
    $('#isotope-filters').find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

/*=======================================
      Drawing Animation About Section - might need to remove it for mobile
=========================================*/
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


var COLOURS = [ '#F0544F', '#FDF0D5', '#C6D8D3', '#D81E5B'];
        var radius = 0;

        Sketch.create({

            container: document.getElementById( 'left-side-about' ),
            fullscreen: false,
            width:1004,
            height:500,
            autoclear: false,
            retina: 'auto',

            setup: function() {
                console.log( 'setup' );
            },

            update: function() {
                radius = 2 + abs( sin( this.millis * 0.003 ) * 50 );
            },

            // Event handlers

            keydown: function() {
                if ( this.keys.C ) this.clear();
            },

            // Mouse & touch events are merged, so handling touch events by default
            // and powering sketches using the touches array is recommended for easy
            // scalability. If you only need to handle the mouse / desktop browsers,
            // use the 0th touch element and you get wider device support for free.
            touchmove: function() {

                for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {
                  //SHUFFLE ALGORITHM MIGHT AFFECT PERFORMANCE
                    shuffle(COLOURS);
                    touch = this.touches[i];
                    console.log( i % COLOURS.length )

                    this.lineCap = 'round';
                    this.lineJoin = 'round';
                    this.fillStyle = this.strokeStyle = COLOURS[ i % COLOURS.length ];
                    this.lineWidth = radius;

                    this.beginPath();
                    this.moveTo( touch.ox, touch.oy );
                    this.lineTo( touch.x, touch.y );
                    this.stroke();
                }
            }
        });

/*=======================================
        Magnifier
=========================================*/


/*=======================================
     Eye Animation
=========================================*/

var ball = document.getElementsByClassName('ball');
document.onmousemove = function() {
  //event.clientX => get the horizontal coordinate of the mouse
  var x = event.clientX * 100 /window.innerWidth + "%";
  var y = event.clientY * 100 /(window.innerHeight/2) + "%";

  ball[0].style.left = x;
  ball[0].style.top = y;  
  ball[0].style.transform = "translate(-"+x+", -"+y+")";
}

/*=======================================
     Smooth Scroll
=========================================*/
$(function () { 
  $("a.smooth-scroll").click(function(event) {

    event.preventDefault();
    var section_id = $(this).attr('href');

    $("html, body").animate({
      scrollTop: $(section_id).offset().top
    }, 1250);

  });
})



/*
//create a click event handler to all the links that have “#” symbol anywhere in the href
$(document).ready(function() {
$('a[href*=#]').each(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&amp;amp;&amp;amp; location.hostname == this.hostname
&amp;amp;&amp;amp; this.hash.replace(/#/,'') ) {
var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
if ($target) {
var targetOffset = $target.offset().top;
$(this).click(function() {
$("#nav li a").removeClass("active");
$(this).addClass('active');
$('html, body').animate({scrollTop: targetOffset}, 1000);
return false;
});
}
}
});
});

//make sure that the link includes a qualified URL or just an identifier
$(document).ready(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;
         //when the user clicks the menu link, it will remove the class active on that current active menu link and add it to that menu link that the user has clicked
         $(this).click(function() {
 $("#nav li a").removeClass("active");
 $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });
});
//speed of the scrolling effect
$('html, body').animate({scrollTop: targetOffset}, 1000);
*/