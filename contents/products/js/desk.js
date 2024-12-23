//products >> category >> desk
//desk.js


//alert('test!');

$(document).ready(function () {

    ////////////// .prod-des 탭메뉴 구현 //////////////
    //초기설정 (전체 탭메뉴 해당 이미지 숨기기)
    $('.viewer .on').siblings().hide();

    $('.tab-menu a').click(function (e) {

        e.preventDefault();

        var tabMenu = $(this).attr('href');
        //console.log(tabMenu);

        //클릭한 탭메뉴 해당 이미지 등장
        $(tabMenu).show().siblings().hide();

        //탭메뉴에 .on 디자인 적용
        $(this).parent().addClass('on').siblings().removeClass('on');

        //탭메뉴 버튼 클릭하면 첫번째 페이지부터 등장
        slideImg = 0;
        $('.img-wrap').css('margin-left', slideImg);

    });

    ////////////// .prod-des 이미지 슬라이드 //////////////
    var slideImg = 0;
    var imgCount = $('.prod-des.on .img-wrap').length;
    //console.log('.img-wrap의 이미지 갯수: ' + imgCount);

    //다음버튼 클릭
    $('.next a').on('click', function (e) {

        e.preventDefault();

        slideImg++;
        //console.log('변수 slideImg 값: ' + slideImg);


        if (slideImg >= imgCount) {
            slideImg = imgCount - 1;
            return false;
        }

        $('.img-wrap').animate({
            marginLeft: -(slideImg * 100) + "%"
        }, 800);

    });

    //이전버튼 클릭
    $('.prev a').on('click', function (e) {

        e.preventDefault();

        slideImg--;
        //console.log('변수 slideImg 값: ' + slideImg);

        if (slideImg < 0) {
            slideImg = 0;
            return false;
        }

        $('.img-wrap').animate({
            marginLeft: -(slideImg * 100) + '%'
        }, 800);

    });


    ////////////// 제품 카테고리 탭메뉴 구현 //////////////
    //초기 설정
    $('.prod-des.on').show().siblings().hide();

    $('.category li a').click(function(e){

        e.preventDefault();

        var prodCategory = $(this).attr('href');
        //console.log('클릭한 카테고리의 href값: ' + prodCategory);

        //클릭한 카테고리 탭메뉴에 .on 클래스 적용
        $(this).parents('li').addClass('on').siblings().removeClass('on');

        //해당 내용 등장
        $(prodCategory).show().siblings().hide();

        //탭메뉴 버튼 클릭하면 첫번째 페이지부터 등장
        slideImg = 0;
        $('.img-wrap').css('margin-left', slideImg);

    });

    






    ////////////// #desker plus버튼 호버효과 //////////////
    $('.info-wrap a').hover(function () {
        //mouseenter
        var plusBtn = $(this).attr('href');

        $(plusBtn).css({
            border: '3px solid #ff6357'
        });
    }, function () {
        //mouseleave
        var plusBtn = $(this).attr('href');

        $(plusBtn).css({
            border: 'none'
        });
    });

});