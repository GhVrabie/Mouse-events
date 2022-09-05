
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    return document.querySelector(".out-1").innerHTML = "Text";
}

document.querySelector(".div-1").onclick = t1;

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(e) {
    if(e.altKey) {
        document.querySelector(".out-2").innerHTML = "True";
    } else {
        document.querySelector(".out-2").innerHTML = "False";
    }
}

document.querySelector(".div-2").onclick = t2;


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
    let div3 = document.querySelector(".div-3");
    div3.onclick = () => {
        w3 = w3 + 4;
        w3++;
        div3.style.width = w3 + "px";
        document.querySelector('.out-3').innerHTML = div3.style.width;
    }
}

t3();


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    return document.querySelector(".out-4").innerHTML = "Text";
}

document.querySelector(".div-4").ondblclick = t4;

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

let div5 = document.querySelector(".div-5");

function t5() {
    if(div5.classList.contains("active")) {
        div5.classList.remove("active");
    } else {
        div5.classList.add("active");
    }
}

div5.ondblclick = t5;

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

let ul6 = document.querySelector(".ul-6");

function t6() {
    if(ul6.classList.contains("hide")) {
        ul6.classList.remove("hide");
    } else {
        ul6.classList.add("hide");
    }
}

document.querySelector(".div-6").ondblclick = t6;


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

let div7 = document.querySelector(".div-7");

function t7() {
    div7.oncontextmenu = () => {
        if(div7.classList.contains("active")) {
            div7.classList.remove("active");
        } else {
            div7.classList.add("active");
        }
    }
}

t7();

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let cbox = document.querySelector(".ch-8");

function t8() {
    document.body.oncontextmenu = () => {
        if(cbox.checked) {
            return false;
        } else {
            return true;
        }
    }
}

cbox.onchange = function() {t8()};


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

let div9 = document.querySelector(".div-9");

function t9() {
    document.getElementById("pic9").src = "img/2.png";
}

div9.oncontextmenu = function() {t9()};


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

let div10 = document.querySelector(".div-10");

function t10() {
    document.getElementById("pic10").src = "img/2.png";
}

div10.onmouseenter = function () {t10()};

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

let div11 = document.querySelector(".div-11");

function t11() {
    div11.onmouseenter = () => {
        document.getElementById("pic11").src = "img/2.png";
    }
    div11.onmouseleave = () => {
        document.getElementById("pic11").src = "img/1.png";
    }
}

t11();

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let div12 = document.querySelector(".div-12")

div12.onmousedown = () => {
    div12.classList.add("active");
}


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let div13 = document.querySelector(".div-13")

div13.onmousedown = () => {
    div13.classList.add("active");
}

div13.onmouseup = () => {
    div13.classList.remove("active");
}


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

let div14 = document.querySelector(".div-14");

function t14() {
    div14.classList.add("active");
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

let div15 = document.querySelector(".div-15");

function t15() {
    let w15 = 1;
    div15.onmousemove = () => {
        w15++;
        div15.innerHTML = w15;
    }
}

t15()


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

let div16 = document.querySelector(".div-16");

function t16() {
    let w16 = 75;
    div16.onmousemove = () => {
        div16.style.width = w16 + "px";
        w16++;
        document.querySelector(".out-16").innerHTML = div16.style.width;
    }
}

t16()


// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    return t16();
}
function t17Off() {
    div16.onmousemove = () => {
        return false;
    }
}
document.querySelector(".b-17_on").onclick = t17On;
document.querySelector(".b-17_off").onclick = t17Off;

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

let div18 = document.querySelector(".div-18");
let w18 = 75;

function t18() {
    div18.onmouseenter = () => {
        w18++;
        div18.innerHTML = w18 + "px";
    }
}
t18();

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

let div19 = document.querySelector(".div-19");

function t19() {
    div19.onmouseout = () => {
        div19.innerHTML = div19.classList;
    }
}
t19();


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let progressBar = document.querySelector("progress");
let p = 10;

function t20() {
    p++;
    progressBar.value = p;
    document.querySelector(".out-20").innerHTML = "<span>Загружено на " + p + " %</span>";
}

progressBar.onmousemove = function() {t20()};