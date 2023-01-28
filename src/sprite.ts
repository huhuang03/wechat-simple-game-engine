import * as g from "./global";

export class Sprite {
    _hide: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    onClick: () => void;

    _clickStartX: number;
    _clickStartY: number;
    anim: any;

    constructor(x = 0, y = 0, width = 0, height = 0, onClick = null) {
        this._hide = false
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.onClick = onClick;

        this._clickStartX = -1
        this._clickStartY = -1
        this.anim = null

        g.canvas.addEventListener('touchstart', (e) => {
            if (this._hasOnClick()) {
                const x = e.touches[0].clientX;
                const y = e.touches[0].clientY;
                console.log(`x: ${x}, y: ${y}, this.x: ${this.x}, this.y: ${this.y}, width: ${this.width}, height: ${this.height}`)
                if (this._in(x, y)) {
                    this._clickStartX = x
                    this._clickStartY = y
                }
            }
        })

        g.canvas.addEventListener('touchend', (e) => {
            if (!this._hide && this._hasOnClick() && this._clickStartX > 0 && this._clickStartY > 0) {
                this.onClick && this.onClick()
            }
            this._clickStartX = -1
            this._clickStartY = -1
        })
    }

    startAni(anim) {
        this.anim = anim
    }

    change(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        return this
    }

    setOnClickListener(onClick) {
        this.onClick =  onClick
    }

    removeOnClickListener() {
        this.onClick = null
    }

    hide() {
        this._hide = true
    }

    show() {
        this._hide = false
    }

    _hasOnClick() {
        return this.onClick != null
    }

    _in(x, y) {
        return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height
    }

}
