/**
 * @author Tiago Oliveira
 */

//var GAME = GAME || {};
const GAME = new PIXI.Application();

GAME.HIGH_MODE = true;
GAME.camera = new PIXI.Point();
GAME.height;
GAME.bundleId = "com.km.zoombixies";
GAME.newHighScore = false;


GAME.screenHeight = 600;
GAME.screenWidth = 800;

GAME.eventEmit = new PIXI.utils.EventEmitter();

var stressTest;

// LOAD
const loader = new PIXI.Loader();

loader.add('btnMove', 'resources/images/btn_move.png');
loader.add('bunny', 'resources/images/bunny.png');
loader.add('ground', 'resources/images/ground.png');
loader.add('PIXIeTex', 'resources/data/PIXIe_tex.png');
loader.add('PIXIeTexData', 'resources/data/PIXIe_tex.json');
loader.add('PIXIeSkeData', 'resources/data/PIXIe_ske.json');

//loader.use(parsingMiddleware);

loader.load((loader, resources) => {
   GAME.resources = resources;
});

loader.onComplete.add(function ()
{

	// The application will create a renderer using WebGL, if possible,
	// with a fallback to a canvas render. It will also setup the ticker
	// and the root stage PIXI.Container
	//const app = new PIXI.Application();

	// The application will create a canvas element for you that you
	// can then insert into the DOM
	document.body.appendChild(GAME.view);

	bgh = new Background(GAME.resources.bunny.texture, true);
	bgh2 = new Background(GAME.resources.bunny.texture, true, 4);
	bgv = new Background(GAME.resources.bunny.texture, true, -2, null, 'VERTICAL');
	bgh2.y = 200;
	GAME.stage.addChild(bgh, bgh2, bgv);

	player = new Character();
	player2 = new Character();
	player3 = new Character();

	player2.x = 300;
	player2.y = 80;

	player2.scale.x = 0.5;
	player2.scale.y = 0.5;

	player3.armature.animation.play("idle");
	player3.x = 800;

	player3.scale.x = -1;

    btn_move = new Button(GAME.resources.btnMove.texture, 'moveplayer');

	GAME.stage.addChild(player, player2, player3, btn_move);


	var objs = [];


	// CAMERA
/*
	var camera = new PIXI.projection.Camera3d();
	camera.setPlanes(300, 10, 1000, false);
	camera.position.set(app.screen.width / 2, 0);
	camera.position3d.y = -500; // camera is above the ground
	app.stage.addChild(camera);

	var groundLayer = new PIXI.projection.Container3d();
	groundLayer.euler.x = Math.PI / 2;
	camera.addChild(groundLayer);



    for (var i=0; i<3; i++) {
        // 3d sprite on floor
        var fg = new PIXI.projection.Sprite3d(GAME.resources.ground.texture);
        groundLayer.addChild(fg);
        fg.anchor.set(0, 0.5);
        // use position or position3d here, its not important,
        // unless you need Z - then you need position3d
        fg.position.x = fg.texture.width * i;
        objs.push(fg);
    }
*/
	// Listen for animate update
	GAME.ticker.add(function(delta) {
	    // just for fun, let's rotate mr rabbit a little
	    // delta is 1 if running at 100% performance
	    // creates frame-independent transformation
	    //bunny.rotation += 0.1 * delta;
	    //bg.x +=5;
	    bgh.move(-1);
	    bgh2.move(1);
	    bgv.move(-1);

	    /*
	    player.position += 10 * delta;

    	// camera looks on pixi!
    	camera.position3d.x = player.position.x;


		objs.forEach((obj) => {
			if (obj.position.x + obj.texture.width < pixie.position.x - 500) {
				obj.position.x += repeats * obj.texture.width;
			}
		});
		*/

	});

	GAME.start();
});
