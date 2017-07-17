var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('user-data').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('index', {items: resultArray});
    });
  });
});

router.post('/insert', function(req, res, next) {
  var item = {
    status: req.body.status,
    description: req.body.description,
    startTime: req.body.startTime,
    scheduledTime: req.body.scheduledTime,
    scheduleInterval: req.body.scheduleInterval,
    executionTimes: req.body.executionTimes,
    requestTypes: req.body.requestTypes,
    action: req.body.action,
    parentAppId: req.body.parentAppId,
    ruleStatus: req.body.ruleStatus,
    endTime: req.body.endTime,
    type: req.body.type,
    deviceID: req.body.deviceID,
    condition: req.body.condition,
    name: req.body.name
  };

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('user-data').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
    });
  });

  res.redirect('/');
});

router.post('/update', function(req, res, next) {
  var item = {
      status: req.body.status,
      description: req.body.description,
      startTime: req.body.startTime,
      scheduledTime: req.body.scheduledTime,
      scheduleInterval: req.body.scheduleInterval,
      executionTimes: req.body.executionTimes,
      requestTypes: req.body.requestTypes,
      action: req.body.action,
      parentAppId: req.body.parentAppId,
      ruleStatus: req.body.ruleStatus,
      endTime: req.body.endTime,
      type: req.body.type,
      deviceID: req.body.deviceID,
      condition: req.body.condition,
      name: req.body.name
  };
  var id = req.body.id;

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('user-data').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result) {
      assert.equal(null, err);
      console.log('Item updated');
      db.close();
    });
  });
});

router.post('/delete', function(req, res, next) {
  var id = req.body.id;

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('user-data').deleteOne({"_id": objectId(id)}, function(err, result) {
      assert.equal(null, err);
      console.log('Item deleted');
      db.close();
    });
  });
});

module.exports = router;
