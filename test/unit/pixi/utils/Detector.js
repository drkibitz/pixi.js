describe('Detector', function () {
    'use strict';
    var expect = chai.expect;

    it('Function exists', function () {
        expect(typeof PIXI.autoDetectRenderer).to.equal('function');
    });
});
