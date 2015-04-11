/*jslint nomen: true */
/*global $, jQuery, alert, confirm, eval, _training*/

function reset() {
    "use strict";
    _training.resetSelectedSkill();
}

function reset_all() {
    "use strict";
    _training.resetAllSkill();
}

function objToJSONString(obj) {
    "use strict";
    var isArray = (obj && obj.join && obj.pop && obj.push && obj.reverse && obj.shift && obj.slice && obj.splice),
        results = [],
        i,
        value;

    for (i in obj) {
        if (obj.hasOwnProperty(i)) {
            value = obj[i];

            if (typeof value === "object") {
                results.push((isArray ? "" : "\"" + i.toString() + "\" : ") + objToJSONString(value));
            } else if (value) {
                results.push((isArray ? "" : "\"" + i.toString() + "\" : ") + (typeof value === "string" ? "\"" + value + "\"" : value));
            } else {
                results.push((isArray ? "" : "\"" + i.toString() + "\" : ") + (typeof value === "string" ? "\"\"" : 0));
            }
        }
    }

    return (isArray ? "[" : "{") + results.join(", ") + (isArray ? "]" : "}");
}

//document.getElementById("mytextarea").readOnly = true;
function generateBuild() {
    "use strict";
    var obj = objToJSONString(_training.getSendDataObj());
    document.getElementById('codearea').value = obj;
}

function generateUrl(job) {
    "use strict";
    var obj = objToJSONString(_training.getSendDataObj()),
        base = "bnstree.com/" + job + "/?build=";
    document.getElementById('codearea').value = base + obj;
}

function trim(st) {
    "use strict";
    while (st) {
        if (st.indexOf(" ") === 0) {
            st = st.substring(1);
        } else {
            break;
        }
    }
    while (st) {
        if (st.lastIndexOf(" ") === st.length - 1) {
            st = st.substring(0, st.length - 1);
        } else {
            break;
        }
    }
    return st;
}

function applyBuild(job) {
    "use strict";
    var api = jQuery("ul.tabs").data("tabs"),
        obj = trim(document.getElementById('codearea').value),
        c;

    if (obj === "") {
        return;
    }

    try {
        c = $.parseJSON(obj);
        if (String(c.character_job) !== job) {
            document.getElementById('codearea').value = "Wrong class!!";
            return;
        }

        _training.loadGetJsonData(obj);
        document.getElementById('codearea').value = obj;
    } catch (err) {
        document.getElementById('codearea').value = "Invalid input!!";
        return;
    }
}

var tempScrollTop;
$(window).scroll(function () {
    "use strict";
    tempScrollTop = $("div.categoryBody").scrollTop();
});

function getQueryVariable(variable) {
    "use strict";
    var query = window.location.search.substring(1),
        vars = query.split("&"),
        i,
        pair;
    for (i = 0; i < vars.length; i += 1) {
        pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return (false);
}

function queryUrl(job) {
    "use strict";
    var j = getQueryVariable("build"),
        c;

    if (j) {
        j = j.replace(/%20/g, ' ');
        j = j.replace(/%22/g, '"');
        j = j.replace(/%7B/g, '{');
        j = j.replace(/%7D/g, '}');
        try {
            c = $.parseJSON(j);
            if (String(c.character_job) !== job) {
                document.getElementById('codearea').value = "Wrong class!!";
                return;
            }

            _training.loadGetJsonData(j);
            document.getElementById('codearea').value = j;
        } catch (err) {
            document.getElementById('codearea').value = "Invalid input!!";
            return;
        }
    }
}

var tag = document.createElement('script');

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    "use strict";
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady() {
    "use strict";
    // Mute!
    player.mute();
    //player.playVideo();
}

function setSize() {
    var width = $('.container').width();
    var height = $('.trWrap').height();
    var scale
    var hscale

    if (window.matchMedia('(max-width: 991px)').matches) {
        scale = width / 515;
        hscale = scale * height;
    } else {
        scale = width / 940;
        hscale = scale * height;
    }

    $('.training-content').css({
        'height': hscale
    });
    $('.trWrap').css({
        'transform': 'scale(' + scale + ')',
        '-ms-transform': 'scale(' + scale + ')',
        '-webkit-transform': 'scale(' + scale + ')'
    });
}

$(window).resize(function () {
    setSize();
});

$(document).ready(function () {
    setSize();
    
    var $body = $(document);
    $body.bind('scroll', function () {
        // "Disable" the horizontal scroll.
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });
});

$('.modal').on('hidden.bs.modal', function (event) {
    setTimeout(function () {
        $('[data-toggle="modal"]').blur();
    });
});