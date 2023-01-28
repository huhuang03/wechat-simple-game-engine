import {Sprite} from "./sprite";
import * as g from './global'

export class ImageSprite extends Sprite {
    img: CanvasImageSource

    draw() {
        g.ctx.drawImage(this.img, this.x * g.devicePixelRatio, this.y * g.devicePixelRatio,
            this.width * g.devicePixelRatio, this.height * g.devicePixelRatio)
    }

}
