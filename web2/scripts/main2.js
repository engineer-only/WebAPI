$(document).ready(function(){
    $("#button4").css("background-color","yellow");
    $("#text2Change").text("<Text to change>");
    $("#flip").click(function(){
        $("#panel").slideDown(5000);
    });
    $("#sDown").click(function()
    {
        $("#hide").slideDown();
    });
    $("#sUp").click(function()
    {
        $("#hide").slideUp();
    });
    $("#leftB").click(function()
    {
        $("#box").animate({right:'+=150px'});
    });
    $("#rightB").click(function()
    {
        $("#box").animate({right:'-=150px'});
    });
    $("#strech").click(function()
    {
        $("#box").animate({height: "200px"});
    });
    $("#lower").click(function()
    {
        $("#box").animate({height: "100px"});
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
        var x = Math.floor((Math.random() * 10));
        if(x % 2 === 1)
        {
            $(this).animate({height:'+=150px'});
        }
        else
        {
            $(this).animate({width:'+=150px'});
        }
    });
    $("#textChanger").click(function() // Change Text According to Form
    {
        $("#text2Change").text("Hello " + $("#test3").val() + "!");
    });
});
