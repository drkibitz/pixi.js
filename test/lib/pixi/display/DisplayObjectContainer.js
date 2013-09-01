
function pixi_display_DisplayObjectContainer_confirmNew(obj) {
    var expect = chai.expect;

    pixi_display_DisplayObject_confirmNew(obj);

    expect(obj).to.be.an.instanceof(PIXI.DisplayObjectContainer);
    expect(obj.children).to.be.an.instanceof(Array);
    expect(obj.children).to.be.empty;
}
