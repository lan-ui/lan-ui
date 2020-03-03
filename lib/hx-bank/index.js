(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hx-bank"] = factory();
	else
		root["hx"] = root["hx"] || {}, root["hx"]["hx-bank"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 327);
/******/ })
/************************************************************************/
/******/ ({

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(328)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/hx-bank/hx-bank.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.hxBank);
    global.index = mod.exports;
  }
})(this, function (module, exports, _hxBank) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _hxBank2 = _interopRequireDefault(_hxBank);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _hxBank2.default.install = function (Vue) {
    Vue.component(_hxBank2.default.name, _hxBank2.default);
  };

  exports.default = _hxBank2.default;
  module.exports = exports['default'];
});

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(329)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(330),
  /* template */
  __webpack_require__(332),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 329:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(331)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./../../common/data/bank'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.bank);
    global.hxBank = mod.exports;
  }
})(this, function (module, exports, _bank) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var list = _bank.banksList;
  var COMPONENT_NAME = 'hx-bank';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      options: {
        type: Array
      },
      placeholder: {
        type: String,
        default: '请选择银行'
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: Object
      },
      readValue: {
        type: Object
      },
      position: {
        type: String,
        default: 'left'
      }
    },
    data: function data() {
      var _this = this;

      return {
        banks: this.options,
        bank: this.value ? this.value.text : this.placeholder,
        valid: undefined,
        rules: {
          custom: function custom(val) {
            return val !== _this.placeholder;
          }
        },
        messages: {
          custom: '请选择您的银行'
        }
      };
    },

    watch: {},
    methods: {
      validate: function validate() {
        this.$refs.validator.validate();
      },
      showPicker: function showPicker() {
        var that = this;
        if (!this.disabled) {
          if (!this.picker) {
            this.picker = this.$createPicker({
              title: '银行',
              cancelTxt: '取消',
              confirmTxt: '确定',
              data: that.banks ? [that.banks] : [list],
              onSelect: this.selectHandle,
              onCancel: this.cancelHandle
            });
          }
          this.picker.show();
        }
      },
      selectHandle: function selectHandle(selectedVal, selectedIndex, selectedText) {
        this.bank = selectedText[0];
        var value = [];
        value.push(selectedText[0]);
        value.push(selectedVal[0]);
        this.$emit('selected', value);
      },
      cancelHandle: function cancelHandle() {
        console.log('ddddd');
        this.$refs.validator.validate();
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.bank = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var banksList = exports.banksList = [{
    text: '中国农业银行',
    value: '04'
  }, {
    text: '中国工商银行',
    value: '01'
  }, {
    text: '中国银行',
    value: '02'
  }, {
    text: '招商银行',
    value: '06'
  }, {
    text: '中国邮政储蓄银行',
    value: '16'
  }, {
    text: '交通银行',
    value: '10'
  }, {
    text: '中国建设银行',
    value: '03'
  }, {
    text: '广东发展银行',
    value: '14'
  }, {
    text: '兴业银行',
    value: '13'
  }, {
    text: '北京银行',
    value: '20'
  }, {
    text: '中信银行',
    value: '15'
  }, {
    text: '华夏银行',
    value: '08'
  }, {
    text: '光大银行',
    value: '11'
  }, {
    text: '民生银行',
    value: '07'
  }, {
    text: '平安银行',
    value: '39'
  }, {
    text: '上海浦发银行',
    value: '09'
  }, {
    text: '广州农村商业银行',
    value: '48'
  }, {
    text: '广东省农村信用社联合社',
    value: '69'
  }];
});

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hx-select",
    class: _vm.disabled ? 'hx-select-disabled' : '',
    attrs: {
      "readonly": _vm.readonly,
      "readValue": _vm.readValue,
      "disabled": _vm.disabled,
      "data-pos": _vm.position
    }
  }, [_c('div', [_c('p', {
    staticClass: "hx-select-title"
  }, [_vm._v("银行")]), _vm._v(" "), (!_vm.readonly) ? _c('div', {
    staticClass: "hx-select-main"
  }, [_c('p', {
    staticClass: "select-main-info",
    on: {
      "click": _vm.showPicker
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.bank),
      expression: "bank"
    }],
    class: _vm.bank == _vm.placeholder ? 'main-info-init' : 'main-info-selected',
    attrs: {
      "placeholder": _vm.placeholder,
      "readonly": ""
    },
    domProps: {
      "value": (_vm.bank)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.bank = $event.target.value
      }
    }
  }), _vm._v(" "), _c('i', {
    class: _vm.disabled ? '' : 'icon-hualife-bankcard'
  })])]) : _c('p', {
    staticClass: "select-main-info"
  }, [_vm._v(_vm._s(_vm.readValue.text))])]), _vm._v(" "), _c('cube-validator', {
    ref: "validator",
    attrs: {
      "model": _vm.bank,
      "rules": _vm.rules,
      "messages": _vm.messages
    },
    model: {
      value: (_vm.valid),
      callback: function($$v) {
        _vm.valid = $$v
      },
      expression: "valid"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ });
});