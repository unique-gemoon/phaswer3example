class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        graphics.lineGradientStyle(8, 0xff0000, 0x0000ff, 0xff0000, 0x0000ff, 1);
        graphics.strokeTriangle(200, 200, 400, 50, 500, 300);

        graphics.lineGradientStyle(6, 0xffff00, 0xff00ff, 0xff0000, 0x0000ff, 1);
        graphics.strokeTriangle(60, 500, 60, 400, 500, 500);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
