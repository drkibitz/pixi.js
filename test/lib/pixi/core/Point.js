
function pixi_core_Point_confirmNew(point) {
    var expect = chai.expect;

    expect(point).to.be.an.instanceof(PIXI.Point);

    expect(point.x).to.equal(0);
    expect(point.y).to.equal(0);
}
