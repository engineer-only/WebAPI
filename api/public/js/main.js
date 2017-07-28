$(document).ready(function()
{
    var jsonURL = "http://localhost:8000/rules/";

    $(".btn.btn-default.btn-md").click(function() {
        var buttonType = $(this).attr("data-buttonType");
        if(buttonType == 1) {
            var ruleID = $(this).attr("data-index");
            if (confirm("Are you sure you want to delete the rule and all of its components?")) {
                $.ajax( {
                    url: jsonURL + ruleID,
                    type: "DELETE",
                    success: function(res) {
                        console.log("Rule : " + ruleID + " successfully deleted.");
                    }
                });
            }
            location.reload();
        }
    });

    $('#radioBtn a').on('click', function() {
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#'+tog).prop('value', sel);

        $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
    })



});
