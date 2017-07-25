$(document).ready(function()
{
    var jsonURL = "http://localhost:3000/rules/";
    $("#convertInsert").click(function()
    {
        $("#mainForm").attr("action", "/insert");
        $("#convertInsert").prop( "disabled", true);
        $("#convertUpdate").prop( "disabled", false);
        $("#convertDelete").prop( "disabled", false);
        $("#fillFormButton").prop( "disabled", true);
        $("#deleteButton").prop( "disabled", true);
        $("#mongoId").prop( "disabled", true);
        $("#fillFormButton").prop( "disabled", true);
        $("#deleteButton").prop( "disabled", true);
        $("#insertButton").text("INSERT");
        $("#panelHeading").text("INSERT RULE");
        clearForm();
    });
    $("#convertUpdate").click(function()
    {
        $("#mainForm").attr("action", "/update");
        $("#convertInsert").prop( "disabled", false);
        $("#convertUpdate").prop( "disabled", true);
        $("#convertDelete").prop( "disabled", false);
        $("#fillFormButton").prop( "disabled", false);
        $("#deleteButton").prop( "disabled", true);
        $("#mongoId").prop( "disabled", false);
        $("#deleteButton").prop( "disabled", true);
        $("#insertButton").text("UPDATE");
        $("#panelHeading").text("UPDATE RULE");
    });

    $("#convertDelete").click(function()
    {
        $("#mainForm").attr("action", "/delete");
        $("#convertInsert").prop( "disabled", false);
        $("#convertUpdate").prop( "disabled", false);
        $("#convertDelete").prop( "disabled", true);
        $("#fillFormButton").prop( "disabled", true);
        $("#deleteButton").prop( "disabled", false);
        $("#mongoId").prop( "disabled", false);
        $("#fillFormButton").prop( "disabled", true);
        $("#deleteButton").prop( "disabled", false);
        $("#panelHeading").text("DELETE RULE");
        clearForm();
    });

    $("#fillFormButton").click(function()
    {
        var mongoRuleId = $("#mongoId").val();
        $.ajax(
        {
            url: jsonURL + mongoRuleId,
            dataType: 'json',
            success: function(res) {
                console.log(res);
                if(res.status == "ACTIVE")
                {
                    $("#activeRadio").prop("checked", true);
                }
                if(res.status == "PENDING")
                {
                    $("#pendingRadio").prop("checked", true);
                }
                if(res.status == "STOPPED")
                {
                    $("#stoppedRadio").prop("checked", true);
                }
                $("#description").val(res.description);
                $("#startTime").val(res.startTime);
                $("#scheduledTime").val(res.scheduledTime);
                $("#scheduleInterval").val(res.scheduleInterval);
                $("#executionTimes").val(res.executionTimes);
                if(res.requestTypes == "ADD")
                {
                    $("#addRadio").prop("checked", true);
                }
                if(res.requestTypes == "REMOVE")
                {
                    $("#removeRadio").prop("checked", true);
                }
                if(res.requestTypes == "EDIT")
                {
                    $("#editRadio").prop("checked", true);
                }
                if(res.requestTypes == "EXECUTE")
                {
                    $("#executeRadio").prop("checked", true);
                }
                $("#action").val(res.action);
                $("#parentAppId").val(res.parentAppId);
                $("#ruleStatus").val(res.ruleStatus);
                $("#endTime").val(res.endTime);
                // $("#type").val(res.type);
                if(res.type == "TRIGGERED")
                {
                    $("#triggeredRadio").prop("checked", true);
                }
                if(res.type == "MANUEL")
                {
                    $("#manuelRadio").prop("checked", true);
                }
                if(res.type == "SCHEDULED")
                {
                    $("#scheduledRadio").prop("checked", true);
                }
                $("#deviceId").val(res.deviceId);
                $("#condition").val(res.condition);
                $("#name").val(res.name);
            }
        });
    });

    function clearForm()
    {
        $("#mongoId").val("");
        $("#activeRadio").prop("checked", false);
        $("#pendingRadio").prop("checked", false);
        $("#stoppedRadio").prop("checked", false);
        $("#description").val("");
        $("#startTime").val("");
        $("#scheduledTime").val("");
        $("#scheduleInterval").val("");
        $("#executionTimes").val("");
        $("#addRadio").prop("checked", false);
        $("#removeRadio").prop("checked", false);
        $("#editRadio").prop("checked", false);
        $("#executeRadio").prop("checked", false);
        $("#action").val("");
        $("#parentAppId").val("");
        $("#ruleStatus").val("");
        $("#endTime").val("");
        $("#triggeredRadio").prop("checked", false);
        $("#manuelRadio").prop("checked", false);
        $("#scheduledRadio").prop("checked", false);
        $("#deviceId").val("");
        $("#condition").val("");
        $("#name").val("");
    }

    $("#deleteButton").click(function()
    {
        // var mongoRuleId = $("#mongoId").val();
        // $.ajax(
        // {
        //     url: jsonURL + mongoRuleId,
        //     type: "DELETE",
        //     success: function(res)
        //     {
        //         console.log("Rule successfully deleted.");
        //     }
        // });
        // clearForm();
    });



});
