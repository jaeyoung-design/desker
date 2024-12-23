//index.js


//alert('test!');

$(document).ready(function () {

    ////////////// 영역1. 베스트 제품 //////////////

    //ul의 marginLeft값
    var imgMove = 0;

    //다음버튼 클릭했을 때
    $('.content .next a').on('click', function (e) {

        e.preventDefault();

        imgMove++;
        console.log(imgMove);

        if (imgMove > 1) {
            imgMove = 1;
            return false;
        }

        $('.prod-wrap ul').animate({
            marginLeft: -(imgMove * 100) + '%'
        }, 800);

    })

    //이전버튼 클릭했을 때
    $('.content .prev a').on('click', function (e) {

        e.preventDefault();

        imgMove--;
        console.log(imgMove);

        if (imgMove < 0) {
            imgMove = 0;
            return false;
        }

        $('.prod-wrap ul').animate({
            marginLeft: -(imgMove * 100) + '%'
        }, 800);

    })



    ////////////// 영역2. 비즈니스 갤러리 //////////////
    //초기설정 
    $('.gall-img').eq(1).find('.caption').css('display', 'block');

    //이전img 등장
    $('.gall-img').first().click(function(){
        slideImg(0);
        capChg();
    });
    //다음img 등장
    $('.gall-img').last().click(function(){
        slideImg(1);
        capChg();
    });



    ////////////// 영역3. 플래닝 서비스 //////////////
    $('.service .rbtn').hover(function () {
        //mouseenter
        $(this).parent().find('.icon-img').animate({
            top: -20
        }, 300);

    }, function () {
        //mouseleave
        $(this).parent().find('.icon-img').animate({
            top: 0
        }, 300);

    });



    ////////////// 영역4. 데스커 소식 //////////////

    //하나의 li 높잇값
    var newsHeight = $('.news-box li').first().height();
    //console.log(newsHeight);

    //초기설정 - 마지막 li 첫번째 li 위에 미리 대기 시키기
    $('.news-box ul.last-line').prepend($('.last-line li').last()).css({
        top: -newsHeight
    });

    //인터벌 실행
    var autocall1 = setInterval(flowUp, 26);
    var autocall2 = setInterval(flowDown, 26);

    //각 ul 덩어리에 마우스가 올라가면 인터벌 제거 마우스 벗어나면 다시 인터벌 실행
    $('.news-box ul.first-line').stop().hover(function(){
        //mouseenter
        clearInterval(autocall1);
    }, function(){
        //mouseleave
        autocall1 = setInterval(flowUp, 26);
    });

    $('.news-box ul.last-line').stop().hover(function(){
        //mouseenter
        clearInterval(autocall2);
    }, function(){
        //mouseleave
        autocall2 = setInterval(flowDown, 26);
    });



});



////////////// 영역2. 비즈니스 갤러리 //////////////
//광클금지 제어 (0-클릭허용 / 1-클릭잠금)
var stat = 0;

function slideImg (direction){

    if(stat === 1) return false;
    stat = 1;

    if (direction){
        
        //다음으로 이동 - 맨앞의 img를 맨뒤로 이동
        $('.box-wrap > div').first().appendTo('.box-wrap');
        
    } else {

        //이전으로 이동 - 맨뒤의 img를 맨앞으로 이동
        $('.box-wrap > div').last().prependTo('.box-wrap');

    }

    //변경된 .gall-img 순서를 다시 읽어와서
    //순서대로 클래스 부여!
    var viewer = document.querySelector('.box-wrap');
    var box  = viewer.querySelectorAll('.box-wrap .gall-img');
    //console.log(box);
    
    for (var i = 0; i < box.length; i++) {
        //클래스 순서대로 재부여!
        box[i].setAttribute('class', 'gall-img box' + (i + 1));
    }

    //광클금지 잠금해제!
    setTimeout(function(){
        stat = 0;
    }, 200);

}

//해당 이미지의 캡션 등장
function capChg (){

    $('.box2').find('.caption').show().end().siblings().find('.caption').hide();

}


////////////// 영역4. 데스커 소식 //////////////
//이동하는 값을 담을 변수
var moveUp = 0;
var moveDown = 0;

//위로 이동!
function flowUp() {

    moveUp++;

    //li.news 하나의 높잇값
    var newsHeight = $('.news-box li').first().height();

    if (moveUp > newsHeight) {

        $('.news-box ul.first-line').append($('.first-line li').first()).css({
            top: 0
        });

        moveUp = 0;

    } else {
        $('.news-box ul.first-line').css({
            top: -moveUp
        });
    }

}

//아래로 이동!
function flowDown() {

    moveDown++;

    //li.news 하나의 높잇값
    var newsHeight = $('.news-box li').first().height();

    if (moveDown > 0) {

        $('.news-box ul.last-line').prepend($('.last-line li').last()).css({
            top: -newsHeight
        });

        moveDown = -newsHeight;

    } else {
        $('.news-box ul.last-line').css({
            top: moveDown
        });
    }

}










