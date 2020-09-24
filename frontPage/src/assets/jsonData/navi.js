const naviData = {
  title: '导航',
  children: [{
    title: '更多按钮：com.tencent.wecarnavi:id/n_maphome_more_ic',
    children: [{
      title: '返回按钮：com.tencent.wecarnavi:id/n_maphome_main_back_iv'
    },
    {
      title: '方向盘图标：com.tencent.wecarnavi:id/n_home_pop_wash_car'
    },
    {
      title: '我的车文字：com.tencent.wecarnavi:id/n_home_text_wash_car',
      children: [{
        title: '返回按钮：com.tencent.wecarnavi:id/n_poi_back_btn'
      },
      {
        title: '刷新：com.tencent.wecarnavi:id/n_sync_reload'
      },
      {
        title: '车牌号添加：com.tencent.wecarnavi:id/mcar_plate_edit_btn'
      },
      ]
    },
    {
      title: '集结图标：com.tencent.wecarnavi:id/n_home_pop_team_trip_iv'
    },
    {
      title: '集结文件：com.tencent.wecarnavi:id/n_home_pop_location_tv',
      children: [{
        title: '返回按钮：com.tencent.wecarnavi:id/n_poi_back_btn'
      },
      {
        title: '发起集结：com.tencent.wecarnavi:id/n_team_trip_launch_tv'
      },
      {
        title: '加入集结：com.tencent.wecarnavi:id/n_team_trip_join_tv'
      },
      ]
    },
    {
      title: '语音播报：com.tencent.wecarnavi:id/n_home_pop_voice',
      children: [{
        title: '返回按钮：com.tencent.wecarnavi:id/n_banner_close'
      },
      {
        title: '导航语音：com.tencent.wecarnavi:id/n_language_title_tv'
      },
      {
        title: '路线偏好：com.tencent.wecarnavi:id/n_cruise_tv',
        children: [{
          title: '电子眼：com.tencent.wecarnavi:id/n_cruise_voice_camera_cb'
        },
        {
          title: '前方路况：com.tencent.wecarnavi:id/n_cruise_voice_traffic_cb'
        },
        {
          title: '红绿灯：com.tencent.wecarnavi:id/n_cruise_voice_traffic_light_cb'
        },
        {
          title: '安全提示：com.tencent.wecarnavi:id/n_cruise_voice_safe_tip_cb'
        }]
      },
      {
        title: '导航播报模式：com.tencent.wecarnavi:id/n_voice_setting_tv',
        children: [{
          title: '详细模式：name :  android.widget.Button  text :  详细模式'
        },
        {
          title: '简洁模式：name :  android.widget.Button  text :  简洁模式'
        }]
      },
      ]
    },
    {
      title: ' 离线地图：com.tencent.wecarnavi:id/n_home_pop_navidata',
      children: [{
        title: '返回按钮：com.tencent.wecarnavi:id/n_offlinedata_iv_close'
      },
      {
        title: '更改存储位置：com.tencent.wecarnavi:id/n_offline_data_change_location_tv'
      },
      {
        title: '收起/打开推荐下载按钮：com.tencent.wecarnavi:id/n_offlinedata_item_province_arrow'
      },
      {
        title: '推荐下载文字：com.tencent.wecarnavi:id/n_offlinedata_item_province_name'
      },
      {
        title: '打开全部城市按钮：com.tencent.wecarnavi:id/n_offlinedata_item_province_arrow'
      },
      {
        title: '全部城市文字：com.tencent.wecarnavi:id/n_offlinedata_item_province_name',
        children: [{
          title: '返回按钮：com.tencent.wecarnavi:id/n_offlinedata_iv_close'
        }]
      }]
    },
    {
      title: '收藏夹：com.tencent.wecarnavi:id/n_home_pop_favorite',
      children: [{
        title: '返回按钮：com.tencent.wecarnavi:id/n_favorite_back'
      },
      {
        title: '刷新按钮：com.tencent.wecarnavi:id/n_favorite_sync'
      },
      {
        title: '增加按钮：com.tencent.wecarnavi:id/n_favorite_add',
        children: [{
          title: '返回按钮：com.tencent.wecarnavi:id/n_poisearch_back_btn'
        },
        {
          title: '放大镜图标：com.tencent.wecarnavi:id/n_poisearch_search_iv'
        },
        {
          title: '搜索地点文字：com.tencent.wecarnavi:id/n_poisearch_search_tv'
        },
        {
          title: '我的位置图标：com.tencent.wecarnavi:id/poisearch_header_item_iv'
        },
        {
          title: '我的位置文字：com.tencent.wecarnavi:id/poisearch_header_item_tv'
        },
        {
          title: '地图选点图标：com.tencent.wecarnavi:id/poisearch_header_item_iv'
        },
        {
          title: '地图选点文字：com.tencent.wecarnavi:id/poisearch_header_item_tv',
          children: [{
            title: '返回按钮：com.tencent.wecarnavi:id/select_point_detail_back'
          },
          {
            title: '蓝色收藏方框：com.tencent.wecarnavi:id/confirm_button'
          }]
        }]
      }]
    },
    {
      title: '设置：com.tencent.wecarnavi:id/n_home_pop_setting',
      children: [{
        title: '返回按钮：com.tencent.wecarnavi:id/n_poi_back_btn'
      },
      {
        title: '实时路况：com.tencent.wecarnavi:id/setting_realtime_traffic_tv',
        children: [{
          title: '开关：com.tencent.wecarnavi:id/setting_realtime_traffic_switch'
        }]
      },
      {
        title: '路线偏好：com.tencent.wecarnavi:id/n_route_preference_tv',
        children: [{
          title: '高速优先：com.tencent.wecarnavi:id/n_route_pref_highway_first'
        },
        {
          title: '不走高速：com.tencent.wecarnavi:id/n_route_pref_no_highway'
        },
        {
          title: '少收费：com.tencent.wecarnavi:id/n_route_pref_few_fee'
        },
        {
          title: '躲避拥堵：com.tencent.wecarnavi:id/n_route_pref_avoid_block'
        },
        {
          title: '避开限行：com.tencent.wecarnavi:id/n_route_pref_avoid_limit'
        },
        ]
      },
      {
        title: '轨迹记录：com.tencent.wecarnavi:id/open_trace_tv',
        children: [{
          title: '开关：com.tencent.wecarnavi:id/open_trace_switch'
        }]
      },
      {
        title: '各地限行政策：com.tencent.wecarnavi:id/n_setting_limit_policy_layout',
        children: [{
          title: '返回按钮：com.tencent.wecarnavi:id/n_limitcitylist_back_iv'
        }]
      },
      {
        title: '关于：com.tencent.wecarnavi:id/n_setting_about_layout',
        children: [{
          title: '返回按钮：com.tencent.wecarnavi:id/n_back_iv'
        }]
      }]
    }]
  },
  {
    title: '导航按钮：com.tencent.wecarnavi:id/n_maphome_search_view',
    children: [{
      title: '返回：com.tencent.wecarnavi:id/n_poisearch_back_btn'
    },
    {
      title: '放大镜图标：com.tencent.wecarnavi:id/n_poisearch_search_iv'
    },
    {
      title: '放大镜图标：com.tencent.wecarnavi:id/n_poisearch_search_iv'
    },
    {
      title: '搜索目的地文字：com.tencent.wecarnavi:id/n_poisearch_search_tv',
      children: [{
        title: '返回：com.tencent.wecarnavi:id/n_suggestion_back_btn'
      },
      {
        title: '搜索目的地输入框：com.tencent.wecarnavi:id/n_suggestion_et'
      },
      {
        title: '搜索按钮：com.tencent.wecarnavi:id/n_suggestion_search_btn'
      },
      ]
    },
    ]
  },
  {
    title: 'home界面：com.tencent.wecarnavi:id/n_maphome_home_ic'
  },
  {
    title: '回到当前位置/切换2D、3D车头显示：com.tencent.wecarnavi:id/n_maphome_location_btn'
  },
  {
    title: '放大+：com.tencent.wecarnavi:id/sdk_zoom_view_zoom_out_iv'
  },
  {
    title: '缩小-：com.tencent.wecarnavi:id/sdk_zoom_view_zoom_in_iv'
  },
  {
    title: '导航左侧卡片',
    children: [{
      title: '搜索到目的地',
      children: [{
        title: '搜索出多个目的地',
        children: [{
          title: '返回：com.tencent.wecarnavi:id/n_poi_back_btn',
        },
        {
          title: '导航箭头：com.tencent.wecarnavi:id/n_poi_right_view',
        },
        {
          title: '第一个地点的名字：com.tencent.wecarnavi:id/n_poi_item_name',
        }]
      },
      {
        title: '返回：com.tencent.wecarnavi:id/back_btn'
      },
      {
        title: '收藏：com.tencent.wecarnavi:id/poi_set_fav_ic'
      },
      {
        title: "放大镜icon：com.tencent.wecarnavi:id/poi_search_ic"
      },
      {
        title: "导航按钮：com.tencent.wecarnavi:id/navi_btn"
      }
]
    },
    {
      title: '导航算路中',
      children: [{
        title: '返回：com.tencent.wecarnavi:id/sdk_back_btn'
      },
      {
        title: '+：com.tencent.wecarnavi:id/sdk_multi_route_add_passpoint',
      },
      {
        title: '...：com.tencent.wecarnavi:id/sdk_multi_route_preference',
      },
      {
        title: '开始导航：com.tencent.wecarnavi:id/sdk_start_navi_btn'
      }]
    },
    {
      title: '导航中',
      children: [{
        title: 'home：com.tencent.wecarnavi:id/btn_home'
      },
      {
        title: '...：com.tencent.wecarnavi:id/btn_more'
      },
      {
        title: '退出：com.tencent.wecarnavi:id/btn_exit',
        children: [{
          title: '确定：com.tencent.wecarnavi:id/btn_one_tv'
        },
        {
          title: '取消：com.tencent.wecarnavi:id/btn_second_tv'
        },
        {
          title: '提示框文字：com.tencent.wecarnavi:id/title'
        }]
      }]
    }],
  }]
}

const gaodeData = {
  title: '高德地图',
  children: [{
    title: '更多按钮：com.tencent.wecarnavi:id/n_maphome_more_ic',
    children: [{
      title: '返回按钮：com.autonavi.amapauto:id/sftv_back'
    },
    {
      title: '收藏夹：com.autonavi.amapauto:id/cl_group_collection'
    },
    {
      title: '离线数据：com.autonavi.amapauto:id/cl_group_data',
      children:[{
        title:'离线地图：com.autonavi.amapauto:id/cl_offline_map',
        children:[{
          title:"下载: com.autonavi.amapauto:id/stv_text_offline_city_download_operate"
        }]
      },
      {
        title:'导航语音: com.autonavi.amapauto:id/cl_voice'
      }]
    }]
  },
  {
    title: '导航按钮: com.autonavi.amapauto:id/cl_go',
    children: [{
      title: '搜索目的地：com.autonavi.amapauto:id/cl_search_input',
      children: [{
        title: '返回按钮：com.autonavi.amapauto:id/sftv_back'
      },
      {
        title: '请输入目的地：com.autonavi.amapauto:id/set_search_around'
      }]
    },
    {
      title: '回家吧：com.autonavi.amapauto:id/cl_home'
    },
    {
      title: '去公司：com.autonavi.amapauto:id/cl_company'
    },
    {
      title: '收藏点：com.autonavi.amapauto:id/cl_collected'
    },
    ]
  },
  {
    title: 'home按钮：com.autonavi.amapauto:id/cl_home'
  },
  {
    title: '导航左侧卡片',
    children: [{
      title: '搜索到目的地',
      children: [{
        title: '搜索结果选择',
        children: [{
          title: '更多···：com.autonavi.amapauto:id/sftv_morefold'
        },
        {
          title: "去这里：com.autonavi.amapauto:id/stv_search_result_btn"
        },
        {
          title: "返回：com.autonavi.amapauto:id/sftv_back"
        }]
      },
      {
        title: '导航算路中',
        children: [{
          title: '更多···：com.autonavi.amapauto:id/siv_auto_panel_content_detail_icon_closed',
          children: [{
            title: '模拟导航：com.autonavi.amapauto:id/stv_text_startnavi'
          }]
        },
        {
          title: "返回：com.autonavi.amapauto:id/sftv_back"
        }]
      },
      {
        title: '导航中',
        children: [{
          title: '123'
        }]
      }]
    }],
  },
  {
    title: '导航进行中',
    children: [{
      title: 'home按钮：com.autonavi.amapauto:id/sftv_back_home'
    },
    {
      title: "结束导航：com.autonavi.amapauto:id/sftv_exitnavi"
    },
    {
      title: "播放/暂停：com.autonavi.amapauto:id/sftv_continue"
    },
    {
      title: "放大地图：com.autonavi.amapauto:id/sftv_enlarge"
    },
    {
      title: "缩小地图：com.autonavi.amapauto:id/sftv_narrow"
    }]
  }]
}

export {
  naviData,
  gaodeData
}