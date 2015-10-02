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
        $(this).find('.caption').fadeIn(500);
    },
    function(){
        $(this).find('.caption').fadeOut(500);
    }
);
$("#showall_tag_search").click(function(e) {
    e.preventDefault();
    $(".tag_display").show();
});
$("#slider_tag_search").click(function(e) {
    e.preventDefault();
    $(".tag_display").hide();
    $(".slider_tag").show();
});
$("#hyperlapse_tag_search").click(function(e) {
    e.preventDefault();
    $(".tag_display").hide();
    $(".hyperlapse_tag").show();

});
$("#video_tag_search").click(function(e) {
    e.preventDefault();
    $(".tag_display").hide();
    $(".video_tag").show();

});
$("#diy_tag_search").click(function(e) {
    e.preventDefault();
    $(".tag_display").hide();
    $(".diy_tag").show();

});
});
