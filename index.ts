const {app,BrowserWindow} = require('electron')

let win = null
app.on('ready',() => {
	  win = new BrowserWindow({
		 	width:800,
		 	height:600,
		 	webPreferences: {
				nodeIntegration: true,
				contextIsolation: false,
				enableRemoteModule: true
			}
	})
	win.loadFile('index.html')
	app.on('closed',() => {
		  app.exit()
		  win = null
	})
})
