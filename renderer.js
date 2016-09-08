var electron = require('electron');
var ipc = electron.ipcRenderer;
var $version = document.getElementById('version');
var $status = document.getElementById('status');

ipc.on('status-update', function(e, update, arguments){
	console.log(arguments);
	$status.innerHTML = update;
});

ipc.on('version-update', function(e, version){
	$version.innerHTML = version;
})

ipc.send('INIT');