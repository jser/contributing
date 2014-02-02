"use strict";
var app = angular.module('app', ['ngTagsInput','hc.marked']);
require("./controllers/data-form-controller")(app);
require("./models/data-form-model")(app);
// jser
require("./controllers/jser-controller")(app);
