"use strict";

module.exports = function (app) {
    app.controller("dataFormController", function ($scope, dataFormModel) {
        $scope.data = dataFormModel;
        $scope.addNewRelatedSite = function () {
            dataFormModel.insertNewRelatedSite();
        };
    });

};