$(document).ready(function()
{
    var jsonURL = "http://localhost:8000/rules/";

    $(".btn.btn-danger.btn-md").click(function()
    {
        var ruleID = $(this).attr("data-index");
        if (confirm("Are you sure you want to delete the rule and all of its components?"))
        {
            $.ajax(
            {
                url: jsonURL + ruleID,
                type: "DELETE",
                success: function(res) {
                    console.log("Rule : " + ruleID + " successfully deleted.");
                }
            });
        }
        location.reload();
    });

    $('#radioBtn a').on('click', function() {
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#'+tog).prop('value', sel);

        $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
    })
});

function onSignIn(googleUser) {
    var glp = '&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-user" aria-hidden="true">';
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    $('#userSection').html(profile.getName() + glp);
}

function signOut() {
    var glp = '&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-user" aria-hidden="true">';
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
    $('#userSection').html("User"+ glp);
}
