"use strict";
module.exports = function (app) {
    var splitTags = function (tags) {
        return tags.split(",").filter(function(ele){
            return ele.length > 0;
        });
    };
    var dataFormService = function ($location) {
        var query = $location.search();
        return {
            title: query.title || "",
            url: query.url || "",
            content: query.content || "",
            date: new Date(),
            tags: query.tags ? splitTags(query.tags): [],
            "relatedLinks": [],
            insertNewRelatedSite: function () {
                this["relatedLinks"].push({});
            }
        };
    };
    app.factory("dataFormModel", dataFormService);
};