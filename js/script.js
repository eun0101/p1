//commen, main script.js


//commen
//header
$('.h_gnb2 .d1').mouseenter(function(){
    //현재 마우스를 올린 대상의 범위 안에서 .sub을 찾음.
    $(this).find('.sub').stop().slideDown(200);
}).mouseleave(function(){
    $(this).find('.sub').stop().hide();

});
//chat
$('.chat .quick').click(function(){
    $('html, body').animate({
        scrollTop: 0
    });
    return false;
});



//main
//main2 event, main5 photo_review
$('.event, .photo_review').mouseover(function(){
    $(this).find($('.hide')).removeClass('hide');
}).mouseout(function(){
    $('.e_prev, .e_next, .p_prev, .p_next').addClass('hide');
}); 

//main3 product
$('.p_menu .p_btn').click(function(){
    let i = $(this).index();
    //버튼
    $('.p_menu li').removeClass('on');
    $(this).addClass('on');

    //p_view
    $('.p_view').hide(0);
    
    //해당 뷰
    $('.p_view').eq(i).fadeIn(400);
    

    return false;
});




//slick 플러그인
//메인 슬라이드
$('.mainslide01').slick({
    //페이저:
    dots : true,
    //자동재생:
    autoplay : true,
    autoplaySpeed : 3000, //움직이는 시간 포함 5초
    speed : 400, //자동재생시 이동 간격
});
//photo_review
$('.photo ul').slick({
    slidesToShow: 6,
    centerPadding: '7px',
    prevArrow: $('.p_prev'),
    nextArrow: $('.p_next')
    
})