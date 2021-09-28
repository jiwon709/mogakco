function text_check() {
    var text = document.getElementById('text-input').value;
    var text_change = document.getElementById('change-info');
    var text_style = document.getElementById('text-input');

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

    else {
        document.body.style.backgroundColor = 'white';
        text_change.style.backgroundColor = 'gray';
    }


}