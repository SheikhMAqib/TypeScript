"use strict";
// ENUM type : JavaScriot dosent Support enum
// enum weekdays {
//    Monday =  "Mo" ,
//    Thseday = "Tu",
//    Wednesday = "We",
//    Thursday = "Tu",
//    Friday = "Fr",
//    Saturday = "Sa",
//    Sunday = "Su",
// }
var weekdays;
(function (weekdays) {
    weekdays[weekdays["Monday"] = 0] = "Monday";
    weekdays[weekdays["Thseday"] = 1] = "Thseday";
    weekdays[weekdays["Wednesday"] = 2] = "Wednesday";
    weekdays[weekdays["Thursday"] = 3] = "Thursday";
    weekdays[weekdays["Friday"] = 4] = "Friday";
    weekdays[weekdays["Saturday"] = 5] = "Saturday";
    weekdays[weekdays["Sunday"] = -1] = "Sunday";
})(weekdays || (weekdays = {}));
// console.log(weekdays.Sunday);
// console.log(weekdays["Sunday"]);
console.log(weekdays);
