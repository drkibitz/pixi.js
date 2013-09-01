
function pixi_textures_Texture_confirmNew(obj, done) {
    var expect = chai.expect;

    function confirmFrameDone() {
        expect(obj.frame.x).to.equal(0);
        expect(obj.frame.y).to.equal(0);
        expect(obj.frame.width).to.equal(obj.baseTexture.width);
        expect(obj.frame.height).to.equal(obj.baseTexture.height);
        expect(obj.width).to.equal(obj.frame.width);
        expect(obj.height).to.equal(obj.frame.height);
        done();
    }

    expect(obj).to.be.an.instanceof(PIXI.Texture);
    pixi_utils_EventTarget_like(obj);

    expect(obj.baseTexture).to.be.an.instanceof(PIXI.BaseTexture);
    expect(obj.frame).to.be.an.instanceof(PIXI.Rectangle);
    expect(obj.scope).to.equal(obj);
    pixi_core_Point_confirmNew(obj.trim);

    if (obj.baseTexture.hasLoaded) {
        confirmFrameDone();
    } else {
        obj.addEventListener('update', confirmFrameDone);
    }
}
