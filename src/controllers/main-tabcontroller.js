"use strict";
module.exports = function (app) {
    app.controller("MainTabController", function ($scope) {
        $scope.tabs = ['Home', 'Bookmarklets'];
        $scope.tabs.index = 0;
        $scope.tabs.active = function () {
            return $scope.tabs[$scope.tabs.index];
        }
    });
};