describe('Utils', function () {
    'use strict';
    var expect = chai.expect;

    it('requestAnimationFrame exists', function () {
        expect(typeof requestAnimationFrame).to.equal('function');
        // Is this necessary?
        expect(typeof requestAnimFrame).to.equal('function');
    });

    it('cancelAnimationFrame exists', function () {
        expect(typeof cancelAnimationFrame).to.equal('function');
    });

    it('Function.prototype.bind exists', function () {
        expect(typeof Function.prototype.bind).to.equal('function');
    });

    it('PIXI.AjaxRequest exists', function () {
        expect(typeof PIXI.AjaxRequest).to.equal('function');
    });

    it('PIXI.runList exists', function () {
        expect(typeof PIXI.runList).to.equal('function');
    });
});
