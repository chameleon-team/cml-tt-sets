const _ = module.exports = {};
_.px2cpx = function(px, platform) {
  function getViewportSize() {
    debugger;
    const { windowWidth } = tt.getSystemInfoSync();
    return windowWidth;
  }

  const viewportWidth = getViewportSize();
  const cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
}