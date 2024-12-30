//products >> review
//review.js


$(function(){

    //초기설정 (모달창 숨김)
    $('#modal').hide();

    //해당 리뷰의 이미지 클릭했을 때 
    //모달창 등장 + 스크롤바 제거
    $('.review li:first-child .review-img').on('click', function(){
        $('#modal').show();
        $('body').css({
            overflow: 'hidden'
        });
    });

    //.close(닫기) 버튼 클릭했을 때 
    //모달창 숨김 + 스크롤바 등장
    $('#modal .close').on('click', function(){
        $('#modal').hide();
        $('body').css({
            overflow: 'auto'
        });
    });

});