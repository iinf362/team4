
/*this is for the drop menus on the content pages. */

var allDrops = $('.drop-content').hide();

$('.drop-title').click(function() {

  var wasVisible = $(this).next().is(":visible");

  if (wasVisible != true){
    allDrops.slideUp();
    $(this).next().slideDown();
  }else {
    $(this).next().slideUp();
  }

});