// -----------------------------------------------------------------------------
// ------------------------------ jQuery Tutorial ------------------------------
// retrieved from: https://www.w3schools.com/jquery/default.asp
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// To prevent any jQuery code from running
// before the document is finished loading

$(document).ready(function(){

   // jQuery methods go here...

});

// -----------------------------------------------------------------------------

$(this).hide() // hides the current element.

$("p").hide() // hides all <p> elements.

$(".test").hide() // hides all elements with class="test".

$("#test").hide() // hides the element with id="test".

// -----------------------------------------------------------------------------

// Button Hides all the "p" elements in the page

$("button").click(function(){
    $("p").hide();
});

// -----------------------------------------------------------------------------

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
$("#button5").mouseenter(function() // Executed when entered that area
{
    alert("You entered crazy area!");
});
$("#button5").mouseleave(function() // Executed when leaving the area
{
    alert("Bye! Now you are safe!");
});
$("#button5").mousedown(function() // Executed, when the left, middle or right mouse button is pressed down
{
    alert("Mouse down over p1!");
});
$("#button5").mouseup(function() // Executed, when the left, middle or right mouse button is released
{
    alert("Mouse down over p1!");
});

// hover: First function is executed when the mouse enters the HTML element, and the second
// function is executed when the mouse leaves the HTML element
$("#button5").hover(function() //
{
    alert("You entered p1!");
},
function()
{
    alert("Bye! You now leave p1!");
});

// Focus and Blur

$("input").focus(function() // function is executed when the form field gets focus
{
    $(this).css("background-color", "#cccccc");
});
$("input").blur(function() //function is executed when the form field loses focus
{
    $(this).css("background-color", "#c047e5");
});

// on() methods
// Attaches one or more event handlers for the selected elements
// Example Attach multiple event handlers to a <p> element
$("p").on(
{
    mouseenter: function()
    {
        $(this).css("background-color", "lightgray");
    },
    mouseleave: function()
    {
        $(this).css("background-color", "lightblue");
    },
    click: function()
    {
        $(this).css("background-color", "yellow");
    }
});


// -----------------------------------------------------------------------------

// Some of the jQuery Selectors
// retrieved from: https://www.w3schools.com/jquery/jquery_selectors.asp
// Reference : https://www.w3schools.com/jquery/jquery_ref_selectors.asp

$("*")	// Selects all elements
$(this)	// Selects the current HTML element
$("p.intro")	// Selects all <p> elements with class="intro"
$("p:first")	// Selects the first <p> element
$("ul li:first")	// Selects the first <li> element of the first <ul>
$("ul li:first-child")	// Selects the first <li> element of every <ul>
$("[href]")	// Selects all elements with an href attribute
$("a[target='_blank']")	// Selects all <a> elements with a target attribute value equal to "_blank"

// -----------------------------------------------------------------------------




















































































































//
