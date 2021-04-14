const {app, BrowserWindow} = require('electron');

function createWindow() {
  // 创建浏览器窗口。
  const win = new BrowserWindow({
    width: 800,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,  // 默认隐藏菜单栏
    fullscreen: false,       // 默认全屏
  });

  // 加载index.html文件
  win.loadFile('./to_build_file/index.html');
}

// Electron 会在初始化后并准备创建浏览器窗口时，调用这个函数。部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow);

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});