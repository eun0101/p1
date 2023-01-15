//product_detail_script.js

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

//d_sub_photo 제품 이미지 탭
$('.d_l_l .d_sub_photo').click(
    function(){
         let i = $(this).index();
         $('.d_l_l .d_sub_photo').removeClass('on');
         $(this).addClass('on');
        $('.d_l_r .d_main_photo').removeClass('active');
        $('.d_l_r .d_main_photo').eq(i).addClass('active');
        return false;
    }
)

//기본 1개 출력
//.sub_m 클릭하면 현재 출력되는 출력된 변수 -1 저장
//.sub_p 클릭하면 현재 출력되는 변수 +1 저장
//저장된 계산 값 적용하여 태그 내에 출력
let defaultCount = 1 ;
//상품개수, 가격 계산
$('.d_count .sub_m').click(
            function (){
                let c = defaultCount -= 1 ;
                if (c < 1){
                    //구매갯수가 1보다 작다면 창 띄우기
                    alert('상품은 1개 이상부터 구매 가능합니다.')
                }else{ 
                    $('.allCount').text(defaultCount + '개');
                    // 1000단위 콤마 사용하도록 toLocaleString() 함수 사용
                    $('.allPrice').text( Number(defaultCount* 98000).toLocaleString() + '원');
                };
            }
        );
$('.d_count .sub_p').click(
            function () {
                defaultCount += 1 ;
                $('.allCount').text(defaultCount + '개');
                //천단위 콤마 표시하는 함수
                $('.allPrice').text( Number(defaultCount* 98000).toLocaleString() + '원');
            }
           
        );
//기본 가격, 갯수
$('.allCount').text(defaultCount + '개');
$('.allPrice').text( Number(98000).toLocaleString()  + '원');

//d_guide
$('.d_nb_btn .btn').click(
    function(){
        let i = $(this).index();
        $('.d_nb_btn .btn').removeClass('on');
        $(this).addClass('on');

        //slider 애니메이션
        //누른 버튼의 left값 저장
        //부모태그의 margin 값 때문에 상대값을 사용하는 position 사용
        sl = $(this).position().left;
        // .slider에게 left값을 줌
        $('.slider').animate({
            left: sl
        }, 300);


        //보기
        $('.guide_in>div').removeClass('on');
        $('.guide_in>div').eq(i).addClass('on');
    }
)

//상세정보 접기
$('.fold').click(function(){
    $('.fold').css({
        display: 'none'
    });
    $('.unfold').css({
        display: 'block'
    });
    $('.detail_info').toggleClass('view');
    return false;
});
$('.unfold').click(function(){
    $('.unfold').css({
        display: 'none'
    });
    $('.fold').css({
        display: 'block'
    });
    $('.detail_info').toggleClass('view');
    return false;
});