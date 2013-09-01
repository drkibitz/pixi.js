
function pixi_utils_EventTarget_like(obj) {
    var expect = chai.expect;

    expect(obj).to.have.property('addEventListener');
    expect(obj).to.have.property('dispatchEvent');
    expect(obj).to.have.property('removeEventListener');
}
