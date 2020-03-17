<template>
  <cube-page  title="HxProvinces" class="hx">
    <div slot="content">
      <div>
        <hx-provinces :readonly="false"  @selected="selected" ref="hxValidate"></hx-provinces>
        <hx-provinces :readonly="false" :options="types"  @selected="selected" ref="hxValidate"></hx-provinces>
        <hx-provinces :readonly="false" :disabled="true" :value="value1"></hx-provinces>
        <hx-provinces :readonly="true" :readValue="readType"></hx-provinces>
        <!-- <cube-button class="hx-submit" @click="fnsumbit">提交</cube-button> -->
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  export default {
    data() {
      return {
        types: [
          {
            value: '110000',
            text: '北京市',
            children: [
              {
                value: '110100',
                text: '北京市'
              }
            ]
          },
          {
            value: '140000',
            text: '山西省',
            children: [
              {
                value: '140300',
                text: '阳泉市'
              }
            ]
          }
        ],
        readType: {
          text: ['山西省', '阳泉市'],
          value: ['140000', '140300']
        },
        value1: {
          text: ['北京市', '北京市'],
          value: ['110000', '110100']
        },
        value2: {},
        disabled: true
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
      selected (data) {
        console.log(data)
        this.value2 = {
          text: data.text,
          value: data.value
        }
      },
      fnsumbit () {
        this.$refs.hxValidate.validate()
        if (this.value2.text) {
          console.log('验证通过，提交！')
          console.log(this.value2.text + ':' + this.value2.value)
          console.log(this.value1.text + ':' + this.value1.value)
          console.log(this.readType.text + ':' + this.readType.value)
        }
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus">
  .cube-page.hx >.wrapper .content
    margin: 10px 0
  .hx-submit.cube-btn
    margin-top: 20px
</style>
