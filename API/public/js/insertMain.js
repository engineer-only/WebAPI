$(document).ready(function()
{
    var jsonURL = "http://localhost:8000/rules/";
    $("#adjustPanel").hide();


    var add = $('#addActionField');
    var wrap = $('#wrap');

    $(add).click(function(){

        var fieldDivTagOpen = '<div class="col-md-5">';
        var interfaceHeader = '<h4><b>Interface Name: </b></h4>';
        var interfaceInputOpen = '<input name="interFaceName" type="text" class="form-control" size="50" placeholder="Interface Name:">';
        var fieldDivTagEnd = '</div>';
        var methodHeader = '<h4><b>Method Name: </b></h4>';
        var methodInputOpen = '<input name="methodName" type="text" class="form-control" size="50" placeholder="Method Name:"><br>';
        var buttonHTML = '<center><button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></button></center>';

        var field = "<div class=actionSection>" + fieldDivTagOpen + interfaceHeader + interfaceInputOpen + fieldDivTagEnd;
        field = field + fieldDivTagOpen + methodHeader + methodInputOpen + fieldDivTagEnd + buttonHTML + fieldDivTagEnd;
        console.log(field);
        $(wrap).append(field);
    });

    $('body').on('click', '.btn.btn-danger', function() {
        $(this).closest('.actionSection').remove();
    });

    $("#insertButton").click(function(){

        var data = $("#wrap .form-control");
        var index = 0;
        var actionArray = [];
        var actionCouple = [];
        data.each(function() {
            console.log("Index : " + index+ " Value : " + $(this).val());
            if(index === 0)
            {
                actionCouple.push($(this).val());
                index++;
            }
            else if (index === 1)
            {
                actionCouple.push($(this).val());
                actionArray.push(actionCouple);
                actionCouple = [];
                index = 0;
            }
        });
        console.log(actionArray);
        $("#insertButton").prop("value",actionArray);
        $("#mainForm" ).submit();
    });


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
