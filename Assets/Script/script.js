$(document).ready(function () {

    function getCurrentDay() {
        const currentDay = moment().format("dddd, MMMM Do");
        $("#currentDay").text(currentDay);

    }

    getCurrentDay();

})