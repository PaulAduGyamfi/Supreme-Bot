console.log("GG in the chat");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url  = require("url");

let win;

function createWindow(){
    win = new BrowserWindow({titleBarStyle: 'hidden', maxWidth: 800, maxHeight: 600, frame: true, webPreferences: {
        nodeIntegration: true
      }});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'public/index.html'),
        protocol: 'file',
        slashes: true
    }));


   win.webContents.openDevTools();

    win.on('closed', ()=>{
        win = null;
    })
}


app.on('ready', createWindow);

app.on('window-all-cllosed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
});

app.on('activate', ()=>{
    if(win === null){
        createWindow()
    }
});