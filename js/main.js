filterSelection("snacks")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filter");
    if (c == "snacks") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Добавьте активный класс к текущей кнопке (выделите его)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


var plus = document.querySelectorAll('#buttonCountPlus');
var minus = document.querySelectorAll('#buttonCountMinus');
var number = document.querySelectorAll('#buttonCountNumber');
var i = 0;

plus[i].onclick = up;
function up() {
    var count = Number(number[i].innerHTML);
    number[i].innerHTML = count += 1;
}
minus[i].onclick = down;
function down() {
    var count = Number(number[i].innerHTML);
    number[i].innerHTML = count -= 1;
}

$(document).ready(function () {
    var modal = $('.detail'),
        modalBtn = $('[data-toggle="detail"]'),
        closeBtn = $('.detail__close');

    modalBtn.on('click', function () {
        modal.toggleClass('detail--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('detail--visible');
    });
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            modal.removeClass('detail--visible');
        }
    });
    $(document).click(function (event) {
        if ($(event.target).is('.detail')) {
            modal.toggleClass('detail--visible');
        }
    });
})