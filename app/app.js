(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var app = angular.module('app', ['ngTagsInput', 'hc.marked']).config([
    '$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }
]);
require("./controllers/data-form-controller")(app);
require("./controllers/main-tabcontroller")(app);
require("./models/data-form-model")(app);
// jser
require("./controllers/jser-controller")(app);
// directive
require("./directives/bootstrap-tab-directive")(app);

},{"./controllers/data-form-controller":2,"./controllers/jser-controller":3,"./controllers/main-tabcontroller":4,"./directives/bootstrap-tab-directive":5,"./models/data-form-model":6}],2:[function(require,module,exports){
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
    app.controller("MainTabController", function ($scope) {
        $scope.tabs = ['Home', 'Bookmarklets'];
        $scope.tabs.index = 0;
        $scope.tabs.active = function () {
            return $scope.tabs[$scope.tabs.index];
        }
    });
};
},{}],5:[function(require,module,exports){
// http://errietta.me/blog/bootstrap-angularjs-directives/

"use strict";
module.exports = function (app) {

    app.directive('tabs', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function ($scope, $element) {
                var panes = $scope.panes = [];

                $scope.select = function (pane) {
                    angular.forEach(panes, function (pane) {
                        pane.selected = false;
                    });

                    pane.selected = true;
                };

                this.addPane = function (pane) {
                    if (panes.length == 0) {
                        $scope.select(pane);
                    }

                    panes.push(pane);
                }
            },
            template: '<div class="tabbable">' +
                '<ul class="nav nav-tabs">' +
                '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' +
                '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
                '</li>' +
                '</ul>' +
                '<div class="tab-content" ng-transclude></div>' +
                '</div>',
            replace: true
        };
    });

    app.directive('pane', function () {
        return {
            require: '^tabs',
            restrict: 'E',
            transclude: true,
            scope: { title: '@' },
            link: function (scope, element, attrs, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            template: '<div class="tab-pane" ng-class="{active: selected}" ng-transclude></div>',
            replace: true
        };
    });
};
},{}],6:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbnRyb2xsZXJzL2RhdGEtZm9ybS1jb250cm9sbGVyLmpzIiwic3JjL2NvbnRyb2xsZXJzL2pzZXItY29udHJvbGxlci5qcyIsInNyYy9jb250cm9sbGVycy9tYWluLXRhYmNvbnRyb2xsZXIuanMiLCJzcmMvZGlyZWN0aXZlcy9ib290c3RyYXAtdGFiLWRpcmVjdGl2ZS5qcyIsInNyYy9tb2RlbHMvZGF0YS1mb3JtLW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1RhZ3NJbnB1dCcsICdoYy5tYXJrZWQnXSkuY29uZmlnKFtcbiAgICAnJGxvY2F0aW9uUHJvdmlkZXInLCBmdW5jdGlvbiAoJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuICAgIH1cbl0pO1xucmVxdWlyZShcIi4vY29udHJvbGxlcnMvZGF0YS1mb3JtLWNvbnRyb2xsZXJcIikoYXBwKTtcbnJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL21haW4tdGFiY29udHJvbGxlclwiKShhcHApO1xucmVxdWlyZShcIi4vbW9kZWxzL2RhdGEtZm9ybS1tb2RlbFwiKShhcHApO1xuLy8ganNlclxucmVxdWlyZShcIi4vY29udHJvbGxlcnMvanNlci1jb250cm9sbGVyXCIpKGFwcCk7XG4vLyBkaXJlY3RpdmVcbnJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRhYi1kaXJlY3RpdmVcIikoYXBwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcHApIHtcbiAgICBhcHAuY29udHJvbGxlcihcImRhdGFGb3JtQ29udHJvbGxlclwiLCBmdW5jdGlvbiAoJHNjb3BlLCBkYXRhRm9ybU1vZGVsLCBtYXJrZWQpIHtcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhRm9ybU1vZGVsO1xuICAgICAgICAkc2NvcGUuJHdhdGNoKFwiZGF0YS5jb250ZW50XCIsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUubWFya2Rvd25fcmVuZGVyID0gbWFya2VkKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICRzY29wZS5hZGROZXdSZWxhdGVkU2l0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRhdGFGb3JtTW9kZWwuaW5zZXJ0TmV3UmVsYXRlZFNpdGUoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLmNvbnRyb2xsZXIoXCJqc2VyQ29udHJvbGxlclwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICAgICRzY29wZS50b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLmNvbnRyb2xsZXIoXCJNYWluVGFiQ29udHJvbGxlclwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgICAgICRzY29wZS50YWJzID0gWydIb21lJywgJ0Jvb2ttYXJrbGV0cyddO1xuICAgICAgICAkc2NvcGUudGFicy5pbmRleCA9IDA7XG4gICAgICAgICRzY29wZS50YWJzLmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAkc2NvcGUudGFic1skc2NvcGUudGFicy5pbmRleF07XG4gICAgICAgIH1cbiAgICB9KTtcbn07IiwiLy8gaHR0cDovL2VycmlldHRhLm1lL2Jsb2cvYm9vdHN0cmFwLWFuZ3VsYXJqcy1kaXJlY3RpdmVzL1xuXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwcCkge1xuXG4gICAgYXBwLmRpcmVjdGl2ZSgndGFicycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFuZXMgPSAkc2NvcGUucGFuZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3QgPSBmdW5jdGlvbiAocGFuZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocGFuZXMsIGZ1bmN0aW9uIChwYW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYW5lLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhbmUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFkZFBhbmUgPSBmdW5jdGlvbiAocGFuZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFuZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3QocGFuZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYW5lcy5wdXNoKHBhbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0YWJiYWJsZVwiPicgK1xuICAgICAgICAgICAgICAgICc8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj4nICtcbiAgICAgICAgICAgICAgICAnPGxpIG5nLXJlcGVhdD1cInBhbmUgaW4gcGFuZXNcIiBuZy1jbGFzcz1cInthY3RpdmU6cGFuZS5zZWxlY3RlZH1cIj4nICtcbiAgICAgICAgICAgICAgICAnPGEgaHJlZj1cIlwiIG5nLWNsaWNrPVwic2VsZWN0KHBhbmUpXCI+e3twYW5lLnRpdGxlfX08L2E+JyArXG4gICAgICAgICAgICAgICAgJzwvbGk+JyArXG4gICAgICAgICAgICAgICAgJzwvdWw+JyArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBhcHAuZGlyZWN0aXZlKCdwYW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVxdWlyZTogJ150YWJzJyxcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgc2NvcGU6IHsgdGl0bGU6ICdAJyB9LFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdGFic0N0cmwpIHtcbiAgICAgICAgICAgICAgICB0YWJzQ3RybC5hZGRQYW5lKHNjb3BlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0YWItcGFuZVwiIG5nLWNsYXNzPVwie2FjdGl2ZTogc2VsZWN0ZWR9XCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwcCkge1xuICAgIHZhciBzcGxpdFRhZ3MgPSBmdW5jdGlvbiAodGFncykge1xuICAgICAgICByZXR1cm4gdGFncy5zcGxpdChcIixcIikuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlLmxlbmd0aCA+IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIGRhdGFGb3JtU2VydmljZSA9IGZ1bmN0aW9uICgkbG9jYXRpb24pIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gJGxvY2F0aW9uLnNlYXJjaCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHF1ZXJ5LnRpdGxlIHx8IFwiXCIsXG4gICAgICAgICAgICB1cmw6IHF1ZXJ5LnVybCB8fCBcIlwiLFxuICAgICAgICAgICAgY29udGVudDogcXVlcnkuY29udGVudCB8fCBcIlwiLFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIHRhZ3M6IHF1ZXJ5LnRhZ3MgPyBzcGxpdFRhZ3MocXVlcnkudGFncyk6IFtdLFxuICAgICAgICAgICAgXCJyZWxhdGVkTGlua3NcIjogW10sXG4gICAgICAgICAgICBpbnNlcnROZXdSZWxhdGVkU2l0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXNbXCJyZWxhdGVkTGlua3NcIl0ucHVzaCh7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBhcHAuZmFjdG9yeShcImRhdGFGb3JtTW9kZWxcIiwgZGF0YUZvcm1TZXJ2aWNlKTtcbn07Il19
