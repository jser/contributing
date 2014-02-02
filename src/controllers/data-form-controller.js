"use strict";

module.exports = function (app) {
    app.controller("dataFormController", function ($scope, dataFormModel,marked) {
        $scope.data = dataFormModel;
        $scope.$watch("data.content", function (newValue) {
            if(newValue != null) {
                $scope.markdown_render = marked(newValue);
            }
        });
        $scope.addNewRelatedSite = function () {
            dataFormModel.insertNewRelatedSite();
        };
    });

};