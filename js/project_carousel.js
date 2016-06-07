var $ = require('jQuery');

// slideshow style interval

module.exports = function() {
  var autoSwap = setInterval( swap,3500);

  // pause slideshow and reinstantiate on mouseout
  $('ul, span').hover(
    function () {
      clearInterval(autoSwap);
  },
    function () {
     autoSwap = setInterval( swap,3500);
  });

  //global variables
  var items = [];
  var startItem = 1;
  var position = 0;
  var itemCount = $('.carousel li.items').length;
  var leftpos = itemCount;
  var resetCount = itemCount;
  var circCount = 1;
  var circTotal = 4;

  //unused: gather text inside items class
  $('li.items').each(function(index) {
      items[index] = $(this).text();
  });

  //swap images function
  function swap(action) {
    var direction = action;

    //moving carousel backwards
    if(direction === 'counter-clockwise') {
      var leftitem = $('.left-pos').attr('id') - 1;
      if(leftitem === 0) {
        leftitem = itemCount;
      }

      circCount = circCount === 1 ? 4 : circCount - 1;

      $('.right-pos').removeClass('right-pos').addClass('back-pos');
      $('.main-pos').removeClass('main-pos').addClass('right-pos');
      $('.left-pos').removeClass('left-pos').addClass('main-pos');
      $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');

      $("#circ-1").removeClass("active");
      $("#circ-2").removeClass("active");
      $("#circ-3").removeClass("active");
      $("#circ-4").removeClass("active");

      $("#circ-"+circCount+"").addClass("active");

      startItem--;
      if(startItem < 1) {
        startItem = itemCount;
      }
    }



    //moving carousel forward
    if(direction === 'clockwise' || direction === '' || direction === null ) {
      var pos = function(positionvalue) {
        if(positionvalue !== 'leftposition') {
          //increment image list id
          position++;

          //if final result is greater than image count, reset position.
          if((startItem+position) > resetCount) {
            position = 1-startItem;
          }
        }

        //setting the left positioned item
        if(positionvalue === 'leftposition') {
          //left positioned image should always be one left than main positioned image.
          position = startItem - 1;

          //reset last image in list to left position if first image is in main position
          if(position < 1) {
            position = itemCount;
          }
        }

        return position;
      };

      circCount = circCount === 4 ? 1 : circCount + 1;

      $("#circ-1").removeClass("active");
      $("#circ-2").removeClass("active");
      $("#circ-3").removeClass("active");
      $("#circ-4").removeClass("active");

      $("#circ-"+circCount+"").addClass("active");

     $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
     $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
     $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
     $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');


      startItem++;
      position=0;
      if(startItem > itemCount) {
        startItem = 1;
      }
    }
  }

  //next button click function
  $('#next').click(function() {
    swap('clockwise');
  });

  //prev button click function
  $('#prev').click(function() {
    swap('counter-clockwise');
  });

  //if any visible items are clicked
  $('.items').click(function() {
    if($(this).attr('class') === 'items left-pos') {
      swap('counter-clockwise');
    } else {
      swap('clockwise');
    }
  });

  $("#log_healthy_live").click(function() {
    window.open('http://www.loghealthy.com', '_blank');
  });

  $("#log_healthy_git").click(function() {
    window.open('https://github.com/anup-segu/LogHealthy', '_blank');
  });

  $("#tune_live").click(function() {
    window.open('https://tune-cruise.herokuapp.com/', '_blank');
  });

  $("#tune_git").click(function() {
    window.open('https://github.com/anup-segu/TuneCruise', '_blank');
  });

  //

  $("#sql_red_git").click(function() {
    window.open('https://github.com/anup-segu/SQLRed', '_blank');
  });

  $("#ecamel_live").click(function() {
    window.open('https://ecamel-demo.herokuapp.com/', '_blank');
  });

  $("#ecamel_git").click(function() {
    window.open('https://github.com/JeffNguyen/eCamel', '_blank');
  });

};
