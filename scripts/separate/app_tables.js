
    (function() {
        "use strict";
        angular.module("app.tables", []).controller("tableCtrl", ["$scope", "$filter",
            function($scope, $filter) {
                var init;
                return $scope.stores = [{
                    name: "Nijiya Market",
                    price: "$$",
                    sales: 292,
                    rating: 4
                }, {
                    name: "Eat On Monday Truck",
                    price: "$",
                    sales: 119,
                    rating: 4.3
                }, {
                    name: "Tea Era",
                    price: "$",
                    sales: 874,
                    rating: 4
                }, {
                    name: "Rogers Deli",
                    price: "$",
                    sales: 347,
                    rating: 4.2
                }, {
                    name: "MoBowl",
                    price: "$$$",
                    sales: 24,
                    rating: 4.6
                }, {
                    name: "The Milk Pail Market",
                    price: "$",
                    sales: 543,
                    rating: 4.5
                }, {
                    name: "Nob Hill Foods",
                    price: "$$",
                    sales: 874,
                    rating: 4
                }, {
                    name: "Scratch",
                    price: "$$$",
                    sales: 643,
                    rating: 3.6
                }, {
                    name: "Gochi Japanese Fusion Tapas",
                    price: "$$$",
                    sales: 56,
                    rating: 4.1
                }, {
                    name: "Cost Plus World Market",
                    price: "$$",
                    sales: 79,
                    rating: 4
                }, {
                    name: "Bumble Bee Health Foods",
                    price: "$$",
                    sales: 43,
                    rating: 4.3
                }, {
                    name: "Costco",
                    price: "$$",
                    sales: 219,
                    rating: 3.6
                }, {
                    name: "Red Rock Coffee Co",
                    price: "$",
                    sales: 765,
                    rating: 4.1
                }, {
                    name: "99 Ranch Market",
                    price: "$",
                    sales: 181,
                    rating: 3.4
                }, {
                    name: "Mi Pueblo Food Center",
                    price: "$",
                    sales: 78,
                    rating: 4
                }, {
                    name: "Cucina Venti",
                    price: "$$",
                    sales: 163,
                    rating: 3.3
                }, {
                    name: "Sufi Coffee Shop",
                    price: "$",
                    sales: 113,
                    rating: 3.3
                }, {
                    name: "Dana Street Roasting",
                    price: "$",
                    sales: 316,
                    rating: 4.1
                }, {
                    name: "Pearl Cafe",
                    price: "$",
                    sales: 173,
                    rating: 3.4
                }, {
                    name: "Posh Bagel",
                    price: "$",
                    sales: 140,
                    rating: 4
                }, {
                    name: "Artisan Wine Depot",
                    price: "$$",
                    sales: 26,
                    rating: 4.1
                }, {
                    name: "Hong Kong Chinese Bakery",
                    price: "$",
                    sales: 182,
                    rating: 3.4
                }, {
                    name: "Starbucks",
                    price: "$$",
                    sales: 97,
                    rating: 3.7
                }, {
                    name: "Tapioca Express",
                    price: "$",
                    sales: 301,
                    rating: 3
                }, {
                    name: "House of Bagels",
                    price: "$",
                    sales: 82,
                    rating: 4.4
                }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function(page) {
                    var end, start;
                    return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
                }, $scope.onFilterChange = function() {
                    return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
                }, $scope.onNumPerPageChange = function() {
                    return $scope.select(1), $scope.currentPage = 1
                }, $scope.onOrderChange = function() {
                    return $scope.select(1), $scope.currentPage = 1
                }, $scope.search = function() {
                    return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
                }, $scope.order = function(rowName) {
                    return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
                }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() {
                    return $scope.search(), $scope.select($scope.currentPage)
                })()
            }
        ])
    }).call(this);