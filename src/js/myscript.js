//Работа с масивами
var arr = new Array();
function compareNumber(a,b) {
    return a-b;
}
function myArray() {
    for (var i = 0; i <= 20; i++) {
        arr[i] = Math.floor(Math.random()*100);
    }
    arr.sort(compareNumber);
    document.getElementById('_myArray').innerText = arr.join(' | ');
}
/*<!--       var num1 = prompt('Введіть число від 0 до 3: ','0');
       switch (parseInt(num1)) {
           case 0: myfunc(num1); break;
           case 1: myfunc(num1); break;
           case 2: myfunc(num1); break;
           case 3: myfunc(num1); break;
           default: document.write('Ви вибрали якесь інше число...');
       }
       -->*/
var num1=0;
function myfunc(num1) {
    document.write('Ви вибрали число '+num1);
}

var mouse1 = 0;
function onClickBut() {
    mouse1++;
    document.getElementById('countButton').innerHTML = mouse1;
}

    //************************** ТАЙМЕР ********************************************************************************
    //запуск таймера по будь-якій дії якогось елемента, яка запускає функцію timer1()
    // (для змінної idTimer1 присвоюється функція setInterval зі значеннями функції і періода,
    // (функцію, яку треба виконати і через який період часу буде вона знову виконуватись (в мілісек)
    var t = 0;
    var idTimer1 = 0;
    var timer1Running = false;  // змінна для перевірки, чи таймер вже працює, для того щоб не запускався таймер в таймері
    function runTimer1() {
        if (!timer1Running) {
            idTimer1 = setInterval("timer1()", 1000);
        }
        timer1Running = true;
    }
    //функція зупинки таймера timer1()
    function stopTimer1() {
        clearInterval(idTimer1);
        timer1Running=false
    }
    function clearTimer1() {
        t=0;
        document.getElementById('divTimer1').innerText = t + ' сек';
    }
    function timer1() {
        t++;
        document.getElementById('divTimer1').innerText = t + ' сек';
        }
    //******************************************************************************************************************



    var t2=0;
    function timer2() {
            t2++;
            document.getElementById('pTimer2').innerText = t2;
            setTimeout("timer2()", 1000);
        }

    function randomMy() {
        document.getElementById('randomP').innerText = Math.floor(Math.random()*100);
        }

//****************Работа с датами, числами*************************

function myDate() {
    var mDate = new Date();
    document.getElementById('_date').innerText = mDate.getFullYear();
}
//*****************************************************************

//****************Работа с строками*************************************

function myStr() {
    var str = 'просто какая то строчка';
    document.getElementById('_str').insertAdjacentText("beforebegin", str);
    document.getElementById('_str').innerText = '\n Длина строки: ' + str.length;
}
//**********************************************************************

//*********************JQuery****************************************
//function myJquery() {


$(function() {

    $('#_one').on('click', oneButton);
    $('#_two').on('click', twoButton);

    
    function oneButton() {
        $('#_textPre').removeClass();
        $('#_textPre').addClass("textPreRed");
    }
    function twoButton() {
        $('#_textPre').removeClass();
        $('#_textPre').addClass('textPreBlue');
    }
})

$(function () {
$('.buttonTimer1').css({
    'color': 'red',
    'background': 'white'
  })
})

$(function () {
    $('#inputName').focusout(function () {
        $('#pasteName').text($('#inputName').val());
    })
})

$(function () {
    var classOnLoadForPre = $('#_textPre').attr('class');
       $('#_del').on('click', function () {
            $('#_textPre').removeClass();
            $('#_textPre').addClass(classOnLoadForPre);
    })
    })

$(function () {
    var imgCount=2;
    $('#_img').click(function () {
        $(this).fadeOut(800).attr('src', 'images/IMG_'+(imgCount)+'.JPG').fadeIn(800);
        if (imgCount==5) {
            imgCount=0;
        }
            imgCount++;
    });
});


$(function () {
    $('#_menuActive').click(function () {
        $('#_menu1').toggleClass('menu_active');
    })
})