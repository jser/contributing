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
},{}]},{},[1]);
