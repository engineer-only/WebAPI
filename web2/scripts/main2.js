$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
    $("#button1").click(function() // Hide all "p" elements
    {
        $("p").hide();
    });
    $("#button2").click(function() // Hide element with id="test2"
    {
        $("#test2").hide();
    });
    $("#button3").click(function() // Hide elements with class="tester"
    {
        $(".test2").hide();
    });
});
