
(    function() {
        "use strict";
        angular.module("app.ui.directives", []).directive("uiTime", [
            function() {
                return {
                    restrict: "A",
                    link: function(scope, ele) {
                        var checkTime, startTime;
                        return startTime = function() {
                            var h, m, s, t, time, today;
                            return today = new Date, h = today.getHours(), m = today.getMinutes(), s = today.getSeconds(), m = checkTime(m), s = checkTime(s), time = h + ":" + m + ":" + s, ele.html(time), t = setTimeout(startTime, 500)
                        }, checkTime = function(i) {
                            return 10 > i && (i = "0" + i), i
                        }, startTime()
                    }
                }
            }
        ]).directive("uiNotCloseOnClick", [
            function() {
                return {
                    restrict: "A",
                    compile: function(ele) {
                        return ele.on("click", function(event) {
                            return event.stopPropagation()
                        })
                    }
                }
            }
        ]).directive("slimScroll", [
            function() {
                return {
                    restrict: "A",
                    link: function(scope, ele, attrs) {
                        return ele.slimScroll({
                            height: attrs.scrollHeight || "100%"
                        })
                    }
                }
            }
        ])
    }).call(this);