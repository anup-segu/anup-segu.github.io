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
});
