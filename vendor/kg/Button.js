/**
 * @author Tiago Oliveira
 */

Button = function (texture, event) {
    PIXI.Sprite.call(this);

    // create a texture from an image path
    const MOUSENORMALTEXTURE = texture;

    // create a second texture
    const MOUSEPRESSTEXTURE = texture;

    this.interactive = true;
    this.buttonMode = true;

    this.texture = MOUSEPRESSTEXTURE;

    this.on('pointertap', () => {
        GAME.eventEmit.emit(event, 'emit A');
    });

    /*this.on('moveplayer', function(e) {
        console.log('MOVED!!!' + e);
    });*/
};

Button.prototype = Object.create( PIXI.Sprite.prototype );
Button.prototype.constructor = Button;

/*sprite.on('my-event', function (data1, data2) {
    console.log(data1, data2);});
sprite.emit('my-event', 'somedata', 'moredata');*/

Button.prototype.setTexture = function (texture) {
	this.texture = texture;
    new PIXI.Texture.from(image);
	//this.texture = new PIXI.Texture.from(image);
};
