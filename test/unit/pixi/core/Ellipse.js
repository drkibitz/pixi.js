describe('Ellipse', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.Ellipse).to.equal('function');
    });

    it('Confirm new instance', function () {
        var ellipse = new PIXI.Ellipse();
        expect(ellipse).to.be.an.instanceof(PIXI.Ellipse);

        expect(ellipse.x).to.equal(0);
        expect(ellipse.y).to.equal(0);
        expect(ellipse.width).to.equal(0);
        expect(ellipse.height).to.equal(0);
    });
});
