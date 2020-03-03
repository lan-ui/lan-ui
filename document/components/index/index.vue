<template>
  <div class="home-index">
    <div class="banner">
      <!-- <h2>HX-UI</h2>
      <p>
        <slot name="desc"></slot>
      </p> -->
      <!-- <div class="ghbtns">
        <Badge type="star"></Badge>
        <Badge type="fork"></Badge>
        <Badge type="watch"></Badge>
      </div> -->
      <div class="rec-btns">
        <slot name="rec-btns"></slot>
      </div>
    </div>
    <section class="features">
      <ul>
        <li>
          <img src="./quality.png">
          <div class="text">
            <slot name="feature-1"></slot>
          </div>
        </li>
        <li>
          <img src="./experience.png">
          <div class="text">
            <slot name="feature-2"></slot>
          </div>
        </li>
        <li>
          <img src="./standard.png">
          <div class="text">
            <slot name="feature-3"></slot>
          </div>
        </li>
        <li>
          <img src="./scalability.png">
          <div class="text">
            <slot name="feature-4"></slot>
          </div>
        </li>
      </ul>
    </section>
    <sfooter />
  </div>
</template>

<script>
  import Badge from '../badge/badge.vue'
  import Sfooter from '../footer/footer.vue'

  export default {
    mounted() {
      window.scrollTo(0, 0)
    },
    components: {
      Badge,
      Sfooter
    }
  }
</script>
<style lang="stylus">
@require "~@/common/stylus/variable.styl"

  .home-index
    min-height: 100%
    box-sizing: border-box
    text-align: center
    background-size: cover
    > .banner
      padding: 150px 140px 200px
      text-align: left
      color: #0550f2
      background: url("./cube.png") no-repeat
      background-size: 100% auto
      @media screen and (max-width: 960px)
        padding: 254px 32px 0
        text-align: left
        .btn-link
          width: 140px
          margin-right: 15px
          font-size: 14px
          border-width: 1px
      @media screen and (max-width: 560px)
        background: url("./cube_small.png") no-repeat
        background-size: 100% auto
      h2
        font-size: 60px
        color: #0550f2
        @media screen and (max-width: 960px)
          font-size: 30px
      > p
        margin: 23px 0 6px 0
        font-size: 18px
        line-height: 32px
        @media screen and (max-width: 960px)
          font-size: 12px
          line-height: 18px
  .ghbtns
    font-size: 0
    margin-left: -5px
    margin-right: -5px
  .rec-btns
    margin-top: 36px
    @media screen and (max-width: 960px)
      margin-top: 26px
  .btn-link
    display: inline-block
    box-sizing: border-box
    width: 164px
    height: 42px
    text-align: center
    line-height: 38px
    font-size: $fontsize-large-x
    color: #fff
    background-color: #89C6FF
    border-radius: 3px
    margin-bottom: 10px
    margin-right: 18px
    border: 2px solid #89C6FF
    &:hover
      color: #fff
      background-color: #80c1ff
      border-color: #80c1ff
    &:last-child
      margin-right 0!important
  .btn-active
    color: #89c6ff
    background-color: white
    &:hover
      color: #137dc6
      background-color: #fff
  .features
    margin: 40px 90px 0
    @media screen and (max-width: 960px)
      margin: 10px auto 0
      box-shadow: none
    > ul
      display: flex
      justify-content: space-around
      padding: 0 80px
      text-align: left
      color: #666
      @media screen and (max-width: 960px)
        flex-direction: column
        padding: 0
      li
        flex: 1
        max-width: 220px
        padding: 20px 40px 0
        margin: 0 10px
        font-size: 13px
        line-height: 1.4
        text-align: center
        box-shadow: 0 4px 30px 0 rgba(66, 81, 148, 0.1)
        @media screen and (max-width: 960px)
          display: flex
          align-items: center
          max-width: initial
          padding-top: 20px
          padding-bottom: 20px
          text-align: left
          box-shadow: none
          .text
            flex: 1
            margin-top: -7px
          &:first-child
            img
              transform: translate(-6px,0)
          &:nth-child(2)
            img
              transform: scale(0.90) translate(0,8px)
              transform-origin: top center
        img
          width: 130px
          margin-bottom: 13px
          transform-origin: center 0
          transition: all .5s
          @media screen and (max-width: 960px)
            width: 90px
            height: 90px
            margin-right: 16px
            margin-bottom: 0
        .text
          transition: all .5s
          .h1
            padding: 7px 0 0
            font-size: 22px
            font-weight: 500
            color: #333
          .h2
            font-size: 18px
            transition: all .5s
          p
            margin-top: -18px
            font-size: 14px
            opacity: 0
            transition: all .5s
          @media screen and (max-width: 960px)
            .h1
              font-size: 15px
            .h2
              display: none
            p
              margin-top: 0
              opacity: 1
              font-size: 12px
        @media screen and (min-width: 961px)
          &:hover
            p
              opacity:1
            img
                transform: scale(0.5,0.5)
            .h2
              opacity: 0
            .text
              transform: translateY(-75px)
</style>
