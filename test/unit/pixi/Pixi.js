describe('Pixi', function () {
    'use strict';
	var expect = chai.expect;

    it('example 1 should pass', function () {
        expect(typeof PIXI).to.equal('object');
    });

    it('example 2 should pass', function () {
    	var point = new PIXI.Point();
        expect(point.x).to.equal(0);
        expect(point.y).to.equal(0);
    });
});
