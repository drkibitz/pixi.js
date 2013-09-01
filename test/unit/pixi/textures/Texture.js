describe('Texture', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.Texture).to.equal('function');
    });

    it('Confirm new instance', function (done) {
        var texture = PIXI.Texture.fromImage('/base/test/textures/bunny.png');
        pixi_textures_Texture_confirmNew(texture, done);
    });
});
