import Nationality from '../../components/nationality/nationality.vue'

Nationality.install = function (Vue) {
  Vue.component(Nationality.name, Nationality)
}

export default Nationality
