$(document).ready(function() {
    var strings = ["<span>Web Developer</span>", "<span>UX/UI Designer</span>", "<span>Software Developer</span>"];
    var strlen = strings.length;
    var i = 0;

    setInterval(function() {
        if(i > strlen - 1) i = 0;
        else if(i < 0) i = strlen - 1;

        $("#txt").html(strings[i]);

        i++;
    }, 3000);

    $(".menuButton").on("click", function() {
        $(".left-container").fadeIn(300);
        $(".left-container").css({
            "width" : "100%"
        });
        $(".inner-container").css("z-index", 400);
        $(this).css("z-index", "999");
        $(".menu").addClass("text-center");
        $(".onclose").show();
    });

    $(".onclose").click(function() {
        $(".left-container").fadeOut(300);
    });

    $(window).on("load", function() {
        $(".onclose").hide();
    });
});