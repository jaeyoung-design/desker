//dmagazine.js


//alert('test!')
$(document).ready(function () {

    ////////////////// load more 구현 //////////////////
    //초기설정
    //활성화된 뉴스 컨텐츠 제외 모두 숨기기
    var onNews = $('.tab-menu .on').find('a').attr('href');
    //console.log('기본 활성화된 뉴스: ' + onNews);

    var onNewsCount = $(onNews).find('li').length;
    console.log(onNewsCount);

    $(onNews).siblings().hide();
    //활성화된 뉴스 컨텐츠 중에서 보여질 구간 설정
    $(onNews).find('li').slice(6, onNewsCount).hide();

    $('.load-more').on('click', function () {

        var hNews = $(onNews).find('li:hidden').length;
        console.log('숨겨진 뉴스컨텐츠의 갯수: ' + hNews);

        $(onNews).find('li:hidden').slice(0, 3).slideDown(500);

        //숨겨진 뉴스가 없을때 버튼 없애기
        if (hNews === 0) {
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
    $('.tab-menu li a').click(function (evt) {

        evt.preventDefault();

        $(this).parent().addClass('on').siblings().removeClass('on');

        //기본 컨텐츠 수 6 이하일때 load-more 버튼 숨기기
        var onNews = $('.tab-menu .on').find('a').attr('href');
        var onNewsCount = $(onNews).find('li').length;

        if (onNewsCount <= 6) {
            $('.load-more').hide();
        } else {
            $('.load-more').show();
        }

        //해당 탭메뉴 내용 등장
        var aHref = $(this).attr('href');

        $(aHref).show().siblings().hide();

    });

});