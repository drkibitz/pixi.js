describe('Circle', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.Circle).to.equal('function');
    });

    it('Confirm new instance', function () {
        var circle = new PIXI.Circle();
        expect(circle).to.be.an.instanceof(PIXI.Circle);

        expect(circle.x).to.equal(0);
        expect(circle.y).to.equal(0);
        expect(circle.radius).to.equal(0);
    });
});
