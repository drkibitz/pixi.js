describe('Point', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.Point).to.equal('function');
    });

    it('Confirm new instance', function () {
        var point = new PIXI.Point();
        pixi_core_Point_confirmNew(point);
    });
});
