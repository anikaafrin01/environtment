jQuery(document).ready(function($) {
    /*-- Menu Sticky --*/
            var windows = $(window);
            var sticky = $('.header-sticky')
            windows.on('scroll', function() {
                var scroll = windows.scrollTop();
                if (scroll < 250) {
                    sticky.removeClass('stick');
                } else {
                    sticky.addClass('stick');
                }
            });
            /*-- mobile menu show and hide --*/
            $(".menu-toggle-btn").click(function(){
                $(".main-menu").toggleClass("open-menu");
            });

            /*-- search box show and hide --*/
            $(".open-search-box").click(function(){
                $(".search-box").toggleClass("search-box-show");
            });


	/* counterup */
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });