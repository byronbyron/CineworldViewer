$(document).ready(function() {
  // Set up the dropdowns
  $(".dropdown-button").click(function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu");
      $button.html($(this).html());
      $(".dropdown-menu").attr("data-dropdown-value", $(this).attr("data-value"));
    });
  });

  // Populate the cinema dropdown
  var $cinemas;
  $.ajax({
      url: "http://www2.cineworld.co.uk/api/quickbook/cinemas?key=zgRHNzG7",
      data: $cinemas,
      type: "GET",
      dataType: 'jsonp'
  }).then(function($cinemas) {
    $.each($cinemas.cinemas, function( index, value ) {
      $(".cinema-dropdown-menu").append('<li data-value="' + value.id + '">' + value.name + "</li>");
    });
  });
});