/*
##STATEMENT:
Determine whether a given year is a leap year in the Gregorian calendar

##REQUIREMENTS:

isLeapYear should be a function.
isLeapYear() should return a boolean.
isLeapYear(2018) should return false.
isLeapYear(2016) should return true.
isLeapYear(2000) should return true.
isLeapYear(1900) should return false.
isLeapYear(1996) should return true.
isLeapYear(1800) should return false.
*/

function isLeapYear (year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
