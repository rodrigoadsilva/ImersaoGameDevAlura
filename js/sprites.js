class Sprites {
    constructor(image, matriz, positionX, positionY, imageWidth, imageHeight, spriteWidth, spriteHeight) {
        this.image = image;
        this.matriz = matriz;
        this.positionX = positionX;
        this.positionY = positionY;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.currentFrame = 0;
    }

    show() {
        image(
            this.image,
            this.positionX,
            this.positionY,
            this.imageWidth,
            this.imageHeight,
            this.matriz[this.currentFrame][0],
            this.matriz[this.currentFrame][1],
            this.spriteWidth,
            this.spriteHeight);
    }

    animation() {
        this.currentFrame++;
        if (this.currentFrame >= this.matriz.length - 1) {
            this.currentFrame = 0;
        }
    }

    mouseClicked() {
        let d = dist(mouseX, mouseY, this.imageWidth / 2, this.imageHeight / 2);
        if (d < this.imageWidth / 2) {
            return true;
        }
    }
}