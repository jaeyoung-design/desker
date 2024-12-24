//dmagazine.js


//alert('test!')
$(document).ready(function(){

    ////////////////// load more 구현 //////////////////
    //초기설정
    $('.news-wrap li').hide();
    $('.news-wrap li').slice(0,6).show();

    $('.load-more').on('click', function(){

        var hNews = $('.news-wrap li:hidden').length;
        console.log('숨겨진 뉴스컨텐츠의 갯수: ' + hNews);

        $('.news-wrap li:hidden').slice(0,3).slideDown(500);

        //숨겨진 뉴스가 없을때 버튼 없애기
        if (hNews === 0){
            $('.load-more').fadeOut();
            return false;
        }

        //숨겨진 뉴스 나오면서 스크롤 애니메이션
        var offTop = $(this).offset().top;
        console.log(offTop);

        $('html, body').animate({
            scrollTop: offTop - 300
        }, 1000);

    });

    ////////////////// 뉴스 카테고리 탭메뉴 //////////////////
    $('.tab-menu li a').click(function(evt){

        evt.preventDefault();

        $(this).parent().addClass('on').siblings().removeClass('on');

    });

});