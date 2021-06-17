
function getSize() {
  size = $( "h1" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size" ).text(  size  );
}

getSize();

$( "#up" ).on( "click", function() {

  if ((size + 2) <= 300) {
    $( "h1" ).css( "font-size", "+=2" );
    $( "#font-size" ).text(  size += 2 );
  }
});

$( "#down" ).on( "click", function() {
  if ((size - 2) >= 4) {
    $( "h1" ).css( "font-size", "-=2" );
    $( "#font-size" ).text(  size -= 2  );
  }
});
////
  function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    if ($card.hasClass('hover')) {
      $card.removeClass('hover');
    } else {
      $card.addClass('hover');
    }
  }

  $(document).ready(function() {

    $("#inputTextBox").keyup(function() {
      $("#paper00").html($(this).val());
    });
	$("#inputTextBox").keyup(function() {
      $("#paper01").html($(this).val());
    });
	  
	$("#inputTextBox").keyup(function() {
      $("#paper02").html($(this).val());
    });
	  
  });