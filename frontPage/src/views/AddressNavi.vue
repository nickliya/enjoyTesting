<template>
    <div>
      <div v-for="(i) in adressData" :key='i.id'>
        {{i.adressName}}
        <a :href="i.adress" target="_blank">{{i.adress}}</a>
      </div> 
    </div>
</template>
<script>

const adressData = [
    {
    adressName: "腾讯签到",
    adress: "http://om.tencent.com/attendances/check_out"
    },
    {
    adressName: "tapd",
    adress: "https://tapd.tencent.com/"
    },
    {
    adressName: "nc系统",
    adress: "http://e.thundersoft.com/portal/app/mockapp/login.jsp"
    },
    {
    adressName: "集团工作平台",
    adress: "http://i.thundersoft.com/wui/main.jsp"
    }
]

export default {
  data () {
    return {
      adressData
    }
  },
  components: {
//   'a-tree': Tree
  }
}

</script>

