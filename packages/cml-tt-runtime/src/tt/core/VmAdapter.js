// import MiniVmAdapter from 'chameleon-runtime/src/platform/common/proto/MiniVmAdapter'
import MiniVmAdapter from '../../util/proto/MiniVmAdapter';
import ttMixins from 'cml-tt-mixins'

class VmAdapter extends MiniVmAdapter {
  constructor(config) {
    super(config)

    this.platform = 'tt'
    // 样式、事件代理 mixins
    this.baseMixins = ttMixins.mixins
    this.init()
  }
}
export default VmAdapter