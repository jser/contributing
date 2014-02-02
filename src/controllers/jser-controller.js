"use strict";

module.exports = function (app) {
    app.controller("jserController", function ($scope) {
        $scope.today = new Date();
    });
};