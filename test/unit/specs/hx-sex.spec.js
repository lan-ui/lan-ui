import Vue from 'vue2'
import hxSex from '@/modules/hx-sex'
import Checker from '@/modules/checker'
import RadioGroup from '@/modules/radio'
import createVue from '../utils/create-vue'

describe('hxSex.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('hxSex性别组件', () => {
    Vue.use(hxSex)
    expect(Vue.component(hxSex.name))
      .to.be.a('function')
  })
  it('hxSex组件引用cube-checker组件', () => {
    Vue.use(Checker)
    expect(Vue.component(Checker.name))
      .to.be.a('function')
  })
  it('hxSex组件引用radioGroup组件', () => {
    Vue.use(RadioGroup)
    expect(Vue.component(RadioGroup.name))
      .to.be.a('function')
  })
  it('hxSex基础内容', () => {
    vm = createHxSex()
    const el = vm.$el
    expect(el.className)
      .to.equal('hx-sex')
    expect(el.querySelector('.hx-sex-title').innerText)
      .to.equal('性别')
    expect(el.querySelector('.cube-checker'))
      .to.be.ok
    expect(el.querySelector('.cube-checker').getAttribute('horizontal'))
      .to.equal('true')
    const options = el.querySelectorAll('.cube-checker-item')
    expect(options.length)
      .to.equal(2)
    expect(el.querySelectorAll('.cube-checker-item')[0].innerText)
      .to.equal('男')
    expect(el.querySelectorAll('.cube-checker-item')[1].innerText)
      .to.equal('女')
    expect(el.getAttribute('data-pos'))
      .to.equal('left')
  })
  it('hxSex基础用法：设置选项右对齐', () => {
    const vm = createVue({
      template: `
        <hx-sex :options="options" v-model="selected" position="right"></hx-sex>
      `,
      data: {
        options: [
          {
            text: '男',
            value: 0
          },
          {
            text: '女',
            value: 1
          }
        ],
        selected: 0
      }
    })
    const el = vm.$el
    expect(el.getAttribute('data-pos'))
      .to.equal('right')
  })
  it('hxSex基础用法：默认被选中值，切换选中值', (done) => {
    vm = createHxSex()
    const el = vm.$el
    expect(vm.$parent.selected)
      .to.equal(0)
    expect(el.querySelectorAll('.cube-checker-item')[0].className)
      .to.include('cube-checker-item_active')
    expect(el.querySelector('.cube-checker-item_active').innerText)
      .to.equal('男')
    el.querySelectorAll('.cube-checker-item')[1].click()
    Vue.nextTick(function() {
      expect(el.querySelector('.cube-checker-item_active').innerText)
        .to.equal('女')
      expect(vm.$parent.selected)
        .to.equal(1)
      done()
    })
  })
  it('hxSex基础用法：设置不可操作项', () => {
    const vm = createVue({
      template: `
        <hx-sex :options="options" v-model="selected"></hx-sex>
      `,
      data: {
        options: [
          {
            text: '男',
            value: 0
          },
          {
            text: '女',
            value: 1,
            disabled: true
          }
        ],
        selected: 0
      }
    })
    const el = vm.$el
    expect(vm.$parent.selected)
      .to.equal(0)
    expect(el.querySelector('.cube-checker-item_disabled').innerText)
      .to.equal('女')
    el.querySelectorAll('.cube-checker-item')[1].click()
    setTimeout(() => {
      expect(el.querySelector('.cube-checker-item_active').innerText)
        .to.equal('男')
      expect(vm.$parent.selected)
        .to.equal(0)
    })
  })
  it('hxSex不可操作用法', () => {
    const vm = createVue({
      template: `
        <hx-sex :options="options" v-model="selected" :disabled="true"></hx-sex>
      `,
      data: {
        options: [
          {
            text: '男',
            value: 0,
            disabled: true
          },
          {
            text: '女',
            value: 1
          }
        ],
        selected: 1
      }
    })
    const el = vm.$el
    expect(el.className)
      .to.include('hx-sex-disabled')
    expect(vm.$parent.selected)
      .to.equal(1)
    expect(el.querySelector('.cube-checker-item_disabled').innerText)
      .to.equal('男')
    el.querySelectorAll('.cube-checker-item')[0].click()
    setTimeout(() => {
      expect(el.querySelector('.cube-checker-item_active').innerText)
        .to.equal('女')
      expect(vm.$parent.selected)
        .to.equal(1)
    })
  })
  it('hxSex回显值只读用法', () => {
    const vm = createVue({
      template: `
        <hx-sex :readonly="true" :readValue="readSex"></hx-sex>
      `,
      data: {
        readSex: {
          text: '女',
          value: 1
        }
      }
    })
    const el = vm.$el
    expect(el.querySelector('.cube-checker'))
    .to.be.equal(null)
    expect(el.querySelector('.hx-sex-readonly'))
      .to.be.ok
    expect(el.querySelector('.hx-sex-readonly').innerText)
      .to.equal('女')
  })
})

function createHxSex () {
  const vm = createVue({
    template: `
      <hx-sex :options="options" v-model="selected"></hx-sex>
    `,
    data: {
      options: [
        {
          text: '男',
          value: 0
        },
        {
          text: '女',
          value: 1
        }
      ],
      selected: 0
    }
  })
  return vm
}
