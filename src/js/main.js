$( document ).ready(function() {
    function tabs(btn, panel) {
        $(btn).on('click', function(evt) {
            $(btn).removeClass('active');
            $(this).addClass('active');
    
            $(panel).removeClass('active');
            $($(this).attr('data-panel')).addClass('active');
        });
    }
    tabs('.js-tabs-section__btn', '.tabs-section__panel');


    function addCommas(nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ' ' + '$2');
        }
        return x1 + x2;
    }
    
    function counterBtn(caunter, price) {
        $(caunter + ' .qty__btns-minus').click(function(){
            if($(caunter + ' .qty__value').text() > 1){
                $(caunter + ' .qty__value').text(parseInt($(caunter + ' .qty__value').text())-1);
                $(caunter + ' .js-qty-total').text(addCommas(price * $(caunter + ' .qty__value').text()) + ' kr');
                $(caunter + ' .js-btn-shop').attr('data-value', $(caunter + ' .qty__value').text());
            }
        });
        $(caunter + ' .qty__btns-plus').click(function(){
            $(caunter + ' .qty__value').text(parseInt($(caunter + ' .qty__value').text())+1);
            $(caunter + ' .js-qty-total').text(addCommas(price * $(caunter + ' .qty__value').text()) + ' kr');
            $(caunter + ' .js-btn-shop').attr('data-value', $(caunter + ' .qty__value').text());
        });
    };
    counterBtn('#qty1', 1890);
    counterBtn('#qty2', 1890);


    function burgerBtnActive(btn) {
        $(btn).on('click', function(evt) {
            $(this).toggleClass('active');
        });
    };
    burgerBtnActive('.nav__burger-btn');

    var main = new Splide( '.product-gallery__slider-big', {
        type      : 'fade',
        perPage: 1,
        rewind    : true,
        pagination: false,
        arrows    : false,
        drag: false,
    });

    var thumbnails = new Splide( '.product-gallery__slider-thumbs', {
        perPage: 3,
        gap         : 10,
        rewind    : true,
        pagination: false,
        arrows    : false,
        rewind    : true,
        isNavigation: true,

        breakpoints: {
            991: {
                direction   : 'ttb',
                heightRatio : 3
            },
        }
    });

    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
});