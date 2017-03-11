$(document).ready(function(){
    $(".nav_bar").delay(200).fadeIn();
    $(".main_body").delay(500).fadeIn();
    
    var x, y = 1;
    $("li.about").click(function(){
        if (x) clearTimeout(x);
        x = setTimeout(function() {
            var current_length = $(".about_container").width();
            if (current_length < 3) {
                $(".main_body").fadeOut();
                $(".about_container").delay(300).fadeIn();
                $(".about_container").animate({
                    top: '10%',
                    height: '75%'
                }, 650);
                $(".about_container").animate({
                    left: '7%',
                    width: '80%'
                }, 650);
                $("p.about_body").delay(2000).fadeIn();
                $("p.about_aside").delay(2000).fadeIn();
                $("img.about_photo").delay(2000).fadeIn();
            } else {
                $("img.about_photo").fadeOut();
                $("p.about_aside").fadeOut();
                $("p.about_body").fadeOut();
                $(".about_container").delay(300).animate({
                    left: '47%',
                    width: '2px'
                }, 650);
                $(".about_container").animate({
                    top: '45%',
                    height: '2px'
                }, 650);
                $(".about_container").fadeOut();
                $(".main_body").delay(1600).fadeIn();
            }
            y++;
            console.log(y);
        }, 300);
    });
    
//    $("h2.body_button").hover(function(){
//        $(this).animate({
//            borderTopColor: 'black'
//        }, 200);
//        $(this).animate({
//            borderRightColor: 'black'
//        }, 200);
//        $(this).animate({
//            borderBottomColor: 'black'
//        }, 200);
//        $(this).animate({
//            borderLeftColor: 'black',
//            color: 'black'
//        }, 200, function() {
//            $(this).css("border", "1px solid black");
//            $(this).css("color", "black");
//        });
//
//    }, function(){
//        $(this).animate({
//            borderColor: 'lightgray',
//            color: 'lightgray'
//        }, 200, function() {
//            $(this).css("border", "1px solid lightgray");
//            $(this).css("color", "lightgray");
//        });
//    });
});