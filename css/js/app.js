$(document).ready(function() {
    $("#icon-menu-responsive").click(function() {


           $("#position-menu").slideToggle();
    })
 
   $(window).resize(function() {
      if($(document).width()>=480){
       $("#position-menu").css("display","none");

      }
 })
  
});