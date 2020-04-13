<template>
  <cube-page  title="HxSex" class="hx">
    <template slot="content">
      <div class="hx-sex-wrapper">
        <hx-sex :options="sexs" v-model="sexSelect"></hx-sex>
        <hx-sex :options="sexs3" v-model="sexSelect3"></hx-sex>
        <hx-sex :options="sexs2" v-model="sexSelect2" :disabled="true"></hx-sex>
        <hx-sex :readonly="true" :readValue="readSex"></hx-sex>
      </div>
    </template>
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
        console.log(this.sexSelect3)
        console.log(this.sexSelect2)
        console.log(this.readSex.text)
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus">
  .cube-page.hx >.wrapper .content 
    margin: 10px 30px
  .hx-submit.cube-btn
    margin-top: 20px
</style>
