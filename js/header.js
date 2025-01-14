//header.js



$(document).ready(function () {

    /* 메뉴구현 */

    //초기설정
    //.lnb, .bg => display: none;
    $('.lnb, .bg').hide();


    //헤더에 마우스엔터 하면, 클래스 scrollDown 추가
    //단, scrollTop == 0 이면, 클래스 scrollDown 제거
    $('header').on('mouseenter', function () {
        $(this).addClass('scrollDown');
    });
    $('header').on('mouseleave', function () {
        //문서로부터의 높잇값 차이로 클래스 제거조건 만들기!
        var bodyT = $('body').offset().top; //0
        //position:fixed; 상태로 스크롤하면 값 변경
        var hdT = $('header').offset().top;

        if (hdT === bodyT) {
            $(this).removeClass('scrollDown');
        }
    });



    //서브메뉴 슬라이드다운
    $('.navi, .bg').hover(function () {

        //mouseenter
        $(this).parents('header').addClass('scrollDown');
        $('.lnb, .bg').stop().slideDown(600);

    }, function () {

        //mouseleave
        //$(this).parents('header').removeClass('scrollDown');
        $('.lnb, .bg').stop().slideUp(600);

    });


    //검색버튼 호버하면, 검색바 등장
    var searchBar = $('.search input[type="text"]');

    $('.search').hover(function () {
        //mouseenter
        //검색바 등장
        searchBar.stop().animate({
            width: 150
        }, 800).css({
            border: '1px solid #333'
        });

    }, function () {
        //mouseleave
        //검색바 숨기기
        searchBar.stop().animate({
            width: 0
        }, 800, function () {
            $(this).css('border', 'none');
        });
        $('.search input::placeholder').css('display', 'none')

    });



    //해당 .gnb메뉴에 하이라이트 효과

    $('.menu > li').hover(function () {
        //mouseenter
        $(this).find('.gnb').addClass('highlight');
        $(this).siblings().find('.gnb').removeClass('highlight');

    }, function () {
        //mouseleave
        $(this).find('.gnb').removeClass('highlight');
    });


});