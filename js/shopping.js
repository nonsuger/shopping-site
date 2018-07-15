$(document).ready(function() {

    /**
     * カルーセルの関数
     */
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true
    });

    /**
     * ハンバーガーメニューの関数(ヘッダーメニュー)
     */
    $("#menu").click(function() {
        $(".sp_menu_toggle").slideToggle();
    });

    /**
     * ハンバーガーメニューの関数(ページリンク)
     */
    $("#pagelink").click(function() {
        var targetUl = "#pagelink-menu-toggle";

        // メニューの表示切替
        $(targetUl).slideToggle();

        // 矢印アイコンの切替
        //$($(this).find(".menu-header-close")[0]).toggleClass("menu-header-open");
        $(".menu-header-close").toggleClass("menu-header-open");
    });

    /**
     * ハンバーガーメニューの関数(CATEGORIES)
     */
    $("#categories").click(function() {
        var targetUl = "#categories-menu-toggle";

        // メニューの表示切替
        $(targetUl).slideToggle();
        // 矢印アイコンの切替
        $($(this).find(".menu-header-close")[0]).toggleClass("menu-header-open");
    });
});

$(window).load(function() {
    $("#list_img img").click(function () {
        var img_src = $(this).attr("src");

        $("#display_img img").attr("src", img_src);
    })
});