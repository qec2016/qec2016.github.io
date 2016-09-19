var gridItems = document.querySelectorAll('.community-grid');

function toggle() {
  var textList = document.querySelectorAll('.' + this.classList[1] + '-text');
  if (window.innerWidth < 992) {
    var text = textList[0]
  }
  else {
    var text = textList[1];
  }
  text.classList.toggle('community-text--active');
  this.classList.toggle('community-grid--active');
}

function addEventListener() {
  for (var i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('click', toggle, false)
  }
}

addEventListener();
