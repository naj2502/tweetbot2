'use strict';

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'Zv9fy2hh2voTOVOk7uAD3F5ne',
  consumer_secret: 'hylbBhSaGADiN7efcvOZHewefurDn7H2n5Zcx6HV1DnJaz4Ll5',
  access_token_key: '710826791250821120-1J0wdUf7fIKJxqmMHjLovFAWCABdxyC',
  access_token_secret: '1fvEbQmHCtKlM05ZQeDGFkmDbh77Tp3VzTDQr87Hg9OPx'
});

/*
const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () 
{
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() 
{
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () 
{
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') 
  {
    app.quit();
  }
});

app.on('activate', function () 
{
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) 
  {
    createWindow();
  }

});

*/
var params = {screen_name: 'metisgoblin'};

client.get('statuses/user_timeline', params, function(error, tweets, response)
{    
  if (!error)
    console.log(tweets);
    else
        console.log(error);
    
});
