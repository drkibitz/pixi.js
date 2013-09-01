describe('MovieClip', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.MovieClip).to.equal('function');
    });

    it('Confirm new instance', function (done) {
        var texture = PIXI.Texture.fromImage('/base/test/textures/SpriteSheet-Explosion.png');
        var obj = new PIXI.MovieClip([texture]);

        expect(obj).to.be.an.instanceof(PIXI.MovieClip);

        expect(obj.textures).to.be.an.instanceof(Array);
        expect(obj.textures[0]).to.equal(texture);
        expect(obj.animationSpeed).to.equal(1);
        expect(obj.loop).to.be.true;
        expect(obj.onComplete).to.be.null;
        expect(obj.currentFrame).to.equal(0);
        expect(obj.playing).to.be.false;

        pixi_display_Sprite_confirmNew(obj, done);
    });
});
