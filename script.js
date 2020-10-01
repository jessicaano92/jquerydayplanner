$(document).ready(function() {

    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, value)
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

            }

        })
    }


})
