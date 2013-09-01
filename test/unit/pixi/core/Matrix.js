describe('Matrix', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.Matrix).to.equal('function');
    });

    it('mat3 namespace exists', function () {
        expect(typeof PIXI.mat3).to.equal('object');
    });

    it('Confirm new mat3 instance', function () {
        var matrix = new PIXI.mat3.create();
        pixi_core_Matrix_confirmNewMat3(matrix);
    });

    it('mat3 namespace exists', function () {
        expect(typeof PIXI.mat4).to.equal('object');
    });

    it('Confirm new mat4 instance', function () {
        var matrix = new PIXI.mat4.create();
        pixi_core_Matrix_confirmNewMat4(matrix);
    });
});
