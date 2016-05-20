var $ = require('jQuery');
var carousel = require('./project_carousel.js');

$(document).ready(function(){
  // Contact Links and Actions
  $(".github").click(function(){
    window.open('https://github.com/anup-segu', '_blank');
  });

  $(".mail").click(function(){
    window.location = 'mailto:anup.segu@gmail.com';
  });

  $(".linked-in").click(function(){
    window.open('https://www.linkedin.com/in/anupsegu', '_blank');
  });

  // Navbar Animation

  $("#about-nav").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#about").offset().top - 50
    }, 250);
  });

  $("#skills-nav").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#skills").offset().top - 50
    }, 250);
  });

  $("#projects-nav").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#projects").offset().top - 50
    }, 250);
  });

  $("#contact-nav").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#contact").offset().top - 50
    }, 250);
  });

  // Carousel Animation
  carousel();

});
