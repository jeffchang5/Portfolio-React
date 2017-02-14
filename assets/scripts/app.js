/**
 * Created by jeffreychang on 2/14/17.
 */
"use strict";


$(document).ready(function() {
    $("svg").mouseenter(function () {
        $(this).css({
                "transform": "scale(1.6)",
                "transition": "all 0.5s"
            }
        );
        // $( this ).animate(function() {
        //
        //
        // })
    })

        .mouseleave(function () {
            $(this).css({
                    "transform": "scale(1.0)",
                    "transition": "all 1s"
                }
            );
        });
});