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
        $(".tester").hide();
    });
    $("#button4").click(function() // Alert
    {
        alert("You alerted browser!");
    });
    $("#button5").dblclick(function() // Executed when double clicked
    {
        $(this).hide();
    });
    $("#button6").mouseenter(function() // Executed when entered that area
    {
        alert("You entered area!");
    });
});
