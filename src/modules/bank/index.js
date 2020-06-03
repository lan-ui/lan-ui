import Bank from '../../components/bank/bank.vue'

Bank.install = function (Vue) {
  Vue.component(Bank.name, Bank)
}

export default Bank
