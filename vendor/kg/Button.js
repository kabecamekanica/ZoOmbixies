/**
 * @author Tiago Oliveira
 */

Button = function (texture) {
    PIXI.Spriter.call(this);

    // create a texture from an image path
    const MOUSENORMALTEXTURE = PIXI.Texture.from(GAME.resources.btn_move.texture);

    // create a second texture
    const MOUSEPRESSTEXTURE = PIXI.Texture.from(GAME.resources.btn_move.texture);

    this.interactive = true;
    this.buttonMode = true;

    this.on('pointertap', () => {
        //
    });
};

Button.prototype = Object.create( PIXI.Spriter.prototype );
Button.prototype.constructor = Button;

Button.prototype.setTexture = function (texture) {
	this.texture = texture;
    new PIXI.Texture.from(image);
	//this.texture = new PIXI.Texture.from(image);
};
