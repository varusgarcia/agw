$( document ).ready(function() {

$("[rel='tooltip']").tooltip();

$('.thumbnail').hover(
    function(){
        $(this).find('.caption').fadeIn(150);
    },
    function(){
        $(this).find('.caption').fadeOut(150);
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
$(document).on('click', '#projects_video', function (e) {
    var video = $(this).get(0);
    if (video.paused === false) {
        video.pause();
    } else {
        video.play();
    }

    return false;
});
});
