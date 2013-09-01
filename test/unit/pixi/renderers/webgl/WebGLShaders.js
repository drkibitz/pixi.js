describe('WebGLShaders', function () {
    'use strict';

    var expect = chai.expect;

    it('Members exists', function () {
        expect(PIXI.shaderFragmentSrc).to.be.an.instanceof(Array);
        expect(PIXI.shaderFragmentSrc).not.to.be.empty;

        expect(PIXI.shaderVertexSrc).to.be.an.instanceof(Array);
        expect(PIXI.shaderVertexSrc).not.to.be.empty;

        expect(PIXI.stripShaderFragmentSrc).to.be.an.instanceof(Array);
        expect(PIXI.stripShaderFragmentSrc).not.to.be.empty;

        expect(PIXI.stripShaderVertexSrc).to.be.an.instanceof(Array);
        expect(PIXI.stripShaderVertexSrc).not.to.be.empty;

        expect(PIXI.primitiveShaderFragmentSrc).to.be.an.instanceof(Array);
        expect(PIXI.primitiveShaderFragmentSrc).not.to.be.empty;

        expect(PIXI.primitiveShaderVertexSrc).to.be.an.instanceof(Array);
        expect(PIXI.primitiveShaderVertexSrc).not.to.be.empty;

        expect(typeof PIXI.initPrimitiveShader).to.equal('function');
        expect(typeof PIXI.initDefaultShader).to.equal('function');
        expect(typeof PIXI.initDefaultStripShader).to.equal('function');
        expect(typeof PIXI.CompileVertexShader).to.equal('function');
        expect(typeof PIXI.CompileFragmentShader).to.equal('function');
        expect(typeof PIXI._CompileShader).to.equal('function');
        expect(typeof PIXI.compileProgram).to.equal('function');
        expect(typeof PIXI.activateDefaultShader).to.equal('function');
        expect(typeof PIXI.activatePrimitiveShader).to.equal('function');
    });
});
