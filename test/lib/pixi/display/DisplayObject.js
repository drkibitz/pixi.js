
function pixi_display_DisplayObject_confirmNew(obj) {
    var expect = chai.expect;

    expect(obj).to.be.an.instanceof(PIXI.DisplayObject);

    expect(obj.last).to.equal(obj);
    expect(obj.first).to.equal(obj);

    pixi_core_Point_confirmNew(obj.position);

    expect(obj.scale).to.be.an.instanceof(PIXI.Point);
    expect(obj.scale.x).to.equal(1);
    expect(obj.scale.y).to.equal(1);

    pixi_core_Point_confirmNew(obj.pivot);

    expect(obj.rotation).to.equal(0);
    expect(obj.alpha).to.equal(1);
    expect(obj.visible).to.be.true;
    expect(obj.buttonMode).to.be.false;
    expect(obj.parent).to.be.null;
    expect(obj.worldAlpha).to.equal(1);

    expect(obj).to.have.property('hitArea');
    expect('interactive' in obj).to.be.true;
    expect('mask' in obj).to.be.true;
    expect(obj).to.have.property('renderable');
    expect(obj).to.have.property('stage');
    // FIXME: ???
    expect(obj.mask).to.be.undefined;

    pixi_core_Matrix_confirmNewMat3(obj.worldTransform);
    pixi_core_Matrix_confirmNewMat3(obj.localTransform);

    expect(obj.color).to.be.an.instanceof(Array);
    expect(obj.color).to.be.empty;

    expect(obj.dynamic).to.be.true;
}
