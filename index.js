document.body.onclick = () => {
    document.body.classList.toggle("modo-oscuro")  
   }

window.addEventListener('mousemove', function(e) {
[1, .9, .8, .5, .1, .4, .3, .2, .3, .1].forEach(function(i) {
    var j = (1 - i) * 50;
    var elem = document.createElement('div');
    var size = Math.ceil(Math.random() * 25 * i) + 'px';
    elem.style.position = 'fixed';
    console.log(e, e.pageX, e.pageY)
    elem.style.top = e.y + Math.round(Math.random() * j - j / 2) + 'px';
    elem.style.left = e.x + Math.round(Math.random() * j - j / 2) + 'px';
    elem.style.width = size;
    elem.style.height = size;
    elem.style.background = 'hsla(' +
    Math.round(Math.random() * 360) + ', ' +
    '100%, ' +
    '50%, ' +
    i + ')';
    elem.style.borderRadius = size;
    elem.style.pointerEvents = 'none';
    document.body.appendChild(elem);
    window.setTimeout(function() {
    document.body.removeChild(elem);
    }, Math.round(Math.random() * i * 500));
});
}, false);