<template>
  <cube-page title="HXBirthdate" class="hx">
    <div slot="content">
        <hx-birthdate :birth="birth" :readonly="readonly" :disabled="disabled" @receive="handleSelect"></hx-birthdate>
        <hx-birthdate :birth="'2018-04-20'" :readonly="readonly" :disabled="true" @receive="handleSelect"></hx-birthdate>
        <hx-birthdate :birth="'2018-04-20'" :readonly="true" :disabled="disabled" @receive="handleSelect"></hx-birthdate>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'

  export default {
    data() {
      return {
        birth: '',
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
