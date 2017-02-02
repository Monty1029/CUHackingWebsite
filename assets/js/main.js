$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: "https://formspree.io/contact@cuhacking.com",
      method: "POST",
      data: $(this).serializeArray(),
      dataType: "json",
      beforeSend: function() {
        $('#contact-form').append('<div class="alert alert--loading">Sending message...</div>');
      },
      success: function(data) {
        $('#contact-form').find('.alert--loading').hide();
        $('#contact-form').append('<div class="alert alert--success">Message sent!</div>');
      },
      error: function(err) {
        $('#contact-form').find('.alert--loading').hide();
        $('#contact-form').append('<div class="alert alert--error">0ps, there was an error.</div>');
      }
    });
  });
});
