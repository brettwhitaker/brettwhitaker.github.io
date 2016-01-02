$(document).ready(function(){
    setTimeout(function(){
        if($(document).scrollTop() === 0) {
            $('body,html').animate({scrollTop: 130}, 500);
        }
    }, 2000);
});