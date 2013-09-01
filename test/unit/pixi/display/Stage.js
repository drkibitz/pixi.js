describe('Stage', function () {
    'use strict';

    var expect = chai.expect;

    it('Class exists', function () {
        expect(typeof PIXI.Stage).to.equal('function');
    });

    it('Confirm new instance', function () {
        var obj = new PIXI.Stage(null, true);

        pixi_display_DisplayObjectContainer_confirmNew(obj);

        // FIXME: duplicate member in DisplayObject
        pixi_core_Matrix_confirmNewMat3(obj.worldTransform);
        // FIXME: convert arg to bool in constructor
        expect(obj.interactive).to.be.true;
        expect(obj.interactionManager).to.be.an.instanceof(PIXI.InteractionManager);
        expect(obj.interactionManager.stage).to.equal(obj);
        expect(obj.dirty).to.be.true;

        expect(obj.__childrenAdded).to.be.an.instanceof(Array);
        expect(obj.__childrenAdded).to.be.empty;
        expect(obj.__childrenRemoved).to.be.an.instanceof(Array);
        expect(obj.__childrenRemoved).to.be.empty;

        expect(obj.stage).to.equal(obj);

        expect(obj.hitArea).to.be.an.instanceof(PIXI.Rectangle);
        expect(obj.hitArea.x).to.equal(0);
        expect(obj.hitArea.y).to.equal(0);
        expect(obj.hitArea.width).to.equal(100000);
        expect(obj.hitArea.height).to.equal(100000);

        expect(obj.backgroundColor).to.equal(0x000000);
        expect(obj.backgroundColorSplit).to.be.an.instanceof(Array);
        expect(obj.backgroundColorSplit[0]).to.equal(0);
        expect(obj.backgroundColorSplit[1]).to.equal(0);
        expect(obj.backgroundColorSplit[2]).to.equal(0);
        expect(obj.backgroundColorString).to.equal('#000000');

        expect(obj.worldVisible).to.be.true;
    });
});
