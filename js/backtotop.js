$("#back-top").hide();
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });
 
 $("#scrollTop").click(function() {  
        $("html,body").animate({scrollTop:0}, 800);  
        return false;  
    });
