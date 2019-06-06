$(document).ready(function() {
    $('.clinic-tabs-link').click(function(){
       var tabIndex = $(this).index();
       $(this).addClass('active').siblings().removeClass('active');
       $('.clinic-tabs-item').removeClass('active');
       $('.clinic-tabs-item').eq(tabIndex).addClass('active');
        changeHeight();
    });
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            // "zoom",
            //"share",
            // "slideShow",
            //"fullScreen",
            //"download",
            // "thumbs",
            "close"],
        infobar: false
    });
    $('.clinic-gallery').masonry({
        // options
        itemSelector: '.gallery-item',
        percentPosition: true,
        gutter: 10
    });
    function changeHeight() {
        var itemHeight = $('.clinic-tabs-item.active').height();
        $('.clinic-tabs-content').height(itemHeight);
    }
    changeHeight();
    $('.search-content-more').click(function (e) {
        e.preventDefault();
        $(this).prev().toggleClass('active');
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            $(this).text('Скрыть')
        }
        else {
            $(this).text('Читать полностью')
        }
    })
});
