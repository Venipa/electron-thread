import * as electron from "electron";
import { IThreadRunOptions, IThreadLaunchOptions } from "./ielectron-thread-options";
export declare class ElectronThread {
    private threads;
    private options;
    private window;
    get activeThreads(): number;
    constructor(options: IThreadLaunchOptions, win: electron.BrowserWindow);
    run<T>(options: IThreadRunOptions): Promise<T>;
    end(): Promise<void>;
}
