$(document).ready(function () {

    startIt();

    //organize function start
    function startIt() {
        getCurrentDay();
        timeCheck();
        loadDescription()
    }



    //====================================================BUTTONS=====================================================================

    //Save button function - onclick - to save data in local storage
    $(".saveBtn").on("click", function () {

        //identify data-time number from each description class
        const timeId = $(this).siblings(".description").attr("data-time");

        //indentify user input in each description based on time id
        const userInput = $(this).siblings(".description").val();

        //save information in local storage
        localStorage.setItem(timeId, userInput);
    })

    //==========================================================FUNCTIONS==================================================================

    //Retrieve the description/task text from local storage
    function loadDescription() {

        //get array of description elements
        const descriptions = $(".description")

        //for loop w/ each element
        $(descriptions).each(function (i, element) {

            //retreives data from local storage based on time id from data-time
            const timeId = $(element).attr("data-time");

            //get description from each unique element tag
            const description = localStorage.getItem(timeId);

            //this sets the text back in each unique element (i.e. in each specific hour)
            $(element).text(description);
        })
    }

    //get current date
    function getCurrentDay() {
        const currentDay = moment().format("dddd, MMMM Do");
        $("#currentDay").text(currentDay);

    };

    //get current hour
    function timeCheck() {
        const currentHour = moment().hours();

        //target description tag
        const descriptions = $(".description");

        //loop thorugh hours
        $(descriptions).each(function (index, element) {

            //current time that is stored on the description block
            const currentTime = parseInt($(element).attr("data-time"));

            //if currentTime(time on our calendar) is less than current hour - then it is in the past... current time(calendar) = current hour -> present | and finally everything else = future
            if (currentTime < currentHour) {
                $(element).addClass("past");
            }
            else if (currentTime == currentHour) {
                $(element).addClass("present");
            }
            else {
                $(element).addClass("future");
            }
        });


    };



})