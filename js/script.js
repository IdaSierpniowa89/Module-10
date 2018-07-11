'use strict';

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

//Reset
var buttonGroup = document.querySelector(".button-group"),
    hashsGroup = document.querySelector(".hashs-group"),
    buttons = buttonGroup.querySelectorAll(".button-restart"),
    hashs = hashsGroup.getElementsByTagName("a");

buttons = fizzyUIUtils.makeArray(buttons);
hashs = fizzyUIUtils.makeArray(hashs);

buttonGroup.addEventListener("click", function(event) {

  // Button clicks
  if (!matchesSelector(event.target, ".button-restart")) {
    return;
  }
  var index = buttons.indexOf(event.target);
  flkty.select(index);
});

hashsGroup.addEventListener("click", function(event) {
  if (!matchesSelector(event.target, "a")) {
    return;
  }
  var index = hashs.indexOf(event.target);
  flkty.select(index);
});

//Scroll progress bar
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
