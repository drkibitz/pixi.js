
function pixi_core_Rectangle_confirmNew(rect) {
    var expect = chai.expect;

    expect(rect).to.be.an.instanceof(PIXI.Rectangle);

    expect(rect.x).to.equal(0);
    expect(rect.y).to.equal(0);
    expect(rect.width).to.equal(0);
    expect(rect.height).to.equal(0);
}
