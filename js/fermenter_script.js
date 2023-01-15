//fermenter_script.js

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

//정렬순서
$('.default_btn').click(
    function(){
        $('.fermenter_sort_list').toggleClass('on');
        return false;
    }
)

//fermenter_script fermenter_middle
//분류에 맞는 상품 목록 띄우기
$('.fermenter_nb .f_nb_btn').click(function(){
    //버튼에 on 클래스 추가
    $('.fermenter_nb .f_nb_btn').removeClass('on');
    $(this).addClass('on');
       
    return false;
});
$('.f_nb_btn1').click(function(){
    $('.p_fermenter_now').text('전체');
    $('.p_list li').hide();
    $('.p_list li').fadeIn(400);
    return false;
});
$('.f_nb_btn2').click(function(){
    $('.p_fermenter_now').text('스마트발효기');
    $('.p_list li').hide();
    $('.smart').fadeIn(400);
    return false;
});
$('.f_nb_btn3').click(function(){
    $('.p_fermenter_now').text('요구르트제조기');
    $('.p_list li').hide();
    $('.yogurt').fadeIn(400);
    return false;
});