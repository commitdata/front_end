
(function() {
        "use strict";
        angular.module("app", ["ngRoute", "ngAnimate", "ui.bootstrap", "app.controllers", "app.task", "app.localization",])
        .config(["$routeProvider",
            function($routeProvider) {
                var routes, setRoutes;
                return routes = ["home", "type"], 
                setRoutes = function(route) {
                    var config, url;
                    return url = "/" + route, config = {
                        templateUrl: "views/" + route + ".html"
                    }, $routeProvider.when(url, config), $routeProvider
                }, routes.forEach(function(route) {
                    return setRoutes(route)
                }), $routeProvider.when("/", {
                    redirectTo: "/dashboard"
                }).when("/404", {
                    templateUrl: "views/home.html"
                }).otherwise({
                    redirectTo: "/404"
                })
            }
        ])
    }).call(this);