'use strict';
const electron = require("electron");


const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({width: 100, height: 100, transparent: true, frame: false});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
