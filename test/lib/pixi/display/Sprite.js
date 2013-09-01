
function pixi_display_Sprite_confirmNew(obj, done) {
    var expect = chai.expect;

    pixi_display_DisplayObjectContainer_confirmNew(obj);
    expect(obj.hitArea).to.be.null;
    expect(obj.interactive).to.be.false;
    expect(obj.renderable).to.be.true;
    expect(obj.stage).to.be.null;

    pixi_core_Point_confirmNew(obj.anchor);

    expect(obj.blendMode).to.equal(PIXI.blendModes.NORMAL);
    expect(obj._width).to.equal(0);
    expect(obj._height).to.equal(0);

    // FIXME: Just make this a boolean that is always there
    expect(!!obj.updateFrame).to.equal(obj.texture.baseTexture.hasLoaded);

    if (!obj.updateFrame) {
        expect(typeof obj.onTextureUpdateBind).to.equal('function');
    }

    pixi_textures_Texture_confirmNew(obj.texture, done);
}
