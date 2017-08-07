var express = require('express');
var mongoose = require('mongoose');
var Rule = mongoose.model('Rules');
var http = require('http');
var fs = require('fs');
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var router = express.Router();
var url = 'mongodb://localhost/rules';

// -----------------------------------------------------------------------------
// ----------------------- DO NOT TOUCH THE LINES BELOW ------------------------
// ------------------------ THEY ARE PERFECTLY WORKING -------------------------
// -----------------------------------------------------------------------------

/* GO TO HOME PAGE */
exports.getHomePage = function(req, res)
{
    var resultArray = [];
    var totalRule = 0, activeRule = 0, pendingRule = 0, stoppedRule = 0;
    mongo.connect(url, function(err, db)
    {
        var cursor = db.collection('rules').find();
        cursor.forEach(function(doc, err)
        {
            assert.equal(null, err);
            resultArray.push(doc);
            totalRule = totalRule + 1;
            if(doc.ruleStatus == "ACTIVE")
                activeRule += 1;
            if(doc.ruleStatus == "PENDING")
                pendingRule += 1;
            if(doc.ruleStatus == "STOPPED")
                stoppedRule += 1;
        }, function()
        {
            db.close();
            res.render('index', {items: resultArray, totalNumber: totalRule, activeNumber:activeRule, pendingNumber: pendingRule, stoppedNumber: stoppedRule});
        });
    });
};


/* ============================= LIST ALL RULES ============================= */
exports.getRulesByInterface = function(req, res, next)
{
    var statusCondition = req.body.statusCondition;
    var resultArray = [];
    var totalRule = 0;
    var activeRule = 0;
    var pendingRule = 0;
    var stoppedRule = 0;
    mongo.connect(url, function(err, db)
    {
        var cursor;
        switch(statusCondition) {
            case "all":
                cursor = db.collection('rules').find();
                break;
            case "active":
                cursor = db.collection('rules').find({ruleStatus : "ACTIVE"});
                break;
            case "pending":
                cursor = db.collection('rules').find({ruleStatus : "PENDING"});
                break;
            case "stopped":
                cursor = db.collection('rules').find({ruleStatus : "STOPPED"});
                break;
            default:
                cursor = db.collection('rules').find();
        }
        cursor.forEach(function(doc, err)
        {
            assert.equal(null, err);
            resultArray.push(doc);
            totalRule = totalRule + 1;
            if(doc.ruleStatus == "ACTIVE")
                activeRule += 1;
            if(doc.ruleStatus == "PENDING")
                pendingRule += 1;
            if(doc.ruleStatus == "STOPPED")
                stoppedRule += 1;
        }, function()
        {
            db.close();
            res.render('index', {items: resultArray, totalNumber: totalRule, activeNumber:activeRule, pendingNumber: pendingRule, stoppedNumber: stoppedRule});
        });
    });
};

/* CREATE A RULE USING INTERFACE */
exports.createRuleByInterface = function (req, res)
{
    var newRule = new Rule(req.body);
    var interFaceNameArray = req.body.interFaceName;
    var i = 0;

    if(interFaceNameArray instanceof Array)
    {
        while(i < req.body.interFaceName.length)
        {
            var interFaceNameString =  req.body.interFaceName[i];
            var methodNameString =  req.body.methodName[i];
            var actionItem = {
                "interFaceName": interFaceNameString,
                "methodName": methodNameString
            };
            newRule.action.push(actionItem);
            i++;
        }
        newRule.save(function(err, Rule)
        {
            if (err)
                res.send(err);
        });
    }
    else
    {
        var interFaceNameString =  req.body.interFaceName;
        var methodNameString =  req.body.methodName;
        var actionItem = {
            "interFaceName": interFaceNameString,
            "methodName": methodNameString
        };
        newRule.action.push(actionItem);
        newRule.save(function(err, Rule)
        {
            if (err)
                res.send(err);
        });
    }
    res.redirect('/');
};

exports.updateRuleByInterface = function(req, res, next)
{
    var actionFiledNumber = req.body.interFaceName.length;
    var interFaceNameArray = req.body.interFaceName;
    var methodNameArray = req.body.methodName;
    var id = req.body.ruleMongoDbId;
    var item = req.body;

    delete item.ruleMongoDbId;
    delete item.interFaceName;
    delete item.methodName;


    var newRule = new Rule(item);

    if(interFaceNameArray instanceof Array)
    {
        var i = 0;
        while(i < actionFiledNumber)
        {
            var interFaceNameString =  interFaceNameArray[i];
            var methodNameString =  methodNameArray[i];
            var actionItem = {
                "methodName": methodNameString,
                "interFaceName": interFaceNameString
            };
            newRule.action.push(actionItem);
            i++;
        }
    }
    else
    {
        var interFaceNameString =  interFaceNameArray;
        var methodNameString =  methodNameArray;
        var actionItem = {
            "methodName": methodNameString,
            "interFaceName": interFaceNameString
        };
        newRule.action.push(actionItem);
    }

    item = newRule;
    item._id = id;

    mongo.connect(url, function(err, db)
    {
        assert.equal(null, err);
        db.collection('rules').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result)
        {
            assert.equal(null, err);
        });
    });
    res.redirect('/');
};


/* DELETE RULE USING INTERFACE THEN REDIRECT TO GET RULES  */
exports.deleteRuleByInterface = function(req, res, next)
{
    var id = req.body.id;

    mongo.connect(url, function(err, db) {
      assert.equal(null, err);
      db.collection('rules').deleteOne({"_id": objectId(id)}, function(err, result) {
        assert.equal(null, err);
        console.log('Item deleted');
        db.close();
      });
    });
    var resultArray = [];
    mongo.connect(url, function(err, db)
    {
        var cursor = db.collection('rules').find();
        cursor.forEach(function(doc, err)
        {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function()
        {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
};

exports.goToInsertPage = function(req, res, next)
{
    res.render('insertPage');
};

exports.goToUpdatePage = function(req, res, next)
{
    var resultArray = [];
    var mongoRuleId = req.body.ruleId;
    res.render('updatePage', {mongoId: mongoRuleId});
};


/* LIST ALL THE RULES WITH GET REQUEST */
exports.listAllRules = function(req, res)
{
    Rule.find({}, function(err, Rule)
    {
        if (err)
            res.send(err);
        res.json(Rule);
    });
};

/* CREATE A RULE WITH POST REQUEST */
exports.createRule = function(req, res)
{
    var newRule = new Rule(req.body);
    console.log(req.body);
    newRule.save(function(err, Rule)
    {
        if (err)
            res.send(err);
        res.json(Rule);
    });
    console.log("Rule successfully added");
};

/* READ A RULE WITH ITS MONGODB ID */
exports.readRule = function(req, res)
{
    Rule.findById(req.params.ruleId, function(err, Rule)
    {
        if (err)
            res.send(err);
        res.json(Rule);
    });
};

/* UPDATE A RULE WITH ITS MONGODB ID */
exports.updateRule = function(req, res)
{
    Rule.findOneAndUpdate({_id:req.params.ruleId}, req.body, {new: true}, function(err, Rule)
    {
        if (err)
            res.send(err);
        res.json(Rule);
  });
};


/* DELETE A RULE WITH ITS MONGODB ID */
exports.deleteRule = function(req, res)
{
    Rule.remove({_id: req.params.ruleId}, function(err, Rule)
    {
        if (err)
            res.send(err);
        res.json({ message: 'Rule successfully deleted' });
    });
};
