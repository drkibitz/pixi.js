describe('Sprite', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.Sprite).to.equal('function');
    });

    it('Confirm new instance', function (done) {
        var texture = PIXI.Texture.fromImage('/base/test/textures/SpriteSheet-Aliens.png');
        var obj = new PIXI.Sprite(texture);

        pixi_display_Sprite_confirmNew(obj, done);
    });
});
