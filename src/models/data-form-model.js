"use strict";
module.exports = function (app) {
    var dataFormService = function () {
        return {
            title: "",
            url: "",
            content: "",
            tags: [],
            relatedSites: [],
            insertNewRelatedSite: function () {
                this.relatedSites.push({});
            }
        }
    };
    app.factory("dataFormModel", dataFormService);
};