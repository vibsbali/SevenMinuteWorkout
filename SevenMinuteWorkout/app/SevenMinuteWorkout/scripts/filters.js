﻿"use strict";

(function () {
    angular.module("7minWorkout")
        .filter("secondsToTime", function () {
            //returns a factory object
            return function (input) {
                var sec = parseInt(input, 10);
                if (isNaN(sec)) {
                    return "00:00:00";
                }

                var hours = Math.floor(sec / 3600);
                var minutes = Math.floor((sec - (hours * 3600)) / 60);
                var seconds = sec - (hours * 3600) - (minutes * 60);

                return ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2) + ":" + ("0" + seconds).substr(-2);
            }
        });

    angular.module("7minWorkout")
        .filter("lineBreak", function () {
            //returns a factory object
            return function (input) {
                var charArray = input.split("");

                for (var i = 0; i < charArray.length; i++) {
                    if (charArray[i] == '.') {
                        charArray[i] = "<br>";
                    }
                }
                var finalOutput = charArray.join("");
                return (finalOutput);
            }
        });
}());