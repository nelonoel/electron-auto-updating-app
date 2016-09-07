var express = require('express');
var Nuts = require('nuts-serve').Nuts;

var app = express();

var nuts = Nuts({
    // GitHub configuration
    repository: "nelonoel/electron-auto-updating-app",
    token: "5fde5932506ad21661f4072a76551c39ecbf03ba",
    refreshSecret: '5fde5932506ad21661f4072a76551c39ecbf03ba' // github webhook
});

app.use('/packages', nuts.router);
app.listen(4000);