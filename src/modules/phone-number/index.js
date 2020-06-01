import PhoneNumber from '../../components/phone-number/phone-number.vue'

PhoneNumber.install = function (Vue) {
  Vue.component(PhoneNumber.name, PhoneNumber)
}

export default PhoneNumber
