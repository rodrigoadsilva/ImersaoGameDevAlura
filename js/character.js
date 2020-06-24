class Character extends Sprites {
    constructor(image, matriz, positionX, positionY, imageWidth, imageHeight, spriteWidth, spriteHeight) {
        super(image, matriz, positionX, positionY, imageWidth, imageHeight, spriteWidth, spriteHeight);
        this.initialPositionY = height - this.imageHeight;
        this.jumpVelocity = 0;
        this.gravityValue = 1;
    }

    gravity() {
        this.positionY += this.jumpVelocity;
        this.jumpVelocity += this.gravityValue;

        if (this.positionY > this.initialPositionY) {
            this.positionY = this.initialPositionY;
        }
    }

    jump() {
        this.jumpVelocity = -15;
    }

    collision(enemy) {
        const precision = 0.7;
        return collideRectRect(
            this.positionX,
            this.positionY,
            this.imageWidth * precision,
            this.imageHeight * precision,
            enemy.positionX,
            enemy.positionY,
            enemy.imageWidth * precision,
            enemy.imageHeight * precision
        );
    }


}