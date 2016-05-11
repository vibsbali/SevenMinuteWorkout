"use strict";

(function () {
    angular.module("app", ["ngRoute", "7minWorkout"])
        .config(function ($routeProvider) {
            $routeProvider.when("/start", {
                templateUrl: "/app/SevenMinuteWorkout/partials/start.html"
            }).when("/workout", {
                templateUrl: "/app/SevenMinuteWorkout/partials/workout.html",
                controller: "WorkoutController as vm"
            }).when("/finish", {
                templateUrl: "/app/SevenMinuteWorkout/partials/finish.html"
            }).otherwise({
                redirectTo: "/start"
            });
        });
}());