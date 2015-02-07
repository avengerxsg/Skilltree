/*jslint nomen: true */
/*global jQuery */


var job_desc = {
    "name": "Blade Master",
    "diff": "●●●◐○",
    "race": "Jin, Kun",
    "desc": "no description",
    "video": "<iframe id=\"ytplayer\" width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/jBKJbMNSkeU?rel=0&amp;controls=0&amp;showinfo=0&enablejsapi=1\" frameborder=\"0\" allowfullscreen></iframe>"
};

var _training;
// PvE-------------------------------------------------------------------------------------------------------------
function diel_pve_build1() {
    "use strict";
    (function ($) {
        $("#buildlist").animate({
            height: "0%"
        });
        $(document).ready(function () {
            _training.loadGetJsonData("{\"character_level\" : 50, \"character_mastery_level\" : 12, \"character_job\" : \"BM\", \"json_slot_data\" : {\"20003\" : \"21\", \"20100\" : \"31\", \"20101\" : \"31\", \"20102\" : \"31\", \"20103\" : \"21\", \"20104\" : \"23\", \"20105\" : \"33\", \"20106\" : \"33\", \"20108\" : \"32\", \"20111\" : \"31\", \"20126\" : \"11\", \"20132\" : \"11\", \"20138\" : \"21\", \"20201\" : \"14\", \"20202\" : \"22\", \"20205\" : \"22\", \"20211\" : \"13\", \"20230\" : \"12\", \"20233\" : \"12\", \"20306\" : \"21\", \"20312\" : \"31\", \"20603\" : \"13\", \"20604\" : \"12\"}}");
        });
    }(jQuery));
}
// PvP-------------------------------------------------------------------------------------------------------------

var builds = {
    "pve01": {
        "type": "PvE",
        "name": "General Build",
        "req": "Lv50 H12",
        "bfunc": "diel_pve_build1();",
        "desc_title": "General BM Build by Di'el",
        "desc": "No description"
    }
};