(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var app = angular.module('app', ['ngTagsInput', 'hc.marked']).config([
    '$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }
])
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
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYXp1L0Ryb3Bib3gvd29ya3NwYWNlL0phdmFTY3JpcHQvcHJvamVjdC9KU2VyLmluZm8tdHJpYnV0ZS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXp1L0Ryb3Bib3gvd29ya3NwYWNlL0phdmFTY3JpcHQvcHJvamVjdC9KU2VyLmluZm8tdHJpYnV0ZS9zcmMvYXBwLmpzIiwiL1VzZXJzL2F6dS9Ecm9wYm94L3dvcmtzcGFjZS9KYXZhU2NyaXB0L3Byb2plY3QvSlNlci5pbmZvLXRyaWJ1dGUvc3JjL2NvbnRyb2xsZXJzL2RhdGEtZm9ybS1jb250cm9sbGVyLmpzIiwiL1VzZXJzL2F6dS9Ecm9wYm94L3dvcmtzcGFjZS9KYXZhU2NyaXB0L3Byb2plY3QvSlNlci5pbmZvLXRyaWJ1dGUvc3JjL2NvbnRyb2xsZXJzL2pzZXItY29udHJvbGxlci5qcyIsIi9Vc2Vycy9henUvRHJvcGJveC93b3Jrc3BhY2UvSmF2YVNjcmlwdC9wcm9qZWN0L0pTZXIuaW5mby10cmlidXRlL3NyYy9tb2RlbHMvZGF0YS1mb3JtLW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nVGFnc0lucHV0JywgJ2hjLm1hcmtlZCddKS5jb25maWcoW1xuICAgICckbG9jYXRpb25Qcm92aWRlcicsIGZ1bmN0aW9uICgkbG9jYXRpb25Qcm92aWRlcikge1xuICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gICAgfVxuXSlcbnJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL2RhdGEtZm9ybS1jb250cm9sbGVyXCIpKGFwcCk7XG5yZXF1aXJlKFwiLi9tb2RlbHMvZGF0YS1mb3JtLW1vZGVsXCIpKGFwcCk7XG4vLyBqc2VyXG5yZXF1aXJlKFwiLi9jb250cm9sbGVycy9qc2VyLWNvbnRyb2xsZXJcIikoYXBwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuY29udHJvbGxlcihcImRhdGFGb3JtQ29udHJvbGxlclwiLCBmdW5jdGlvbiAoJHNjb3BlLCBkYXRhRm9ybU1vZGVsLCBtYXJrZWQpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhRm9ybU1vZGVsO1xuICAgICAgICAkc2NvcGUuJHdhdGNoKFwiZGF0YS5jb250ZW50XCIsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUubWFya2Rvd25fcmVuZGVyID0gbWFya2VkKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICRzY29wZS5hZGROZXdSZWxhdGVkU2l0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRhdGFGb3JtTW9kZWwuaW5zZXJ0TmV3UmVsYXRlZFNpdGUoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLmNvbnRyb2xsZXIoXCJqc2VyQ29udHJvbGxlclwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICAgICRzY29wZS50b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwKSB7XG4gICAgdmFyIGRhdGFGb3JtU2VydmljZSA9IGZ1bmN0aW9uICgkbG9jYXRpb24pIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gJGxvY2F0aW9uLnNlYXJjaCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHF1ZXJ5LnRpdGxlIHx8IFwiXCIsXG4gICAgICAgICAgICB1cmw6IHF1ZXJ5LnVybCB8fCBcIlwiLFxuICAgICAgICAgICAgY29udGVudDogXCJcIixcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgICAgIFwicmVsYXRlZC1saW5rc1wiOiBbXSxcbiAgICAgICAgICAgIGluc2VydE5ld1JlbGF0ZWRTaXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tcInJlbGF0ZWQtbGlua3NcIl0ucHVzaCh7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBhcHAuZmFjdG9yeShcImRhdGFGb3JtTW9kZWxcIiwgZGF0YUZvcm1TZXJ2aWNlKTtcbn07Il19
