$(document).ready(function()
{
    var jsonURL = "http://localhost:8000/rules/";
    $("#adjustPanel").hide();

    var mongoRuleId = $("#mongoIdFooter").text();
    mongoRuleId = mongoRuleId.slice(17,41);
    $.ajax({
        url: jsonURL + mongoRuleId,
        dataType: 'json',
        success: function(res) {

            $("#description").val(res.description);
            $("#name").val(res.name);


            $("#startTime").val(res.startTime);
            $("#scheduledTime").val(res.scheduledTime);
            $("#scheduleInterval").val(res.scheduleInterval);
            $("#executionTimes").val(res.executionTimes);
            $("#endTime").val(res.endTime);

            $("#parentAppId").val(res.parentAppId);         // NOT SHOWN TO USER DEFAULT VALUE ASSIGNED
            $("#deviceId").val(res.deviceId);               // NOT SHOWN TO USER DEFAULT VALUE ASSIGNED
            $("#status").val(res.ruleStatus);                   // NOT SHOWN TO USER SAME WITH RULE STATUS


            $("#condition").val(res.condition);
            $("#action").val(res.action);


            if(res.ruleStatus == "ACTIVE")
            {
                $("#ruleStatus").prop("value", "ACTIVE");
                $("#status").prop("value", "ACTIVE");
                $("#activeRadio").prop("checked", true);
                $("#activeRule").removeClass('notActive').addClass('active');
            }
            if(res.ruleStatus == "PENDING")
            {
                $("#ruleStatus").prop("value", "PENDING");
                $("#status").prop("value", "PENDING");
                $("#pendingRadio").prop("checked", true);
                $("#pendingRule").removeClass('notActive').addClass('active');
            }
            if(res.ruleStatus == "STOPPED")
            {
                $("#ruleStatus").prop("value", "STOPPED");
                $("#status").prop("value", "STOPPED");
                $("#stoppedRadio").prop("checked", true);
                $("#stoppedRule").removeClass('notActive').addClass('active');
             }

            if(res.type == "TRIGGERED")
            {
                $("#triggeredSwitch").prop("value", "TRIGGERED");
                $("#triggeredSwitch").prop("checked", true);
                $("#triggeredSwitch").removeClass('notActive').addClass('active');
                triggeredSwitch();
            }
            if(res.type == "SCHEDULED")
            {
                $("#scheduledSwitch").prop("value", "SCHEDULED");
                $("#scheduledSwitch").prop("checked", true);
                $("#scheduledSwitch").removeClass('notActive').addClass('active');
                scheduledSwitch();
            }
            if(res.type == "MANUEL")
            {
                $("#manuelSwitch").prop("value", "MANUEL");
                $("#manuelSwitch").prop("checked", true);
                $("#manuelSwitch").removeClass('notActive').addClass('active');
                manuelSwitch();
            }
        }
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
        triggeredSwitch();
    });

    $("#scheduledSwitch").click(function()
    {
        scheduledSwitch();
    });

    $("#manuelSwitch").click(function()
    {
        manuelSwitch();
    });




    function triggeredSwitch()
    {
        $("#adjustPanel").show();
        $("#conditionLabel").show();
        $("#condition").show();

        $("#startTimeLabel").hide();
        $("#scheduledTimeLabel").hide();
        $("#scheduleIntervalLabel").hide();
        $("#executionTimesLabel").hide();
        $("#endTimeLabel").hide();
        $("#startTime").hide();
        $("#scheduledTime").hide();
        $("#scheduleInterval").hide();
        $("#executionTimes").hide();
        $("#endTime").hide();


        $("#startTime").prop("value", "");
        $("#scheduledTime").prop("value", "");
        $("#scheduleInterval").prop("value", "");
        $("#executionTimes").prop("value", "");
        $("#endTime").prop("value", "");
    }

    function scheduledSwitch()
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
    }

    function manuelSwitch()
    {
        $("#adjustPanel").hide();

        $("#startTime").prop("value", "");
        $("#scheduledTime").prop("value", "");
        $("#scheduleInterval").prop("value", "");
        $("#executionTimes").prop("value", "");
        $("#endTime").prop("value", "");
        
        $("#condition").prop("value", "");
    }










});
