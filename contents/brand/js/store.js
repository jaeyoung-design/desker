//brand(I AM DESKER) >> 매장안내
//store.js


$(document).ready(function(){

    //지역 핀버튼 클릭하면 .on 클래스 디자인 적용
    //다른 지역매장 정보 업데이트 후 링크연결하기!!
    $('.store .site a').on('click', function(e){
        e.preventDefault();

        $(this).parent().addClass('on').siblings().removeClass('on');
    })

    //스크롤바 구현
    /* 
    infoH(전체 내용의 높이) - viewH(보여지는 구간의 높이)
    scrollH(전체 높이) - barH(스크롤바 높이) = 스크롤이 이동할 수 있는 최대값

    */
    $('.bar').draggable({
        axis: 'y',
        containment: 'parent'
    });

    var scrollH = $('.scroll').height();
    var barH = $('.bar').height();
    var barMax = scrollH - barH; //스크롤이 이동할 수 있는 최대값
    var barMove; //스크롤의 이동값

    var infoH = $('.info-wrap').height();
    var viewH = $('.info-viewer').height();
    var viewMax = infoH - viewH; //내용이 이동할 수 있는 최대값
    var viewMove = 0; //내용의 이동값(초깃값-0)

    $('.bar').on('drag', function(){
        
        //스크롤의 이동값구하기
        barMove = $(this).position().top;

        //내용의 이동값구하기
        //스크롤 최대값:이동값 = 내용 최대값:이동값
        //스크롤 최대값*내용 이동값 = 스크롤 이동값*내용 최대값
        //내용 이동값 = 스크롤 이동값*내용 최대값 % 스크롤 최대값
        viewMove = barMove * viewMax / barMax;

        $('.info-wrap').css({
            top: -viewMove + 'px'
        });

    });

});