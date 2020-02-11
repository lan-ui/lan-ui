<template>
  <cube-page  title="华夏组件库-性别">
    <div slot="content">
      <div>
        <hx-sex :readonly="false" :options="sexs" v-model="sexSelect"></hx-sex>
        <hx-sex :readonly="false" :options="sexs2" v-model="sexSelect2"></hx-sex>
        <hx-sex :readonly="false" :disabled="true" :options="sexs3" v-model="sexSelect3"></hx-sex>
        <hx-sex :readonly="true" :readValue="readSex"></hx-sex>
        <cube-button class="hx-submit" @click="fnSubmit">提交</cube-button>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        sexs: [
          {
            text: '男',
            value: 0
          },
          {
            text: '女',
            value: 1
          }
        ],
        sexSelect: 0,
        sexs2: [
          {
            text: '男',
            value: 0,
            disabled: true
          },
          {
            text: '女',
            value: 1
          }
        ],
        sexSelect2: 1,
        sexs3: [
          {
            text: '男',
            value: 0
          },
          {
            text: '女',
            value: 1,
            disabled: true
          }
        ],
        sexSelect3: 0,
        readSex: {
          text: '女',
          value: 1
        }
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
      fnSubmit () {
        console.log(this.sexSelect)
        console.log(this.sexSelect2)
        console.log(this.sexSelect3)
        console.log(this.readSex.text)
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus">
  .hx-submit.cube-btn
    margin-top: 20px
</style>
