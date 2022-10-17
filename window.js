const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = async () => {
  const win = await new BrowserWindow({
    width: 1280,
    height: 9*70,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
  }
  });

  win.loadFile('Web/index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});