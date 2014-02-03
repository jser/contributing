"use strict";
module.exports = function (app) {
    var dataFormService = function () {
        return {
            title: "",
            url: "",
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