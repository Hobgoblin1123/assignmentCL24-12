console.log('aaaa');
var openBtn = $('img#open');
var closeBtn = $('img#close');
jQuery(function(){
    openBtn.on('click',function(){
        console.log('aaaa');
        $(this).hide(),$('#sp-menu').animate({ right: "0px" }, 600);
        closeBtn.show();
    });
    closeBtn.on('click',function(){
        $(this).hide(),$('#sp-menu').animate({ right: "-100%" }, 600);
        openBtn.show();
    });
});