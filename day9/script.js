function movie_list() {

    var title_table = document.getElementById("title-table");
    
    what_list = ['가장 보통의 연애', '리틀포레스트'];
    what_img = ['https://dispatch.cdnser.be/cms-content/uploads/2019/09/23/7a1fafd7-d957-4bc8-91b1-c5bb7e5bca9b.gif',
    'https://www.nemopan.com/files/attach/images/1116443/168/534/011/a817d76730f5168dae8bc694fa995ae1.jpg'];

    title_table.innerHTML = "";

    for(i = 0; i < what_list.length; i++) {
        title_table.innerHTML += "<tr><td>" + what_list[i] + "</td><td><img src='" + what_img[i] + "'/>" + "</td></tr>";
    }

}

function food_list() {

}

function hobby_list() {

}