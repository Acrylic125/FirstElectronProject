const { app, Menu, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  console.log("Window Created!");
  // Create the browser window
  const mainWindow = new BrowserWindow({
    width: 730,
    height: 450,
    resizable: true,
    titleBarStyle: "hidden",
    fullscreenWindowTitle: "Full Screen!",
    fullscreenable: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  let menu = Menu.buildFromTemplate([{
    label: 'file',
    submenu: [
      {
        label: "Exit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q", 
        click() {
          app.quit();
        }
      }
    ]
  }]);
  Menu.setApplicationMenu(menu);
  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
