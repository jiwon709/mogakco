var sec = 3;
var add_question = [];
var add_answer = [];

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
        img_change(0);
    }

    else if(text == '불꺼줘') {
        img_change(1);

        back_img.style.filter = "brightness(40%)";
        document.body.style.backgroundColor = 'gray';
        text_style.style.background = 'white';
        document.getElementById("text-info").style.border = "1px solid black";
    }

    else if(text == '가위바위보') {
        img_change(2);
        sub_button.value = '게임 시작';
        sub_button.onclick = function(){ 
            sec = 3;
            sec_start();
        }
    }


    else {
        img_change(6);
        questionToAnswer();
        add_question.push(text);

        sub_button.value = '말 배우기';
        sub_button.onclick = function(){
            text_change.innerHTML = '그럴 땐 뭐라고 말해야 되죠?';
            sub_button.onclick = function(){
                add_answer.push(document.getElementById("text-input").value);
                console.log("짱구질문"+add_question);
                console.log("짱구답"+add_answer);
                sub_button.value = '시키기';
                sub_button.onclick = function(){ text_check(); }
            }
        }
        
    }
    questionToAnswer();
        
    console.log(add_question);
    console.log(add_answer);
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
           img_change(3);
        }
        else if ((jjanggu_text == '가위' && text == '보') ||
                (jjanggu_text == '보' && text == '바위') ||
                (jjanggu_text == '바위' && text == '가위')){
            img_change(4);
        }
        else {
            img_change(5);
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
        '액션가면 놀이가 하고 싶어요',
        '불을 끄면 초코비 주나요?',
        '가위 바위 보 중 무엇을 낼껀가요?',
        '</br><p>앗 비겼어요!</p>',
        '</br><p>제가 이겼네요!</p>',
        '</br><p>제가 졌네요!</p>',
        '잘 모르겠어요 다시 한번 말씀해주세요'
    ];

    let img_list = [
        '../action_img.jpg',
        '../light_off_img.jpeg',
        '../game_start_img.jpg',
        '../umm_img.jpg',
        '../win_img.jpg',
        '../lose_img.jpeg',
        '../what_img.jpg'
    ];

    if(num >= 3 && num <=5) {
        text_change.innerHTML += img_name[num];
    }
    else {
        text_change.innerHTML = img_name[num];
    }

    back_img.src = img_list[num];
}

function questionToAnswer() {
    var text = document.getElementById('text-input').value;
    var text_change = document.getElementById('change-info');
    let add_question_num = 0;
    
    for(i = 0; i < add_question; i++){
        if (text == add_question[i]){
            add_question_num = i;
            text_change.innerText = add_answer[add_question_num];
        }
    }
}
