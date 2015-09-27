$( document ).ready(function() {
$("#menu-open").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menu-open");
});
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menu-open");
});

$("[rel='tooltip']").tooltip();

$('.thumbnail').hover(
    function(){
        $(this).find('.caption').fadeIn(250); //.fadeIn(250)
    },
    function(){
        $(this).find('.caption').fadeOut(250); //.fadeOut(205)
    }
);
});
