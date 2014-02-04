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
