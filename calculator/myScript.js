function addme() {
    var btnText = event.target.innerText;
    var textBar = document.querySelector('.text-bar');
    textBar.innerText += btnText;
}

function find_ans() {
    var textBar = document.querySelector('.text-bar');
    var expression = textBar.innerText;
    var result = eval(expression);
    textBar.innerText = result;
}

function clearTextBar() {
    var textBar = document.querySelector('.text-bar');
    textBar.innerText = "";
}
