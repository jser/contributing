(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var app = angular.module('app', ['ngTagsInput', 'hc.marked']).config([
    '$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }
]);
require("./controllers/data-form-controller")(app);
require("./models/data-form-model")(app);
// jser
require("./controllers/jser-controller")(app);

},{"./controllers/data-form-controller":2,"./controllers/jser-controller":3,"./models/data-form-model":4}],2:[function(require,module,exports){
"use strict";

module.exports = function (app) {
    app.controller("dataFormController", function ($scope, dataFormModel, marked) {
        $scope.data = dataFormModel;
        $scope.$watch("data.content", function (newValue) {
            if (newValue != null) {
                $scope.markdown_render = marked(newValue);
            }
        });
        $scope.addNewRelatedSite = function () {
            dataFormModel.insertNewRelatedSite();
        };
    });

};
},{}],3:[function(require,module,exports){
"use strict";

module.exports = function (app) {
    app.controller("jserController", function ($scope) {
        $scope.today = new Date();
    });
};
},{}],4:[function(require,module,exports){
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
            "related-links": [],
            insertNewRelatedSite: function () {
                this["related-links"].push({});
            }
        };
    };
    app.factory("dataFormModel", dataFormService);
};
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYXp1L0Ryb3Bib3gvd29ya3NwYWNlL0phdmFTY3JpcHQvcHJvamVjdC9KU2VyLmluZm8tdHJpYnV0ZS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXp1L0Ryb3Bib3gvd29ya3NwYWNlL0phdmFTY3JpcHQvcHJvamVjdC9KU2VyLmluZm8tdHJpYnV0ZS9zcmMvYXBwLmpzIiwiL1VzZXJzL2F6dS9Ecm9wYm94L3dvcmtzcGFjZS9KYXZhU2NyaXB0L3Byb2plY3QvSlNlci5pbmZvLXRyaWJ1dGUvc3JjL2NvbnRyb2xsZXJzL2RhdGEtZm9ybS1jb250cm9sbGVyLmpzIiwiL1VzZXJzL2F6dS9Ecm9wYm94L3dvcmtzcGFjZS9KYXZhU2NyaXB0L3Byb2plY3QvSlNlci5pbmZvLXRyaWJ1dGUvc3JjL2NvbnRyb2xsZXJzL2pzZXItY29udHJvbGxlci5qcyIsIi9Vc2Vycy9henUvRHJvcGJveC93b3Jrc3BhY2UvSmF2YVNjcmlwdC9wcm9qZWN0L0pTZXIuaW5mby10cmlidXRlL3NyYy9tb2RlbHMvZGF0YS1mb3JtLW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1RhZ3NJbnB1dCcsICdoYy5tYXJrZWQnXSkuY29uZmlnKFtcbiAgICAnJGxvY2F0aW9uUHJvdmlkZXInLCBmdW5jdGlvbiAoJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuICAgIH1cbl0pO1xucmVxdWlyZShcIi4vY29udHJvbGxlcnMvZGF0YS1mb3JtLWNvbnRyb2xsZXJcIikoYXBwKTtcbnJlcXVpcmUoXCIuL21vZGVscy9kYXRhLWZvcm0tbW9kZWxcIikoYXBwKTtcbi8vIGpzZXJcbnJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL2pzZXItY29udHJvbGxlclwiKShhcHApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5jb250cm9sbGVyKFwiZGF0YUZvcm1Db250cm9sbGVyXCIsIGZ1bmN0aW9uICgkc2NvcGUsIGRhdGFGb3JtTW9kZWwsIG1hcmtlZCkge1xuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGFGb3JtTW9kZWw7XG4gICAgICAgICRzY29wZS4kd2F0Y2goXCJkYXRhLmNvbnRlbnRcIiwgZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5tYXJrZG93bl9yZW5kZXIgPSBtYXJrZWQobmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJHNjb3BlLmFkZE5ld1JlbGF0ZWRTaXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGF0YUZvcm1Nb2RlbC5pbnNlcnROZXdSZWxhdGVkU2l0ZSgpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuY29udHJvbGxlcihcImpzZXJDb250cm9sbGVyXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgICAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcHApIHtcbiAgICB2YXIgc3BsaXRUYWdzID0gZnVuY3Rpb24gKHRhZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRhZ3Muc3BsaXQoXCIsXCIpLmZpbHRlcihmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgcmV0dXJuIGVsZS5sZW5ndGggPiAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBkYXRhRm9ybVNlcnZpY2UgPSBmdW5jdGlvbiAoJGxvY2F0aW9uKSB7XG4gICAgICAgIHZhciBxdWVyeSA9ICRsb2NhdGlvbi5zZWFyY2goKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBxdWVyeS50aXRsZSB8fCBcIlwiLFxuICAgICAgICAgICAgdXJsOiBxdWVyeS51cmwgfHwgXCJcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IHF1ZXJ5LmNvbnRlbnQgfHwgXCJcIixcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB0YWdzOiBxdWVyeS50YWdzID8gc3BsaXRUYWdzKHF1ZXJ5LnRhZ3MpOiBbXSxcbiAgICAgICAgICAgIFwicmVsYXRlZC1saW5rc1wiOiBbXSxcbiAgICAgICAgICAgIGluc2VydE5ld1JlbGF0ZWRTaXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tcInJlbGF0ZWQtbGlua3NcIl0ucHVzaCh7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBhcHAuZmFjdG9yeShcImRhdGFGb3JtTW9kZWxcIiwgZGF0YUZvcm1TZXJ2aWNlKTtcbn07Il19
