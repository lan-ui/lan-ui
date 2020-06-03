<template>
  <cube-page title="Birthdate" class="lan">
    <div slot="content">
        <lan-birthdate :birth="birth" :readonly="readonly" :disabled="disabled" @receive="handleSelect"></lan-birthdate>
        <lan-birthdate :birth="'2018-04-20'" :readonly="readonly" :disabled="true" @receive="handleSelect"></lan-birthdate>
        <lan-birthdate :birth="'2018-04-20'" :readonly="true" :disabled="disabled" @receive="handleSelect"></lan-birthdate>
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
  .cube-page.lan >.wrapper .content 
    margin: 10px 30px
</style>
