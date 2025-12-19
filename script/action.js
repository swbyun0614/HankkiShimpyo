$(function() {
    const $gnb = $('.gnb');
    const $indicator = $('.nav-indicator');
    const $gnbItems = $('.gnb > li').not('.nav-indicator'); // 인디케이터 제외한 li들

    $gnbItems.on('mouseenter', function() {
        // 1. 현재 호버한 li의 위치와 너비 가져오기
        const targetLeft = $(this).position().left;
        const targetWidth = $(this).outerWidth();

        // 2. 인디케이터 이동 및 표시
        $indicator.css({
            'left': targetLeft + 'px',
            'width': targetWidth + 'px',
            'opacity': 1
        });
    });

    $gnb.on('mouseleave', function() {
        // 메뉴 전체를 벗어나면 인디케이터 숨김
        $indicator.css('opacity', 0);
    });
});

$(function() {
    let count = 0;

    // 장바구니 담기 버튼을 눌렀다고 가정할 때
    $('.cart-wrapper').on('click', function() {
        count++;
        $('.cart-count').text(count);
        
        // 숫자가 0보다 클 때만 배지 보여주기 (처음엔 숨겨둘 경우)
        if(count > 0) {
            $('.cart-count').show();
        } else {
            $('.cart-count').hide();
        }
    });
});

$(function() {
    $('.gnb > li').on('mouseenter', function() {
        $(this).find('.lnb').stop(true, true).slideDown(200); // 0.3초 동안 부드럽게 내려옴
    });

    $('.gnb > li').on('mouseleave', function() {
        $(this).find('.lnb').stop(true, true).slideUp(300); // 0.3초 동안 부드럽게 올라감
    });
});