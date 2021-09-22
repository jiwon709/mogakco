window.onload = function() {
    var addButton = document.getElementById("add");
    var display = document.getElementById("display");

    let box = ['모','각','코','8','일','차'];
    let num = 0;

    addButton.onclick = function() {
        display.innerHTML += box[num];
        num++;

        if(num == box.length)
            addButton.value = "초기화";
        else
            addButton.value = "더하기";

        if(num > box.length) {
            display.innerHTML = "";
            num = 0;
        }
    }
    
}