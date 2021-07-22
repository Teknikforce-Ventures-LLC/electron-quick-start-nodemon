const { contextBridge, ipcMain, ipcRenderer } = require('electron')
const nodemon = require('nodemon')

const indexBridge = require('./viewscripts/home/index_preload')
const pagesBridge = require('./viewscripts/home/pageslist_preload')

if (location.href.endsWith('index.html')) {
  Bridge = indexBridge
} else if (location.href.endsWith('pageslist.html')) {
  Bridge = pagesBridge
}
contextBridge.exposeInMainWorld('Bridge', Bridge)
