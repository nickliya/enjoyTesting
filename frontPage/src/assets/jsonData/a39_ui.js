import {naviData }from './navi.js'

const A39treeData = [{
    title: '电台',
    children: [{
      title: '在线电台图标:com.tencent.wecarnews:id/iv_tab_nav_qqfm_icom',
    },
    {
      title: '在线电台:com.tencent.wecarnews:id/tv_tab_nav_qqfm_text',
      children: [{
        title: '精选:com.tencent.wecarnews:id/tv_tab_nav_feature_text',
        children: [{
          title: '情感治愈:com.tencent.wecarnews:id/feature_item_title',
          children: [{
            title: '印象深处图片:com.tencent.wecarnews:id/main_item_background'
          },
          {
            title: '印象深处:com.tencent.wecarnews:id/tv_item_title'
          },
          {
            title: '印象深处播放按钮:com.tencent.wecarnews:id/iv_item_play_status'
          }]
        }]
      },
      {
        title: '分类:com.tencent.wecarnews:id/tv_tab_nav_sort_text',
        children: [{
          title: '综艺娱乐：com.tencent.wecarnews:id/tv_news_qqfm_sort_child_name',
          children: [{
            title: '星座风水：com.tencent.wecarnews:id/tv_news_qqfm_sort_child_name',
            children: [{
              title: '企鹅灵异风水背景图片:com.tencent.wecarnews:id/background'
            },
            {
              title: '企鹅灵异风水:com.tencent.wecarnews:id/tv_item_title'
            },
            {
              title: '企鹅灵异风水播放按钮:com.tencent.wecarnews:id/iv_item_play_status'
            }]
          }]
        }]
      },
      {
        title: '我的:com.tencent.wecarnews:id/tv_tab_nav_mine_text',
        children: [{
          title: '我的下面栏目title：com.tencent.wecarnews:id/tv_item_title',
          children: [{
            title: '随心听:com.tencent.wecarnews:id/background'
          },
          {
            title: '随心听背景图片:com.tencent.wecarnews:id/background_cover'
          },
          {
            title: '耳机图形:com.tencent.wecarnews:id/iv_mine_icon'
          }]
        }]
      }]
    },
    {
      title: '本地电台图标:com.tencent.wecarnews:id/iv_tab_nav_localRadio_icom'
    },
    {
      title: '本地电台:com.tencent.wecarnews:id/tv_tab_nav_localRadio_text',
      children: [{
        title: 'FM:com.tencent.wecarnews:id/tv_tab_nav_feature_text',
        children: [{
          title: '收藏按钮:com.tencent.wecarnews:id/iv_local_collect'
        },
        {
          title: '快退按钮:com.tencent.wecarnews:id/iv_local_iv_prev'
        },
        {
          title: '快进按钮:com.tencent.wecarnews:id/iv_local_iv_next'
        },
        {
          title: '播放/暂停按钮:com.tencent.wecarnews:id/iv_local_play_pause'
        },
        {
          title: '减频按钮:com.tencent.wecarnews:id/iv_local_iv_minus'
        },
        {
          title: '加频按钮:com.tencent.wecarnews:id/iv_local_iv_add'
        }]
      },
      {
        title: 'AM:com.tencent.wecarnews:id/tv_tab_nav_feature_text',
        children: [{
          title: '收藏按钮:com.tencent.wecarnews:id/iv_local_collect'
        },
        {
          title: '快退按钮:com.tencent.wecarnews:id/iv_local_iv_prev'
        },
        {
          title: '快进按钮:com.tencent.wecarnews:id/iv_local_iv_next'
        },
        {
          title: '播放/暂停按钮:com.tencent.wecarnews:id/iv_local_play_pause'
        },
        {
          title: '减频按钮:com.tencent.wecarnews:id/iv_local_iv_minus'
        },
        {
          title: '加频按钮:com.tencent.wecarnews:id/iv_local_iv_add'
        }]
      },
      {
        title: '喜欢:com.tencent.wecarnews:id/tv_tab_nav_mine_text',
        children: [{
          title: '爱心图标:com.tencent.wecarnews:id/collect_right_top_mark'
        },
        {
          title: '背景图片数字:com.tencent.wecarnews:id/tv_local_collect_fre'
        }]
      }]
    },
    {
      title: '搜索:com.tencent.wecarnews:id/iv_tab_search'
    },
    {
      title: '返回:com.tencent.wecarnews:id/iv_tab_nav_back'
    },
    {
      title: '播放',
      children: [{
        title: '菜单:com.tencent.wecarnews:id/mv_tab_playing_state'
      },
      {
        title: '前进:com.tencent.wecarnews:id/nid_play_next'
      },
      {
        title: '后退:com.tencent.wecarnews:id/nid_play_prev'
      },
      {
        title: '开始/暂停按钮:com.tencent.wecarnews:id/nid_play_pause'
      },
      {
        title: '进度条:com.tencent.wecarnews:id/nid_play_seek_bar'
      },
      {
        title: '喜欢图标:com.tencent.wecarnews:id/nid_favor_icon'
      }]
    }]
  },
  {
    title: '音乐',
    children: [{
      title: '返回:com.tencent.wecarmusicp:id/iv_navibar_back'
    },
    {
      title: '歌曲播放主界面',
      children: [{
        title: '收藏:com.tencent.wecarmusicp:id/iv_player_favorite'
      },
      {
        title: '后退:com.tencent.wecarmusicp:id/iv_player_pre'
      },
      {
        title: '前进:com.tencent.wecarmusicp:id/iv_player_next'
      },
      {
        title: '播放/暂停按钮:com.tencent.wecarmusicp:id/iv_player_play'
      },
      {
        title: '循环按钮:com.tencent.wecarmusicp:id/iv_player_mode'
      },
      {
        title: '播放条:com.tencent.wecarmusicp:id/seekbar_player'
      },
      {
        title: '自定义:com.tencent.wecarmusicp:id/player_cussong'
      }]
    },
    {
      title: '音乐馆:text:音乐馆',
      children: [{
        title: '我的图标:com.tencent.wecarmusicp:id/iv_online_user',
        children: [{
          title: '登陆界面'
        }]
      },
      {
        title: '搜索:com.tencent.wecarmusicp:id/iv_online_search',
        children: [{
          title: '输入框:com.tencent.wecarmusicp:id/et_word'
        },
        {
          title: '取消:com.tencent.wecarmusicp:id/iv_back'
        }]
      },
      {
        title: '小祺推荐:com.tencent.wecarmusicp:id/iv_daily',
        children: [{
          title: '微信登陆:com.tencent.wecarmusicp:id/btn_wechat'
        },
        {
          title: 'QQ登陆:com.tencent.wecarmusicp:id/btn_qq'
        }]
      },
      {
        title: '猜你喜欢:com.tencent.wecarmusicp:id/iv_radio',
        children: [{
          title: '微信登陆:com.tencent.wecarmusicp:id/btn_wechat'
        },
        {
          title: 'QQ登陆:com.tencent.wecarmusicp:id/btn_qq'
        }]
      },
      {
        title: '每日新歌:com.tencent.wecarmusicp:id/iv_hot',
        title: '跳转到播放页',
        children: [{
          title: '播放/暂停按钮:com.tencent.wecarmusicp:id/img_play_operator'
        },
        {
          title: '下一曲按钮:com.tencent.wecarmusicp:id/img_next'
        },
        {
          title: '木偶人:com.tencent.wecarmusicp:id/tv_song_name'
        },
        {
          title: '01:com.tencent.wecarmusicp:id/tv_song_num'
        },
        {
          title: '歌曲图片:com.tencent.wecarmusicp:id/img_song'
        }]
      },
      {
        title: '更多:com.tencent.wecarmusicp:id/tv_recommend_more'
      },
      {
        title: '播放/暂停按钮：com.tencent.wecarmusicp:id/iv_play_tuijian'
      },
      {
        title: '歌单推荐:text:歌单推荐',
        children: [{
          title: '我终究还是得不到你,输给了她:com.tencent.wecarmusicp:id/tv_name',
          children: [{
            title: '播放/暂停按钮:com.tencent.wecarmusicp:id/img_play_operator'
          },
          {
            title: '收藏:com.tencent.wecarmusicp:id/img_collect'
          },
          {
            title: '夏天的风:com.tencent.wecarmusicp:id/tv_song_name'
          },
          {
            title: '01:com.tencent.wecarmusicp:id/tv_song_num'
          },
          {
            title: '歌曲图片:com.tencent.wecarmusicp:id/img_song'
          }]
        },
        {
          title: '播放/暂停按钮:com.tencent.wecarmusicp:id/img_play_operator'
        },
        {
          title: '歌曲背景图片:com.tencent.wecarmusicp:id/iv_pictrue'
        }]
      },
      {
        title: '歌曲排行:text:歌曲排行',
        children: [{
          title: '流行指数:com.tencent.wecarmusicp:id/iv_logo'
        },
        {
          title: '跳转到播放页'
        }]
      }]
    },
    {
      title: '本地音乐:text:本地音乐',
      children: [{
        title: 'usb1:com.tencent.wecarmusicp:id/iv_local_media_icon'
      },
      {
        title: 'usb2:com.tencent.wecarmusicp:id/iv_local_media_icon'
      },
      {
        title: '蓝牙音乐背景图片:com.tencent.wecarmusicp:id/iv_local_media_icon'
      },
      {
        title: '蓝牙音乐:com.tencent.wecarmusicp:id/tv_local_media_name'
      }]
    },
    {
      title: '我的音乐:text:我的音乐',
      children: [{
        title: '最近播放:com.tencent.wecarmusicp:id/tv_mine_squarename',
        children: [{
          title: '挑战到播放界面'
        }]
      },
      {
        title: '我最喜欢的歌曲:com.tencent.wecarmusicp:id/iv_mine_cover',
        children: [{
          title: '跳转到登陆页面'
        }]
      }]
    }]
  },
  naviData,
  {
    title: '设置',
    children: [{
      title: '通用:com.gaei.settings:id/tab_general',
      children: [{
        title: '24小时制开关按钮:com.gaei.settings:id/custom_switch'
      },
      {
        title: 'GPS:text:GPS'
      },
      {
        title: '北斗:text:北斗'
      },
      {
        title: 'GPS+北斗:text:GPS+北斗'
      }]
    },
    {
      title: '声音:com.gaei.settings:id/tab_sound',
      children: [{
        title: '多媒体音量:com.gaei.settings:id/custom_left_title',
        children: [{
          title: '音量条:com.gaei.settings:id/custom_seek_bar'
        }]
      },
      {
        title: '导航音量:com.gaei.settings:id/custom_left_title'
      },
      {
        title: '语音识别/电话音量:com.gaei.settings:id/custom_seek_bar'
      },
      {
        title: '3D音效:com.gaei.settings:id/sound_text',
        children: [{
          title: '关闭:text:关闭'
        },
        {
          title: '驾驶员:text:驾驶员'
        },
        {
          title: '全部乘客:text:全部乘客'
        }]
      },
      {
        title: '音随车速:com.gaei.settings:id/speed_text',
        children: [{
          title: '不关联:text:不关联'
        },
        {
          title: '弱关联:text:弱关联'
        },
        {
          title: '一般关联:text:一般关联'
        },
        {
          title: '强关联:text:强关联'
        }]
      },
      {
        title: '开机音量:com.gaei.settings:id/boot_text',
        children: [{
          title: '不变:text:不变'
        },
        {
          title: '自适应:text:自适应'
        }]
      },
      {
        title: '按键音:com.gaei.settings:id/touch_text',
        children: [{
          title: '关闭:text:关闭'
        },
        {
          title: '现代:text:现代'
        },
        {
          title: '复古:text:复古'
        }]
      },
      {
        title: '辅助警示音与媒体音:com.gaei.settings:id/park_text',
        children: [{
          title: '不变:text:不变'
        },
        {
          title: '静音:text:静音'
        }]
      },
      {
        title: '解锁/闭锁提示音:com.gaei.settings:id/custom_switch_text',
        children: [{
          title: '按钮：com.gaei.settings:id/custom_switch'
        }]
      }]
    },
    {
      title: '显示:com.gaei.settings:id/tab_display',
      children: [{
        title: '屏幕亮度:com.gaei.settings:id/custom_left_title',
        children: [{
          title: '亮度调节按钮:com.gaei.settings:id/custom_seek_bar'
        }]
      },
      {
        title: '空调界面保持时间:com.gaei.settings:id/air_text',
        children: [{
          title: '5s:text:5s'
        },
        {
          title: '10s:text:10s'
        },
        {
          title: '15s:text:15s'
        },
        {
          title: '20s:text:20s'
        }]
      }]
    },
    {
      title: '蓝牙:com.gaei.settings:id/tab_bluetooth',
      children: [{
        title: '蓝牙开关:com.gaei.settings:id/custom_switch_text',
        children: [{
          title: '开关按钮:com.gaei.settings:id/custom_switch'
        }]
      },
      {
        title: '其他设备:text:其他设备',
        children: [{
          title: '刷新按钮:com.gaei.settings:id/device_add_btn'
        }]
      },
      {
        title: '自动连接:com.gaei.settings:id/custom_switch_text',
        children: [{
          title: '开关按钮:com.gaei.settings:id/custom_switch'
        }]
      }]
    },
    {
      title: 'WLAN:com.gaei.settings:id/tab_wifi',
      children: [{
        title: '移动网络:com.gaei.settings:id/custom_switch_text',
        children: [{
          title: '开关按钮:com.gaei.settings:id/custom_switch'
        }]
      },
      {
        title: '个人热点:com.gaei.settings:id/custom_switch_text',
        children: [{
          title: '开关按钮:com.gaei.settings:id/custom_switch'
        }]
      },
      {
        title: 'WLAN:com.gaei.settings:id/custom_switch_text',
        children: [{
          title: '开关按钮:com.gaei.settings:id/custom_switch'
        }]
      }]
    },
    {
      title: '语音:com.gaei.settings:id/tab_vr',
      children: [{
        title: '语音助理:text:语音助理',
        children: [{
          title: '广小祺:text:广小祺'
        },
        {
          title: '李白:text:李白'
        },
        {
          title: '妲己:text:妲己'
        }]
      },
      {
        title: '自定义唤醒词:com.gaei.settings:id/arousal_word_name',
        children: [{
          title: '编辑按钮:com.gaei.settings:id/arousal_word_edit'
        }]
      },
      {
        title: '显示模式:text:显示模式',
        children: [{
          title: '自动切换:text:自动切换'
        },
        {
          title: '黑夜模式:text:黑夜模式'
        },
        {
          title: '白天模式:text:白天模式'
        }]
      },
      {
        title: '应用偏好:text:应用偏好',
        children: [{
          title: '地图:text:地图'
        }]
      }]
    },
    {
      title: '恢复出厂:com.gaei.settings:id/tab_restore_factory',
      children: [{
        title: '恢复出厂:text:恢复出厂',
        children: [{
          title: '恢复:com.gaei.settings:id/recover_btn'
        }]
      }]
    }]
  }
]
  
export {
    A39treeData
  }