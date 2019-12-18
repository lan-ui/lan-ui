<template>
  <cube-page  title="华夏组件库-性别">
    <div slot="content">
      <hx-sex :readonly="false" :options="sexs" v-model="sexSelect"></hx-sex>
      <hx-sex :readonly="false" :options="sexs2" v-model="sexSelect2"></hx-sex>
      <hx-sex :readonly="true" :readValue="readSex"></hx-sex>
      <cube-button class="hx-submit" @click="fnSubmit">提交</cube-button>
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
            label: '男',
            value: 0
          },
          {
            label: '女',
            value: 1
          }
        ],
        sexSelect: 0,
        sexs2: [
          {
            label: '男',
            value: 0,
            disabled: true
          },
          {
            label: '女',
            value: 1
          }
        ],
        sexSelect2: 1,
        readSex: {
          label: '女',
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
        console.log(this.readSex.valueç)
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
