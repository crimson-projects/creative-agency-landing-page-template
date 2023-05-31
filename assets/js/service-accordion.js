! function (t) {
    "use strict";
    "object" != typeof topylo && (window.topylo = {}), window.topyloCore = {}, topyloCore.shortcodes = {}, topyloCore.listShortcodesScripts = {
        topyloSwiper: topylo.topyloSwiper,
        topyloPagination: topylo.topyloPagination,
        topyloFilter: topylo.topyloFilter,
        topyloMasonryLayout: topylo.topyloMasonryLayout,
        topyloJustifiedGallery: topylo.topyloJustifiedGallery,
        topyloCustomCursor: topyloCore.topyloCustomCursor
    }, topyloCore.body = t("body"), topyloCore.html = t("html"), topyloCore.windowWidth = t(window).width(), topyloCore.windowHeight = t(window).height(), topyloCore.scroll = 0
}(jQuery);
(function (c) {
    "use strict";
    c(document).ready(function () {
        e.init();
    }),
        c(window).resize(function () {
            e.init();
        });
    var e = {
        init: function () {
            (this.holder = c(".topylo-fullscreen-tabs")),
                this.holder.length &&
                this.holder.each(function () {
                    e.initItem(c(this));
                });
        },
        initItem: function (e) {
            var o = e.find(".service-m-tab"),
                t = e.find(".service-content-3"),
                n = (e.find(".topylo-e-content-inner"), e.find(".service-m-tab-wrapper")),
                i = o.innerWidth(),
                r = e.find(".service-m-title-vertical").innerHeight(),
                d = c("#topylo-page-header"),
                a = d.innerHeight(),
                s = c("#topylo-page-mobile-header").innerHeight();
            993 < topyloCore.windowWidth ? e.css("height", "calc(100vh - " + a + "px)") : e.css("height", "calc(100vh - " + s + "px)"),
                o.first().addClass("active-tab"),
                991 < topyloCore.windowWidth ?
                    (o.first().css("width", "calc(100vw + 2px - " + i * (o.length - 1) + "px)"),
                        c(t, n).css("width", "calc(100vw + 2px - " + i * o.length + "px)"),
                        t.css("left", i),
                        d.css("width", "100%"),
                        o.each(function () {
                            var e = c(this);
                            e.on("click", function () {
                                e.siblings().removeClass("active-tab"), e.siblings().css("width", i), e.addClass("active-tab"), e.css("width", "calc(100vw + 2px - " + i * (o.length - 1) + "px)");
                            });
                        })) :
                    (o.first().css("height", "calc(100vh - " + r * (o.length - 1) + "px)"),
                        t.css("height", "calc(100vh - " + (r * o.length + s) + "px)"),
                        t.css("top", r),
                        n.css("height", r),
                        o.each(function () {
                            var e = c(this);
                            e.on("click", function () {
                                e.siblings().removeClass("active-tab"), e.siblings().css("height", r), e.addClass("active-tab"), e.css("height", "calc(100vh - " + r * (o.length - 1) + "px)");
                            });
                        }));
        },
    };
})(jQuery)