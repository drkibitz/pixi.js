describe('Rectangle', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.Rectangle).to.equal('function');
    });

    it('Confirm new instance', function () {
        var rect = new PIXI.Rectangle();
        pixi_core_Rectangle_confirmNew(rect);
    });
});
