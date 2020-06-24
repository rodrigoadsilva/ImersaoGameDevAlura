class Enemy extends Sprites {
    constructor(image, matriz, positionX, positionY, imageWidth, imageHeight, spriteWidth, spriteHeight) {
        super(image, matriz, positionX, positionY, imageWidth, imageHeight, spriteWidth, spriteHeight);
        this.velocidade = 5;
    }

    move() {
        this.positionX -= this.velocidade;

        if (this.positionX < -this.imageHeight) {
            this.positionX = width;
        }
    }
}