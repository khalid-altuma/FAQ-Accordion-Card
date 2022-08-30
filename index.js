var chosen = 2;

$(".containerr").click(function () {
    $("#" + chosen).removeClass("active");
    $(this).toggleClass("active");
    chosen = $(this).attr('id');
})