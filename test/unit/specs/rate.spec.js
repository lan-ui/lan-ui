import Vue from 'vue2'
import Rate from '@/modules/rate'
import createVue from '../utils/create-vue'
import { dispatchSwipe, dispatchMouse } from '../utils/event'
import { expect } from 'chai'

describe('Rate.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Rate)
    expect(Vue.component(Rate.name))
      .to.be.a('function')
  })
  it('should render correct contents', (done) => {
    vm = createRate()
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-rate')
    const actives = el.querySelectorAll('.icon-lan-starfilled')
    expect(actives.length)
      .to.equal(vm.value)
    const stars = el.querySelectorAll('.cube-rate-item')
    expect(stars.length)
      .to.equal(vm.max)
    vm.$parent.value = 4
    vm.$parent.justify = true
    setTimeout(() => {
      expect(el.className)
        .to.equal('cube-rate cube-rate-justify')
      const actives = el.querySelectorAll('.icon-lan-starfilled')
      expect(actives.length)
        .to.equal(vm.value)
      done()
    })
  })
  it('should render correct contents icon', (done) => {
    vm = createVue({
      template: `
      <cube-rate v-model="value" :disabled="disabled" :justify="justify" :max="max" activeIcon="icon-lan-likefilled" icon="icon-lan-like" activeColor="red" color="red"><i slot="append">评价</i></cube-rate>
      `,
      data: {
        disabled: false,
        value: 3,
        max: 5,
        justify: false
      }
    })
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-rate')
    const actives = el.querySelectorAll('.icon-lan-likefilled')
    expect(actives.length)
      .to.equal(vm.value)
    const stars = el.querySelectorAll('.cube-rate-item')
    expect(stars.length)
      .to.equal(vm.max)
    vm.$parent.value = 4
    vm.$parent.justify = true
    setTimeout(() => {
      expect(el.className)
        .to.equal('cube-rate cube-rate-justify')
      const actives = el.querySelectorAll('.icon-lan-likefilled')
      expect(actives.length)
        .to.equal(vm.value)
      expect(el.querySelector('.cube-rate-label').textContent)
        .to.equal('评价')
      done()
    })
  })
  it('should trigger change event', function (done) {
    this.timeout(10000)
    const changeHandler = sinon.spy()
    vm = createRate(changeHandler)
    vm.$parent.disabled = true
    setTimeout(() => {
      // dispatch touch
      dispatchSwipe(vm.$el, [
        {
          pageX: 50,
          pageY: 20
        },
        {
          pageX: 180,
          pageY: 20
        }
      ], 100)
      // No response
      setTimeout(() => {
        expect(changeHandler).not.to.be.called
        vm.$parent.disabled = false
        setTimeout(() => {
          // dispatch touch again
          dispatchSwipe(vm.$el, [
            {
              pageX: 50,
              pageY: 20
            },
            {
              pageX: 180,
              pageY: 20
            }
          ], 100)
          setTimeout(() => {
            expect(changeHandler).to.be.calledOnce
            done()
          }, 200)
        })
      }, 200)
    })
  })
  it('should trigger change event with click', function (done) {
    this.timeout(10000)
    vm = createRate()
    const star = vm.$el.querySelector('.cube-rate-item')
    dispatchMouse(star, 'mousedown')
    dispatchMouse(star, 'mousemove')
    dispatchMouse(star, 'mouseup')
    setTimeout(() => {
      const actives = vm.$el.querySelectorAll('.icon-lan-starfilled')
      expect(actives.length)
        .to.equal(1)
      done()
    }, 50)
  })
})

function createRate (changeHanlder) {
  const vm = createVue({
    template: `
    <cube-rate v-model="value" :disabled="disabled" :justify="justify" :max="max"></cube-rate>
    `,
    data: {
      disabled: false,
      value: 3,
      max: 5,
      justify: false
    },
    watch: {
      value(newVal) {
        changeHanlder && changeHanlder.call(vm, newVal)
      }
    }
  })
  return vm
}
