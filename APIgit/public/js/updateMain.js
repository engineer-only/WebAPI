$(document).ready(function()
{
    var jsonURL = "http://localhost:8000/rules/";
    $("#adjustPanel").hide();

    var mongoRuleId = $("#mongoIdHeader").text();
    mongoRuleId = mongoRuleId.slice(17,41);
    $.ajax({
        url: jsonURL + mongoRuleId,
        dataType: 'json',
        success: function(res) {

            var fieldDivTagOpen = '<div class="col-md-5">';
            var interfaceHeader = '<h4><b>Interface Name: </b></h4>';
            var interfaceInputOpen = '<input name="interFaceName" type="text" class="form-control" size="50" placeholder="Interface Name:">';
            var fieldDivTagEnd = '</div>';
            var methodHeader = '<h4><b>Method Name: </b></h4>';
            var methodInputOpen = '<input name="methodName" type="text" class="form-control" size="50" placeholder="Method Name:"><br>';
            var buttonHTML = '<center><button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></button></center>';
            var field = "<div class=actionSection>" + fieldDivTagOpen + interfaceHeader + interfaceInputOpen + fieldDivTagEnd;
            field = field + fieldDivTagOpen + methodHeader + methodInputOpen + fieldDivTagEnd + buttonHTML + fieldDivTagEnd;


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
            var i = 1;


            while(i < res.action.length)
            {
                $(wrap).append(field);
                i++;
            }
            var data = $("#wrap .form-control");
            var index = 0;
            var i = 0;
            data.each(function() {
                if(index === 0)
                {
                    $(this).val(res.action[i].interFaceName)
                    index++;
                }
                else if(index === 1)
                {
                    $(this).val(res.action[i].methodName)
                    index = 0;
                    i++;
                }
            });

            if(res.ruleStatus == "ACTIVE")
            {
                $("#ruleStatus").prop("value", "ACTIVE");
                $("#status").prop("value", "ACTIVE");
                $("#activeRule").removeClass('notActive').addClass('active');
            }
            if(res.ruleStatus == "PENDING")
            {
                $("#ruleStatus").prop("value", "PENDING");
                $("#status").prop("value", "PENDING");
                $("#pendingRule").removeClass('notActive').addClass('active');
            }
            if(res.ruleStatus == "STOPPED")
            {
                $("#ruleStatus").prop("value", "STOPPED");
                $("#status").prop("value", "STOPPED");
                $("#stoppedRule").removeClass('notActive').addClass('active');
             }




            if(res.type == "TRIGGERED")
            {
                $("#type").prop("value", "TRIGGERED");
                $("#triggeredRule").prop("value", "TRIGGERED");
                $("#triggeredRule").prop("checked", true);
                $("#triggeredRule").removeClass('notActive').addClass('active');
                triggeredSwitch();
            }
            if(res.type == "SCHEDULED")
            {
                $("#type").prop("value", "SCHEDULED");
                $("#scheduledRule").prop("value", "SCHEDULED");
                $("#scheduledRule").prop("checked", true);
                $("#scheduledRule").removeClass('notActive').addClass('active');
                scheduledSwitch();
            }
            if(res.type == "MANUEL")
            {
                $("#type").prop("value", "MANUEL");
                $("#manuelRule").prop("value", "MANUEL");
                $("#manuelRule").prop("checked", true);
                $("#manuelRule").removeClass('notActive').addClass('active');
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


    $("#triggeredRule").click(function()
    {
        triggeredSwitch();
    });

    $("#scheduledRule").click(function()
    {
        scheduledSwitch();
    });

    $("#manuelRule").click(function()
    {
        manuelSwitch();
    });




    function triggeredSwitch()
    {
        $("#adjustPanel").show();
        $("#conditionLabel").show();
        $("#condition").show();
        $("#type").prop("value", "TRIGGERED");

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
        $("#type").prop("value", "SCHEDULED");

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
        $("#type").prop("value", "MANUEL");

        $("#startTime").prop("value", "");
        $("#scheduledTime").prop("value", "");
        $("#scheduleInterval").prop("value", "");
        $("#executionTimes").prop("value", "");
        $("#endTime").prop("value", "");

        $("#condition").prop("value", "");
    }


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

    $("#updateButton").click(function(){

        var data = $("#wrap .form-control");
        $("#action").prop("value", []);
        var index = 0;
        var actionAllArray = [];
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
        $("#mainForm" ).submit();
    });







});
