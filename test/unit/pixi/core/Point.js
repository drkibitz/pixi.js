describe('pixi/core/Point', function () {
    'use strict';

    var expect = chai.expect;
    var Point = PIXI.Point;

    it('Module exists', function () {
        expect(Point).to.be.a('function');
    });

    it('Confirm new instance', function () {
        var obj = new Point();
        pixi_core_Point_confirm(obj, 0, 0);
    });

    it('clone', function () {
        var obj = new Point(30, 60);
        var clone = obj.clone();

        expect(clone === obj).to.be.false;
        pixi_core_Point_confirm(clone, 30, 60);
    });
});
