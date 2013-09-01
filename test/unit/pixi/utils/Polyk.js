describe('PolyK', function () {
    'use strict';

    var expect = chai.expect;

    it('Namespace exists', function () {
        expect(typeof PIXI.PolyK).to.equal('object');
    });

    it('Function exists', function () {
        expect(typeof PIXI.PolyK.Triangulate).to.equal('function');
    });
});
