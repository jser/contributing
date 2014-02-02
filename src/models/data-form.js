module.exports = function (app) {
    app.service("dataFormModel", function () {
        this.tags = ["JavaScript", "Angular"];
        this.relatedSites = [];
    });
};