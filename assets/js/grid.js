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
      text.style.position = 'static';
      if (activeText) {
        activeText.classList.remove('community-text--active');
        activeGrid.classList.remove('community-grid--active');
        // wait until transition is complete to change positioning
        setTimeout(function() {
          activeText.style.position = 'fixed';
        }, 300);
      }
      // maintain context in setTimeout
      _this = this;
      setTimeout(function() {
        // makes sure that position: fixed is assigned to old activeText
        activeText = text;
        activeGrid = _this;
      }, 300);
    }
    else {
      text.classList.remove('community-text--active');
      this.classList.remove('community-grid--active');
      // wait until transition is complete to change positioning
      setTimeout(function() {
        text.style.position = 'fixed';
      }, 300);
      activeText = null;
      activeGrid = null;
    }
  }

  (function addToggleListener() {
    for (var i = 0; i < gridItems.length; i++) {
      gridItems[i].addEventListener('click', toggle, false);
    }
  })();
})();
