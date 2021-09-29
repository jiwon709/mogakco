var sec = 3;

function text_check() {
    var text = document.getElementById('text-input').value;
    var text_change = document.getElementById('change-info');
    var text_style = document.getElementById('text-input');
    var sub_button = document.getElementById('text-input-button');

    
    if(text == '시작') {
        text_change.innerText = '어서오세요';
        console.log(text_change.innerText);
    }

    else if(text == '짱구야 놀자') {
        text_change.innerText = '액션가면 놀이가 하고 싶어요';
        console.log(text_change.innerText);
    }

    else if(text == '불꺼줘') {
        text_change.innerText = '불을 끄면 초코비 주나요?';
        console.log(text_change.innerText);
        document.body.style.backgroundColor = 'gray';
        text_style.style.background = 'white';
    }

    else if(text == '가위바위보') {
        text_change.innerText = '가위 바위 보 중 무엇을 낼껀가요?';
        sub_button.value = '게임 시작';
        sub_button.onclick = function(){ 
            sec_start();
        }
    }

    else {
        text_change.innerText = '잘 모르겠어요 다시 한번 말씀해주세요';
        document.body.style.backgroundColor = 'white';
    }
}

function sec_start() {
    setTimeout(tick, 1000);
}

function tick() {
    var text = document.getElementById('text-input').value;
    var text_change = document.getElementById('change-info');
    var sub_button = document.getElementById('text-input-button');

    text_change.innerText = sec;

    let game = ['가위','바위','보'];
   
    if (sec == 0) {
        let num = Math.floor(Math.random() * 4);
        text_change.innerText = game[num];
        console.log(num);
        console.log("사용자 입력 값 : " + text);
        console.log("짱구가 낸 값 : " + game[num]);

        if (text_change.innerText == text) {
            text_change.innerHTML += '</br><p>앗 비겼어요!</p>';
        }

        else if (text_change.innerText == '가위' && text == '보'){
            text_change.innerHTML += '</br><p>제가 이겼네요!</p>';
        }

        else if (text_change.innerText == '보' && text == '바위'){
            text_change.innerHTML += '</br><p>제가 이겼네요!</p>';
        }

        else if (text_change.innerText == '바위' && text == '가위'){
            text_change.innerHTML += '</br><p>제가 이겼네요!</p>';
        }

        else {
            text_change.innerHTML += '</br><p>제가 졌네요!</p>';
        }
        sub_button.value = '시키기';
    }

    else {
        sec--;
        sec_start();
    }
}