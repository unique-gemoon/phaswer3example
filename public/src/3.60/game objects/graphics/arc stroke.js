class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        graphics.lineStyle(50, 0xffffff);

        graphics.beginPath();
        graphics.arc(400, 300, 200, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360), false, 0.02);
        graphics.strokePath();
        graphics.closePath();

        graphics.beginPath();
        graphics.lineStyle(40, 0xff00ff);
        graphics.arc(400, 300, 200, Phaser.Math.DegToRad(0), Phaser.Math.DegToRad(360), true, 0.02);
        graphics.strokePath();
        graphics.closePath();
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
