var express = require('express');
var Nuts = require('nuts-serve').Nuts;
var token = process.env.TOKEN;
var refreshSecret = process.env.SECRET;

var app = express();

var nuts = Nuts({
    // GitHub configuration
    repository: "nelonoel/electron-auto-updating-app",
    token: token,
    refreshSecret: refreshSecret
});

app.use('/packages', nuts.router);
app.listen(4000);