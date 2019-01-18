$(document).ready(function() {
    $('.clinic-tabs-link').click(function(){
       var tabIndex = $(this).index();
       $(this).addClass('active').siblings().removeClass('active');
       $('.clinic-tabs-item').removeClass('active');
       $('.clinic-tabs-item').eq(tabIndex).addClass('active');
    });
});
