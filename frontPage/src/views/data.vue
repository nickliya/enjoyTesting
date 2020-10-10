<template>
    <div class="data">
      <a-button-group>
        <a-button id='A39' @click="changeData" type='primary'>账户</a-button>
        <a-button id='T5' @click="changeData" type='primary'>密码</a-button>
        <a-button id='getphone' @click="changeData" type='primary'>手机号</a-button>
        <a-button id='getidcard' @click="changeData" type='primary'>身份证</a-button>
        <a-button id='getemail' @click="changeData" type='primary'>邮箱</a-button>
        <a-button id='A12' @click="changeData" type='primary'>A12</a-button>
      </a-button-group>
      <a-input id="output" v-model="output" placeholder="Basic usage" />
    </div>
</template>

<script>
import { Input, Button} from 'ant-design-vue';
import { getidcard, sayMsg, getphone, getemail } from '../js/supportFunction.js'

export default {
  name: "",
  data () {
    return {
      background: {

      },
      name,
      output:""
    }
  },
  components: {
    'a-button': Button,
    'a-button-group': Button.Group,
    'a-input': Input,
  },
  methods: {
    changeData (e) {
      const value = e.target.id
      switch(value){
        case 'chj':
          this.output=Math.random() * 10
          break

        case 'getphone':
          this.output=getphone();
          break

        case 'getidcard':
          this.output=getidcard()
          break
        case 'getemail':
          this.output=getemail()
          break
      }
    }
  }
}
</script>