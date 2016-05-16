var $ = require('jQuery');

$(document).ready(function(){
  $(".github").click(function(){
    window.open('https://github.com/anup-segu', '_blank');
  });

  $(".mail").click(function(){
    window.location = 'mailto:anup.segu@gmail.com';
  });

  $(".linked-in").click(function(){
    window.open('https://www.linkedin.com/in/anupsegu', '_blank');
  });

  $(".resume").click(function(){
    window.location = './docs/resume.pdf';
  });

  $("#about-nav").click(function(){
    console.log("hell0");
    $('html, body').animate({
      scrollTop: $("#about").offset().top - 50
    }, 250);
  });

  $("#skills-nav").click(function(){
    console.log("hell0");
    $('html, body').animate({
      scrollTop: $("#skills").offset().top - 50
    }, 250);
  });

  $("#projects-nav").click(function(){
    $('html, body').animate({
      scrollTop: $("#projects").offset().top - 50
    }, 250);
  });

  $("#contact-nav").click(function(){
    console.log("hell0");
    $('html, body').animate({
      scrollTop: $("#contact").offset().top - 50
    }, 250);
  });
});
