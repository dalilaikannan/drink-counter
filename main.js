const { app, BrowserWindow} = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    minWidth: 425,
    minHeight: 400,  
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.webContents.openDevTools();
  win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});