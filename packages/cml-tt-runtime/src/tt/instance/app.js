// import BaseCtor from 'chameleon-runtime/src/platform/common/proto/BaseCtor'
// import lifecycle from 'chameleon-runtime/src/platform/common/util/lifecycle'
import VmAdapter from '../core/VmAdapter.js'
// import MiniRuntimeCore from 'chameleon-runtime/src/platform/common/proto/MiniRuntimeCore'
import MiniRuntimeCore from '../../util/proto/MiniRuntimeCore'
import BaseCtor from '../../util/proto/BaseCtor'
import lifecycle from '../../util/util/lifecycle'

export class App extends BaseCtor {
  constructor (options) {
    super(options)

    this.cmlType = 'tt'

    const runtimeCore = new MiniRuntimeCore({
      polyHooks: lifecycle.get('tt.app.polyHooks'),
      platform: this.cmlType,
      options: this.options
    })

    this.initVmAdapter(VmAdapter, {
      type: 'app',
      runtimeMixins: {
        onLaunch() {
          // 初始化
          runtimeCore
            .setContext(this)
            .init()
            .start('app-view-render')
        }
      },
      needResolveAttrs: ['methods'],
      hooks: lifecycle.get('tt.app.hooks'),
      hooksMap: lifecycle.get('tt.app.hooksMap'),
      polyHooks: lifecycle.get('tt.app.polyHooks'),
      usedHooks: lifecycle.get('tt.app.usedHooks')
    })

    __CML__GLOBAL.App(this.options)
  }
}
