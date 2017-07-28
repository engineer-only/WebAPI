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

/* LIST ALL RULES */
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
    console.log(newRule);

    newRule.save(function(err, Rule)
    {
        if (err)
            res.send(err);
    });
    console.log("Rule successfully added.");
    res.redirect('/');
};

exports.updateRuleByInterface = function(req, res, next)
{
    var resultArray = [];
    var item = req.body;
    var id = req.body.ruleMongoDbId;
    delete item.ruleMongoDbId;

    mongo.connect(url, function(err, db)
    {
        assert.equal(null, err);
        db.collection('rules').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result)
        {
            assert.equal(null, err);
        });


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
        db.close();
    });
};

/* DELETE RULE USING INTERFACE THEN REDIRECT TO GET VIEW */
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

exports.deleteRule = function(req, res)
{
    Rule.remove({_id: req.params.ruleId}, function(err, Rule)
    {
        if (err)
            res.send(err);
        res.json({ message: 'Rule successfully deleted' });
    });
};
