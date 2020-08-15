(function($) {
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        let navItem = $(".navbar-nav .nav-item");
        // Scroll down

        if (st > lastScrollTop) {
            // $(".navbar").click(function(){
            //     $("p:first").addClass("intro");
            //   });
            for (let i = 0; i < navItem.length; i++) {
                setTimeout(function() {
                    $(navItem[i]).css({
                        "transform": "translateY(-100px)",
                        "opacity": "0"
                    });

                }, i * 100)
            }
        }
        // Scroll up but still lower than 200 (change that to whatever suits your need)
        else if (st < lastScrollTop && st > 0) {}
        // Reached top
        else {
            // for (let i = 0; i < navItem.length; i++) {
            //     setTimeout(function() {
            //         $(navItem[i]).css({
            //             "transform": "translateY(0)",
            //             "opacity": "1"
            //         });

            //     }, i * 100)
            // }
        }
        if(st<100){
            for (let i = 0; i < navItem.length; i++) {
                setTimeout(function() {
                    $(navItem[i]).css({
                        "transform": "translateY(0)",
                        "opacity": "1"
                    });

                }, i * 100)
            }
        }
        lastScrollTop = st;
    });
})(jQuery);