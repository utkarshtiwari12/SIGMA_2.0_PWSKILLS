/* Let’s say you are working for an event management company. As a web developer, you need to build a countdown timer for an upcoming event. You need to build a function that calculates the number of days between the current date and the event's start date. */

// function calcRemainingDays(eventDate) //this function claculates the rough/approx number of remaining days, input format must be "yyyy-mm-dd" only.
// {
//     const date = new Date();

//     const currentDay = date.getDate();
//     const currentMonth = date.getMonth()+1;
//     const currentYear = date.getFullYear();

//     const eventYear = Number(eventDate.slice(0, 4));
//     const eventMonth = Number(eventDate.slice(5, 7));
//     const eventDay = Number(eventDate.slice(8, 10));

//     let remainYear = Math.abs(eventYear - currentYear);
//     let remainMonth = Math.abs(eventMonth - currentMonth);
//     let remainDay = Math.abs(eventDay - currentDay);

//     let remainingDays = remainYear * 365 + remainMonth * 30 + remainDay;

//     return remainingDays;
// }

// const eventDate = "2024-06-12";

// console.log(calcRemainingDays(eventDate));

function calculateDaysUntilEvent(eventStartDate) {
  // Get the current date
    const currentDate = new Date();

  // Convert the event start date to a Date object
    const startDate = new Date(eventStartDate);

  // Calculate the difference in milliseconds between the current date and the event start date
    const timeDifference = startDate.getTime() - currentDate.getTime();

  // Convert the time difference from milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
}

const eventStartDate = "2024-06-12"; // Date format: "YYYY-MM-DD"

const daysUntilEvent = calculateDaysUntilEvent(eventStartDate);

console.log(`Number of days until the event: ${daysUntilEvent}`);

