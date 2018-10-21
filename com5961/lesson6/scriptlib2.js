$(document).ready(function(){
  $("button#hide_h2").click(function() {
      $("h2").hide(500);
  });

  $("button#show_h2").click(function() {
      $("h2").show(300);
      $("h2").css("color","blue");
      $("h2").html("You clicked me hard.");
  });


}); // document ready
