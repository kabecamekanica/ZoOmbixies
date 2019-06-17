/**
 * @author Tiago Oliveira
 */

Background = function (texture, paralax = true, speed = 0.1, size, orientation) {
    PIXI.Container.call(this);

    this.sizeMax = size;
    this.speed = speed;
    this.parts = [];
    this.orientation = orientation || 'HORIZONTAL'; // HORIZONTAL or VERTICAL

    this.setTexture(texture);

    if ( paralax ) {
    	this.setParalax();
    }
};

Background.prototype = Object.create( PIXI.Container.prototype );
Background.prototype.constructor = Background;

Background.prototype.setParalax = function () {
	//this.addChild(this.texture);
	this.textureHeight = this.texture.height;
	this.textureWidth = this.texture.width;
	this.widthMax = this.sizeMax || GAME.screenWidth || this.textureWidth;
	this.heightMax = this.sizeMax || GAME.screenHeight || this.textureHeight;

	if ( this.orientation == 'HORIZONTAL' ) {
		this.partsLength = Math.ceil(this.widthMax / this.textureWidth) + 1;
	}
	else {
		this.partsLength = Math.ceil(this.heightMax / this.textureHeight) + 1;
	}

	for (var i = this.partsLength; i > 0; i--) {
		let part = new PIXI.Sprite.from(this.texture);
		part.idd = i;

		if ( this.orientation == 'HORIZONTAL' ) {
			part.x = (i - 1) * this.textureWidth;
		}
		else {
			part.y = (i - 1) * this.textureHeight;
		}

		this.addChild(part);
		this.parts.push(part);
	}
};

Background.prototype.setTexture = function (texture) {
	this.texture = texture;
	//this.texture = new PIXI.Texture.from(image);
};

Background.prototype.move = function (dir) {
	dir = dir * -1;

	if ( this.orientation == 'HORIZONTAL' ) {
		for (var i in this.parts) {
			this.parts[i].x += this.speed * dir;
	    }
	}
	else {
		for (var i in this.parts) {
			this.parts[i].y += this.speed * dir;
	    }
	}
};

Background.prototype.updateTransform = function() {
    for (var i in this.parts) {
		let part = this.parts[i];

    	if ( this.orientation == 'HORIZONTAL' ) {
			if ( part.x < -this.textureWidth ) {
				part.x += this.partsLength * this.textureWidth;
			} else if (part.x > this.widthMax) {
				part.x += -(this.partsLength * this.textureWidth);
			}
		}
		else {
			if ( part.y < -this.textureHeight ) {
				part.y += this.partsLength * this.textureHeight;
			} else if (part.y > this.heightMax) {
				part.y += -(this.partsLength * this.textureHeight);
			}
		}
    }

    PIXI.Container.prototype.updateTransform.call( this );
};