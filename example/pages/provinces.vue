<template>
  <cube-page  title="Provinces" class="lan">
    <div slot="content">
      <div class="lan-sex-wrapper">
        <lan-provinces :readonly="false"  @selected="selected" ref="lanValidate"></lan-provinces>
        <lan-provinces :readonly="false" :options="types"  @selected="selected" ref="lanValidate"></lan-provinces>
        <lan-provinces :readonly="false" :disabled="true" :value="value1"></lan-provinces>
        <lan-provinces :readonly="true" :readValue="readType"></lan-provinces>
        <!-- <cube-button class="lan-submit" @click="fnsumbit">提交</cube-button> -->
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
        this.$refs.lanValidate.validate()
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
  .cube-page.lan >.wrapper .content 
    margin: 10px 30px
  .lan-submit.cube-btn
    margin-top: 20px
</style>
