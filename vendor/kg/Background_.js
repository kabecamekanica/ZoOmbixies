/*Background.js
paralax
add itens
speed*/
/*
let Background = function (img) {
	let bn = new PIXI.Sprite.from(img);
	this.paralax = false;

	this.prototype = Object.create(PIXI.Container.prototype);
	this.prototype.constructor = PIXI.Container;

	console.log(this.prototype);

	//this.prototype.addChild(bn);
	
	this.prototype.move = function (speed) {
		this.x += speed;
	}
};
*/

/*
export default class Background extends Container
{
    /**
     * @param {PIXI.Texture} texture - The texture for this sprite.
     * /
    constructor(sprite)
    {
        super();

        let bn = new PIXI.Sprite.from(img);

        this.addChild(bn);
    }
}
*/

/*
class Background extends PIXI.Container {
	constructor (sprite, speed) {
		super();

		this.speed = speed || 0;

		this.addChild(new PIXI.Sprite.from(sprite));
	}

	move () {
		this.x += this.speed;
	}

	tick () {
		console.log(1);
		this.x += this.speed;
	}
}
*/

/**
 * @author Tiago Oliveira
 */

var GAME = GAME || {};

GAME.HIGH_MODE = true;
GAME.camera = new PIXI.Point();
GAME.height;
GAME.bundleId = "com.km.pixiezombie";
GAME.newHighScore = false;


GAME.screenHeight = 400;
GAME.screenWidth = 600;

Background = function (image, paralax = true, speed = 0.1, size) {
    this.texture = new PIXI.Sprite.from(image);
    PIXI.Container.call(this);

    this.sizeMax = size;
    this.speed = speed;
    this.parts = [];
    this.orientation = 'HORIZONTAL'; // HORIZONTAL or VERTICAL

    if ( paralax ) {
    	this.setParalax();
    }
};

Background.prototype = Object.create( PIXI.Container.prototype );
Background.prototype.constructor = Background;

Background.prototype.setParalax = function () {
	let textureHeight = this.texture.height;
	let textureWidth = this.texture.width;
	let withMax = this.sizeMax || this.GAME.screenWidth || textureWidth;
	let parts = Math.ceil(withMax / textureWidth);
console.log(textureHeight, textureWidth, withMax, parts);
	for (var i = parts; i > 0; i--) {
		let part = new PIXI.Sprite.from(image);

		if ( this.orientation == 'HORIZONTAL' ) {
			part.x = i * textureWidth;
		}
		else {
			part.y = i * textureHeight;
		}

		this.addChild(part);
		this.parts.push(part);
	}
};

Background.prototype.setTexture = function () {
	this.texture = new PIXI.Texture.from(image);
};

Background.prototype.move = function (dir) {
	dir = dir * -1;

	if ( this.orientation == 'HORIZONTAL' ) {
		this.x += this.speed * dir;
	}
	else {
		this.y += this.speed * dir;
	}
};

console.log(Background.prototype);

Background.prototype.updateTransform = function() {
    console.log(1);

    PIXI.Container.prototype.updateTransform.call( this );
};