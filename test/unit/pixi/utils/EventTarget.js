describe('EventTarget', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.EventTarget).to.equal('function');
    });
});
