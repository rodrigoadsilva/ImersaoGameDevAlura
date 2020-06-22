let imageScenario;
let imageCharacter;
let scenario;
let bgSound;
let character;

function preload() {
    imageScenario = loadImage('./assets/images/background/forest.png');
    imageCharacter = loadImage('./assets/images/character/running.png');
    bgSound = loadSound('./assets/sounds/gameTheme.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    scenario = new Scenario(imageScenario, 3);
    character = new Character(imageCharacter);
    bgSound.loop();
    frameRate(48); //Comando para limitar a atualização em fps
}

function draw() {
    scenario.show();
    scenario.move();
    character.show();
}

function touchStarted() {
    getAudioContext().resume();
}