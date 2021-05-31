const config ={
	width:800,
	height:600,
	parent:"container",
	type: Phaser.AUTO,
	backgroundColor: "#392542",
	physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
	scene:[SceneA1]
}


var game = new Phaser.Game(config);
