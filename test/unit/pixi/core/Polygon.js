describe('Polygon', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.Polygon).to.equal('function');
    });

    it('Confirm new instance', function () {
        var polygon = new PIXI.Polygon();
        expect(polygon).to.be.an.instanceof(PIXI.Polygon);

        expect(polygon.points).to.be.an.instanceof(Array);
        expect(polygon.points.length).to.be.empty;
    });
});
