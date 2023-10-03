const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
  return function(value) {
    return fareMultiplier * value;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, function1) {
  return function1(drivers);
}

function selectDifferentDrivers(driversArray, function2) {
    return function2(driversArray);
}