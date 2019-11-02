/**
 * @author Tiago Oliveira
 */

Character = function (texture) {
    PIXI.Container.call(this);

    const factory = dragonBones.PixiFactory.factory;
    factory.parseDragonBonesData(GAME.resources.PIXIeSkeData.data);
    //factory.parseDragonBonesData(this._pixiResources["resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.dbbin"].data);
	factory.parseTextureAtlasData(GAME.resources.PIXIeTexData.data, GAME.resources.PIXIeTex.texture);

	this.armature = factory.buildArmatureDisplay('Armature');
	this.armature.animation.play("idle");
	this.armature.animation.play("walk");

	this.armature.x = 200;
    this.armature.y = 400;
    this.armature.scale.x = 0.3;
    this.armature.scale.y = 0.3;

    GAME.eventEmit.on('moveplayer', function(e) {
        console.log('MOVED C!!!' + e);
    });

	this.addChild(this.armature);
};

Character.prototype = Object.create( PIXI.Container.prototype );
Character.prototype.constructor = Character;

//Character.prototype.setParalax = function () {
