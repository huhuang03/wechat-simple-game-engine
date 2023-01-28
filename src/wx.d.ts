export interface SystemInfo {
    windowWidth: number;
    windowHeight: number;
}

export interface WX {
    getSystemInfoSync(): SystemInfo;
}
