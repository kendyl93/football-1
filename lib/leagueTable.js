var request = require('request');

function LeagueTable(options,callback) {	
	this.leagueTable = null;
	var self = this;
	request(options, function (error, response, body) {
		self.leagueTable = JSON.parse(body);
		// console.log(self.leagueTable.standing);
		console.log("init LeagueTable");
		callback();
	});
}


LeagueTable.prototype.getTableOnlyNames = function () {
	var arr = [];
	console.log("here we go ")
	for (var i = this.leagueTable.standing.length - 1; i >= 0; i--) {
		var item = this.leagueTable.standing[i];
		arr.push(item.teamName);
	}
	return arr;
};

module.exports = LeagueTable;