var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var win = null;
app.on('ready', function () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    require('@electron/remote/main').initialize();
    require('@electron/remote/main').enable(win.webContents);
    win.loadFile('../index.html');
    app.on('closed', function () {
        app.exit();
        win = null;
    });
});
//# sourceMappingURL=main.js.map