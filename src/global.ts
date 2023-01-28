import {WX} from "./wx";

declare var canvas: HTMLCanvasElement;
declare var wx: WX;

const ctx = canvas.getContext("2d")
const info = wx.getSystemInfoSync()
const windowWidth: number = info.windowWidth
const windowHeight: number = info.windowHeight
const devicePixelRatio: number = window.devicePixelRatio
const canvasWidth = windowWidth
const canvasHeight = windowHeight

export {
    ctx,
    canvas,
    windowWidth,
    windowHeight,
    devicePixelRatio,
    canvasWidth,
    canvasHeight
}
