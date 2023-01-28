import {WX} from "./wx";
declare var canvas: HTMLCanvasElement;
declare var wx: WX;

const devicePixelRatio: number = window.devicePixelRatio
const ctx = canvas.getContext("2d")
ctx.scale(1 / devicePixelRatio, 1 / devicePixelRatio);
const info = wx.getSystemInfoSync()
const windowWidth: number = info.windowWidth
const windowHeight: number = info.windowHeight
const canvasWidth = windowWidth
const canvasHeight = windowHeight

export {
    ctx,
    canvas,
    /**
     * client应该是用这个宽高来进行计算
     */
    windowWidth,
    windowHeight,
    devicePixelRatio,
    canvasWidth,
    canvasHeight
}
