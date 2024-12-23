//about.js

//alert('test!');



var pageCount = 0; //현재 페이지 번호
var total; //총 페이지 갯수 (문서가 시작되면 총 페이지의 갯수 구하기)

var stat = 0; //스크롤 상태변경 (0-실행전/허용, 1-실행중/잠금)

$(document).ready(function () {

    //첫 페이지 이후 헤더디자인 변경
    headerChg();

    ///////////////// intro 페이지 - 밑줄효과 /////////////////
    $('.target span').delay(200).animate({
        width: '105%'
    }, 600);

    ///////////////// 페이지 스크롤 /////////////////
    //초기설정 - 첫 페이지 이후 .side-pager등장
    $('.side-pager').hide();

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

            //다음페이지 이동
            pageCount++;
            console.log('페이지 번호: ' + pageCount);

            if (pageCount === total) pageCount = total - 1;

        } else {

            //이전페이지 이동
            pageCount--;
            console.log('페이지 번호: ' + pageCount);

            if (pageCount === -1) pageCount = 0;

        }

        var pageTop = $('.page').eq(pageCount).offset().top;
        console.log('현재 페이지 offset값: ' + pageTop);

        //이동 실행
        $('html,body').animate({
            scrollTop: pageTop + 'px'
        }, 800, function () {
            stat = 0; //스크롤 허용상태로 변경
        });



        //첫 페이지 이후 .side-pager 등장
        if (pageCount > 0 && pageCount < total - 1) {
            $('.side-pager').delay(300).fadeIn(300);
        } else {
            $('.side-pager').hide();
        }


        //사이드 페이저 디자인 변경함수 호출!!
        pageChg();

        //첫 페이지 이후 헤더디자인 변경
        headerChg();

        //3D-planner 페이지 - 이미지 효과
        imgPos();

        //플래닝서비스 basic&pro 밑줄효과
        line();



    }); //mousewheel 이벤트



    ///////////////// 페이지 스크롤 /////////////////
    $('.con1 .caption li .rbtn, .side-pager a').click(function (e) {

        e.preventDefault();

        //클릭된 버튼과 페이지를 일치
        var idx = $(this).parent().index();
        console.log(idx);

        pageCount = idx + 1;
        console.log('변경된 page번호: ' + pageCount);

        var pid = $(this).attr('href');
        console.log('클릭된 a의 href값: ' + pid);

        var pageTop = $(pid).offset().top;

        //페이지 이동
        $('html, body').animate({
            scrollTop: pageTop + 'px'
        }, 800);


        //첫 페이지 이후 .side-pager 등장
        if (pageCount > 0 && pageCount < total - 1) {
            $('.side-pager').delay(300).fadeIn(300);
        } else {
            $('.side-pager').hide();
        }


        //사이드 페이저 디자인 변경함수 호출
        pageChg();

        //첫 페이지 이후 헤더디자인 변경
        headerChg();

        //3D-planner 페이지 - 이미지 효과
        imgPos();

        //플래닝서비스 basic&pro 밑줄효과
        line();

    });




    ///////////////// 플래닝서비스(제공서비스/서비스사례) 탭메뉴 구현 /////////////////
    //초기설정!
    $('.tab-service').show();

    $('.tab-menu a').click(function (e) {

        e.preventDefault();

        var Href = $(this).attr('href');
        console.log(Href);

        //탭메뉴 .on 활성화
        $(this).parent().addClass('on').siblings().removeClass('on');

        //해당 탭메뉴의 내용보여주기
        $(Href).siblings().hide().end().show();

    });


    ///////////////// 플래닝서비스 basic - 서비스사례 /////////////////
    //초기설정
    $('.gall-tab .on').siblings().find('span').hide();

    $('.gall-tab a').on('click', function (e) {

        e.preventDefault();

        //탭메뉴 .on 활성화
        $(this).find('span').show();
        $(this).parent().addClass('on').siblings().removeClass('on').find('span').hide();

        //해당 탭메뉴의 내용 보여주기
        var i = $(this).parent().index();
        //console.log('클릭한 탭메뉴의 인덱스번호: ' + i);

        $('.gall-slider').animate({
            marginLeft: -(i * 100) + '%'
        }, 800);

    })


    ///////////////// 플래닝서비스 pro - 서비스사례 /////////////////
    //전체 이미지를 담는 부모의 marginLeft값
    var boxSlide = 0;

    //다음버튼 클릭했을 때
    $('.tab-gallery .next a').on('click', function(evt){

        evt.preventDefault();

        boxSlide++;
        //console.log(boxSlide);

        if (boxSlide >= 4) {
            $(this).off('click', function(evt){
                evt.preventDefault();
            });
            boxSlide = 3;
        }

        $('.gall-slider').animate({
            marginLeft: -(boxSlide * 100) + '%'
        }, 800);

    });

    //이전버튼을 클릭했을 때
    $('.tab-gallery .prev a').on('click', function(evt){

        evt.preventDefault();

        boxSlide--;
        //console.log(boxSlide);

        if (boxSlide <= 0) {
            $(this).off('click', function(evt){
                evt.preventDefault();
            });
            boxSlide = 0;
        }

        $('.gall-slider').animate({
            marginLeft: -(boxSlide * 100) + '%'
        }, 800);

    });


});



//해당 페이지에 맞는 사이드 페이저 표시!
function pageChg() {

    $('.side-pager li').eq(pageCount - 1).addClass('on').siblings().removeClass('on');

}

//첫 페이지 이후 헤더 디자인 변경
function headerChg() {

    if (pageCount > 0) {
        $('header').addClass('scrollDown');
    } else {
        $('header').removeClass('scrollDown');
    }

}


//3D-planner 이미지 효과
function imgPos() {

    var imgBox = $('.con2 .img-box').delay(600);

    if (pageCount === 1) {
        imgBox.animate({
            opacity: 1,
            top: '50%'
        }, 800);
    } else {
        imgBox.animate({
            opacity: 0,
            top: '40%'
        }, 800);
    }

}


//플래닝서비스 basic&pro 밑줄효과
function line() {

    if (pageCount === 2) {
        $('.con3 .service-target .line>span').delay(800).animate({
            width: '103%'
        }, 800);
    } else {
        $('.con3 .service-target .line>span').delay(800).animate({
            width: '0'
        }, 800);
    }

    if (pageCount === 3) {
        $('.con4 .service-target .line>span').delay(800).animate({
            width: '103%'
        }, 800);
    } else {
        $('.con4 .service-target .line>span').delay(800).animate({
            width: '0'
        }, 800);
    }
}