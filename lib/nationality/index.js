(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nationality"] = factory();
	else
		root["lan"] = root["lan"] || {}, root["lan"]["nationality"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 398);
/******/ })
/************************************************************************/
/******/ ({

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(399)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/nationality/nationality.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.nationality);
    global.index = mod.exports;
  }
})(this, function (module, exports, _nationality) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _nationality2 = _interopRequireDefault(_nationality);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _nationality2.default.install = function (Vue) {
    Vue.component(_nationality2.default.name, _nationality2.default);
  };

  exports.default = _nationality2.default;
  module.exports = exports['default'];
});

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(400)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(401),
  /* template */
  __webpack_require__(403),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


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

/***/ 400:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(402)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./../../common/data/nationality'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.nationality);
    global.nationality = mod.exports;
  }
})(this, function (module, exports, _nationality) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var list = _nationality.nationalityList;

  var COMPONENT_NAME = 'lan-nationality';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      options: {
        type: Array
      },
      placeholder: {
        type: String,
        default: '请选择国籍/地区'
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
        nationalitys: this.options,
        nationality: this.value ? this.value.text : this.placeholder,
        valid: undefined,
        rules: {
          custom: function custom(val) {
            return val !== _this.placeholder;
          }
        },
        messages: {
          custom: '请选择您的国籍/地区'
        }
      };
    },

    computed: {},
    watch: {},
    methods: {
      showPicker: function showPicker() {
        var that = this;
        if (!that.disabled) {
          if (!that.picker) {
            that.picker = that.$createPicker({
              title: '国籍/地区',
              cancelTxt: '取消',
              confirmTxt: '确定',
              data: that.nationalitys ? [that.nationalitys] : [list],
              onSelect: that.selectHandle,
              onCancel: that.cancelHandle
            });
          }
          this.picker.show();
        }
      },
      selectHandle: function selectHandle(selectedVal, selectedIndex, selectedText) {
        this.nationality = selectedText[0];
        var value = [];
        value.push(selectedText[0]);
        value.push(selectedVal[0]);
        this.$emit('selectNationality', value);
      },
      cancelHandle: function cancelHandle() {
        this.$refs.validator.validate();
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ 402:
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
    global.nationality = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var nationalityList = exports.nationalityList = [{
    value: 'CHN',
    text: '中国'
  }, {
    value: 'HK',
    text: '中国(香港)'
  }, {
    value: 'MO',
    text: '中国(澳门)'
  }, {
    value: 'TW',
    text: '中国(台湾)'
  }, {
    value: 'USA',
    text: '美国'
  }, {
    value: 'ENG',
    text: '英国'
  }, {
    value: 'JAN',
    text: '日本'
  }, {
    value: 'KR',
    text: '韩国'
  }, {
    value: 'FR',
    text: '法国'
  }, {
    value: 'DE',
    text: '德国'
  }, {
    value: 'CA',
    text: '加拿大'
  }, {
    value: 'IT',
    text: '意大利'
  }, {
    value: 'RUS',
    text: '俄罗斯'
  }, {
    value: 'AUS',
    text: '澳大利亚'
  }, {
    value: 'BR',
    text: '巴西'
  }, {
    value: 'AR',
    text: '阿根廷'
  }, {
    value: 'MX',
    text: '墨西哥'
  }, {
    value: 'ID',
    text: '印度尼西亚'
  }, {
    value: 'IN',
    text: '印度'
  }, {
    value: 'SA',
    text: '沙特阿拉伯'
  }, {
    value: 'ZA',
    text: '南非'
  }, {
    value: 'TR',
    text: '土耳其'
  }, {
    value: 'PT',
    text: '葡萄牙'
  }, {
    value: 'ES',
    text: '西班牙'
  }, {
    value: 'MY',
    text: '马来西亚'
  }, {
    value: 'TH',
    text: '泰国'
  }, {
    value: 'PH',
    text: '菲律宾'
  }, {
    value: 'SG',
    text: '新加坡'
  }, {
    value: 'BN',
    text: '文莱'
  }, {
    value: 'VN',
    text: '越南'
  }, {
    value: 'LA',
    text: '老挝'
  }, {
    value: 'MM',
    text: '缅甸'
  }, {
    value: 'KH',
    text: '柬埔寨'
  }, {
    value: 'AD',
    text: '安道尔'
  }, {
    value: 'AE',
    text: '阿联酋'
  }, {
    value: 'AF',
    text: '阿富汗'
  }, {
    value: 'AG',
    text: '安提瓜和巴布达'
  }, {
    value: 'AI',
    text: '安圭拉'
  }, {
    value: 'AL',
    text: '阿尔巴尼亚'
  }, {
    value: 'AM',
    text: '亚美尼亚'
  }, {
    value: 'AN',
    text: '荷属安的列斯'
  }, {
    value: 'AO',
    text: '安哥拉'
  }, {
    value: 'AQ',
    text: '南极洲'
  }, {
    value: 'AS',
    text: '美属萨摩亚'
  }, {
    value: 'AT',
    text: '奥地利'
  }, {
    value: 'AW',
    text: '阿鲁巴（荷）'
  }, {
    value: 'AX',
    text: '奥兰群岛'
  }, {
    value: 'AZ',
    text: '阿塞拜疆'
  }, {
    value: 'BA',
    text: '波黑'
  }, {
    value: 'BB',
    text: '巴巴多斯'
  }, {
    value: 'BD',
    text: '孟加拉国'
  }, {
    value: 'BE',
    text: '比利时'
  }, {
    value: 'BF',
    text: '布基纳法索'
  }, {
    value: 'BG',
    text: '保加利亚'
  }, {
    value: 'BH',
    text: '巴林'
  }, {
    value: 'BI',
    text: '布隆迪'
  }, {
    value: 'BJ',
    text: '贝宁'
  }, {
    value: 'BM',
    text: '百慕大'
  }, {
    value: 'BO',
    text: '玻利维亚'
  }, {
    value: 'BS',
    text: '巴哈马'
  }, {
    value: 'BT',
    text: '不丹'
  }, {
    value: 'BV',
    text: '布维岛'
  }, {
    value: 'BW',
    text: '博茨瓦纳'
  }, {
    value: 'BY',
    text: '白俄罗斯'
  }, {
    value: 'BZ',
    text: '伯利兹'
  }, {
    value: 'CC',
    text: '科科斯(基林)群岛'
  }, {
    value: 'CD',
    text: '刚果（金）'
  }, {
    value: 'CF',
    text: '中非'
  }, {
    value: 'CG',
    text: '刚果（布）'
  }, {
    value: 'CH',
    text: '瑞士'
  }, {
    value: 'CI',
    text: '科特迪瓦'
  }, {
    value: 'CK',
    text: '库克群岛'
  }, {
    value: 'CL',
    text: '智利'
  }, {
    value: 'CM',
    text: '喀麦隆'
  }, {
    value: 'CO',
    text: '哥伦比亚'
  }, {
    value: 'CR',
    text: '哥斯达黎加'
  }, {
    value: 'CU',
    text: '古巴'
  }, {
    value: 'CV',
    text: '佛得角'
  }, {
    value: 'CW',
    text: '库拉索'
  }, {
    value: 'CX',
    text: '圣诞岛'
  }, {
    value: 'CY',
    text: '塞浦路斯'
  }, {
    value: 'CZ',
    text: '捷克'
  }, {
    value: 'DJ',
    text: '吉布提'
  }, {
    value: 'DK',
    text: '丹麦'
  }, {
    value: 'DM',
    text: '多米尼克'
  }, {
    value: 'DO',
    text: '多米尼加'
  }, {
    value: 'DZ',
    text: '阿尔及利亚'
  }, {
    value: 'EC',
    text: '厄瓜多尔'
  }, {
    value: 'EE',
    text: '爱沙尼亚'
  }, {
    value: 'EG',
    text: '埃及'
  }, {
    value: 'EH',
    text: '西撒哈拉'
  }, {
    value: 'ER',
    text: '厄立特里亚'
  }, {
    value: 'ET',
    text: '埃塞俄比亚'
  }, {
    value: 'FI',
    text: '芬兰'
  }, {
    value: 'FJ',
    text: '斐济'
  }, {
    value: 'FK',
    text: '福克兰群岛(马尔维纳斯)'
  }, {
    value: 'FM',
    text: '密克罗尼西亚联邦'
  }, {
    value: 'FO',
    text: '法罗群岛（丹）'
  }, {
    value: 'GA',
    text: '加蓬'
  }, {
    value: 'GD',
    text: '格林纳达'
  }, {
    value: 'GE',
    text: '格鲁吉亚'
  }, {
    value: 'GF',
    text: '法属圭亚那'
  }, {
    value: 'GG',
    text: '格恩西'
  }, {
    value: 'GH',
    text: '加纳'
  }, {
    value: 'GI',
    text: '直布罗陀'
  }, {
    value: 'GL',
    text: '格陵兰（丹）'
  }, {
    value: 'GM',
    text: '冈比亚'
  }, {
    value: 'GN',
    text: '几内亚'
  }, {
    value: 'GP',
    text: '瓜德罗普（法）'
  }, {
    value: 'GQ',
    text: '赤道几内亚'
  }, {
    value: 'GR',
    text: '希腊'
  }, {
    value: 'GS',
    text: '南乔治亚岛和南桑德韦奇岛'
  }, {
    value: 'GT',
    text: '危地马拉'
  }, {
    value: 'GU',
    text: '关岛（美）'
  }, {
    value: 'GW',
    text: '几内亚比绍'
  }, {
    value: 'GY',
    text: '圭亚那'
  }, {
    value: 'HM',
    text: '赫德岛和麦克唐纳岛'
  }, {
    value: 'HN',
    text: '洪都拉斯'
  }, {
    value: 'HR',
    text: '克罗地亚'
  }, {
    value: 'HT',
    text: '海地'
  }, {
    value: 'HU',
    text: '匈牙利'
  }, {
    value: 'IE',
    text: '爱尔兰'
  }, {
    value: 'IL',
    text: '以色列'
  }, {
    value: 'IM',
    text: '马恩岛'
  }, {
    value: 'IMF',
    text: '国际货币基金组织'
  }, {
    value: 'IO',
    text: '英属印度洋领地'
  }, {
    value: 'IQ',
    text: '伊拉克'
  }, {
    value: 'IR',
    text: '伊朗'
  }, {
    value: 'IS',
    text: '冰岛'
  }, {
    value: 'JE',
    text: '泽西岛'
  }, {
    value: 'JM',
    text: '牙买加'
  }, {
    value: 'JO',
    text: '约旦'
  }, {
    value: 'KE',
    text: '肯尼亚'
  }, {
    value: 'KG',
    text: '吉尔吉斯斯坦'
  }, {
    value: 'KI',
    text: '基里巴斯'
  }, {
    value: 'KM',
    text: '科摩罗'
  }, {
    value: 'KN',
    text: '圣基茨和尼维斯'
  }, {
    value: 'KP',
    text: '朝鲜'
  }, {
    value: 'KW',
    text: '科威特'
  }, {
    value: 'KY',
    text: '开曼群岛'
  }, {
    value: 'KZ',
    text: '哈萨克斯坦'
  }, {
    value: 'LB',
    text: '黎巴嫩'
  }, {
    value: 'LC',
    text: '圣卢西亚'
  }, {
    value: 'LI',
    text: '列支敦士登'
  }, {
    value: 'LK',
    text: '斯里兰卡'
  }, {
    value: 'LR',
    text: '利比里亚'
  }, {
    value: 'LS',
    text: '莱索托'
  }, {
    value: 'LT',
    text: '立陶宛'
  }, {
    value: 'LU',
    text: '卢森堡'
  }, {
    value: 'LV',
    text: '拉脱维亚'
  }, {
    value: 'LY',
    text: '利比亚'
  }, {
    value: 'MA',
    text: '摩洛哥'
  }, {
    value: 'MC',
    text: '摩纳哥'
  }, {
    value: 'MD',
    text: '摩尔多瓦'
  }, {
    value: 'ME',
    text: '黑山'
  }, {
    value: 'MG',
    text: '马达加斯加'
  }, {
    value: 'MH',
    text: '马绍尔群岛'
  }, {
    value: 'MK',
    text: '前南马斯顿'
  }, {
    value: 'ML',
    text: '马里'
  }, {
    value: 'MN',
    text: '蒙古'
  }, {
    value: 'MP',
    text: '北马里亚纳（美）'
  }, {
    value: 'MQ',
    text: '马提尼克（法）'
  }, {
    value: 'MR',
    text: '毛里塔尼亚'
  }, {
    value: 'MS',
    text: '蒙特塞拉特（法）'
  }, {
    value: 'MT',
    text: '马耳他'
  }, {
    value: 'MU',
    text: '毛里求斯'
  }, {
    value: 'MV',
    text: '马尔代夫'
  }, {
    value: 'MW',
    text: '马拉维'
  }, {
    value: 'MZ',
    text: '莫桑比克'
  }, {
    value: 'NA',
    text: '纳米比亚'
  }, {
    value: 'NC',
    text: '新喀里多尼亚（法）'
  }, {
    value: 'NE',
    text: '尼日尔'
  }, {
    value: 'NF',
    text: '诺福克岛'
  }, {
    value: 'NG',
    text: '尼日利亚'
  }, {
    value: 'NI',
    text: '尼加拉瓜'
  }, {
    value: 'NL',
    text: '荷兰'
  }, {
    value: 'NO',
    text: '挪威'
  }, {
    value: 'NP',
    text: '尼泊尔'
  }, {
    value: 'NR',
    text: '瑙鲁'
  }, {
    value: 'NU',
    text: '纽埃'
  }, {
    value: 'NZ',
    text: '新西兰'
  }, {
    value: 'OM',
    text: '阿曼'
  }, {
    value: 'OTH',
    text: '其他'
  }, {
    value: 'PA',
    text: '巴拿马'
  }, {
    value: 'PE',
    text: '秘鲁'
  }, {
    value: 'PF',
    text: '法属波利尼西亚'
  }, {
    value: 'PG',
    text: '巴布亚新几内亚'
  }, {
    value: 'PK',
    text: '巴基斯坦'
  }, {
    value: 'PL',
    text: '波兰'
  }, {
    value: 'PM',
    text: '圣皮埃尔和密克隆（法）'
  }, {
    value: 'PN',
    text: '皮特凯恩（英）'
  }, {
    value: 'PR',
    text: '波多黎各（美）'
  }, {
    value: 'PS',
    text: '巴勒斯坦'
  }, {
    value: 'PW',
    text: '帕劳'
  }, {
    value: 'PY',
    text: '巴拉圭'
  }, {
    value: 'QA',
    text: '卡塔尔'
  }, {
    value: 'RE',
    text: '留尼汪（法）'
  }, {
    value: 'RO',
    text: '罗马尼亚'
  }, {
    value: 'RS',
    text: '塞尔维亚'
  }, {
    value: 'RW',
    text: '卢旺达'
  }, {
    value: 'SB',
    text: '所罗门群岛'
  }, {
    value: 'SC',
    text: '塞舌尔'
  }, {
    value: 'SD',
    text: '苏丹'
  }, {
    value: 'SE',
    text: '瑞典'
  }, {
    value: 'SH',
    text: '圣赫勒拿（英）'
  }, {
    value: 'SI',
    text: '斯洛文尼亚'
  }, {
    value: 'SJ',
    text: '斯瓦尔巴岛和扬马延岛'
  }, {
    value: 'SK',
    text: '斯洛伐克'
  }, {
    value: 'SL',
    text: '塞拉利昂'
  }, {
    value: 'SM',
    text: '圣马力诺'
  }, {
    value: 'SN',
    text: '塞内加尔'
  }, {
    value: 'SO',
    text: '索马里'
  }, {
    value: 'SR',
    text: '苏里南'
  }, {
    value: 'ST',
    text: '圣多美和普林西比'
  }, {
    value: 'SV',
    text: '萨尔瓦多'
  }, {
    value: 'SY',
    text: '叙利亚'
  }, {
    value: 'SZ',
    text: '斯威士兰'
  }, {
    value: 'TC',
    text: '特克斯和凯科斯群岛（英）'
  }, {
    value: 'TD',
    text: '乍得'
  }, {
    value: 'TF',
    text: '法属南部领地'
  }, {
    value: 'TG',
    text: '多哥'
  }, {
    value: 'TJ',
    text: '塔吉克斯坦'
  }, {
    value: 'TK',
    text: '托克劳（新）'
  }, {
    value: 'TL',
    text: '东帝汶'
  }, {
    value: 'TM',
    text: '土库曼斯坦'
  }, {
    value: 'TN',
    text: '突尼斯'
  }, {
    value: 'TO',
    text: '汤加'
  }, {
    value: 'TT',
    text: '特立尼达和多巴哥'
  }, {
    value: 'TV',
    text: '图瓦卢'
  }, {
    value: 'TZ',
    text: '坦桑尼亚'
  }, {
    value: 'UA',
    text: '乌克兰'
  }, {
    value: 'UG',
    text: '乌干达'
  }, {
    value: 'UY',
    text: '乌拉圭'
  }, {
    value: 'UZ',
    text: '乌兹别克斯坦'
  }, {
    value: 'VA',
    text: '梵蒂冈'
  }, {
    value: 'VC',
    text: '圣文森特和格林纳丁斯'
  }, {
    value: 'VE',
    text: '委内瑞拉'
  }, {
    value: 'VG',
    text: '英属维尔京群岛'
  }, {
    value: 'VI',
    text: '美属维尔京群岛'
  }, {
    value: 'VU',
    text: '瓦努阿图'
  }, {
    value: 'WF',
    text: '瓦利斯和富图纳（法）'
  }, {
    value: 'WS',
    text: '萨摩亚'
  }, {
    value: 'YE',
    text: '也门'
  }, {
    value: 'YT',
    text: '马约特'
  }, {
    value: 'YU',
    text: '南斯拉夫'
  }, {
    value: 'ZM',
    text: '赞比亚'
  }, {
    value: 'ZW',
    text: '津巴布韦'
  }, {
    value: 'ABK',
    text: '阿伯卡茨共和国'
  }, {
    value: 'BVI',
    text: '英属维京群岛 (BVI)'
  }, {
    value: 'KOS',
    text: '科索沃'
  }, {
    value: 'SBR',
    text: '圣巴托洛缪岛'
  }, {
    value: 'SIN',
    text: '荷属圣马丁岛'
  }, {
    value: 'SOS',
    text: '南奥塞梯南'
  }, {
    value: 'SOU',
    text: '南苏丹'
  }, {
    value: 'STM',
    text: '法属圣马丁'
  }, {
    value: 'TUR',
    text: '北塞浦路斯土耳其共和国'
  }];
});

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lan-select",
    class: _vm.disabled ? 'lan-select-disabled' : '',
    attrs: {
      "data-pos": _vm.position
    }
  }, [_c('div', {
    staticClass: "lan-select-wrap"
  }, [_c('p', {
    staticClass: "lan-select-title"
  }, [_vm._v("国籍/地区")]), _vm._v(" "), (!_vm.readonly) ? _c('div', {
    staticClass: "lan-select-main"
  }, [_c('p', {
    staticClass: "select-main-info",
    on: {
      "click": _vm.showPicker
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.nationality),
      expression: "nationality"
    }],
    class: _vm.nationality == _vm.placeholder ? 'main-info-init' : 'main-info-selected',
    attrs: {
      "placeholder": _vm.placeholder,
      "readonly": ""
    },
    domProps: {
      "value": (_vm.nationality)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.nationality = $event.target.value
      }
    }
  }), _vm._v(" "), _c('i', {
    class: _vm.disabled ? '' : 'icon-lan-nationality'
  })])]) : _c('p', {
    staticClass: "select-main-info"
  }, [_vm._v(_vm._s(_vm.readValue.text))])]), _vm._v(" "), (!(_vm.disabled || _vm.readonly)) ? _c('cube-validator', {
    ref: "validator",
    attrs: {
      "model": _vm.nationality,
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
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ })

/******/ });
});