window.onload = function() {
    var body = document.body;
    var gridContainer = document.querySelector('.container');
    var logo = document.querySelector('.logo');
    var topleft = document.querySelector('.topleft');
    var topright = document.querySelector('.topright');
    var bottomleft = document.querySelector('.bottomleft');
    var bottomright = document.querySelector('.bottomright');
    var lines = document.querySelector('.lines');
    var top = document.querySelector('.top');
    var bottom = document.querySelector('.bottom');
    var right = document.querySelector('.right');
    var left = document.querySelector('.left');
    var sun = document.querySelector('.sun');
    var moon = document.querySelector('.moon');

      logo.addEventListener('mouseover', function() {
          gridContainer.style.gridTemplateColumns = '1fr 0.8fr 1fr';
          gridContainer.style.gridTemplateRows = '1fr 1.2fr 1fr';
          sun.style.left = '5%';
          lines.style.top = '25%';
          lines.style.right = '9%';
      });
  
      logo.addEventListener('mouseout', function() {
        gridContainer.style.gridTemplateColumns = '2fr 1fr 2fr';
        gridContainer.style.gridTemplateRows = '1.5fr 1fr 1.5fr';
        sun.style.left = '10%'
        lines.style.top = '33%';
        lines.style.right = '10%';
      });
    
      topleft.addEventListener('mouseover', function() {
          gridContainer.style.gridTemplateColumns = '5fr 1fr 2fr';
          gridContainer.style.gridTemplateRows = '2fr 1 fr 1.5fr';
          lines.style.right = '15%';
          sun.style.left = '15%';
      });
  
      topleft.addEventListener('mouseout', function() {
        gridContainer.style.gridTemplateColumns = '2fr 1fr 2fr';
        gridContainer.style.gridTemplateRows = '1.5fr 1fr 1.5fr';
        lines.style.right = '10%';
        sun.style.left = '10%';
      });
    
      topright.addEventListener('mouseover', function() {
          gridContainer.style.gridTemplateColumns = '2fr 1fr 5fr';
          gridContainer.style.gridTemplateRows = '2fr 1fr 1.5fr';
          lines.style.right = '15%';
          sun.style.left = '15%';
      });
  
      topright.addEventListener('mouseout', function() {
        gridContainer.style.gridTemplateColumns = '2fr 1fr 2fr';
        gridContainer.style.gridTemplateRows = '1.5fr 1fr 1.5fr';
        lines.style.right = '10%';
        sun.style.left = '10%';
      });
    
      bottomleft.addEventListener('mouseover', function() {
          gridContainer.style.gridTemplateColumns = '5fr 1fr 2fr';
          gridContainer.style.gridTemplateRows = '1.5fr 1fr 2fr';
          lines.style.right = '15%';
          sun.style.left = '15%';
      });
  
      bottomleft.addEventListener('mouseout', function() {
        gridContainer.style.gridTemplateColumns = '2fr 1fr 2fr';
        gridContainer.style.gridTemplateRows = '1.5fr 1fr 1.5fr';
        lines.style.right = '10%';
        sun.style.left = '10%';
      });
    
      bottomright.addEventListener('mouseover', function() {
          gridContainer.style.gridTemplateColumns = '2fr 1fr 5fr';
          gridContainer.style.gridTemplateRows = '1.5fr 1fr 2fr';
          lines.style.right = '15%';
          sun.style.left = '15%';
      });
  
      bottomright.addEventListener('mouseout', function() {
        gridContainer.style.gridTemplateColumns = '2fr 1fr 2fr';
        gridContainer.style.gridTemplateRows = '1.5fr 1fr 1.5fr';
        lines.style.right = '10%';
        sun.style.left = '10%';
      });

      sun.addEventListener('click', function() {
        document.querySelector("link[href='style.css']").href = "style-dark.css";
      });

      moon.addEventListener('click', function() {
        document.querySelector("link[href='style-dark.css']").href = "style.css";
      });
    };
