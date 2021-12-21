const {app, BrowserWindow} = require('electron');
const express = require('./express');
const icon = `file://${__dirname}/dist/win-app/favicon.ico`;
const html = `file://${__dirname}/dist/win-app/index.html`;

app.on('ready', () => {
  win = new BrowserWindow({
    icon: icon,
    autoHideMenuBar: true,
  })
  
  win.maximize();

  win.loadURL(`http://localhost:10000`);

  // win.webContents.openDevTools();

  win.on('closed', ()=> {
    win = null;
  });
  
});

app.on('window-all-closed', ()=> {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})