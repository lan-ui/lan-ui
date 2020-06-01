import PhoneVerification from '../../components/phone-verification/phone-verification.vue'

PhoneVerification.install = function (Vue) {
  Vue.component(PhoneVerification.name, PhoneVerification)
}

export default PhoneVerification
