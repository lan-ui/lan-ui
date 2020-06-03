<template>
  <cube-page title="Validity" class="lan">
    <div slot="content">
        <lan-validity :age="age" :validity="validity" :validityArray="validityArray" :readonly="readonly" :disabled="disabled" @receive="handleSelect" :isLongTerm="isLongTerm"></lan-validity>
        <lan-validity :age="age" :validity="'2020-04-20'" :validityArray="validityArray" :readonly="readonly" :disabled="true" @receive="handleSelect" :isLongTerm="isLongTerm"></lan-validity>
        <lan-validity :age="age" :validity="'2020-04-20'" :validityArray="validityArray" :readonly="true" :disabled="disabled" @receive="handleSelect" :isLongTerm="isLongTerm"></lan-validity>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'

  export default {
    data() {
      return {
        age: 24,
        validity: '',
        validityArray: [],
        readonly: false,
        disabled: false
      }
    },
    computed: {
      isLongTerm() {
        if (this.age >= 45) {
          this.validity = '长期有效'
        }
        return this.age >= 45
      }
    },
    methods: {
      handleSelect: function(val, txt) {
        this.validityArray = val
        this.validity = txt.join('-')
      }
    },
    components: {
      CubePage
    }
  }
</script>
<style lang="stylus">
.cube-page.lan >.wrapper .content {
  margin:10px 30px
}
</style>
