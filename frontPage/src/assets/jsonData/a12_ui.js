import {
  naviData
}
from './navi.js'

const A12treeData = [{
  title: '系统设置',
  children: [{
    title: '网络互连',
    children: [{
      title: '蓝牙:com.desay.setting:id/rl_bluetooth_item',
      children: [{
        title: '蓝牙开关:(1700,260)'
      },
      {
        title: '自动连接开关:(1700,350)'
      },
      {
        title: '自动同步通讯录:(1700,440)'
      },
      {
        title: '可连接设备名称:com.desay.setting:id/tv_bluetooth_name'
      },
      {
        title: '是否连接显示:com.desay.setting:id/tv_bluetooth_state'
      },
      {
        title: '已连接',
        children: [{
          title: '电话开关:com.desay.setting:id/switch_telephone'
        },
        {
          title: '媒体开关:com.desay.setting:id/switch_media'
        }]
      }]
    },
    {
      title: 'WLAN',
      children: [{
        title: 'WLAN开关:com.desay.setting:id/switch_wifi'
      },
      {
        title: '可连接列表名称:com.desay.setting:id/tv_wifi_name'
      },
      {
        title: '是否连接:com.desay.setting:id/tv_wifi_state'
      },
      {
        title: '已连接',
        children: [{
          title: '忽略:com.desay.setting:id/textview_inore'
        },
        {
          title: '断开连接:com.desay.setting:id/textview_disconnect'
        }]
      }]
    }]
  }]
},
{
  title: '语音',
  children: [{
    title: '唤醒条:com.tencent.wecarspeech:id/menuLayout'
  },
  {
    title: '语音文字显示条:com.tencent.wecarspeech:id/status_tv'
  }]
},
{
  title: '音乐',
  children: [{
    title: 'qq音乐搜索：com.tencent.wecarmusicp:id/iv_online_search',
    children: [{
      title: '搜索输入框：com.tencent.wecarmusicp:id/et_search_input',
    },
    {
      title: '清空输入框：com.tencent.wecarmusicp:id/iv_search_input_clear'
    },
    {
      title: '取消: com.tencent.wecarmusicp:id/tv_search_cancel'
    },
    {
      title: '搜索后界面',
      children: [{
        title: '退出搜索:com.tencent.wecarmusicp:id/iv_search_input_clear'
      },
      {
        title: '单曲、专辑、歌单:com.tencent.wecarmusicp:id/navigation_title'
      }]
    }]
  },
  {
    title: '上方歌曲名称：com.tencent.wecarmusicp:id/tv_current_song'
  },
  {
    title: 'Home',
    children: [{
      title: '音乐卡片:com.rightware.kanzi.androiddatafeeder:id/music_default_view'
    },
    {
      title: '歌曲名称:com.rightware.kanzi.androiddatafeeder:id/music_title'
    },
    {
      title: '下一曲:com.rightware.kanzi.androiddatafeeder:id/next_btn'
    },
    {
      title: '上一曲:com.rightware.kanzi.androiddatafeeder:id/pre_btn'
    },
    {
      title: '播放/暂停:com.rightware.kanzi.androiddatafeeder:id/play_btn'
    }]
  },
  {
    title: '音乐馆: com.tencent.wecarmusicp:id/ll_navibar_online',
    children: [{
      title: '封面名称（无法点击）：com.tencent.wecarmusicp:id/song_name_tv'
    },
    {
      title: '封面：com.tencent.wecarmusicp:id/iv_cover'
    },
    {
      title: '刷新:com.tencent.wecarmusicp:id/iv_shuffle'
    },
    {
      title: '排行榜:com.tencent.wecarmusicp:id/sf_bg_particle',
      children: [{
        title: '播放：com.tencent.wecarmusicp:id/iv_play_icon'
      }]
    }]

  },
  {
    title: '本地音乐: com.tencent.wecarmusicp:id/ll_navibar_local',
    children: [{
      title: '播放图标：com.tencent.wecarmusicp:id/iv_play'
    },
    {
      title: '图片：com.tencent.wecarmusicp:id/iv_local_media_icon'
    },
    {
      title: '文字：com.tencent.wecarmusicp:id/tv_local_media_name'
    }]
  },
  {
    title: '我的音乐: com.tencent.wecarmusicp:id/ll_navibar_mine',
    children: [{
      title: '我喜欢的歌曲:com.tencent.wecarmusicp:id/iv_my_song',
      children: [{
        title: '竖排列表歌曲名称：com.tencent.wecarmusicp:id/tv_song_name',
      },
      {
        title: '设置:com.tencent.wecarmusicp:id/img_batch',
        children: [{
          title: '删除:com.tencent.wecarmusicp:id/img_delete'
        },
        {
          title: '返回：com.tencent.wecarmusicp:id/img_cancel'
        },
        {
          title: '删除选中:com.tencent.wecarmusicp:id/checkbox'
        },
        ]
      },
      ]
    }]
  },
  {
    title: '音乐播放界面',
    children: [{
      title: 'qq音乐播放：com.tencent.wecarmusicp:id/iv_player_play'
    },
    {
      title: '音乐收藏：com.tencent.wecarmusicp:id/iv_player_favorite'
    },
    {
      title: '上一曲：com.tencent.wecarmusicp:id/previousIv'
    },
    {
      title: '下一曲:com.tencent.wecarmusicp:id/nextIv'
    },
    {
      title: '歌曲名称：com.tencent.wecarmusicp:id/tv_player_songname'
    },
    {
      title: '播放历史按钮：com.tencent.wecarmusicp:id/iv_player_list',
      children: [{
        title: '列表歌曲名称：com.tencent.wecarmusicp:id/tv_main_name'
      },
      {
        title: '歌曲图片：com.tencent.wecarmusicp:id/iv_cover'
      }]
    },
    {
      title: '歌词：com.tencent.wecarmusicp:id/lrc_view',
      children: [{
        title: '歌词显示界面：com.tencent.wecarmusicp:id/full_lrc_view'
      }]
    },
    {
      title: '音源切换按钮：com.tencent.wecarmusicp:id/iv_player_source',
      children: [{
        title: '在线：com.tencent.wecarmusicp:id/img_net'
      },
      {
        title: '蓝牙：com.tencent.wecarmusicp:id/img_bluetooth'
      },
      {
        title: 'USB：com.tencent.wecarmusicp:id/img_usb2'
      }]
    }]
  }]
},
{
  title: '电台',
  children: [{
    title: '顶部名称: com.tencent.wecarnews:id/tv_tab_nav_playing_show_name'
  },
  {
    title: '登录头像: com.tencent.wecarnews:id/iv_tab_nav_qq_icom'
  },
  {
    title: '搜索: com.tencent.wecarnews:id/nid_tab_search',
    children: [{
      title: '搜索-输入框: com.tencent.wecarnews:id/nid_search_input'
    },
    {
      title: '节目名称: com.tencent.wecarnews:id/album_list_item_showname'
    },
    {
      title: '删除: com.tencent.wecarnews:id/iv_online_result_search_delete'
    }]
  },
  {
    title: 'Home',
    children: [{
      title: '电台卡片:com.rightware.kanzi.androiddatafeeder:id/card_info'
    },
    {
      title: '节目名称:com.rightware.kanzi.androiddatafeeder:id/radio_title'
    },
    {
      title: '播放/暂停:com.rightware.kanzi.androiddatafeeder:id/play_btn'
    }]
  },
  {
    title: '在线电台: com.tencent.wecarnews:id/tv_news_qqfm_tab_selection',
    children: [{
      title: '列表图片:com.tencent.wecarnews:id/iv_album_icon'
    },
    {
      title: '节目名称:com.tencent.wecarnews:id/tv_currentName'
    },
    {
      title: '刷新:com.tencent.wecarnews:id/iv_reload'
    }]
  },
  {
    title: '广播: com.tencent.wecarnews:id/tv_news_qqfm_tab_radio',
    children: [{
      title: 'FM: com.tencent.wecarnews:id/broadcast_fragment_fm'
    },
    {
      title: 'AM: com.tencent.wecarnews:id/broadcast_fragment_am'
    },
    {
      title: '搜台：com.tencent.wecarnews:id/broadcast_fragment_scan_name',
      children: [{
        title: '频道：com.tencent.wecarnews:id/radio_list_item_frequency'
      },
      {
        title: '封面：com.tencent.wecarnews:id/broadcast_fragment_scan_image'
      }]
    }]
  },
  {
    title: '我的电台: com.tencent.wecarnews:id/tv_news_qqfm_tab_mine',
    children: [{
      title: '我喜欢的专辑:com.tencent.wecarnews:id/rl_fav_album_container',
      children: [{
        title: '专辑图片:com.tencent.wecarnews:id/iv_album_icon'
      },
      {
        title: '专辑名称:com.tencent.wecarnews:id/tv_album_title'
      }]
    },
    {
      title: '我喜欢的广播:com.tencent.wecarnews:id/rl_fav_broadcast_container',
      children: [{
        title: '广播图片:com.tencent.wecarnews:id/iv_album_icon'
      },
      {
        title: '广播频道:com.tencent.wecarnews:id/tv_album_operation'
      }]

    },
    {
      title: '最近播放图片:com.tencent.wecarnews:id/iv_album_icon'
    },
    {
      title: '最近播放名称:com.tencent.wecarnews:id/tv_album_title'
    }]
  },
  {
    title: '本地电台播放界面',
    children: [{
      title: '-：com.tencent.wecarnews:id/play_radioplay_fragment_minusbutton'
    },
    {
      title: '+：com.tencent.wecarnews:id/play_radioplay_fragment_plusbutton'
    },
    {
      title: '收藏：com.tencent.wecarnews:id/play_radioplay_fragment_heartbutton'
    },
    {
      title: '静音：com.tencent.wecarnews:id/play_radioplay_fragment_mutebutton'
    },
    {
      title: '历史播放列表：com.tencent.wecarnews:id/play_radioplay_fragment_listbutton'
    },
    {
      title: '频道模式切换：com.tencent.wecarnews:id/play_radioplay_fragment_sourcebutton',
      children: [{
        title: '在线:com.tencent.wecarnews:id/dialog_source_online'
      },
      {
        title: 'fm：com.tencent.wecarnews:id/dialog_source_fm'
      },
      {
        title: 'am：com.tencent.wecarnews:id/dialog_source_am'
      }]
    },
    {
      title: '频道数：com.tencent.wecarnews:id/play_radioplay_fragment_frequency'
    },
    {
      title: '频道单位：com.tencent.wecarnews:id/play_radioplay_fragment_unit'
    },
    {
      title: '频道切换滑动条：com.tencent.wecarnews:id/play_radioplay_fragment_loopview'
    }]
  },
  {
    title: '在线电台播放界面',
    children: [{
      title: '上一曲：com.tencent.wecarnews:id/play_onlinenews_fragment_prevview'
    },
    {
      title: '下一曲：com.tencent.wecarnews:id/play_onlinenews_fragment_nextview'
    },
    {
      title: '播放：com.tencent.wecarnews:id/play_onlinenews_fragment_playbutton'
    },
    {
      title: '收藏：com.tencent.wecarnews:id/play_onlinenews_fragment_heartbutton'
    },
    {
      title: '历史播放列表：com.tencent.wecarnews:id/play_onlinenews_fragment_listbutton'
    },
    {
      title: '频道模式切换：com.tencent.wecarnews:id/play_onlinenews_fragment_sourcebutton',
      children: [{
        title: '在线:com.tencent.wecarnews:id/dialog_source_online'
      },
      {
        title: 'fm：com.tencent.wecarnews:id/dialog_source_fm'
      },
      {
        title: 'am：com.tencent.wecarnews:id/dialog_source_am'
      }]
    },
    {
      title: '频道名称：com.tencent.wecarnews:id/play_onlinenews_fragment_title'
    },
    {
      title: '播放条当前时间：com.tencent.wecarnews:id/play_onlinenews_fragment_progress'
    }]
  }]
},
naviData]

export {
  A12treeData
}