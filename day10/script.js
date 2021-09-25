$(document).ready(function() {
    no_display_back();
});

var sec = 0;

function tick() {
    sec++;
    
    console.log('sec:'+sec);    //몇 초인지 확인용

    if (sec == 2) {
        change();
        display_back();
        sec = 0;
    }

    else {
        sec_start();
        no_display_back();
    }
}

function sec_start() {
    setTimeout(tick, 1000);
}

function change() {
    var number_change = document.getElementById("number");
    number_change.value = '010-xxxx-xxxx';
    $("#number").removeAttr('onclick');
}

function reset() {
    var number_change = document.getElementById("number");
    number_change.value = '전화걸기';
    no_display_back();
    $("#number").attr('onclick', 'sec_start()');
}

function display_back() {
    $("#back").show();
}

function no_display_back() {
    $("#back").hide();
}