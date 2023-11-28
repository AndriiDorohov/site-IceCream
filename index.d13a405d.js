var $7de307968d2fe376$exports = {};
(function() {
    "use strict";
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
        if (scrolled > coords) goTopBtn.classList.add("back_to_top-show");
        if (scrolled < coords) goTopBtn.classList.remove("back_to_top-show");
    }
    function backToTop() {
        window.scrollTo(0, 0);
    }
    var goTopBtn = document.querySelector(".back_to_top");
    window.addEventListener("scroll", trackScroll);
    goTopBtn.addEventListener("click", backToTop);
})();


//# sourceMappingURL=index.d13a405d.js.map
