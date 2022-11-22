(function ($) {
    "use strict";

    // jquery-bg
    $("*[data-background-image]").each(function () {
        $(this).css({
            "background-image": "url(" + $(this).data("background-image") + ")",
        });
    });

})(jQuery);