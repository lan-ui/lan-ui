export default function hoc(WrappedComponent) {
  return option => {
    const { render, props, listeners, ...extendOpt } = option

    if (render) {
      console.log('[hoc] - You are using self-renderer to rewrite WrappedComponent!')
    }

    return {
      // getHOCInstance: function() { return this },
      props: {
        ...props,
        ...WrappedComponent.props /* WrappedComponent.props 后置，保证透传 */
      },
      render: render || function(h) {
        const slots = Object.keys(this.$slots)
          .reduce((arr, key) => arr.concat(this.$slots[key]), [])
          .map(vnode => {
            vnode.context = this._self
            return vnode
          })
        return h(WrappedComponent, {
          ref: WrappedComponent.name,
          on: { ...this.$listeners, ...listeners },
          props: this.$props,
          // 透传 scopedSlots
          scopedSlots: this.$scopedSlots,
          attrs: this.$attrs
        }, slots)
      },
      /* bind custom options */
      ...extendOpt
    }
  }
}
