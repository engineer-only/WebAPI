

module.exports = function(app)
{
	var pageRoute = require('../func/func');

	app.route('/')
		.get(pageRoute.getHomePage);
	app.route('/get')
		.get(pageRoute.getAllRulesByInterface);
	app.route('/insert')
		.post(pageRoute.createRuleByInterface);
	app.route('/update')
		.post(pageRoute.updateRuleByInterface);
	app.route('/delete')
		.post(pageRoute.deleteRuleByInterface);
	app.route('/statusActive')
		.get(pageRoute.statusActive);
	app.route('/statusPending')
		.get(pageRoute.statusPending);
	app.route('/statusStopped')
		.get(pageRoute.statusStopped);



// BELOW HERE IS WORKING
	app.route('/rules')
		.get(pageRoute.listAllRules)
		.post(pageRoute.createRule);

	app.route('/rules/:ruleId')
		.get(pageRoute.readRule)
		.put(pageRoute.updateRule)
		.delete(pageRoute.deleteRule);
};
