// BUMP COFFEESCRIPT

$(document).ready(function() {
  $("[data-toggle=popover]").popover();
  
  $("[data-toggle=popover]").on('click', function (e) {
    $("[data-toggle=popover]").not(this).popover('hide');
  });
});