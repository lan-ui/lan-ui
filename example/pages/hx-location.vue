<template>
  <cube-page  title="HxLocation" class="hx">
    <div slot="content">
      <div>
        <hx-location :readonly="false"  @selected="selected" ref="hxValidate"></hx-location>
        <hx-location :readonly="false" :options="value"  @selected="selected" ref="hxValidate"></hx-location>
        <hx-location :readonly="false" :disabled="true" :value="value1"></hx-location>
        <hx-location :readonly="true" :readValue="readType"></hx-location>
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
        value: [
          {
            value: 'Fruit',
            text: 'Fruit',
            children: [
              {
                value: 'Apple',
                text: 'Apple',
                children: [
                  {
                    value: 1,
                    text: 'One'
                  },
                  {
                    value: 2,
                    text: 'Two'
                  }
                ]
              }
            ]
          }
        ],
        readType: {
          text: ['山西省', '阳泉市', '市辖区'],
          value: ['140000', '140300', '140301']
        },
        value1: {
          text: ['北京市', '北京市', '东城区'],
          value: ['110000', '110100', '110101']
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
