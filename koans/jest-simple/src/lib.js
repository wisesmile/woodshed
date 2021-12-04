function easySum(a, b) {
  return a + b;
}

function easyMod(a, b) {
  return a % b;
}

function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function flubba(d1) {
  var n = d1.getMonth();
  return n;
}

// https://stackoverflow.com/questions/2536379/difference-in-months-between-two-dates-in-javascript

function getMonthsBetween(date1, date2, roundUpFractionalMonths) {
  //Months will be calculated between start and end dates.
  //Make sure start date is less than end date.
  //But remember if the difference should be negative.
  var startDate = date1;
  var endDate = date2;
  var inverse = false;
  if (date1 > date2) {
    startDate = date2;
    endDate = date1;
    inverse = true;
  }

  //Calculate the differences between the start and end dates
  var yearsDifference = endDate.getFullYear() - startDate.getFullYear();
  var monthsDifference = endDate.getMonth() - startDate.getMonth();
  var daysDifference = endDate.getDate() - startDate.getDate();

  var monthCorrection = 0;
  //If roundUpFractionalMonths is true, check if an extra month needs to be added from rounding up.
  //The difference is done by ceiling (round up), e.g. 3 months and 1 day will be 4 months.
  if (roundUpFractionalMonths === true && daysDifference > 0) {
    monthCorrection = 1;
  }
  //If the day difference between the 2 months is negative, the last month is not a whole month.
  else if (roundUpFractionalMonths !== true && daysDifference < 0) {
    monthCorrection = -1;
  }

  return (
    (inverse ? -1 : 1) *
    (yearsDifference * 12 + monthsDifference + monthCorrection)
  );
}

module.exports = { easyMod, easySum, monthDiff, flubba, getMonthsBetween };
