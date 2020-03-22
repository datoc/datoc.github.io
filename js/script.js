$(document).ready(function() {
    $(".onclose").hide();
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
        $(this).hide();
        $(".menu").addClass("text-center");
        $(".onclose").show();
    });

    $(".onclose").click(function() {
        $(".left-container").fadeOut(300);
        $(".menuButton").show();
    });

    $(window).on("load", function() {
        $(".onclose").hide();
    });

    var nameValue = $("input[type=\"text\"]"); // get value from name field
    var mailValue = $("input[type=\"email\"]"); // get value from mail field
    var textValue = $("#msg"); // get value from text field

    $("form[method=\"post\"]").on("submit", function() {
        if(nameValue.val() == "" || nameValue.val() == null) {
            nameValue.css({
                "border" : "2px solid red",
                "color" : "red"
            });
            return false;
        }else if(mailValue.val() == "" || mailValue.val() == null) {
            mailValue.css({
                "border" : "2px solid red",
                "color" : "red"
            });
            return false;
        }else if(textValue.val() == "" || textValue.val() == null) {
            textValue.css({
                "border" : "2px solid red",
                "color" : "red"
            });
            return false;
        }
    });

    //name field validation during key up
    nameValue.keyup(function() {
        if($(this).val() != "" || $(this).val() != null) {
            $(this).css({
                "border" : "2px solid #B1986F",
                "color" : "#B1986F"
            });
            return false;
        }else if($(this).val() == "" || $(this).val() == null) {
            $(this).css({
                "border" : "2px solid red",
                "color" : "red"
            });
        }
    });

    //mail field validation during key up
    mailValue.keyup(function() {
        if($(this).val() != "" || $(this).val() != null) {
            $(this).css({
                "border" : "2px solid #B1986F",
                "color" : "#B1986F"
            });
            return false;
        }else if($(this).val() == "" || $(this).val() == null) {
            $(this).css({
                "border" : "2px solid red",
                "color" : "red"
            });
        }
    });

    //text field validation during key up
    textValue.keyup(function() {
        if($(this).val() != "" || $(this).val() != null) {
            $(this).css({
                "border" : "2px solid #B1986F",
                "color" : "#B1986F"
            });
            return false;
        }else if($(this).val() == "" || $(this).val() == null) {
            $(this).css({
                "border" : "2px solid red",
                "color" : "red"
            });
        }
    });
});