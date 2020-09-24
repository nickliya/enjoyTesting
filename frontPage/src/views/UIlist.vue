<template>
  <div>
    <a-input-search style="margin-bottom: 8px" placeholder="Search" @change="onChange" />
    <a-button-group>
      <a-button id='A39' @click="changeData" type='primary'>A39</a-button>
      <a-button id='T5' @click="changeData" type='primary'>T5</a-button>
      <a-button id='chj' @click="changeData" type='primary'>车和家</a-button>
      <a-button id='A12' @click="changeData" type='primary'>A12</a-button>
    </a-button-group>
    <a-tree
      @expand="onExpand"
      :expandedKeys="expandedKeys"
      :autoExpandParent="autoExpandParent"
      :treeData="UItreeData"
      >
      <template slot="title" slot-scope="{title}">
        <span v-if="title.indexOf(searchValue) > -1">
          {{title.substr(0, title.indexOf(searchValue))}}
          <span style="color: #f50">{{searchValue}}</span>
          {{title.substr(title.indexOf(searchValue) + searchValue.length)}}
        </span>
        <span v-else>{{title}}</span>
      </template>
    </a-tree>
  </div>
</template>

<script>
import { Tree, Input, Button } from 'ant-design-vue';
import { T5treeData } from '../assets/jsonData/t5_ui.js';
import { chjtreeData } from '../assets/jsonData/chj_ui.js';
import { A39treeData } from '../assets/jsonData/a39_ui.js';
import { A12treeData } from '../assets/jsonData/a12_ui.js';

var UItreeData = T5treeData
// console.log(treeData)

/*
初始化数据列表，添加scoplots
*/
const initList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i]
    node['scopedSlots'] = { title: 'title' }
    if (node.children) {
      initList(node.children)
    }
  }
}
initList(UItreeData)

/*
构建一个数据列表，用于后面的数据筛选
*/
var dataList = []

const generateList = (data, prekey) => {
  const preKey = prekey || '0'
  for (let i = 0; i < data.length; i++) {
    const node = data[i]
    const key = `${preKey}-${i}`
    const titlestr = node.title
    dataList.push({ key, title: titlestr })
    if (node.children) {
      generateList(node.children, key)
    }
  }
}
generateList(UItreeData)

/*
获取传入列表的父级元素，字符串截取舍弃最后两位
*/
const getParentKey = (key, tree) => {
  let parentKey
  parentKey = key.slice(0,-2)
  return parentKey
}

export default {
  data () {
    return {
      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      UItreeData,
    }
  },
  components: {
  'a-tree': Tree,
  'a-input-search': Input,
  'a-button': Button,
  'a-button-group': Button.Group
  },
  methods: {
    onExpand (expandedKeys) {
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onChange (e) {
      const value = e.target.value
      console.log(value)
      var NewexpandedKeys = dataList.map((item) => {
        if (value == "") {
          // 如果传入的值是空，那么就收回所有扩展
          return null
        }
        if (item.title.indexOf(value) > -1) {
          // console.log(item.title.indexOf(value))
          return getParentKey(item.key, dataList)
        }
        return null
      }) // 筛选
      NewexpandedKeys = NewexpandedKeys.filter((item, i, self) => item && self.indexOf(item) === i) //去重
      Object.assign(this, {
        expandedKeys: NewexpandedKeys,
        searchValue: value,
        autoExpandParent: true,
      })
    },
    changeData (e) {
      const value = e.target.id
      switch(value){
        case 'chj':
          return new Promise((resolve) => { //异步加载解决渲染问题
            this.UItreeData = chjtreeData
            this.expandedKeys = []
            dataList = []
            initList(this.UItreeData)
            generateList(this.UItreeData)
            // resolve()
            // return
          })
        case 'T5':
          return new Promise((resolve) => {
            this.UItreeData = T5treeData
            this.expandedKeys = []
            dataList = []
            initList(this.UItreeData)
            generateList(this.UItreeData)
            // resolve()
            // return
          })
        case 'A39':
          return new Promise((resolve) => {
            this.UItreeData = A39treeData
            this.expandedKeys = []
            dataList = []
            initList(this.UItreeData) 
            generateList(this.UItreeData)
          })
        case 'A12':
          return new Promise((resolve) => {
            this.UItreeData = A12treeData
            this.expandedKeys = []
            dataList = []
            initList(this.UItreeData) 
            generateList(this.UItreeData)
          })
      }
    }
  },
}
</script>

