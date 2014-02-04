"use strict";
module.exports = function (app) {
    var dataFormService = function ($location) {
        var query = $location.search();
        return {
            title: query.title || "",
            url: query.url || "",
            content: "",
            date: new Date(),
            tags: [],
            "related-links": [],
            insertNewRelatedSite: function () {
                this["related-links"].push({});
            }
        };
    };
    app.factory("dataFormModel", dataFormService);
};