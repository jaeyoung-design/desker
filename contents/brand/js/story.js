//I AM DESKER >> story (브랜드 스토리)
//story.js



var pageCount = 0; //현재 페이지 번호
var total; //총 페이지 갯수 (문서가 시작되면 총 페이지의 갯수 구하기)

var stat = 0; //스크롤 상태변경 (0-실행전/허용, 1-실행중/잠금)

$(document).ready(function () {

    ////////////////////// intro 페이지 효과 //////////////////////
    intro();


    ////////////////////// 페이지 스크롤 //////////////////////
    total = $('.page').length;
    console.log('총 페이지 갯수: ' + total);

    $(document).on('mousewheel DDOMouseScroll', function () {

        //1. 휠 이벤트 제어 - 이벤트 핸들러가 실행되는 동안 스크롤 잠금!
        if (stat === 1) return false;
        stat = 1;

        //2. 발생한 이벤트 (객체)정보 확인
        var evt = window.event;

        //3. wheelDelta값 구하기 - 브라우저별로 구분해서 값 반환
        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        console.log('마우스휠 델타값: ' + delta);

        //파이어폭스 브라우저일 경우의 값 반환
        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.detail;
        }

        //4. 마우스휠 이벤트로 페이지 이동
        if (delta < 0) {

            //다음페이지 이동(휠 아래로 드레그)
            pageCount++;
            if (pageCount === total) pageCount = total - 1;
            

        } else {

            //이전페이지 이동(휠 위로 드레그)
            pageCount--;

            if (pageCount === -1) pageCount = 0;

        }

        var pageTop = $('.page').eq(pageCount).offset().top;

        //이동!!
        $('html, body').animate({
            scrollTop: pageTop
        }, 800, function () {
            stat = 0; //스크롤 허용상태로 변경
        });


        //휠 이벤트가 실행되면(첫 페이지 이후 헤더 디자인 변경)
        headerChg();
        
        //pageCount = 0;일때 intro 페이지 효과실행
        if(pageCount === 0){
            intro();
        } else {
            $('.intro').css('padding-top', '25%').find('p').hide();
        }

        ///////////////// .start & .goal 페이지 효과구현 /////////////////
        var line1 = $('.start .txt-box h3 span')
        var line2 = $('.goal .txt-box h3 span')
        var line3 = $('.fin .txt-box p.slogan span')

        //.start 페이지
        if (pageCount === 1) {
            line1.delay(1000).animate({
                width: '105%'
            }, 800);
            $('.start .img-box').delay(800).fadeIn(500);
        } else {
            line1.css('width', 0);
            $('.start .img-box').fadeOut();
        }

        //.goal 페이지
        if (pageCount === 2) {
            line2.delay(1000).animate({
                width: '105%'
            }, 800);
            $('.goal .img-box').delay(800).fadeIn(500);
        } else {
            line2.css('width', 0);
            $('.goal .img-box').fadeOut();
        }

        //.fin 페이지
        if (pageCount === 3){
            line3.delay(800).animate({
                width: '103%'
            }, 800);
        } else {
            line3.css('width', 0);
        }


    }); //mousewheel 이벤트

});


//첫 페이지 이후 헤더 디자인 변경
function headerChg() {

    if (pageCount > 0) {
        $('header').addClass('scrollDown');
    } else {
        $('header').removeClass('scrollDown');
    }

}

//intro 페이지 효과
function intro (){

    $('.intro').delay(700).animate({
        paddingTop: '18%'
    }, 800, function () {
        $(this).find('p').fadeIn(500);
    });

}