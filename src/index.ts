import { ipcRenderer } from 'electron';

export { IThreadLaunchOptions, IThreadRunOptions } from './lib/ielectron-thread-options';
export { ThreadExport } from './lib/electron-thread-export';
export { ElectronThread } from './lib/electron-thread';



if (ipcRenderer) {
  ipcRenderer.on('electron-thread:console.log', (event, message) => {
      console.log(message);
  });
  ipcRenderer.on('electron-thread:console.error', (event, error) => {
      console.error(error);
  });
}