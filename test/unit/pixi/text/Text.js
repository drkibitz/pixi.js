describe('Text', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.Text).to.equal('function');
    });
});
