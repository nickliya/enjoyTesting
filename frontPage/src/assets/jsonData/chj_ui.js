import { naviData, gaodeData } from './navi.js'

const chjtreeData = [{
  title: '语音',
  children: [{
    title: 'AccessSDK',
    children: [{
      title: '测试系统管理接口：com.thundersoft.assesssdktest:id/btnSystemManagerActivity',
      children: [{
        title: '返回：com.thundersoft.assesssdktest:id/btnSystemManagerBack '
      }]
    },
    {
      title: '测试音量接口：com.thundersoft.assesssdktest:id/btnVolumeActivity',
      children: [{
        title: '返回：com.thundersoft.assesssdktest:id/btnVolumeBack'
      }]
    },
    {
      title: '测试屏幕接口：com.thundersoft.assesssdktest:id/btnScreenActivity',
      children: [{
        title: '返回：com.thundersoft.assesssdktest:id/btnScreenBack'
      }]
    },
    {
      title: '测试无线接口：com.thundersoft.assesssdktest:id/btnWirelessActivity',
      children: [{
        title: '返回：com.thundersoft.assesssdktest:id/btnWirelessBack'
      }]
    },
    {
      title: '测试三方应用接口：com.thundersoft.assesssdktest:id/btnThirdAppActivity',
      children: [{
        title: '返回：com.thundersoft.assesssdktest:id/btnThirdAppBack'
      }]
    },
    {
      title: '测试系统接口：com.thundersoft.assesssdktest:id/btnSystemActivity',
      children: [{
        title: '返回：com.thundersoft.assesssdktest:id/btnSystemBack'
      }]
    },
    {
      title: '返回主界面：com.thundersoft.assesssdktest:id/btnVolumeBack',
    }]
  },
  {
    title: 'ClientSDK',
    children: [{
      title: '测试识别唤醒接口: com.thundersoft.clientsdktest:id/btnSpeechClientActivity',
      children: [{
        title: '返回：com.thundersoft.clientsdktest:id/btnSpeechClientBack '
      }]
    },
    {
      title: '测试会话接口: com.thundersoft.clientsdktest:id/btnInputTestActivity',
      children: [{
        title: '返回：com.thundersoft.clientsdktest:id/btnInputTestBack'
      }]
    },
    {
      title: '光带专项测试: com.thundersoft.clientsdktest:id/btnVrSpriteTestActivity',
      children: [{
        title: '返回：com.thundersoft.clientsdktest:id/btnVrSpriteTestBack'
      }]
    },
    {
      title: 'TASK专项测试: com.thundersoft.clientsdktest:id/btnTaskTestActivity',
      children: [{
        title: '返回：com.thundersoft.clientsdktest:id/btnTaskTestBack'
      }]
    },
    {
      title: 'TTS专项测试: com.thundersoft.clientsdktest:id/btnTtsTestActivity',
      children: [{
        title: '返回：com.thundersoft.clientsdktest:id/btnTtsTestBack'
      }]
    },
    {
      title: '其他测试: com.thundersoft.clientsdktest:id/btnOtherTestActivity',
      children: [{
        title: '返回：com.thundersoft.clientsdktest:id/btnOtherTestBack'
      }]
    }],
  }]
},
naviData,
gaodeData
]

export {
  chjtreeData
}