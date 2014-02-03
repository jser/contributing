(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var app = angular.module('app', ['ngTagsInput','hc.marked']);
require("./controllers/data-form-controller")(app);
require("./models/data-form-model")(app);
// jser
require("./controllers/jser-controller")(app);

},{"./controllers/data-form-controller":2,"./controllers/jser-controller":3,"./models/data-form-model":4}],2:[function(require,module,exports){
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
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYXp1L0Ryb3Bib3gvd29ya3NwYWNlL0phdmFTY3JpcHQvcHJvamVjdC9KU2VyLmluZm8tdHJpYnV0ZS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXp1L0Ryb3Bib3gvd29ya3NwYWNlL0phdmFTY3JpcHQvcHJvamVjdC9KU2VyLmluZm8tdHJpYnV0ZS9zcmMvYXBwLmpzIiwiL1VzZXJzL2F6dS9Ecm9wYm94L3dvcmtzcGFjZS9KYXZhU2NyaXB0L3Byb2plY3QvSlNlci5pbmZvLXRyaWJ1dGUvc3JjL2NvbnRyb2xsZXJzL2RhdGEtZm9ybS1jb250cm9sbGVyLmpzIiwiL1VzZXJzL2F6dS9Ecm9wYm94L3dvcmtzcGFjZS9KYXZhU2NyaXB0L3Byb2plY3QvSlNlci5pbmZvLXRyaWJ1dGUvc3JjL2NvbnRyb2xsZXJzL2pzZXItY29udHJvbGxlci5qcyIsIi9Vc2Vycy9henUvRHJvcGJveC93b3Jrc3BhY2UvSmF2YVNjcmlwdC9wcm9qZWN0L0pTZXIuaW5mby10cmlidXRlL3NyYy9tb2RlbHMvZGF0YS1mb3JtLW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdUYWdzSW5wdXQnLCdoYy5tYXJrZWQnXSk7XG5yZXF1aXJlKFwiLi9jb250cm9sbGVycy9kYXRhLWZvcm0tY29udHJvbGxlclwiKShhcHApO1xucmVxdWlyZShcIi4vbW9kZWxzL2RhdGEtZm9ybS1tb2RlbFwiKShhcHApO1xuLy8ganNlclxucmVxdWlyZShcIi4vY29udHJvbGxlcnMvanNlci1jb250cm9sbGVyXCIpKGFwcCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLmNvbnRyb2xsZXIoXCJkYXRhRm9ybUNvbnRyb2xsZXJcIiwgZnVuY3Rpb24gKCRzY29wZSwgZGF0YUZvcm1Nb2RlbCxtYXJrZWQpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhRm9ybU1vZGVsO1xuICAgICAgICAkc2NvcGUuJHdhdGNoKFwiZGF0YS5jb250ZW50XCIsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgaWYobmV3VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5tYXJrZG93bl9yZW5kZXIgPSBtYXJrZWQobmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJHNjb3BlLmFkZE5ld1JlbGF0ZWRTaXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGF0YUZvcm1Nb2RlbC5pbnNlcnROZXdSZWxhdGVkU2l0ZSgpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuY29udHJvbGxlcihcImpzZXJDb250cm9sbGVyXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgICAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcHApIHtcbiAgICB2YXIgZGF0YUZvcm1TZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICB1cmw6IFwiXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIHRhZ3M6IFtdLFxuICAgICAgICAgICAgXCJyZWxhdGVkLWxpbmtzXCI6IFtdLFxuICAgICAgICAgICAgaW5zZXJ0TmV3UmVsYXRlZFNpdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW1wicmVsYXRlZC1saW5rc1wiXS5wdXNoKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGFwcC5mYWN0b3J5KFwiZGF0YUZvcm1Nb2RlbFwiLCBkYXRhRm9ybVNlcnZpY2UpO1xufTsiXX0=
