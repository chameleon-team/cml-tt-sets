const _ = module.exports = {};
let viewportWidth;
_.px2cpx = function(px, platform) {
  function getViewportSize() {
    const { windowWidth } = tt.getSystemInfoSync();
    return windowWidth;
  }

  viewportWidth = viewportWidth || getViewportSize();
  const cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
}