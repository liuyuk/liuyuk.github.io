$(document).ready(function(){
    var x, y = 1;
    $("li.about").click(function(){
        if (x) clearTimeout(x);
        x = setTimeout(function() {
            var current_length = $(".about_container").width();
            if (current_length < 3) {
                $(".about_container").fadeIn();
                $(".about_container").fadeOut();
                $(".about_container").fadeIn();
                $(".about_container").animate({
                    top: '10%',
                    height: '75%'
                }, 650);
                $(".about_container").animate({
                    left: '7%',
                    width: '80%'
                }, 650);
            } else {
                $(".about_container").animate({
                    left: '47%',
                    width: '2px'
                }, 650);
                $(".about_container").animate({
                    top: '45%',
                    height: '2px'
                }, 650);
                $(".about_container").fadeOut();
                $("a.about:visited").css("color: gray");
            }
            y++;
            console.log(y);
        }, 500);
    });
});