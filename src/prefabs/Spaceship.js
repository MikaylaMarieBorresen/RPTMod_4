// Spaceship prefab
// Checklist: Sprite [] Animation [] Sound [] Explosion []
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed;         // pixels per frame
        //animation
        this.anims.create({
            key: 'bat1animated',
            frames: this.anims.generateFrameNumbers('bat1anim', { start: 0, end: 1, first: 0}),
            frameRate: 2,
            repeat: -1
        });
        this.anims.play('bat1animated');
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.x = game.config.width;
    }
}