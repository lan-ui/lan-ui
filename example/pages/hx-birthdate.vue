<template>
  <cube-page title="HXBirthdate" class="hx">
    <div slot="content">
        <hx-birthdate :warning="warning" :birth="birth" :readonly="readonly" :disabled="disabled" @receive="handleSelect"></hx-birthdate>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'

  export default {
    data() {
      return {
        warning: false,
        birth: '2018-04-20',
        birthArray: [],
        readonly: false,
        disabled: false
      }
    },
    methods: {
      handleSelect: function(val, txt) {
        this.birthArray = val
        this.birth = txt.join('-')
      }
    },
    components: {
      CubePage
    }
  }
</script>
<style lang="stylus">
.cube-page.hx >.wrapper .content {
  margin:10px 20px
}
</style>
