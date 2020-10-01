$(document).ready(function() {

    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, value)
    })

    function updateHour() {
        var currentTime = moment().hours()
        $(".time-block").each(function() {
            var hour = 

        })
    }


})
