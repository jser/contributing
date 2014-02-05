(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
            "related-links": [],
            insertNewRelatedSite: function () {
                this["related-links"].push({});
            }
        };
    };
    app.factory("dataFormModel", dataFormService);
};
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYXp1L0Ryb3Bib3gvd29ya3NwYWNlL0phdmFTY3JpcHQvcHJvamVjdC9KU2VyLmluZm8tdHJpYnV0ZS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXp1L0Ryb3Bib3gvd29ya3NwYWNlL0phdmFTY3JpcHQvcHJvamVjdC9KU2VyLmluZm8tdHJpYnV0ZS9zcmMvYXBwLmpzIiwiL1VzZXJzL2F6dS9Ecm9wYm94L3dvcmtzcGFjZS9KYXZhU2NyaXB0L3Byb2plY3QvSlNlci5pbmZvLXRyaWJ1dGUvc3JjL2NvbnRyb2xsZXJzL2RhdGEtZm9ybS1jb250cm9sbGVyLmpzIiwiL1VzZXJzL2F6dS9Ecm9wYm94L3dvcmtzcGFjZS9KYXZhU2NyaXB0L3Byb2plY3QvSlNlci5pbmZvLXRyaWJ1dGUvc3JjL2NvbnRyb2xsZXJzL2pzZXItY29udHJvbGxlci5qcyIsIi9Vc2Vycy9henUvRHJvcGJveC93b3Jrc3BhY2UvSmF2YVNjcmlwdC9wcm9qZWN0L0pTZXIuaW5mby10cmlidXRlL3NyYy9jb250cm9sbGVycy9tYWluLXRhYmNvbnRyb2xsZXIuanMiLCIvVXNlcnMvYXp1L0Ryb3Bib3gvd29ya3NwYWNlL0phdmFTY3JpcHQvcHJvamVjdC9KU2VyLmluZm8tdHJpYnV0ZS9zcmMvZGlyZWN0aXZlcy9ib290c3RyYXAtdGFiLWRpcmVjdGl2ZS5qcyIsIi9Vc2Vycy9henUvRHJvcGJveC93b3Jrc3BhY2UvSmF2YVNjcmlwdC9wcm9qZWN0L0pTZXIuaW5mby10cmlidXRlL3NyYy9tb2RlbHMvZGF0YS1mb3JtLW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdUYWdzSW5wdXQnLCAnaGMubWFya2VkJ10pLmNvbmZpZyhbXG4gICAgJyRsb2NhdGlvblByb3ZpZGVyJywgZnVuY3Rpb24gKCRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICB9XG5dKTtcbnJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL2RhdGEtZm9ybS1jb250cm9sbGVyXCIpKGFwcCk7XG5yZXF1aXJlKFwiLi9jb250cm9sbGVycy9tYWluLXRhYmNvbnRyb2xsZXJcIikoYXBwKTtcbnJlcXVpcmUoXCIuL21vZGVscy9kYXRhLWZvcm0tbW9kZWxcIikoYXBwKTtcbi8vIGpzZXJcbnJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL2pzZXItY29udHJvbGxlclwiKShhcHApO1xuLy8gZGlyZWN0aXZlXG5yZXF1aXJlKFwiLi9kaXJlY3RpdmVzL2Jvb3RzdHJhcC10YWItZGlyZWN0aXZlXCIpKGFwcCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLmNvbnRyb2xsZXIoXCJkYXRhRm9ybUNvbnRyb2xsZXJcIiwgZnVuY3Rpb24gKCRzY29wZSwgZGF0YUZvcm1Nb2RlbCwgbWFya2VkKSB7XG4gICAgICAgICRzY29wZS5kYXRhID0gZGF0YUZvcm1Nb2RlbDtcbiAgICAgICAgJHNjb3BlLiR3YXRjaChcImRhdGEuY29udGVudFwiLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm1hcmtkb3duX3JlbmRlciA9IG1hcmtlZChuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkc2NvcGUuYWRkTmV3UmVsYXRlZFNpdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYXRhRm9ybU1vZGVsLmluc2VydE5ld1JlbGF0ZWRTaXRlKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5jb250cm9sbGVyKFwianNlckNvbnRyb2xsZXJcIiwgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICAkc2NvcGUudG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwcCkge1xuICAgIGFwcC5jb250cm9sbGVyKFwiTWFpblRhYkNvbnRyb2xsZXJcIiwgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICAkc2NvcGUudGFicyA9IFsnSG9tZScsICdCb29rbWFya2xldHMnXTtcbiAgICAgICAgJHNjb3BlLnRhYnMuaW5kZXggPSAwO1xuICAgICAgICAkc2NvcGUudGFicy5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJHNjb3BlLnRhYnNbJHNjb3BlLnRhYnMuaW5kZXhdO1xuICAgICAgICB9XG4gICAgfSk7XG59OyIsIi8vIGh0dHA6Ly9lcnJpZXR0YS5tZS9ibG9nL2Jvb3RzdHJhcC1hbmd1bGFyanMtZGlyZWN0aXZlcy9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcHApIHtcblxuICAgIGFwcC5kaXJlY3RpdmUoJ3RhYnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhbmVzID0gJHNjb3BlLnBhbmVzID0gW107XG5cbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ID0gZnVuY3Rpb24gKHBhbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHBhbmVzLCBmdW5jdGlvbiAocGFuZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFuZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBwYW5lLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQYW5lID0gZnVuY3Rpb24gKHBhbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhbmVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0KHBhbmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGFuZXMucHVzaChwYW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidGFiYmFibGVcIj4nICtcbiAgICAgICAgICAgICAgICAnPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+JyArXG4gICAgICAgICAgICAgICAgJzxsaSBuZy1yZXBlYXQ9XCJwYW5lIGluIHBhbmVzXCIgbmctY2xhc3M9XCJ7YWN0aXZlOnBhbmUuc2VsZWN0ZWR9XCI+JyArXG4gICAgICAgICAgICAgICAgJzxhIGhyZWY9XCJcIiBuZy1jbGljaz1cInNlbGVjdChwYW5lKVwiPnt7cGFuZS50aXRsZX19PC9hPicgK1xuICAgICAgICAgICAgICAgICc8L2xpPicgK1xuICAgICAgICAgICAgICAgICc8L3VsPicgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIiBuZy10cmFuc2NsdWRlPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgYXBwLmRpcmVjdGl2ZSgncGFuZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlcXVpcmU6ICdedGFicycsXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjb3BlOiB7IHRpdGxlOiAnQCcgfSxcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMsIHRhYnNDdHJsKSB7XG4gICAgICAgICAgICAgICAgdGFic0N0cmwuYWRkUGFuZShzY29wZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidGFiLXBhbmVcIiBuZy1jbGFzcz1cInthY3RpdmU6IHNlbGVjdGVkfVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+JyxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWVcbiAgICAgICAgfTtcbiAgICB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcHApIHtcbiAgICB2YXIgc3BsaXRUYWdzID0gZnVuY3Rpb24gKHRhZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRhZ3Muc3BsaXQoXCIsXCIpLmZpbHRlcihmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgcmV0dXJuIGVsZS5sZW5ndGggPiAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBkYXRhRm9ybVNlcnZpY2UgPSBmdW5jdGlvbiAoJGxvY2F0aW9uKSB7XG4gICAgICAgIHZhciBxdWVyeSA9ICRsb2NhdGlvbi5zZWFyY2goKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBxdWVyeS50aXRsZSB8fCBcIlwiLFxuICAgICAgICAgICAgdXJsOiBxdWVyeS51cmwgfHwgXCJcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IHF1ZXJ5LmNvbnRlbnQgfHwgXCJcIixcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICB0YWdzOiBxdWVyeS50YWdzID8gc3BsaXRUYWdzKHF1ZXJ5LnRhZ3MpOiBbXSxcbiAgICAgICAgICAgIFwicmVsYXRlZC1saW5rc1wiOiBbXSxcbiAgICAgICAgICAgIGluc2VydE5ld1JlbGF0ZWRTaXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tcInJlbGF0ZWQtbGlua3NcIl0ucHVzaCh7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBhcHAuZmFjdG9yeShcImRhdGFGb3JtTW9kZWxcIiwgZGF0YUZvcm1TZXJ2aWNlKTtcbn07Il19
