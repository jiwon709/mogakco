var sec = 3;

function text_check() {
    var text = document.getElementById('text-input').value;
    var text_change = document.getElementById('change-info');
    var text_style = document.getElementById('text-input');
    var sub_button = document.getElementById('text-input-button');
    var back_img = document.getElementById('back_img');

    document.body.style.backgroundColor = 'white';
    back_img.style.filter = "brightness(100%)";
    document.getElementById("text-info").style.border = "1px solid skyblue";

    
    if(text == '시작') {
        text_change.innerHTML = '저랑 무엇을 하고 싶나요?</br>';
        text_change.innerHTML += '</br>짱구야 놀자';
        text_change.innerHTML += '</br>불꺼줘';
        text_change.innerHTML += '</br>가위바위보';
    }

    else if(text == '짱구야 놀자') {
        text_change.innerText = '액션가면 놀이가 하고 싶어요';
        back_img.src = '../action_img.jpg';
    }

    else if(text == '불꺼줘') {
        text_change.innerText = '불을 끄면 초코비 주나요?';
        back_img.src = '../light_off_img.jpeg';
        back_img.style.filter = "brightness(40%)";
        document.body.style.backgroundColor = 'gray';
        text_style.style.background = 'white';
        document.getElementById("text-info").style.border = "1px solid black";
    }

    else if(text == '가위바위보') {
        text_change.innerText = '가위 바위 보 중 무엇을 낼껀가요?';
        back_img.src = '../game_start_img.jpg';
        sub_button.value = '게임 시작';
        sub_button.onclick = function(){ 
            sec = 3;
            sec_start();
        }
    }

    else {
        text_change.innerText = '잘 모르겠어요 다시 한번 말씀해주세요';
        back_img.src = '../what_img.jpg';
        document.body.style.backgroundColor = 'white';
        back_img.style.filter = "brightness(100%)";
    }
}

function sec_start() {
    setTimeout(tick, 1000);
}

function tick() {
    var text = document.getElementById('text-input').value;
    var text_change = document.getElementById('change-info');
    var sub_button = document.getElementById('text-input-button');

    let game = ['가위','바위','보'];
    text_change.innerText = sec;

    if (sec == 0) {
        let num = Math.floor(Math.random() * 3);
        var jjanggu_text = game[num];
        text_change.innerText = jjanggu_text;

        if (jjanggu_text == text) {
           img_change(0);
        }
        else if ((jjanggu_text == '가위' && text == '보') ||
                (jjanggu_text == '보' && text == '바위') ||
                (jjanggu_text == '바위' && text == '가위')){
            img_change(1);
        }
        else {
            img_change(2);
        }

        sub_button.value = '시키기';
        sub_button.onclick = function(){
            text_check();
        }
    }

    else {
        sec--;
        sec_start();
    }
}

function img_change(num) {
    var back_img = document.getElementById('back_img');
    var text_change = document.getElementById('change-info');

    let img_name = [
        '</br><p>앗 비겼어요!</p>',
        '</br><p>제가 이겼네요!</p>',
        '</br><p>제가 졌네요!</p>'
    ];

    let img_list = [
        '../umm_img.jpg',
        '../win_img.jpg',
        '../lose_img.jpeg'
    ];

    text_change.innerHTML += img_name[num];
    back_img.src = img_list[num];
}