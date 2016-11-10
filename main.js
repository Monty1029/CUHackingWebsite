$(document).scroll(function(){
  var navBar = $(".navbar");
  if(navBar.hasClass("affix")){
    $('#navbar-logo').css("margin-top","-10px");
    $(".navbar-default .navbar-collapse, .navbar-default .navbar-form").css("margin-top","0px")
  }
});
$(document).ready(function(){
  var scroll = $(window).scrollTop();
  if(scroll>197){
    $('#navbar-logo').css("margin-top","-10px");
    $(".navbar-default .navbar-collapse, .navbar-default .navbar-form").css("margin-top","0px");
  }

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top-50
          }, 1000);
          return false;
        }
      }
    });
  });

  $('#contact-form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/you@email.com",
        method: "POST",
        data: $(this).serializeArray(),
        dataType: "json",
        beforeSend: function() {
          $('#contact-form').append('<div class="alert alert--loading">Sending message…</div>');
        },
        success: function(data) {
          $('#contact-form').find('.alert--loading').hide();
          $('#contact-form').append('<div class="alert alert--success">Message sent!</div>');
        },
        error: function(err) {
          $('#contact-form').find('.alert--loading').hide();
          $('#contact-form').append('<div class="alert alert--error">Ops, there was an error.</div>');
        }
    });
  });
});
