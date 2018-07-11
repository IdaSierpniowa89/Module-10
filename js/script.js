'use strict';

(function() {

	var galleryTemplate = document.getElementById('gallery-template').innerHTML;
	var galleryList = '';
	for(var i = 0; i < galleryData.length; i++){
			galleryList += Mustache.render(galleryTemplate, galleryData[i]);
		}

var carouselMain = document.getElementById('carousel-main');
carouselMain.innerHTML = galleryList;

var carousel = document.querySelector('.carousel');
var flkty = new Flickity( carousel, {
  hash: true, wrapAround: true
});

var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var buttonGroup = document.querySelector('.button-group');

buttonGroup.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, '.reset-btn' ) ) {
    return;
  }
  flkty.select(0);
});