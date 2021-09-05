var startText = "Aomori  Productions";
var index = 0;
var state = 0;
var its = 0;

function update() {
    if (state == 0) {
        document.getElementById("aologo").innerText += startText[index++];
        if (index == startText.length) {
            state = 1;
            its = 0;
            index = 0;
        }
        setTimeout(update, 10 + Math.floor((Math.random() * 250) + 1));
    }
    else if (state == 1) {
        if (++its == 20) {
            state = 2;
        }
        setTimeout(update, 100);
    }
    else if (state == 2) {
        var text = document.getElementById("aologo");
        text.innerText = text.innerText.substring(0, text.innerText.length - 1);
        if (text.innerText.length == 0)
            state = 0;

        setTimeout(update, 100);
    } 
}
setTimeout(update, 1000);