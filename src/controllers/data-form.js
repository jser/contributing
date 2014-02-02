"use strict";

module.exports = function (app) {
    app.controller("dataFormController", function ($scope, dataFormModel) {
        $scope.data = dataFormModel;
        $scope.addNewRelatedSite = function () {
            var newItemNo = dataFormModel.relatedSites.length + 1;
            dataFormModel.relatedSites.push({});
        };
        $scope.isShowLabel = function (choice) {
            return true;
        };
        $scope.isShowButton = function (choice) {
            return dataFormModel.relatedSites.length;
        };
    });

};