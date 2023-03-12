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

enum weekdays {
   Monday   = 0,
   Thseday ,
   Wednesday ,
   Thursday ,
   Friday  ,
   Saturday  ,
   Sunday = weekdays.Monday -1,
}

// console.log(weekdays.Sunday);
// console.log(weekdays["Sunday"]);



console.log (weekdays);
