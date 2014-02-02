"use strict";

module.exports = function (app) {
    app.controller("dataFormController", function ($scope, dataFormModel) {
        $scope.data = dataFormModel;
    });
};