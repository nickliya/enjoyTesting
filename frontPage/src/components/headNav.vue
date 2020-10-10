<template>
<div>
  <a-menu
    mode="horizontal"
  >
    <a-menu-item key="dh">
      <router-link to="/dh"><a-icon type="file-text"/>首页导航</router-link>
    </a-menu-item>
    <a-sub-menu>
      <span slot="title"><a-icon type="exception" />数据</span>
      <a-menu-item-group title="菜单a">
        <a-menu-item key="carUI">
          <router-link to="/data">测试数据构造</router-link>
        </a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="菜单b">
        <a-menu-item key="wl">
          <router-link to="/wl">22222</router-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
    <a-sub-menu>
      <span slot="title"><a-icon type="shop" />关于</span>
      <a-menu-item-group>
        <a-menu-item key="upgradeLog">
          <router-link to="/upgradeLog">更新日志</router-link>
        </a-menu-item>
        <a-menu-item key="price">
          <router-link to="/price">555555</router-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
  </a-menu>
</div>
</template>
<script>
import { Menu, Icon } from 'ant-design-vue';
export default {
  props: ['name'],
  data() {
    return {
    };
  },
  components: {
    'a-menu': Menu,
    'a-sub-menu': Menu.SubMenu,
    'a-menu-item': Menu.Item,
    'a-icon': Icon,
    'a-menu-item-group': Menu.ItemGroup,
  },
  methods: {
    handleSelect() {
    },
  },
};
</script>