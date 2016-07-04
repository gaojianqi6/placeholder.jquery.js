/**
 * Created by JeromeGao
 */
(function (root, $) {
    'use strict';
    if (!$) {
        return;
    }

    var test = document.createElement('input');
    var nativeSupport = test.placeholder !== void 0;

    if (nativeSupport) {
        return;
    }

    //add placeholder class
    var placeholderStyleColor = '#C0C7D4';
    var head = document.getElementsByTagName('head')[0];
    var styleElem = document.createElement('style');
    styleElem.type = 'text/css';
    var styleRules = document.createTextNode(
        '.input-wrap {' +
        'position:relative;' +
        'display:inline-block;' +
        '}'
    );
    styleRules.appendData(
        '.input-wrap > input[type="text"]:focus + span, .input-wrap > input[type="password"]:focus + span {' +
        'opacity: 0;' +
            //'display:inline;' +
        '}');

    styleRules.appendData(
        '.input-tip {' +
        'display: inline-block;' +
        'position:absolute;' +
        'top:0;' +
        'left:' + '15px;' +
        'color:' + placeholderStyleColor + ';' +
        '}'
    );
    if (styleElem.styleSheet) {
        styleElem.styleSheet.cssText = styleRules.nodeValue;
    } else {
        styleElem.appendChild(styleRules);
    }
    head.insertBefore(styleElem, head.firstChild);

    function initPlaceholders() {
        $("input[type='text'], input[type='password'], textarea").each(function (i, n) {
            var $thisElem = $(this);
            if ($thisElem.css("display") == "none" || $thisElem.attr("type") == "hidden" || $thisElem.attr("class") == "hidePassword" || $thisElem.attr("placehloder-check") == "false") {
                return;
            }
            var placeholderText = $thisElem.attr("placeholder") || "";
            if (placeholderText == "") {
                return;
            }
            var displayType = $thisElem.val() == "" ? "inline-block" : "none";
            $thisElem.attr("placeholder", "");
            var fontSize = $thisElem.css("font-size") || "14px";
            var width = "auto";
            //console.log("name:" + $thisElem.attr("name") + ", box-sizing:"
            //    + $thisElem.css("box-sizing") + ", width:" + $thisElem.width()
            //    + ", padding-left" + $thisElem.css("padding-left") + ", padding-right" + $thisElem.css("padding-right")
            //    + ", css-width:" + $thisElem.css("width") + ", isHidden:" + $thisElem.is(":hidden"));
            if ($thisElem.css("box-sizing") == "border-box" && $thisElem.is(":hidden")) {
                width = ($thisElem.width()) + "px";
            } else {
                width = $thisElem.css("width");
            }
            var lineHeight = ($thisElem.css("height") || $thisElem.height()) || 1;
            $thisElem.wrap("<div class='input-wrap' style='width: " + width + ";'></div>")
                .after("<span class='input-tip' style='line-height: " + lineHeight + "; font-size:" + fontSize + "; display: " + displayType + ";' >" + placeholderText + "</span>");
            $thisElem.next("span.input-tip").on("click", function () {
                $thisElem.focus();
            })
        });
        initPlaceholdersEvent();
    }

    //init all placeholder
    function initPlaceholdersEvent() {
        $("input[type='text'], input[type='password'], textarea").focus(function () {
            $(this).next(".input-tip").hide();
        }).blur(function () {
            if ($(this).val() == "") {
                $(this).next(".input-tip").css("display", "inline-block");
            } else {
                $(this).next(".input-tip").hide();
            }
        });
    }

    initPlaceholders();

}(window, jQuery));