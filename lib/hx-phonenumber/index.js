(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hx-phonenumber"] = factory();
	else
		root["hx"] = root["hx"] || {}, root["hx"]["hx-phonenumber"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 384);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(30);
var defined = __webpack_require__(16);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.input = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EVENT_CHANGE = 'change';

  exports.default = {
    methods: {
      changeHander: function changeHander(e) {
        this.$emit(EVENT_CHANGE, e);
      },
      focus: function focus() {
        this.$refs.input.focus();
      },
      blur: function blur() {
        this.$refs.input.blur();
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(28);
var hide = __webpack_require__(8);
var has = __webpack_require__(5);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(138)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(139),
  /* template */
  __webpack_require__(144),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 138:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(98), __webpack_require__(140)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/extends'), require('../hx-input/hx-input'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global._extends, global.hxInput);
    global.hxInputFdn = mod.exports;
  }
})(this, function (module, exports, _extends2, _hxInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends3 = _interopRequireDefault(_extends2);

  var _hxInput2 = _interopRequireDefault(_hxInput);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var BindInputStatusStrategy = function BindInputStatusStrategy(ctx) {
    return {
      'normal': {
        btnClass: 'cubeic-wrong',
        callback: function callback() {
          return ctx.$refs['hx-input'].handleClear();
        },
        isShowErrorInfo: false
      },
      'corrent': {
        btnClass: 'cubeic-right',
        btnStyle: {
          color: '#08af16'
        },
        callback: function callback() {},
        isShowErrorInfo: false
      },
      'wrong': {
        btnClass: 'cubeic-warn',
        btnStyle: {
          color: '#d81e06'
        },
        callback: function callback() {},
        isShowErrorInfo: true
      }
    };
  };

  exports.default = {
    name: 'hx-input-foundation',
    components: {
      HxInput: _hxInput2.default
    },
    props: (0, _extends3.default)({
      inputCheck: Function,
      label: String,
      errorInfo: String,
      type: String,
      disabled: Boolean,
      readonly: Boolean,
      maxlength: Number,
      eye: {
        type: [Boolean, Object],
        default: false
      }
    }, _hxInput2.default.props),
    data: function data() {
      return {
        status: {
          get: function get() {
            return this.status || 'normal';
          },
          set: function set(status) {
            if (status !== 'normal' && status !== 'corrent' && status !== 'wrong') {
              throw new Error('[hx-input-foundation] - Input status must be the enum: "normal" | "corrent" | "wrong"');
            }
            this.status = status;
          }
        },

        domainList: ['@qq.com', '@gmail.com', '@163.com', '@yahoo.com', '@sina.com', '@hotmail.com', '@outlook.com', '@sohu.com', '@vip.163.com', '@vip.126.com', '@188.com', '@foxmail.com', '@live.cn', '@yeah.net', '@live.com', '@tom.com', '@aliyun.com', '@21.cn', '@corp.netease.com', '@msn.com', '@letv.com'],
        domainList1: ['@qq.com', '@gmail.com', '@163.com', '@yahoo.com', '@sina.com', '@hotmail.com', '@outlook.com', '@sohu.com', '@vip.163.com', '@vip.126.com', '@188.com', '@foxmail.com', '@live.cn', '@yeah.net', '@live.com', '@tom.com', '@aliyun.com', '@21.cn', '@corp.netease.com', '@msn.com', '@letv.com'],
        send: '获取验证码',
        resend: false,
        emailShow: false,
        defaultVal: '+86',
        column1: [{
          text: '中国大陆+86',
          value: '+86'
        }, {
          text: '中国香港+852',
          value: '+852'
        }, {
          text: '中国澳门+853',
          value: '+853'
        }, {
          text: '中国台湾+886',
          value: '+886'
        }]
      };
    },

    computed: {
      inputStatus: function inputStatus() {
        return this.inputStatusStrategy ? this.inputStatusStrategy[this.status] || {} : {};
      }
    },
    created: function created() {
      this.inputStatusStrategy = BindInputStatusStrategy(this);
    },

    methods: {
      calcStatus: function calcStatus(value) {
        return this.inputCheck ? this.inputCheck(value) ? 'corrent' : 'wrong' : 'normal';
      },
      handleFocus: function handleFocus(e) {
        this.$emit('focus', e);

        this.status = 'normal';
      },
      handleBlur: function handleBlur(e) {
        this.status = this.calcStatus(this.value);
        this.$emit('focus', e);
      },
      handleInput: function handleInput(e) {
        if (this.type === 'email') {
          this.$emit('input', e.toLocaleLowerCase());
        } else {
          this.$emit('input', e);
        }
        this.$emit('defaultPhone', this.defaultVal);

        var value2 = this.value;
        value2 = e;
        if (value2.length > 0) {
          this.emailShow = true;
        }

        this.domainList = this.domainList1.map(function (item) {
          item = '' + e + item;
          return item;
        });
        for (var i = 0; i < this.domainList.length; i++) {
          if (this.domainList[i].split('@').length >= 3) {
            var index2 = this.find(this.domainList[i], '@', 1);
            var index1 = this.find(this.domainList[i], '@', 0);
            this.domainList[i] = this.domainList[i].substring(0, index1) + this.domainList[i].substring(index2);
          }
        }
      },
      find: function find(str, cha, num) {
        var x = str.indexOf(cha);
        for (var i = 0; i < num; i++) {
          x = str.indexOf(cha, x + 1);
        }
        return x;
      },
      clickTap: function clickTap(val) {
        var _this = this;

        this.$emit('input', val);
        this.status = this.calcStatus(val);
        setTimeout(function () {
          _this.emailShow = false;
        }, 200);
      },

      countdown: function countdown() {
        var nsecond = 60;
        var that = this;
        var appCount = setInterval(function () {
          nsecond -= 1;
          that.send = '重新发送(' + nsecond + 's)';
          that.resend = true;
          if (nsecond < 1) {
            clearInterval(appCount);
            that.send = '发送验证码';
            that.resend = false;
          }
          console.log(that.send);
        }, 1000);
      },
      showPicker: function showPicker() {
        if (!this.picker) {
          this.picker = this.$createPicker({
            title: '号码归属地',
            data: [this.column1],
            onSelect: this.selectHandle
          });
        }
        this.picker.show();
      },
      selectHandle: function selectHandle(selectedVal, selectedIndex, selectedText) {
        this.defaultVal = selectedVal[0];
      },
      clickEye: function clickEye(e) {
        this.$emit('clickEye', e);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(24);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(141)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(143),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(48), __webpack_require__(101)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/core-js/object/assign'), require('../../common/mixins/input'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.assign, global.input);
    global.hxInput = mod.exports;
  }
})(this, function (module, exports, _assign, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assign2 = _interopRequireDefault(_assign);

  var _input2 = _interopRequireDefault(_input);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var COMPONENT_NAME = 'hx-input';
  var EVENT_INPUT = 'input';
  var EVENT_BLUR = 'blur';
  var EVENT_FOCUS = 'focus';

  exports.default = {
    name: COMPONENT_NAME,
    mixins: [_input2.default],
    props: {
      value: [String, Number],
      format: Function,
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      readonly: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: [Boolean, String],
        default: false
      },
      name: String,
      id: String,
      form: String,
      minlength: Number,
      maxlength: Number,
      resize: String,
      min: Number,
      max: Number,
      step: Number,
      tabindex: String,
      clearable: {
        type: [Boolean, Object],
        default: false
      },
      eye: {
        type: [Boolean, Object],
        default: false
      }
    },
    data: function data() {
      return {
        inputValue: this.value,
        isFocus: false,
        formatedClearable: {
          visible: false,
          blurHidden: true
        },
        formatedEye: {
          open: false,
          reverse: false
        }
      };
    },

    computed: {
      _type: function _type() {
        var type = this.type;
        if (type === 'password' && this.eye && this.pwdVisible) {
          return 'text';
        }
        return type;
      },
      _showClear: function _showClear() {
        var visible = this.formatedClearable.visible && this.inputValue && !this.readonly && !this.disabled;
        if (this.formatedClearable.blurHidden && !this.isFocus) {
          visible = false;
        }
        return visible;
      },
      _showPwdEye: function _showPwdEye() {
        return (this.type === 'password' || this.type === 'phone' || this.type === 'idcard' || this.type === 'account') && this.eye && !this.disabled;
      },
      pwdVisible: function pwdVisible() {
        var eye = this.formatedEye;
        return eye.reverse ? !eye.open : eye.open;
      },
      eyeClass: function eyeClass() {
        return this.formatedEye.open ? 'cubeic-eye-visible' : 'cubeic-eye-invisible';
      }
    },
    watch: {
      value: function value(newValue) {
        this.inputValue = newValue;
      },
      inputValue: function inputValue(newValue) {
        this.$emit(EVENT_INPUT, newValue);
      },

      clearable: {
        handler: function handler() {
          this.formatClearable();
        },

        deep: true,
        immediate: true
      },
      eye: {
        handler: function handler() {
          this.formateEye();
        },

        deep: true,
        immediate: true
      }
    },
    methods: {
      formatClearable: function formatClearable() {
        if (typeof this.clearable === 'boolean') {
          this.formatedClearable.visible = this.clearable;
        } else {
          (0, _assign2.default)(this.formatedClearable, this.clearable);
        }
      },
      formateEye: function formateEye() {
        if (typeof this.eye === 'boolean') {
          this.formatedEye.open = this.eye;
        } else {
          (0, _assign2.default)(this.formatedEye, this.eye);
        }
      },
      handleFocus: function handleFocus(e) {
        this.$emit(EVENT_FOCUS, e);
        this.isFocus = true;
      },
      handleBlur: function handleBlur(e) {
        this.$emit(EVENT_BLUR, e);
        this.isFocus = false;
      },
      handleClear: function handleClear(e) {
        this.inputValue = '';
        this.$refs.input.focus();
      },
      handlePwdEye: function handlePwdEye() {
        this.formatedEye.open = !this.formatedEye.open;

        this.$emit('clickEye', this.formatedEye.open);
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hx-input hx-input_normal",
    class: {
      'hx-input_active': _vm.isFocus && !_vm.readonly
    }
  }, [(_vm.$slots.prepend) ? _c('div', {
    staticClass: "hx-input-prepend"
  }, [_vm._t("prepend")], 2) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "hx-phone-section"
  }, [_vm._t("phone")], 2), _vm._v(" "), ((_vm._type) === 'checkbox') ? _c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputValue),
      expression: "inputValue"
    }],
    ref: "input",
    staticClass: "hx-input-field",
    class: {
      'hx-input_disabled': _vm.disabled
    },
    attrs: {
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "maxlength": _vm.maxlength,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.inputValue) ? _vm._i(_vm.inputValue, null) > -1 : (_vm.inputValue)
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "change": [function($event) {
        var $$a = _vm.inputValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.inputValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.inputValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.inputValue = $$c
        }
      }, _vm.changeHander]
    }
  }, 'input', _vm.$props, false)) : ((_vm._type) === 'radio') ? _c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputValue),
      expression: "inputValue"
    }],
    ref: "input",
    staticClass: "hx-input-field",
    class: {
      'hx-input_disabled': _vm.disabled
    },
    attrs: {
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "maxlength": _vm.maxlength,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.inputValue, null)
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "change": [function($event) {
        _vm.inputValue = null
      }, _vm.changeHander]
    }
  }, 'input', _vm.$props, false)) : _c('input', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputValue),
      expression: "inputValue"
    }],
    ref: "input",
    staticClass: "hx-input-field",
    class: {
      'hx-input_disabled': _vm.disabled
    },
    attrs: {
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "maxlength": _vm.maxlength,
      "type": _vm._type
    },
    domProps: {
      "value": (_vm.inputValue)
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "change": _vm.changeHander,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputValue = $event.target.value
      }
    }
  }, 'input', _vm.$props, false)), _vm._v(" "), (_vm.$slots.append || _vm._showClear || _vm._showPwdEye) ? _c('div', {
    staticClass: "hx-input-append"
  }, [(_vm._showClear && !_vm.readonly) ? _c('div', {
    staticClass: "hx-input-clear",
    on: {
      "touchend": _vm.handleClear
    }
  }, [_c('i', {
    staticClass: "cubeic-wrong"
  })]) : _vm._e(), _vm._v(" "), (_vm._showPwdEye) ? _c('div', {
    staticClass: "hx-input-eye",
    on: {
      "click": _vm.handlePwdEye
    }
  }, [_c('i', {
    class: _vm.eyeClass
  })]) : _vm._e(), _vm._v(" "), (!_vm._showPwdEye && !_vm.readonly) ? _vm._t("append") : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "hx-rule-error"
  }, [_vm._t("rule-error")], 2), _vm._v(" "), _c('p', {
    staticClass: "hx-email-suffix"
  }, [_vm._t("emailSuffix")], 2), _vm._v(" "), _c('p', [_vm._t("verification")], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('hx-input', {
    ref: "hx-input",
    staticClass: "hx-input-foundation",
    class: {
      'hx-input_disabled': _vm.disabled
    },
    attrs: {
      "value": _vm.value,
      "placeholder": _vm.placeholder,
      "clearable": false,
      "autocomplete": true,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled,
      "eye": _vm.eye,
      "type": _vm.type,
      "maxlength": _vm.maxlength
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "input": _vm.handleInput,
      "clickEye": _vm.clickEye
    },
    scopedSlots: _vm._u([{
      key: "append",
      fn: function() {
        return [_c('div', {
          staticClass: "hx-input-clear",
          on: {
            "touchend": function () { return (_vm.inputStatus.callback() || null); }
          }
        }, [_c('i', {
          class: _vm.inputStatus.btnClass,
          style: (_vm.inputStatus.btnStyle)
        })])]
      },
      proxy: true
    }, (_vm.label) ? {
      key: "prepend",
      fn: function() {
        return [_vm._v("\n    " + _vm._s(_vm.label) + "\n    ")]
      },
      proxy: true
    } : null, (_vm.type == 'phone' && !_vm.readonly && !_vm.disabled) ? {
      key: "phone",
      fn: function() {
        return [_c('p', {
          on: {
            "click": _vm.showPicker
          }
        }, [_vm._v(_vm._s(_vm.defaultVal))]), _vm._v(" "), _c('p', {
          staticClass: "phone-icon"
        })]
      },
      proxy: true
    } : null, (_vm.inputStatus.isShowErrorInfo) ? {
      key: "rule-error",
      fn: function() {
        return [_vm._v("\n    " + _vm._s(_vm.errorInfo) + "\n    ")]
      },
      proxy: true
    } : null, (_vm.type == 'email' && _vm.emailShow) ? {
      key: "emailSuffix",
      fn: function() {
        return _vm._l((_vm.domainList), function(item, i) {
          return _c('div', {
            key: i,
            staticClass: "hx-email-div",
            on: {
              "click": function($event) {
                return _vm.clickTap(item)
              }
            }
          }, [_vm._v(_vm._s(item))])
        })
      },
      proxy: true
    } : null, (_vm.type == 'verification' && !_vm.readonly && !_vm.disabled) ? {
      key: "verification",
      fn: function() {
        return [(_vm.resend == false) ? _c('p', {
          staticClass: "hx-phone-send",
          on: {
            "click": function($event) {
              return _vm.countdown(_vm.send)
            }
          }
        }, [_vm._v(_vm._s(_vm.send))]) : _c('p', {
          staticClass: "hx-phone-send hx-phone-resend"
        }, [_vm._v(_vm._s(_vm.send))])]
      },
      proxy: true
    } : null], null, true)
  })
},staticRenderFns: []}

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(16);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys');
var uid = __webpack_require__(19);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(15) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(29);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(37)(false);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(17);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(38);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(385)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/hx-phonenumber/hx-phonenumber.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.hxPhonenumber);
    global.index = mod.exports;
  }
})(this, function (module, exports, _hxPhonenumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _hxPhonenumber2 = _interopRequireDefault(_hxPhonenumber);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _hxPhonenumber2.default.install = function (Vue) {
    Vue.component(_hxPhonenumber2.default.name, _hxPhonenumber2.default);
  };

  exports.default = _hxPhonenumber2.default;
  module.exports = exports['default'];
});

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(386),
  /* template */
  __webpack_require__(387),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(98), __webpack_require__(137)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('babel-runtime/helpers/extends'), require('../hx-input-fdn/hx-input-fdn'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global._extends, global.hxInputFdn);
    global.hxPhonenumber = mod.exports;
  }
})(this, function (module, exports, _extends2, _hxInputFdn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends3 = _interopRequireDefault(_extends2);

  var _hxInputFdn2 = _interopRequireDefault(_hxInputFdn);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    name: 'hx-input-phone',
    components: {
      HxInputFoundation: _hxInputFdn2.default
    },
    props: (0, _extends3.default)({}, _hxInputFdn2.default.props),
    data: function data() {
      return {
        phoneErrorInfo: '',
        phoneType: '+86',
        eyeVal: []
      };
    },

    methods: {
      formatPhone: function formatPhone(phone) {
        if (!phone) return '';
        var res = Array.prototype.reduce.call(this.deFormatPhone(phone), function (temp, num, i) {
          return temp + num + (i % 4 === 2 ? ' ' : '');
        });

        return res;
      },
      deFormatPhone: function deFormatPhone(phone) {
        return phone.replace(/\s/g, '');
      },
      inputCheckPhone: function inputCheckPhone(phone) {
        console.log(this.eye);
        var phoneLength = 11;
        var REGEXP_PHONE = /^1[3456789]\d{1}\d{4}\d{4}$/;

        if (this.phoneType === '+86') {
          console.log(this.phoneType);
          phoneLength = 11;
          REGEXP_PHONE = /^1[3456789]\d{1}\d{4}\d{4}$/;
        } else if (this.phoneType === '+852') {
          console.log(this.phoneType);
          phoneLength = 8;
          REGEXP_PHONE = /^([6|9])\d{7}$/;
        } else if (this.phoneType === '+853') {
          console.log(this.phoneType);
          phoneLength = 7;
          REGEXP_PHONE = /^[6]([8|6])\d{5}$/;
        } else if (this.phoneType === '+886') {
          console.log(this.phoneType);
          phoneLength = 10;
          REGEXP_PHONE = /^[0][9]\d{8}$/;
        }
        console.log(this.phoneType);
        var value = this.deFormatPhone(phone);
        if (!value) {
            this.phoneErrorInfo = '请输入手机号码！';
            return false;
          } else if (!REGEXP_PHONE.test(value) || (value + '').length !== phoneLength) {
          this.phoneErrorInfo = '请输入正确的手机号码！';
          return false;
        } else {
          return true;
        }
      },
      defaultPhone: function defaultPhone(e) {
        this.phoneType = e;
      },
      handleInput: function handleInput(e) {
        this.$emit('input', this.formatPhone(e));
      },
      clickEye: function clickEye(e) {
        this.eyeVal.push(this.value.replace(/\s/g, ''));
        console.log(e);
        console.log(this.eyeVal[0]);
        var val = this.value.replace(/\s/g, '');

        if (e === true) {
          this.$emit('input', this.eyeVal[0]);
        } else {
          var str1 = val.slice(0, 3);
          var str2 = val.slice(7, 11);
          var str3 = str1 + '****' + str2;
          this.$emit('input', str3);
        }
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('hx-input-foundation', {
    ref: "hx-input-foundation",
    attrs: {
      "value": _vm.value,
      "label": _vm.label,
      "type": _vm.type,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled,
      "eye": _vm.eye,
      "placeholder": _vm.placeholder,
      "inputCheck": _vm.inputCheckPhone,
      "errorInfo": _vm.phoneErrorInfo
    },
    on: {
      "input": _vm.handleInput,
      "defaultPhone": _vm.defaultPhone,
      "clickEye": _vm.clickEye
    }
  })
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


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(32);
var toPrimitive = __webpack_require__(26);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(64) });


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(2);
var getKeys = __webpack_require__(14);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(25);
var toObject = __webpack_require__(20);
var IObject = __webpack_require__(30);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(13);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(48);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ })

/******/ });
});