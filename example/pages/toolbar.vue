<template>
  <cube-page type="toolbar" title="Toolbar" class="option-demo">
    <div slot="content">
      <div class="toolbar_wrap">
        <cube-toolbar
          :actions="actions1"
          @click="clickHandler">
        </cube-toolbar>
      </div>
      <div class="toolbar_wrap">
        <cube-toolbar
          :actions="actions1" toolbarStyle="dark"
          @click="clickHandler">
        </cube-toolbar>
      </div>
      <div class="toolbar_wrap">
        <cube-toolbar
          :actions="actions1" toolbarStyle="grey"
          @click="clickHandler">
        </cube-toolbar>
      </div>
      <div class="toolbar_wrap">
        <cube-toolbar
          :actions="actions2"
          @click="clickHandler">
        </cube-toolbar>
      </div>
      <cube-toolbar
        :actions="actions"
        :more-actions="moreActions" toolbarStyle="grey"
        @click="clickHandler">
      </cube-toolbar>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'
  import SwitchOption from 'example/components/switch-option.vue'

  export default {
    components: {
      CubePage,
      SwitchOption
    },
    data() {
      return {
        more: false,
        money: 10,
        actions: [
          {
            text: '评论',
            icon: 'icon-lan-comment-filled',
            action: 'comment'
          },
          {
            text: '点赞',
            icon: 'icon-lan-fabulous',
            action: 'fabulous'
          },
          {
            text: '喜欢',
            icon: 'icon-lan-like',
            action: 'like'
          }
        ],
        actions1: [
          {
            text: '评论',
            icon: 'icon-lan-comment-filled',
            action: 'comment'
          },
          {
            text: '点赞',
            icon: 'icon-lan-fabulous',
            action: 'fabulous'
          },
          {
            text: '喜欢',
            icon: 'icon-lan-like',
            action: 'like'
          },
          {
            text: '收藏',
            icon: 'icon-lan-star',
            action: 'collection'
          }
        ],
        actions2: [
          {
            text: '',
            icon: 'icon-lan-comment-filled',
            action: 'comment'
          },
          {
            text: '',
            icon: 'icon-lan-fabulous',
            action: 'fabulous'
          },
          {
            text: '',
            icon: 'icon-lan-like',
            action: 'like'
          },
          {
            text: '',
            icon: 'icon-lan-star',
            action: 'collection'
          }
        ],
        moreActions: [
          {
            text: '操作文字',
            icon: 'icon-lan-share',
            action: 'showText'
          },
          {
            text: '操作文字',
            icon: 'icon-lan-like',
            action: 'showText'
          },
          {
            text: '操作文字',
            icon: 'icon-lan-star',
            action: 'showText'
          }
        ]
      }
    },
    methods: {
      clickHandler(item) {
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .orange
    color: #fc9153
  .toolbar_wrap
    .cube-toolbar
      position: static
      margin-bottom: 20px
</style>
