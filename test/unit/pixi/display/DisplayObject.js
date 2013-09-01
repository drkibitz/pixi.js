describe('DisplayObject', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.DisplayObject).to.equal('function');
    });

    it('Confirm new instance', function () {
        var obj = new PIXI.DisplayObject();

        pixi_display_DisplayObject_confirmNew(obj);
        expect(obj.hitArea).to.be.null;
        expect(obj.interactive).to.be.false;
        expect(obj.renderable).to.be.false;
        expect(obj.stage).to.be.null;
    });
});
