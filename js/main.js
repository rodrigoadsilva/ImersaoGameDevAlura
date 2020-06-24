let bgSound;

let imageScenario;
let imageCharacter;
let imageEnemy;
let imageGuiSoundOff;
let imageGuiSoundOn;

let scenario;
let character;
let enemy;
let sound;

const matrizCharacter = [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810],
];
const matrizEnemy = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626],
]

function propCalculation(height) {
    return Math.round((height * 9) / 16);
}

let screen = [document.querySelector("#game-container").clientWidth, propCalculation(document.querySelector("#game-container").clientWidth)];

function preload() {
    imageScenario = loadImage('./assets/images/background/forest.png');
    imageCharacter = loadImage('./assets/images/character/running.png');
    imageEnemy = loadImage('./assets/images/enemys/slime.png');
    imageGuiSoundOff = loadImage('./assets/images/gui/sound_off.png');
    imageGuiSoundOn = loadImage('./assets/images/gui/sound_on.png');
    bgSound = loadSound('./assets/sounds/gameTheme.mp3');
}

function setup() {
    var canvas = createCanvas(screen[0], screen[1]);
    canvas.parent('game-screen');

    scenario = new Scenario(imageScenario, 3);
    // Carrega (ImageParaCarregar,[InicioMapeamentoX,InicioMapeamentoY],
    //          OndeEmXVaiAparecer,OndeEmYVaiAparecer,TamanhoDoSpriteX,
    //          TamanhoDoSpriteY,QuantosPixelMapearX,QuantosPixelMapearY)
    character = new Character(imageCharacter, matrizCharacter, 50, height - 135, 110, 135, 220, 270);
    enemy = new Enemy(imageEnemy, matrizEnemy, width - 52, height - 52, 52, 52, 104, 104);

    sound = new Sprites(imageGuiSoundOff, [0, 0], 2, 2, 30, 30, 0, 0);
    frameRate(48); //Comando para limitar a atualização em fps
}

function keyPressed() {
    if (key === 'ArrowUp') {
        character.jump();
    }
}

function mousePressed() {
    if (sound.mouseClicked()) {
        if (!bgSound._playing) {
            bgSound.loop();
            sound.image = imageGuiSoundOn;
        } else {
            sound.image = imageGuiSoundOff;
            bgSound.pause();
        }
    }
}

function draw() {
    scenario.show();
    scenario.move();
    character.show();
    character.animation();
    character.gravity();
    enemy.show();
    enemy.animation();
    enemy.move();
    sound.show();

    if (character.collision(enemy)) {
        console.log('Colidiu');
        noLoop();
    }
}