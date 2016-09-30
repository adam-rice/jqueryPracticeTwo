var set = $('#set');
var osiris = $('#osiris');
var horus = $('#horus');


$(set).on('click', toggleImage);
$(osiris).on('click', toggleImage);
$(horus).on('click', toggleImage);

function toggleImage() {
  var picId = this.attributes['data-img'].value;
  var pic = document.getElementById(picId);
  if( pic.className === 'hide') {
		hideAll();
		pic.className = '';
	} else {
		hideAll();
	}
}

function hideAll() {
  var hideImages = $('img');
  for ( var i = 0; i < hideImages.length; i++) {
  hideImages[i].className = 'hide';
  }
}
