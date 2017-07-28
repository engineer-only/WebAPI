$(document).ready(function()
{
    var jsonURL = "http://localhost:8000/rules/";
    $("#adjustPanel").hide();


    // var mongoRuleId = $("#panelHeading").text();
    // mongoRuleId = mongoRuleId.slice(13,37);


    $("#activeRule").click(function()
    {
        $("#status").prop("value", "ACTIVE");
    });

    $("#pendingRule").click(function()
    {
        $("#status").prop("value", "PENDING");
    });

    $("#stoppedRule").click(function()
    {
        $("#status").prop("value", "STOPPED");
    });



    $("#triggeredSwitch").click(function()
    {
        $("#adjustPanel").show();

        $("#startTimeLabel").hide();
        $("#startTimeLabel").prop("value", "");

        $("#scheduledTimeLabel").hide();
        $("#scheduledTimeLabel").prop("value", "");

        $("#scheduleIntervalLabel").hide();
        $("#scheduleIntervalLabel").prop("value", "");

        $("#executionTimesLabel").hide();
        $("#executionTimesLabel").prop("value", "");

        $("#endTimeLabel").hide();
        $("#endTimeLabel").prop("value", "");

        $("#startTime").hide();
        $("#startTime").prop("value", "");

        $("#scheduledTime").hide();
        $("#scheduledTime").prop("value", "");

        $("#scheduleInterval").hide();
        $("#scheduleInterval").prop("value", "");

        $("#executionTimes").hide();
        $("#executionTimes").prop("value", "");

        $("#endTime").hide();
        $("#endTime").prop("value", "");

        $("#conditionLabel").show();
        $("#condition").show();
    });

    $("#scheduledSwitch").click(function()
    {
        $("#adjustPanel").show();
        $("#startTimeLabel").show();
        $("#scheduledTimeLabel").show();
        $("#scheduleIntervalLabel").show();
        $("#executionTimesLabel").show();
        $("#endTimeLabel").show();
        $("#startTime").show();
        $("#scheduledTime").show();
        $("#scheduleInterval").show();
        $("#executionTimes").show();
        $("#endTime").show();
        $("#conditionLabel").hide();
        $("#condition").hide();
        $("#condition").prop("value", "");
    });

    $("#manuelSwitch").click(function()
    {
        $("#startTime").prop("value", "");
        $("#scheduledTime").prop("value", "");
        $("#scheduleInterval").prop("value", "");
        $("#executionTimes").prop("value", "");
        $("#endTime").prop("value", "");
        $("#condition").prop("value", "");
        $("#action").prop("value", "");
        $("#adjustPanel").hide();
    });





});
