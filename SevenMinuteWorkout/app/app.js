﻿"use strict";

(function () {
    angular.module("app", ["ngRoute", "7minWorkout"])
        .config(function ($routeProvider, $sceDelegateProvider) {
            
            $routeProvider.when("/start", {
                templateUrl: "/app/partials/start.html"
            }).when("/workout", {
                templateUrl: "/app/SevenMinuteWorkout/partials/workout.html",
                controller: "WorkoutController as vm"
            }).when("/finish", {
                templateUrl: "/app/partials/finish.html"
            }).otherwise({
                redirectTo: "/start"
            });

        $sceDelegateProvider.resourceUrlWhitelist([
            "self"
            //"http://*.youtube.com/**"
        ]);
    });
}());