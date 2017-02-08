$(document).scroll(function(){
  var navBar = $(".navbar");
  if(navBar.hasClass("affix")){
    $('#navbar-logo').css("margin-top","-10px");
    if($(window).width() <= 768) {
      $('#mlh-trust-badge').css("margin-top", "-30px");
    } else {
      $('#mlh-trust-badge').css("margin-top", "0px");
    }
    $(".navbar-default .navbar-collapse, .navbar-default .navbar-form").css("margin-top","0px");
  }
});
$(document).ready(function(){
  var scroll = $(window).scrollTop();
  var winH = $(window).height() > 550? $(window).height()+40: 590; 
  $('#welcome').css("height",winH);
  if(scroll>197){
    $('#navbar-logo').css("margin-top","-10px");
    $(".navbar-default .navbar-collapse, .navbar-default .navbar-form").css("margin-top","0px");
    if($(window).width() <= 768) {
      $('#mlh-trust-badge').css("margin-top", "-30px");
    }
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
        url: "https://formspree.io/contact@cuhacking.com",
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

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$('#application-deadline').countdown('2017/02/03 ')
.on('update.countdown', function(event) {
  var format = '<span class="time">%H:%M:%S</span>';
  if(event.offset.totalDays > 0) {
    format = '<span class="time">%-d </span>day%!d ' + format;
  }
  if(event.offset.weeks > 0) {
    format = '<span class="time">%-w</span> week%!w ' + format;
  }
  $(this).html(event.strftime(format));
})
.on('finish.countdown', function(event) {
  $(this).html("Applications are now closed.");
  $("#apply-now").addClass("hide");
  $("#deadline").hide();
  $("#hack-date").show();
});
