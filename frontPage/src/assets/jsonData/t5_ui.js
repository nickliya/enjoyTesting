import { naviData } from './navi.js'

const T5treeData = [
{
  title: 'Home',
  children: [{
    title: '影音：125 115'
  },
  {
    title: '爱趣听：310 115'
  },
  {
    title: '导航：485 115'
  },
  {
    title: '车设置： 655 115'
  },
  {
    title: '电话：825 115'
  }]
},
{
  title: '媒体',
  children: [{
    title: '本地电台',
    children: [{
      title: '本地电台字样：com.yftech.music.player:id/btn_online_music'
    },
    {
      title: '电台列表按钮：com.yftech.music.player:id/btn_list_fm',
      children: [{
        title: '返回按钮：com.yftech.music.player:id/btn_back'
      },
      {
        title: '电台列表清单字样：com.yftech.music.player:id/tv_list_theme'
      },
      {
        title: '搜索按钮：com.yftech.music.player:id/btn_fm_search'
      }]
    },
    {
      title: 'FM：com.yftech.music.player:id/tv_fm_fm'
    },
    {
      title: 'AM：com.yftech.music.player:id/tv_fm_am'
    },
    {
      title: '搜索按钮：com.yftech.music.player:id/btn_search_fm'
    },
    {
      title: '上一台：com.yftech.music.player:id/btn_pre_fm'
    },
    {
      title: '下一台：com.yftech.music.player:id/btn_next_fm'
    },
    {
      title: '电台调频滑动框：com.yftech.music.player:id/radioFmSelector'
    }]
  },
  {
    title: '蓝牙音乐',
    children: [{
      title: '蓝牙音乐字样：com.yftech.music.player:id/btn_bt_music'
    },
    {
      title: '蓝牙功能开关按钮：com.yftech.music.player:id/bt_onoff_switch'
    },
    {
      title: '蓝牙设置更多（三个点）：com.yftech.music.player:id/btn_open_bt_setting',
      children: [{
        title: '可连接设备刷新按钮：com.yftech.settings:id/btn_sys_settings_connect_bt_tips_pair_item_search'
      },
      {
        title: '设备连接按钮：com.yftech.settings:id/btn_sys_settings_connect_bt_tips_unpair_item_set'
      },
      {
        title: '关闭按钮：com.yftech.settings:id/btn_sys_settings_connect_bt_tips_pair_item_close'
      }]
    }]
  },
  {
    title: 'USB音乐',
    children: [{
      title: 'USB音乐字样：com.yftech.music.player:id/btn_usb_music'
    }]
  },
  {
    title: 'USB视频',
    children: [{
      title: 'USB视频字样：com.yftech.music.player:id/btn_ipod'
    }]
  }]
},
{
  title: '爱趣听',
  children: [{
    title: '推荐：name: android.widget.TextView text: 推荐',
    children: [{
      title: '个性推荐：name: android.widget.TextView text: 个性推荐'
    }]
  },
  {
    title: 'QQ音乐：name: android.widget.TextView text: QQ音乐',
    children: [{
      title: '路上听：name: android.widget.TextView text: 路上听'
    },
    {
      title: '排行榜：name: android.widget.TextView text: 排行榜'
    },
    {
      title: '官方歌单：name: android.widget.TextView text: 官方歌单'
    }]
  },
  {
    title: '电台：name: android.widget.TextView text: 电台',
    children: [{
      title: '情感生活：name: android.widget.TextView text: 情感生活'
    },
    {
      title: '相声评书：name: android.widget.TextView text: 相声评书'
    },
    {
      title: '历史人文：name: android.widget.TextView text: 历史人文'
    },
    {
      title: '搞笑段子：name: android.widget.TextView text: 搞笑段子'
    },
    {
      title: '知识干货：name: android.widget.TextView text: 知识干货'
    }]
  },
  {
    title: '有声书：name: android.widget.TextView text: 有声书',
    children: [{
      title: '青春言情：name: android.widget.TextView text: 青春言情'
    },
    {
      title: '男生小说：name: android.widget.TextView text: 男生小说'
    },
    {
      title: '女生小说：name: android.widget.TextView text: 女生小说'
    },
    {
      title: '其他：name: android.widget.TextView text: 其他'
    }]
  },
  {
    title: '新闻：name: android.widget.TextView text: 新闻',
    children: [{
      title: '科学：name: android.widget.TextView text: 科学'
    },
    {
      title: '历史：name: android.widget.TextView text: 历史'
    },
    {
      title: '游戏：name: android.widget.TextView text: 游戏'
    },
    {
      title: '时尚：name: android.widget.TextView text: 时尚'
    },
    {
      title: '汽车：name: android.widget.TextView text: 汽车'
    },
    {
      title: '体育：name: android.widget.TextView text: 体育'
    },
    {
      title: '科技：name: android.widget.TextView text: 体育'
    }]
  },
  {
    title: '跳转按钮（跳转至播放页）：com.tencent.wecarflow:id/play',
    children: [{
      title: '收藏：com.tencent.wecarflow:id/like'
    },
    {
      title: '播放模式：com.tencent.wecarflow:id/mode'
    },
    {
      title: '上一首：com.tencent.wecarflow:id/play_bar_pre'
    },
    {
      title: '暂停 / 播放：com.tencent.wecarflow:id/play_bar_pause'
    },
    {
      title: '下一首：com.tencent.wecarflow:id/play_bar_next'
    }]
  },
  {
    title: '当前播放列表页：',
    children: [{
      title: '跳转按钮（跳转至播放页）：com.tencent.wecarflow:id/play'
    },
    {
      title: '歌曲序号：com.tencent.wecarflow:id/index'
    },
    {
      title: '歌曲名称：com.tencent.wecarflow:id/song'
    },
    {
      title: '歌手名：com.tencent.wecarflow:id/singer'
    }]
  }]
},
naviData, {
  title: '车设置',
  children: [{
    title: '个人中心：com.yftech.settings:id/btn_tab_personal_center',
    children: [{
      title: '添加车辆或登录账户：com.yftech.settings:id/logbtn_login'
    },
    {
      title: '帮助中心：com.yftech.settings:id/mbtn_help',
      children: [{
        title: '返回：com.yftech.settings:id/btn_back'
      }]
    },
    {
      title: 'n个系统问题：com.yftech.settings:id/csbtn_carstate',
      children: [{
        title: '返回：com.yftech.settings:id/backBtn'
      },
      {
        title: '周边服务站：com.yftech.settings:id/repairBtn'
      },
      {
        title: '重新检测：com.yftech.settings:id/refreshBtn'
      }]
    },
    {
      title: '流量数据包：com.yftech.settings:id/btnv_no_flow'
    },
    {
      title: '保养预约：com.yftech.settings:id/mbtn_mileage'
    }]
  },
  {
    title: '车辆设置：com.yftech.settings:id/btn_tab_vehicle_settings',
    children: [{
      title: '遥控车锁反馈：name: android.widget.TextView text: 遥控车锁反馈',
      children: [{
        title: '仅灯光 / 灯光和喇叭：com.yftech.settings:id/mss_remote_car_lock'
      }]
    }],
  },
  {
    title: '系统设置：com.yftech.settings:id/btn_tab_system_settings',
    children: [{
      title: '连接：com.yftech.settings:id/btn_sys_settings_wifi',
      children: [{
        title: 'WLAN连接：com.yftech.settings:id/tv_sys_settings_connect_wifi_text',
        children: [{
          title: '开关按钮：com.yftech.settings:id/tv_thumb'
        },
        {
          title: 'WiFi名称：com.yftech.settings:id/title'
        },
        {
          title: '连接按钮：com.yftech.settings:id/image',
          children: [{
            title: '密码输入框：com.yftech.settings:id/et_sys_settings_common_input_tips_content'
          },
          {
            title: '密码可见：com.yftech.settings:id/v_sys_settings_input_password_icon'
          },
          {
            title: '连接：com.yftech.settings:id/btn_sys_settings_common_tips_submit'
          },
          {
            title: '取消：com.yftech.settings:id/btn_sys_settings_common_tips_cancel'
          }]
        }]
      },
      {
        title: '移动热点：name: android.widget.TextView text: 移动热点',
        children: [{
          title: '开关按钮：com.yftech.settings:id/tv_thumb'
        },
        {
          title: '热点SSID：com.yftech.settings:id/btn_sys_settings_connect_ap_ssid',
          children: [{
            title: '热点名称输入框：com.yftech.settings:id/et_sys_settings_common_input_tips_content'
          },
          {
            title: '确认：com.yftech.settings:id/btn_sys_settings_common_tips_submit'
          },
          {
            title: '取消：com.yftech.settings:id/btn_sys_settings_common_tips_cancel'
          }]
        },
        {
          title: '热点密码：com.yftech.settings:id/btn_sys_settings_connect_ap_password',
          children: [{
            title: '热点密码输入框：com.yftech.settings:id/et_sys_settings_common_input_tips_content'
          },
          {
            title: '确定：com.yftech.settings:id/btn_sys_settings_common_tips_submit'
          },
          {
            title: '取消：com.yftech.settings:id/btn_sys_settings_common_tips_cancel'
          }]
        },
        {
          title: '已连接设备：com.yftech.settings:id/btn_sys_settings_connect_ap_dev'
        }]
      },
      {
        title: '蓝牙：name: android.widget.TextView text: 蓝牙',
        children: [{
          title: '开关按钮：com.yftech.settings:id/tv_thumb'
        },
        {
          title: '蓝牙设备名称：com.yftech.settings:id/btn_sys_settings_connect_bt_name',
          children: [{
            title: '蓝牙设备名称输入框：com.yftech.settings:id/et_sys_settings_common_input_tips_content'
          },
          {
            title: '确定：com.yftech.settings:id/btn_sys_settings_common_tips_submit'
          },
          {
            title: '取消：com.yftech.settings:id/btn_sys_settings_common_tips_cancel'
          }]
        },
        {
          title: '蓝牙连接设备：com.yftech.settings:id/btn_sys_settings_connect_bt_dev',
          children: [{
            title: '可连接设备：com.yftech.settings:id/tv_sys_settings_connect_bt_tips_unpair_name'
          },
          {
            title: '刷新：com.yftech.settings:id/btn_sys_settings_connect_bt_tips_pair_item_search'
          },
          {
            title: '设备名称：com.yftech.settings:id/tv_sys_settings_connect_bt_tips_unpair_name'
          },
          {
            title: '连接：com.yftech.settings:id/btn_sys_settings_connect_bt_tips_unpair_item_set'
          },
          {
            title: '关闭：com.yftech.settings:id/btn_sys_settings_connect_bt_tips_pair_item_close'
          }]
        }]
      }]
    },
    {
      title: '显示：com.yftech.settings:id/btn_sys_settings_screen',
      children: [{
        title: '时间：com.yftech.settings:id/tv_screen_time_mark_text',
        children: [{
          title: '时间制式：com.yftech.settings:id/tv_sys_settings_screen_time_mode_text',
          children: [{
            title: '12时：name: com.yftech.settings:id/tv_thumb text: 12时'
          },
          {
            title: '24时：name: com.yftech.settings:id/tv_thumb text: 24时'
          }]
        }]
      },
      {
        title: '日夜模式：com.yftech.settings:id/tv_screen_day_mode_text',
        children: [{
          title: '白天：name: com.yftech.settings:id/tv_thumb text: 白天'
        },
        {
          title: '夜间：name: com.yftech.settings:id/tv_thumb text: 夜间'
        },
        {
          title: '自动：name: com.yftech.settings:id/tv_thumb text: 自动'
        },
        {
          title: '调光横条：com.yftech.settings:id/sb_screen_light_progress'
        },
        {
          title: '调暗（-）：com.yftech.settings:id/btn_screen_light_reduce'
        },
        {
          title: '调亮（ + ）：com.yftech.settings:id/btn_screen_light_plus'
        }]
      },
      {
        title: '行车时视频警告：com.yftech.settings:id/tv_screen_video_warning_text',
        children: [{
          title: '开关：com.yftech.settings:id/tv_thumb'
        }]
      }]
    },
    {
      title: '声音：com.yftech.settings:id/btn_sys_settings_voice',
      children: [{
        title: '系统：com.yftech.settings:id/tv_sys_settings_voice_text',
        children: [{
          title: '按键提示音：com.yftech.settings:id/tv_sys_settings_screen_time_mode_text',
          children: [{
            title: '开关：com.yftech.settings:id/tsbtn_sys_settings_key_voice_on'
          }]
        },
        {
          title: '车速音量补偿：com.yftech.settings:id/tv_sys_settings_voice_adjust_text',
          children: [{
            title: '关：name: com.yftech.settings:id/tv_thumb text: 关'
          },
          {
            title: '低：name: com.yftech.settings:id/tv_thumb text: 低'
          },
          {
            title: '中：name: com.yftech.settings:id/tv_thumb text: 中'
          },
          {
            title: '高：name: com.yftech.settings:id/tv_thumb text: 高'
          }]
        },
        {
          title: '系统声音调节横条：com.yftech.settings:id/sb_sys_settings_voice_volume_progress',
          children: [{
            title: '减小音量：com.yftech.settings:id/btn_sys_settings_voice_volume_reduce'
          },
          {
            title: '增大音量：com.yftech.settings:id/btn_sys_settings_voice_volume_plus'
          }]
        },
        {
          title: '电话声音调节横条：com.yftech.settings:id/sb_sys_settings_phone_volume_progress',
          children: [{
            title: '减小音量：com.yftech.settings:id/btn_sys_settings_voice_volume_reduce'
          },
          {
            title: '增大音量：com.yftech.settings:id/btn_sys_settings_phone_volume_plus'
          }]
        }]
      },
      {
        title: '多媒体：com.yftech.settings:id/tv_sys_settings_voice_media_text',
        children: [{
          title: '音效：com.yftech.settings:id/tv_voice_sound_effect_text',
          children: [{
            title: '原声：com.yftech.settings:id/rbtn_sys_settings_sound_effect_default'
          },
          {
            title: '流行：com.yftech.settings:id/rbtn_sys_settings_sound_effect_fashion'
          },
          {
            title: '古典：com.yftech.settings:id/rbtn_sys_settings_sound_effect_classical'
          },
          {
            title: '摇滚：com.yftech.settings:id/rbtn_sys_settings_sound_effect_rock'
          },
          {
            title: '爵士：com.yftech.settings:id/rbtn_sys_settings_sound_effect_jazz'
          },
          {
            title: '自定义：com.yftech.settings:id/rbtn_sys_settings_sound_effect_custom'
          }]
        },
        {
          title: '低音调节：com.yftech.settings:id/tv_voice_low_effect_text',
          children: [{
            title: '-7：name: com.yftech.settings:id/tv_thumb text: -7'
          },
          {
            title: '-5：name: com.yftech.settings:id/tv_thumb text: -5'
          },
          {
            title: '-3：name: com.yftech.settings:id/tv_thumb text: -3'
          },
          {
            title: '-1：name: com.yftech.settings:id/tv_thumb text: -1'
          },
          {
            title: '0：name: com.yftech.settings:id/tv_thumb text: 0'
          },
          {
            title: '1：name: com.yftech.settings:id/tv_thumb text: 1'
          },
          {
            title: '3：name: com.yftech.settings:id/tv_thumb text: 3'
          },
          {
            title: '5：name: com.yftech.settings:id/tv_thumb text: 5'
          },
          {
            title: '7：name: com.yftech.settings:id/tv_thumb text: 7'
          }]
        },
        {
          title: '中音调节：com.yftech.settings:id/tv_voice_mid_effect_text',
          children: [{
            title: '-7：name: com.yftech.settings:id/tv_thumb text: -7'
          },
          {
            title: '-5：name: com.yftech.settings:id/tv_thumb text: -5'
          },
          {
            title: '-3：name: com.yftech.settings:id/tv_thumb text: -3'
          },
          {
            title: '-1：name: com.yftech.settings:id/tv_thumb text: -1'
          },
          {
            title: '0：name: com.yftech.settings:id/tv_thumb text: 0'
          },
          {
            title: '1：name: com.yftech.settings:id/tv_thumb text: 1'
          },
          {
            title: '3：name: com.yftech.settings:id/tv_thumb text: 3'
          },
          {
            title: '5：name: com.yftech.settings:id/tv_thumb text: 5'
          },
          {
            title: '7：name: com.yftech.settings:id/tv_thumb text: 7'
          }]
        },
        {
          title: '高音调节：com.yftech.settings:id/tv_voice_balance_effect_text',
          children: [{
            title: '-7：name: com.yftech.settings:id/tv_thumb text: -7'
          },
          {
            title: '-5：name: com.yftech.settings:id/tv_thumb text: -5'
          },
          {
            title: '-3：name: com.yftech.settings:id/tv_thumb text: -3'
          },
          {
            title: '-1：name: com.yftech.settings:id/tv_thumb text: -1'
          },
          {
            title: '0：name: com.yftech.settings:id/tv_thumb text: 0'
          },
          {
            title: '1：name: com.yftech.settings:id/tv_thumb text: 1'
          },
          {
            title: '3：name: com.yftech.settings:id/tv_thumb text: 3'
          },
          {
            title: '5：name: com.yftech.settings:id/tv_thumb text: 5'
          },
          {
            title: '7：name: com.yftech.settings:id/tv_thumb text: 7'
          }]
        },
        {
          title: '平衡 / 衰减设置：com.yftech.settings:id/tv_voice_high_effect_text',
          children: [{
            title: '小圆点：com.yftech.settings:id/stageThumb'
          },
          {
            title: '上移：com.yftech.settings:id/btn_stage_up'
          },
          {
            title: '下移：com.yftech.settings:id/btn_stage_down'
          },
          {
            title: '左移：com.yftech.settings:id/btn_stage_left'
          },
          {
            title: '右移：com.yftech.settings:id/btn_stage_right'
          }]
        }]
      }]
    },
    {
      title: '更多：com.yftech.settings:id/btn_sys_settings_more',
      children: [{
        title: '系统信息：com.yftech.settings:id/tv_sys_settings_more_title',
        children: [{
          title: '软件更新：com.yftech.settings:id/btn_sys_settings_more_update',
          children: [{
            title: '返回：com.carota.ota:id/btn_all_titlebar_left'
          }]
        },
        {
          title: '开放字体协议：com.yftech.settings:id/btn_sys_settings_more_font',
          children: [{
            title: '关闭：com.yftech.settings:id/btn_sys_settings_mroe_font_tips_close'
          },
          {
            title: '显示更多：com.yftech.settings:id/btn_sys_settings_mroe_font_tips_show'
          }]
        },
        {
          title: '恢复出厂设置：com.yftech.settings:id/btn_sys_settings_more_reset_factory',
          children: [{
            title: '确定：com.yftech.settings:id/btn_sys_settings_common_tips_submit'
          },
          {
            title: '取消：com.yftech.settings:id/btn_sys_settings_common_tips_close'
          }]
        }]
      },
      {
        title: '软件更新：com.yftech.settings:id/tv_sys_settings_connect_more_upate_text',
        children: [{
          title: '暂无更新：com.yftech.settings:id/tv_sys_settings_no_os_update_filest'
        },
        {
          title: 'OS：com.yftech.settings:id/tv_sys_settings_os_update_textt'
        },
        {
          title: 'MCU：name: android.widget.TextView text: MCU'
        },
        {
          title: '仪表：name: android.widget.TextView text: 仪表'
        }]
      },
      {
        title: 'TBOX：com.yftech.settings:id/tv_sys_settings_more_tbox_text'
      }]
    }]
  }]
},
{
  title: '电话',
  children: [{
    title: '最近通话：name: android.widget.TextView text: 最近通话',
    children: [{
      title: '姓名：com.yftech.btphone:id/list_call_logs_name'
    },
    {
      title: '电话：com.yftech.btphone:id/list_call_logs_number'
    }]
  },
  {
    title: '通讯录：name: android.widget.TextView text: 通讯录',
    children: [{
      title: '搜索联系人输入框：com.yftech.btphone:id/list_contacts_search_view'
    },
    {
      title: '姓名：com.yftech.btphone:id/list_contacts_name'
    },
    {
      title: '电话：com.yftech.btphone:id/list_contacts_number'
    }]
  },
  {
    title: '拨号键盘：com.yftech.btphone:id/main_dial',
    children: [{
      title: '收起拨号键盘：com.yftech.btphone:id/dial_close_dialog'
    },
    {
      title: '删除：com.yftech.btphone:id/dial_del_btn'
    },
    {
      title: '拨打：com.yftech.btphone:id/dial_dialing'
    },
    {
      title: '挂断：com.yftech.btphone:id/dialog_call_hang_up'
    }]
  },
  {
    title: '柳汽道路救援：com.yftech.btphone:id/main_net_call'
  }]
}
]

export {
  T5treeData
}