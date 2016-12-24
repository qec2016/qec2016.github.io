function gridSlider(parent, child) {
  var gridItems = document.querySelectorAll('.' + parent);
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
    if (!text.classList.contains(child + '--active')) {
      text.classList.add(child + '--active');
      this.classList.add(parent + '--active');
      text.style.position = 'static';
      if (activeText) {
        activeText.classList.remove(child + '--active');
        activeGrid.classList.remove(parent + '--active');
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
      text.classList.remove(child + '--active');
      this.classList.remove(parent + '--active');
      // wait until transition is complete to change positioning
      setTimeout(function() {
        text.style.position = 'fixed';
      }, 300);
      activeText = null;
      activeGrid = null;
    }
  }

  (function() {
    for (var i = 0; i < gridItems.length; i++) {
      gridItems[i].addEventListener('click', toggle, false);
    }
  })();
}

if (location.pathname == '/community/') {
  gridSlider('community-grid', 'community-text');
}
else if (location.pathname == '/sponsorship/') {
  gridSlider('partner', 'partner-text');
}
