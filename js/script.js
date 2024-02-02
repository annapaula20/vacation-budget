let tripInfoButton = document.querySelector(".trip-info");
let dailyBudget = document.querySelector(".daily-budget");

let tripInfo = function () {
  let totalBudget = Number(prompt("What is your total budget for the trip?"));
  let accomodation = Number(prompt("How much will you need for accomodation?"));
  let numDays = Number(prompt("How many days will the trip be?"));
  calculateDailyBudget(totalBudget, accomodation, numDays);
};

let calculateDailyBudget = function (totalBudget, accomodation, numDays) {
  let daily = ((totalBudget - accomodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} per day on food and fun!`;
};
tripInfoButton.addEventListener("click", tripInfo);
