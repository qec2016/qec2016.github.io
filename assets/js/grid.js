(function() {
  var gridItems = document.querySelectorAll('.community-grid');
  var container = document.querySelector('.container');
  var activeText;
  var activeGrid;

  function toggle() {
    var textList = document.querySelectorAll('.' + this.classList[1] + '-text');
    if (window.innerWidth < 992) {
      var text = textList[0];
    }
    else {
      var text = textList[1];
    }
    if (!text.classList.contains('community-text--active')) {
      text.classList.add('community-text--active');
      this.classList.add('community-grid--active');
      if (activeText) {
        activeText.classList.remove('community-text--active');
        activeGrid.classList.remove('community-grid--active');
      }
      activeText = text;
      activeGrid = this;
      console.log('open');
    }
    else {
      text.classList.remove('community-text--active');
      this.classList.remove('community-grid--active');
      activeText = '';
      activeGrid = '';
      console.log('close');
    }
  }

  (function addToggleListener() {
    for (var i = 0; i < gridItems.length; i++) {
      gridItems[i].addEventListener('click', toggle, false);
    }
  })();
})();
