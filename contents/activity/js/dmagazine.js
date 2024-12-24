//dmagazine.js


//alert('test!')

////////////////// 전역함수 설정 //////////////////
//활성화된 뉴스 컨텐츠 제외 모두 숨기기
/* var onNews = $('.tab-menu .on').find('a').attr('href');
//console.log('기본 활성화된 뉴스: ' + onNews);

//활성화 된 뉴스 컨텐츠 li 갯수
var onNewsCount = $(onNews).find('li').length;
//console.log('li의 갯수: ' + onNewsCount); */


$(document).ready(function () {

    ////////////////// load more 구현 //////////////////
    //초기설정
    //활성화된 뉴스 컨텐츠 제외 모두 숨기기
    var onNews = $('.tab-menu .on').find('a').attr('href');
    //console.log('기본 활성화된 뉴스: ' + onNews);

    //활성화 된 뉴스 컨텐츠 li 갯수
    var onNewsCount = $(onNews).find('li').length;
    //console.log('li의 갯수: ' + onNewsCount);


    //활성화 되지 않은 컨텐츠들 숨기기
    $(onNews).siblings().hide();
    //활성화된 뉴스 컨텐츠 중에서 보여질 구간 설정
    $(onNews).find('li').slice(6, onNewsCount).hide();


    //.lead-more 함수호출!
    more();


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
            $(onNews).siblings().hide();
            $(onNews).find('li').slice(6, onNewsCount).hide();
        }

        //해당 탭메뉴 내용 등장
        var aHref = $(this).attr('href');

        $(aHref).show().siblings().hide();

        //.lead-more 함수호출!
        more();

    });

});


//.lead-more 버튼효과
function more() {

    var onNews = $('.tab-menu .on').find('a').attr('href');
    //console.log('기본 활성화된 뉴스: ' + onNews);

    //활성화 된 뉴스 컨텐츠 li 갯수
    var onNewsCount = $(onNews).find('li').length;
    //console.log('li의 갯수: ' + onNewsCount);

    $('.load-more').on('click', function () {

        var hNews = $(onNews).find('li:hidden').length;
        console.log('숨겨진 뉴스컨텐츠의 갯수: ' + hNews);

        $(onNews).find('li:hidden').slice(0, 3).slideDown(500);

        //숨겨진 뉴스가 없을때 버튼 없애기
        if (hNews <= 3) {
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

}