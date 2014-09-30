    (function() {
        "use strict";
        angular.module("app.controllers", []).controller("AppCtrl", ["$scope", "$rootScope",
            function($scope, $rootScope) {
                var $window;
                return $window = $(window), $scope.main = {
                    brand: "Commit!",
                    name: "Lisa Doe"
                }, $scope.pageTransitionOpts = [{
                    name: "Fade up",
                    "class": "animate-fade-up"
                }, {
                    name: "Scale up",
                    "class": "ainmate-scale-up"
                }, {
                    name: "Slide in from right",
                    "class": "ainmate-slide-in-right"
                }, {
                    name: "Flip Y",
                    "class": "animate-flip-y"
                }], $scope.admin = {
                    layout: "wide",
                    menu: "vertical",
                    fixedHeader: !0,
                    fixedSidebar: !0,
                    pageTransition: $scope.pageTransitionOpts[0],
                    skin: "11"
                }, $scope.$watch("admin", function(newVal, oldVal) {
                    return "horizontal" === newVal.menu && "vertical" === oldVal.menu ? void $rootScope.$broadcast("nav:reset") : newVal.fixedHeader === !1 && newVal.fixedSidebar === !0 ? (oldVal.fixedHeader === !1 && oldVal.fixedSidebar === !1 && ($scope.admin.fixedHeader = !0, $scope.admin.fixedSidebar = !0), void(oldVal.fixedHeader === !0 && oldVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !1, $scope.admin.fixedSidebar = !1))) : (newVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !0), void(newVal.fixedHeader === !1 && ($scope.admin.fixedSidebar = !1)))
                }, !0), $scope.color = {
                    primary: "#5B90BF",
                    success: "#A3BE8C",
                    info: "#7FABD2",
                    infoAlt: "#B48EAD",
                    warning: "#EBCB8B",
                    danger: "#BF616A",
                    gray: "#DCDCDC"
                }
            }
        ]).controller("HeaderCtrl", ["$scope",
            function() {}
        ]).controller("HomeCtrl", ["$scope",
            function($scope) {
                $scope.hello="world";
            }
        ]).controller("NavContainerCtrl", ["$scope",
            function() {}
        ]).controller("NavCtrl", ["$scope", "taskStorage", "filterFilter",
            function($scope, taskStorage, filterFilter) {
                var tasks;
                return tasks = $scope.tasks = taskStorage.get(), $scope.taskRemainingCount = filterFilter(tasks, {
                    completed: !1
                }).length, $scope.$on("taskRemaining:changed", function(event, count) {
                    return $scope.taskRemainingCount = count
                })
            }
        ]).controller("DashboardCtrl", ["$scope",
            function() {}
        ])
    }).call(this);