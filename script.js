$(document).ready(function() {

    $(".saveBtn").on("click", function() {                 //listener event for the save button
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, value)        //setting the local storage
    })

    function updateHour() {
        var currentTime = moment().hours()
        $(".time-block").each(function() {
            var hour = parseInt($(this).attr("id").split("-")[1])

            if (hour < currentTime){
                $(this).addClass("past")       

            }else if(hour === currentTime) {
                $(this).removeClass("past")

                $(this).addClass("present")

            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")

            }

        })
    }
        updateHour();

        var interval = setInterval(updateHour, 15000)      //updates the hour

        $("#hour-9 .description").val(localStorage.getItem("hour-9"))
        $("#hour-10 .description").val(localStorage.getItem("hour-10"))
        $("#hour-11 .description").val(localStorage.getItem("hour-11"))         //where the user input is saved to local storage
        $("#hour-12 .description").val(localStorage.getItem("hour-12"))
        $("#hour-13 .description").val(localStorage.getItem("hour-13"))
        $("#hour-14 .description").val(localStorage.getItem("hour-14"))
        $("#hour-15 .description").val(localStorage.getItem("hour-15"))
        $("#hour-16 .description").val(localStorage.getItem("hour-16"))
        $("#hour-17 .description").val(localStorage.getItem("hour-17"))

        $("#currentDay").text(moment().format("dddd, MMMM Do"));   

})
