$(document).ready(function() {
  /* this is to toggle a picture by clicking paragraph text*/
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});