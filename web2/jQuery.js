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
// hide("slow")/hide("fast") speed of the hiding
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

// Toggle method
// Toggle between the hide() and show()

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

// jQuery Effect Methods
// Retrieved from : https://www.w3schools.com/jquery/jquery_ref_effects.asp
// Examples could be found

animate();	//Runs a custom animation on the selected elements
clearQueue();	// Removes all remaining queued functions from the selected elements
delay(); //	Sets a delay for all queued functions on the selected elements
dequeue(); //	Removes the next function from the queue, and then executes the function
fadeIn(); //	Fades in the selected elements
fadeOut(); //	Fades out the selected elements
fadeTo(); //	Fades in/out the selected elements to a given opacity
fadeToggle(); //	Toggles between the fadeIn() and fadeOut() methods
finish(); //	Stops, removes and completes all queued animations for the selected elements
hide(); //	Hides the selected elements
queue(); //	Shows the queued functions on the selected elements
show(); //	Shows the selected elements
slideDown(); //	Slides-down (shows) the selected elements
slideToggle(); //	Toggles between the slideUp() and slideDown() methods
slideUp(); //	Slides-up (hides) the selected elements
stop(); //	Stops the currently running animation for the selected elements
toggle(); //	Toggles between the hide() and show() methods

// Multiple animations in one query:
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation


// -----------------------------------------------------------------------------


text(); // Sets or returns the text content of selected elements
html(); // Sets or returns the content of selected elements (including HTML markup)
val(); // Sets or returns the value of form fields

// -----------------------------------------------------------------------------

$("#button1").click(function()
{
    alert("Text: " + $("#test").text()); // Sets or returns the text content of selected elements
});
$("#button2").click(function()
{
    alert("HTML: " + $("#test").html()); // Sets or returns the content of selected elements (including HTML markup)
});
$("button3").click(function()
{
    alert("Value: " + $("#test").val()); // Sets or returns the value of FORM fields
});
$("button4").click(function()
{
    alert($("#w3s").attr("href")); // Used to get attribute values (For example show link)
});

// HTML Part

// <p>Name: <input type="text" id="test" value="Mickey Mouse"></p>
// <button>Show Value</button>

// -----------------------------------------------------------------------------

// Remove DOM elements

$("removeButton").click(function()
{
    $("#div1").remove();
});

// Remove the element with ID="div1"
// $("p").remove(".test");
// Removes all <p> elements with class="test"

// Empty DOM elements

$("#div1").empty();

// Empty() method removes the child elements of the selected element(s)