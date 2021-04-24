/*
Mikayla Borresen, Rocket Patrol Mods, 4/23/2021
  Time to Complete: ~3 days
Points Breakdown: 
  Redesign Artwork [60]
  - New ship, rocket, and background sprites
  - New menu UI, recolored points UI
  - New buttonpress, rocket-fire, and ship-explode sounds
  New spaceship Type [20]
  - New, smaller ship with unique points, speed, and artwork
  Parallax Scrolling [10]
  - 2 additional background elements moving at seperate speeds
  Animated Sprites [10]
  - Animations for both spaceship types

Help Sources:
  Mariel Folkerts, my friend :)
*/

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        //load menu art
        this.load.image('menu', './assets/menu.png');
    }

    create() {
      this.add.tileSprite(0, 0, 640, 480, 'menu').setOrigin(0, 0);
      
      /*  
      // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
            
        } */
        
        /*
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        */
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 3,
            spaceshipSpeed2: 4,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            spaceshipSpeed: 4,
            spaceshipSpeed2: 5,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
      }
}