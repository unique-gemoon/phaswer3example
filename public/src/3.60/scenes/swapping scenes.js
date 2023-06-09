
const sceneConfigA = {
    key: 'sceneA',
    create: createA,
    pack: {
        files: [
            { type: 'image', key: 'face', url: 'assets/pics/bw-face.png' }
        ]
    }
};

const sceneConfigB = {
    key: 'sceneB',
    create: createB,
    pack: {
        files: [
            { type: 'image', key: 'logo', url: 'assets/pics/monika-krawinkel-amberstar-title.png' }
        ]
    }
};

function createA ()
{
    this.add.image(400, 300, 'face');

    this.input.on('pointerdown', () =>
    {
        this.input.stopPropagation();
        this.scene.switch('sceneB');
    });
}

function createB ()
{
    this.add.image(400, 300, 'logo');

    this.input.on('pointerdown', () =>
    {
        this.input.stopPropagation();
        this.scene.switch('sceneA');
    });
}

const gameConfig = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ sceneConfigA, sceneConfigB ]
};

const game = new Phaser.Game(gameConfig);
