
function chanecol()
{
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    var element = document.getElementById('b1');
   
    element.innerHTML = color;
}