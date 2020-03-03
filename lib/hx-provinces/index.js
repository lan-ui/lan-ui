(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hx-provinces"] = factory();
	else
		root["hx"] = root["hx"] || {}, root["hx"]["hx-provinces"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 351);
/******/ })
/************************************************************************/
/******/ ({

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(352)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../components/hx-provinces/hx-provinces.vue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.hxProvinces);
    global.index = mod.exports;
  }
})(this, function (module, exports, _hxProvinces) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _hxProvinces2 = _interopRequireDefault(_hxProvinces);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _hxProvinces2.default.install = function (Vue) {
    Vue.component(_hxProvinces2.default.name, _hxProvinces2.default);
  };

  exports.default = _hxProvinces2.default;
  module.exports = exports['default'];
});

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(353)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(354),
  /* template */
  __webpack_require__(356),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 353:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(355)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./../../common/data/provinces'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.provinces);
    global.hxProvinces = mod.exports;
  }
})(this, function (module, exports, _provinces) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var addressData = _provinces.provinceList;
  addressData.forEach(function (province) {
    province.children = _provinces.cityList[province.value];
  });
  var COMPONENT_NAME = 'hx-provinces';

  exports.default = {
    name: COMPONENT_NAME,
    props: {
      options: {
        type: Array
      },
      placeholder: {
        type: String,
        default: '请选择开户行所在省市'
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
        locations: this.options,
        location: this.value ? this.value.text.join(' ') : this.placeholder,
        valid: undefined,
        rules: {
          custom: function custom(val) {
            return val !== _this.placeholder;
          }
        },
        messages: {
          custom: '请选择您的开户行所在省市'
        }
      };
    },

    computed: {},
    watch: {},
    mounted: function mounted() {
      this.addressPicker = this.$createCascadePicker({
        title: '所在省市',
        data: this.locations ? this.locations : addressData,
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      });
    },

    methods: {
      validate: function validate() {
        this.$refs.validator.validate();
      },
      showAddressPicker: function showAddressPicker() {
        if (!this.disabled) {
          this.addressPicker.show();
        }
      },
      selectHandle: function selectHandle(selectedVal, selectedIndex, selectedText) {
        this.location = selectedText.join(' ');
        var value = {};
        value.text = selectedText;
        value.value = selectedVal;
        value.index = selectedIndex;
        this.$emit('selected', value);
      },
      cancelHandle: function cancelHandle() {
        this.$refs.validator.validate();
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ 355:
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
    global.provinces = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var provinceList = exports.provinceList = [{
    text: '北京市',
    value: '110000'
  }, {
    text: '天津市',
    value: '120000'
  }, {
    text: '河北省',
    value: '130000'
  }, {
    text: '山西省',
    value: '140000'
  }, {
    text: '内蒙古自治区',
    value: '150000'
  }, {
    text: '辽宁省',
    value: '210000'
  }, {
    text: '吉林省',
    value: '220000'
  }, {
    text: '黑龙江省',
    value: '230000'
  }, {
    text: '上海市',
    value: '310000'
  }, {
    text: '江苏省',
    value: '320000'
  }, {
    text: '浙江省',
    value: '330000'
  }, {
    text: '安徽省',
    value: '340000'
  }, {
    text: '福建省',
    value: '350000'
  }, {
    text: '江西省',
    value: '360000'
  }, {
    text: '山东省',
    value: '370000'
  }, {
    text: '河南省',
    value: '410000'
  }, {
    text: '湖北省',
    value: '420000'
  }, {
    text: '湖南省',
    value: '430000'
  }, {
    text: '广东省',
    value: '440000'
  }, {
    text: '广西壮族自治区',
    value: '450000'
  }, {
    text: '海南省',
    value: '460000'
  }, {
    text: '重庆市',
    value: '500000'
  }, {
    text: '四川省',
    value: '510000'
  }, {
    text: '贵州省',
    value: '520000'
  }, {
    text: '云南省',
    value: '530000'
  }, {
    text: '西藏自治区',
    value: '540000'
  }, {
    text: '陕西省',
    value: '610000'
  }, {
    text: '甘肃省',
    value: '620000'
  }, {
    text: '青海省',
    value: '630000'
  }, {
    text: '宁夏回族自治区',
    value: '640000'
  }, {
    text: '新疆维吾尔自治区',
    value: '650000'
  }];

  var cityList = exports.cityList = {
    '110000': [{
      province: '北京市',
      text: '市辖区',
      value: '110100'
    }, {
      province: '北京市',
      text: '县',
      value: '110200'
    }],
    '120000': [{
      province: '天津市',
      text: '市辖区',
      value: '120100'
    }, {
      province: '天津市',
      text: '县',
      value: '120200'
    }],
    '130000': [{
      province: '河北省',
      text: '石家庄市',
      value: '130100'
    }, {
      province: '河北省',
      text: '唐山市',
      value: '130200'
    }, {
      province: '河北省',
      text: '秦皇岛市',
      value: '130300'
    }, {
      province: '河北省',
      text: '邯郸市',
      value: '130400'
    }, {
      province: '河北省',
      text: '邢台市',
      value: '130500'
    }, {
      province: '河北省',
      text: '保定市',
      value: '130600'
    }, {
      province: '河北省',
      text: '张家口市',
      value: '130700'
    }, {
      province: '河北省',
      text: '承德市',
      value: '130800'
    }, {
      province: '河北省',
      text: '沧州市',
      value: '130900'
    }, {
      province: '河北省',
      text: '廊坊市',
      value: '131000'
    }, {
      province: '河北省',
      text: '衡水市',
      value: '131100'
    }],
    '140000': [{
      province: '山西省',
      text: '太原市',
      value: '140100'
    }, {
      province: '山西省',
      text: '大同市',
      value: '140200'
    }, {
      province: '山西省',
      text: '阳泉市',
      value: '140300'
    }, {
      province: '山西省',
      text: '长治市',
      value: '140400'
    }, {
      province: '山西省',
      text: '晋城市',
      value: '140500'
    }, {
      province: '山西省',
      text: '朔州市',
      value: '140600'
    }, {
      province: '山西省',
      text: '晋中市',
      value: '140700'
    }, {
      province: '山西省',
      text: '运城市',
      value: '140800'
    }, {
      province: '山西省',
      text: '忻州市',
      value: '140900'
    }, {
      province: '山西省',
      text: '临汾市',
      value: '141000'
    }, {
      province: '山西省',
      text: '吕梁市',
      value: '141100'
    }],
    '150000': [{
      province: '内蒙古自治区',
      text: '呼和浩特市',
      value: '150100'
    }, {
      province: '内蒙古自治区',
      text: '包头市',
      value: '150200'
    }, {
      province: '内蒙古自治区',
      text: '乌海市',
      value: '150300'
    }, {
      province: '内蒙古自治区',
      text: '赤峰市',
      value: '150400'
    }, {
      province: '内蒙古自治区',
      text: '通辽市',
      value: '150500'
    }, {
      province: '内蒙古自治区',
      text: '鄂尔多斯市',
      value: '150600'
    }, {
      province: '内蒙古自治区',
      text: '呼伦贝尔市',
      value: '150700'
    }, {
      province: '内蒙古自治区',
      text: '巴彦淖尔市',
      value: '150800'
    }, {
      province: '内蒙古自治区',
      text: '乌兰察布市',
      value: '150900'
    }, {
      province: '内蒙古自治区',
      text: '兴安盟',
      value: '152200'
    }, {
      province: '内蒙古自治区',
      text: '锡林郭勒盟',
      value: '152500'
    }, {
      province: '内蒙古自治区',
      text: '阿拉善盟',
      value: '152900'
    }],
    '210000': [{
      province: '辽宁省',
      text: '沈阳市',
      value: '210100'
    }, {
      province: '辽宁省',
      text: '大连市',
      value: '210200'
    }, {
      province: '辽宁省',
      text: '鞍山市',
      value: '210300'
    }, {
      province: '辽宁省',
      text: '抚顺市',
      value: '210400'
    }, {
      province: '辽宁省',
      text: '本溪市',
      value: '210500'
    }, {
      province: '辽宁省',
      text: '丹东市',
      value: '210600'
    }, {
      province: '辽宁省',
      text: '锦州市',
      value: '210700'
    }, {
      province: '辽宁省',
      text: '营口市',
      value: '210800'
    }, {
      province: '辽宁省',
      text: '阜新市',
      value: '210900'
    }, {
      province: '辽宁省',
      text: '辽阳市',
      value: '211000'
    }, {
      province: '辽宁省',
      text: '盘锦市',
      value: '211100'
    }, {
      province: '辽宁省',
      text: '铁岭市',
      value: '211200'
    }, {
      province: '辽宁省',
      text: '朝阳市',
      value: '211300'
    }, {
      province: '辽宁省',
      text: '葫芦岛市',
      value: '211400'
    }],
    '220000': [{
      province: '吉林省',
      text: '长春市',
      value: '220100'
    }, {
      province: '吉林省',
      text: '吉林市',
      value: '220200'
    }, {
      province: '吉林省',
      text: '四平市',
      value: '220300'
    }, {
      province: '吉林省',
      text: '辽源市',
      value: '220400'
    }, {
      province: '吉林省',
      text: '通化市',
      value: '220500'
    }, {
      province: '吉林省',
      text: '白山市',
      value: '220600'
    }, {
      province: '吉林省',
      text: '松原市',
      value: '220700'
    }, {
      province: '吉林省',
      text: '白城市',
      value: '220800'
    }, {
      province: '吉林省',
      text: '延边朝鲜族自治州',
      value: '222400'
    }],
    '230000': [{
      province: '黑龙江省',
      text: '哈尔滨市',
      value: '230100'
    }, {
      province: '黑龙江省',
      text: '齐齐哈尔市',
      value: '230200'
    }, {
      province: '黑龙江省',
      text: '鸡西市',
      value: '230300'
    }, {
      province: '黑龙江省',
      text: '鹤岗市',
      value: '230400'
    }, {
      province: '黑龙江省',
      text: '双鸭山市',
      value: '230500'
    }, {
      province: '黑龙江省',
      text: '大庆市',
      value: '230600'
    }, {
      province: '黑龙江省',
      text: '伊春市',
      value: '230700'
    }, {
      province: '黑龙江省',
      text: '佳木斯市',
      value: '230800'
    }, {
      province: '黑龙江省',
      text: '七台河市',
      value: '230900'
    }, {
      province: '黑龙江省',
      text: '牡丹江市',
      value: '231000'
    }, {
      province: '黑龙江省',
      text: '黑河市',
      value: '231100'
    }, {
      province: '黑龙江省',
      text: '绥化市',
      value: '231200'
    }, {
      province: '黑龙江省',
      text: '大兴安岭地区',
      value: '232700'
    }],
    '310000': [{
      province: '上海市',
      text: '市辖区',
      value: '310100'
    }, {
      province: '上海市',
      text: '县',
      value: '310200'
    }],
    '320000': [{
      province: '江苏省',
      text: '南京市',
      value: '320100'
    }, {
      province: '江苏省',
      text: '无锡市',
      value: '320200'
    }, {
      province: '江苏省',
      text: '徐州市',
      value: '320300'
    }, {
      province: '江苏省',
      text: '常州市',
      value: '320400'
    }, {
      province: '江苏省',
      text: '苏州市',
      value: '320500'
    }, {
      province: '江苏省',
      text: '南通市',
      value: '320600'
    }, {
      province: '江苏省',
      text: '连云港市',
      value: '320700'
    }, {
      province: '江苏省',
      text: '淮安市',
      value: '320800'
    }, {
      province: '江苏省',
      text: '盐城市',
      value: '320900'
    }, {
      province: '江苏省',
      text: '扬州市',
      value: '321000'
    }, {
      province: '江苏省',
      text: '镇江市',
      value: '321100'
    }, {
      province: '江苏省',
      text: '泰州市',
      value: '321200'
    }, {
      province: '江苏省',
      text: '宿迁市',
      value: '321300'
    }],
    '330000': [{
      province: '浙江省',
      text: '杭州市',
      value: '330100'
    }, {
      province: '浙江省',
      text: '宁波市',
      value: '330200'
    }, {
      province: '浙江省',
      text: '温州市',
      value: '330300'
    }, {
      province: '浙江省',
      text: '嘉兴市',
      value: '330400'
    }, {
      province: '浙江省',
      text: '湖州市',
      value: '330500'
    }, {
      province: '浙江省',
      text: '绍兴市',
      value: '330600'
    }, {
      province: '浙江省',
      text: '金华市',
      value: '330700'
    }, {
      province: '浙江省',
      text: '衢州市',
      value: '330800'
    }, {
      province: '浙江省',
      text: '舟山市',
      value: '330900'
    }, {
      province: '浙江省',
      text: '台州市',
      value: '331000'
    }, {
      province: '浙江省',
      text: '丽水市',
      value: '331100'
    }],
    '340000': [{
      province: '安徽省',
      text: '合肥市',
      value: '340100'
    }, {
      province: '安徽省',
      text: '芜湖市',
      value: '340200'
    }, {
      province: '安徽省',
      text: '蚌埠市',
      value: '340300'
    }, {
      province: '安徽省',
      text: '淮南市',
      value: '340400'
    }, {
      province: '安徽省',
      text: '马鞍山市',
      value: '340500'
    }, {
      province: '安徽省',
      text: '淮北市',
      value: '340600'
    }, {
      province: '安徽省',
      text: '铜陵市',
      value: '340700'
    }, {
      province: '安徽省',
      text: '安庆市',
      value: '340800'
    }, {
      province: '安徽省',
      text: '黄山市',
      value: '341000'
    }, {
      province: '安徽省',
      text: '滁州市',
      value: '341100'
    }, {
      province: '安徽省',
      text: '阜阳市',
      value: '341200'
    }, {
      province: '安徽省',
      text: '宿州市',
      value: '341300'
    }, {
      province: '安徽省',
      text: '六安市',
      value: '341500'
    }, {
      province: '安徽省',
      text: '亳州市',
      value: '341600'
    }, {
      province: '安徽省',
      text: '池州市',
      value: '341700'
    }, {
      province: '安徽省',
      text: '宣城市',
      value: '341800'
    }],
    '350000': [{
      province: '福建省',
      text: '福州市',
      value: '350100'
    }, {
      province: '福建省',
      text: '厦门市',
      value: '350200'
    }, {
      province: '福建省',
      text: '莆田市',
      value: '350300'
    }, {
      province: '福建省',
      text: '三明市',
      value: '350400'
    }, {
      province: '福建省',
      text: '泉州市',
      value: '350500'
    }, {
      province: '福建省',
      text: '漳州市',
      value: '350600'
    }, {
      province: '福建省',
      text: '南平市',
      value: '350700'
    }, {
      province: '福建省',
      text: '龙岩市',
      value: '350800'
    }, {
      province: '福建省',
      text: '宁德市',
      value: '350900'
    }],
    '360000': [{
      province: '江西省',
      text: '南昌市',
      value: '360100'
    }, {
      province: '江西省',
      text: '景德镇市',
      value: '360200'
    }, {
      province: '江西省',
      text: '萍乡市',
      value: '360300'
    }, {
      province: '江西省',
      text: '九江市',
      value: '360400'
    }, {
      province: '江西省',
      text: '新余市',
      value: '360500'
    }, {
      province: '江西省',
      text: '鹰潭市',
      value: '360600'
    }, {
      province: '江西省',
      text: '赣州市',
      value: '360700'
    }, {
      province: '江西省',
      text: '吉安市',
      value: '360800'
    }, {
      province: '江西省',
      text: '宜春市',
      value: '360900'
    }, {
      province: '江西省',
      text: '抚州市',
      value: '361000'
    }, {
      province: '江西省',
      text: '上饶市',
      value: '361100'
    }],
    '370000': [{
      province: '山东省',
      text: '济南市',
      value: '370100'
    }, {
      province: '山东省',
      text: '青岛市',
      value: '370200'
    }, {
      province: '山东省',
      text: '淄博市',
      value: '370300'
    }, {
      province: '山东省',
      text: '枣庄市',
      value: '370400'
    }, {
      province: '山东省',
      text: '东营市',
      value: '370500'
    }, {
      province: '山东省',
      text: '烟台市',
      value: '370600'
    }, {
      province: '山东省',
      text: '潍坊市',
      value: '370700'
    }, {
      province: '山东省',
      text: '济宁市',
      value: '370800'
    }, {
      province: '山东省',
      text: '泰安市',
      value: '370900'
    }, {
      province: '山东省',
      text: '威海市',
      value: '371000'
    }, {
      province: '山东省',
      text: '日照市',
      value: '371100'
    }, {
      province: '山东省',
      text: '莱芜市',
      value: '371200'
    }, {
      province: '山东省',
      text: '临沂市',
      value: '371300'
    }, {
      province: '山东省',
      text: '德州市',
      value: '371400'
    }, {
      province: '山东省',
      text: '聊城市',
      value: '371500'
    }, {
      province: '山东省',
      text: '滨州市',
      value: '371600'
    }, {
      province: '山东省',
      text: '菏泽市',
      value: '371700'
    }],
    '410000': [{
      province: '河南省',
      text: '郑州市',
      value: '410100'
    }, {
      province: '河南省',
      text: '开封市',
      value: '410200'
    }, {
      province: '河南省',
      text: '洛阳市',
      value: '410300'
    }, {
      province: '河南省',
      text: '平顶山市',
      value: '410400'
    }, {
      province: '河南省',
      text: '安阳市',
      value: '410500'
    }, {
      province: '河南省',
      text: '鹤壁市',
      value: '410600'
    }, {
      province: '河南省',
      text: '新乡市',
      value: '410700'
    }, {
      province: '河南省',
      text: '焦作市',
      value: '410800'
    }, {
      province: '河南省',
      text: '濮阳市',
      value: '410900'
    }, {
      province: '河南省',
      text: '许昌市',
      value: '411000'
    }, {
      province: '河南省',
      text: '漯河市',
      value: '411100'
    }, {
      province: '河南省',
      text: '三门峡市',
      value: '411200'
    }, {
      province: '河南省',
      text: '南阳市',
      value: '411300'
    }, {
      province: '河南省',
      text: '商丘市',
      value: '411400'
    }, {
      province: '河南省',
      text: '信阳市',
      value: '411500'
    }, {
      province: '河南省',
      text: '周口市',
      value: '411600'
    }, {
      province: '河南省',
      text: '驻马店市',
      value: '411700'
    }, {
      province: '河南省',
      text: '省直辖县级行政区划',
      value: '419000'
    }],
    '420000': [{
      province: '湖北省',
      text: '武汉市',
      value: '420100'
    }, {
      province: '湖北省',
      text: '黄石市',
      value: '420200'
    }, {
      province: '湖北省',
      text: '十堰市',
      value: '420300'
    }, {
      province: '湖北省',
      text: '宜昌市',
      value: '420500'
    }, {
      province: '湖北省',
      text: '襄阳市',
      value: '420600'
    }, {
      province: '湖北省',
      text: '鄂州市',
      value: '420700'
    }, {
      province: '湖北省',
      text: '荆门市',
      value: '420800'
    }, {
      province: '湖北省',
      text: '孝感市',
      value: '420900'
    }, {
      province: '湖北省',
      text: '荆州市',
      value: '421000'
    }, {
      province: '湖北省',
      text: '黄冈市',
      value: '421100'
    }, {
      province: '湖北省',
      text: '咸宁市',
      value: '421200'
    }, {
      province: '湖北省',
      text: '随州市',
      value: '421300'
    }, {
      province: '湖北省',
      text: '恩施土家族苗族自治州',
      value: '422800'
    }, {
      province: '湖北省',
      text: '省直辖县级行政区划',
      value: '429000'
    }],
    '430000': [{
      province: '湖南省',
      text: '长沙市',
      value: '430100'
    }, {
      province: '湖南省',
      text: '株洲市',
      value: '430200'
    }, {
      province: '湖南省',
      text: '湘潭市',
      value: '430300'
    }, {
      province: '湖南省',
      text: '衡阳市',
      value: '430400'
    }, {
      province: '湖南省',
      text: '邵阳市',
      value: '430500'
    }, {
      province: '湖南省',
      text: '岳阳市',
      value: '430600'
    }, {
      province: '湖南省',
      text: '常德市',
      value: '430700'
    }, {
      province: '湖南省',
      text: '张家界市',
      value: '430800'
    }, {
      province: '湖南省',
      text: '益阳市',
      value: '430900'
    }, {
      province: '湖南省',
      text: '郴州市',
      value: '431000'
    }, {
      province: '湖南省',
      text: '永州市',
      value: '431100'
    }, {
      province: '湖南省',
      text: '怀化市',
      value: '431200'
    }, {
      province: '湖南省',
      text: '娄底市',
      value: '431300'
    }, {
      province: '湖南省',
      text: '湘西土家族苗族自治州',
      value: '433100'
    }],
    '440000': [{
      province: '广东省',
      text: '广州市',
      value: '440100'
    }, {
      province: '广东省',
      text: '韶关市',
      value: '440200'
    }, {
      province: '广东省',
      text: '深圳市',
      value: '440300'
    }, {
      province: '广东省',
      text: '珠海市',
      value: '440400'
    }, {
      province: '广东省',
      text: '汕头市',
      value: '440500'
    }, {
      province: '广东省',
      text: '佛山市',
      value: '440600'
    }, {
      province: '广东省',
      text: '江门市',
      value: '440700'
    }, {
      province: '广东省',
      text: '湛江市',
      value: '440800'
    }, {
      province: '广东省',
      text: '茂名市',
      value: '440900'
    }, {
      province: '广东省',
      text: '肇庆市',
      value: '441200'
    }, {
      province: '广东省',
      text: '惠州市',
      value: '441300'
    }, {
      province: '广东省',
      text: '梅州市',
      value: '441400'
    }, {
      province: '广东省',
      text: '汕尾市',
      value: '441500'
    }, {
      province: '广东省',
      text: '河源市',
      value: '441600'
    }, {
      province: '广东省',
      text: '阳江市',
      value: '441700'
    }, {
      province: '广东省',
      text: '清远市',
      value: '441800'
    }, {
      province: '广东省',
      text: '东莞市',
      value: '441900'
    }, {
      province: '广东省',
      text: '中山市',
      value: '442000'
    }, {
      province: '广东省',
      text: '潮州市',
      value: '445100'
    }, {
      province: '广东省',
      text: '揭阳市',
      value: '445200'
    }, {
      province: '广东省',
      text: '云浮市',
      value: '445300'
    }],
    '450000': [{
      province: '广西壮族自治区',
      text: '南宁市',
      value: '450100'
    }, {
      province: '广西壮族自治区',
      text: '柳州市',
      value: '450200'
    }, {
      province: '广西壮族自治区',
      text: '桂林市',
      value: '450300'
    }, {
      province: '广西壮族自治区',
      text: '梧州市',
      value: '450400'
    }, {
      province: '广西壮族自治区',
      text: '北海市',
      value: '450500'
    }, {
      province: '广西壮族自治区',
      text: '防城港市',
      value: '450600'
    }, {
      province: '广西壮族自治区',
      text: '钦州市',
      value: '450700'
    }, {
      province: '广西壮族自治区',
      text: '贵港市',
      value: '450800'
    }, {
      province: '广西壮族自治区',
      text: '玉林市',
      value: '450900'
    }, {
      province: '广西壮族自治区',
      text: '百色市',
      value: '451000'
    }, {
      province: '广西壮族自治区',
      text: '贺州市',
      value: '451100'
    }, {
      province: '广西壮族自治区',
      text: '河池市',
      value: '451200'
    }, {
      province: '广西壮族自治区',
      text: '来宾市',
      value: '451300'
    }, {
      province: '广西壮族自治区',
      text: '崇左市',
      value: '451400'
    }],
    '460000': [{
      province: '海南省',
      text: '海口市',
      value: '460100'
    }, {
      province: '海南省',
      text: '三亚市',
      value: '460200'
    }, {
      province: '海南省',
      text: '三沙市',
      value: '460300'
    }, {
      province: '海南省',
      text: '省直辖县级行政区划',
      value: '469000'
    }],
    '500000': [{
      province: '重庆市',
      text: '市辖区',
      value: '500100'
    }, {
      province: '重庆市',
      text: '县',
      value: '500200'
    }],
    '510000': [{
      province: '四川省',
      text: '成都市',
      value: '510100'
    }, {
      province: '四川省',
      text: '自贡市',
      value: '510300'
    }, {
      province: '四川省',
      text: '攀枝花市',
      value: '510400'
    }, {
      province: '四川省',
      text: '泸州市',
      value: '510500'
    }, {
      province: '四川省',
      text: '德阳市',
      value: '510600'
    }, {
      province: '四川省',
      text: '绵阳市',
      value: '510700'
    }, {
      province: '四川省',
      text: '广元市',
      value: '510800'
    }, {
      province: '四川省',
      text: '遂宁市',
      value: '510900'
    }, {
      province: '四川省',
      text: '内江市',
      value: '511000'
    }, {
      province: '四川省',
      text: '乐山市',
      value: '511100'
    }, {
      province: '四川省',
      text: '南充市',
      value: '511300'
    }, {
      province: '四川省',
      text: '眉山市',
      value: '511400'
    }, {
      province: '四川省',
      text: '宜宾市',
      value: '511500'
    }, {
      province: '四川省',
      text: '广安市',
      value: '511600'
    }, {
      province: '四川省',
      text: '达州市',
      value: '511700'
    }, {
      province: '四川省',
      text: '雅安市',
      value: '511800'
    }, {
      province: '四川省',
      text: '巴中市',
      value: '511900'
    }, {
      province: '四川省',
      text: '资阳市',
      value: '512000'
    }, {
      province: '四川省',
      text: '阿坝藏族羌族自治州',
      value: '513200'
    }, {
      province: '四川省',
      text: '甘孜藏族自治州',
      value: '513300'
    }, {
      province: '四川省',
      text: '凉山彝族自治州',
      value: '513400'
    }],
    '520000': [{
      province: '贵州省',
      text: '贵阳市',
      value: '520100'
    }, {
      province: '贵州省',
      text: '六盘水市',
      value: '520200'
    }, {
      province: '贵州省',
      text: '遵义市',
      value: '520300'
    }, {
      province: '贵州省',
      text: '安顺市',
      value: '520400'
    }, {
      province: '贵州省',
      text: '毕节市',
      value: '520500'
    }, {
      province: '贵州省',
      text: '铜仁市',
      value: '520600'
    }, {
      province: '贵州省',
      text: '黔西南布依族苗族自治州',
      value: '522300'
    }, {
      province: '贵州省',
      text: '黔东南苗族侗族自治州',
      value: '522600'
    }, {
      province: '贵州省',
      text: '黔南布依族苗族自治州',
      value: '522700'
    }],
    '530000': [{
      province: '云南省',
      text: '昆明市',
      value: '530100'
    }, {
      province: '云南省',
      text: '曲靖市',
      value: '530300'
    }, {
      province: '云南省',
      text: '玉溪市',
      value: '530400'
    }, {
      province: '云南省',
      text: '保山市',
      value: '530500'
    }, {
      province: '云南省',
      text: '昭通市',
      value: '530600'
    }, {
      province: '云南省',
      text: '丽江市',
      value: '530700'
    }, {
      province: '云南省',
      text: '普洱市',
      value: '530800'
    }, {
      province: '云南省',
      text: '临沧市',
      value: '530900'
    }, {
      province: '云南省',
      text: '楚雄彝族自治州',
      value: '532300'
    }, {
      province: '云南省',
      text: '红河哈尼族彝族自治州',
      value: '532500'
    }, {
      province: '云南省',
      text: '文山壮族苗族自治州',
      value: '532600'
    }, {
      province: '云南省',
      text: '西双版纳傣族自治州',
      value: '532800'
    }, {
      province: '云南省',
      text: '大理白族自治州',
      value: '532900'
    }, {
      province: '云南省',
      text: '德宏傣族景颇族自治州',
      value: '533100'
    }, {
      province: '云南省',
      text: '怒江傈僳族自治州',
      value: '533300'
    }, {
      province: '云南省',
      text: '迪庆藏族自治州',
      value: '533400'
    }],
    '540000': [{
      province: '西藏自治区',
      text: '拉萨市',
      value: '540100'
    }, {
      province: '西藏自治区',
      text: '昌都地区',
      value: '542100'
    }, {
      province: '西藏自治区',
      text: '山南地区',
      value: '542200'
    }, {
      province: '西藏自治区',
      text: '日喀则地区',
      value: '542300'
    }, {
      province: '西藏自治区',
      text: '那曲地区',
      value: '542400'
    }, {
      province: '西藏自治区',
      text: '阿里地区',
      value: '542500'
    }, {
      province: '西藏自治区',
      text: '林芝地区',
      value: '542600'
    }],
    '610000': [{
      province: '陕西省',
      text: '西安市',
      value: '610100'
    }, {
      province: '陕西省',
      text: '铜川市',
      value: '610200'
    }, {
      province: '陕西省',
      text: '宝鸡市',
      value: '610300'
    }, {
      province: '陕西省',
      text: '咸阳市',
      value: '610400'
    }, {
      province: '陕西省',
      text: '渭南市',
      value: '610500'
    }, {
      province: '陕西省',
      text: '延安市',
      value: '610600'
    }, {
      province: '陕西省',
      text: '汉中市',
      value: '610700'
    }, {
      province: '陕西省',
      text: '榆林市',
      value: '610800'
    }, {
      province: '陕西省',
      text: '安康市',
      value: '610900'
    }, {
      province: '陕西省',
      text: '商洛市',
      value: '611000'
    }],
    '620000': [{
      province: '甘肃省',
      text: '兰州市',
      value: '620100'
    }, {
      province: '甘肃省',
      text: '嘉峪关市',
      value: '620200'
    }, {
      province: '甘肃省',
      text: '金昌市',
      value: '620300'
    }, {
      province: '甘肃省',
      text: '白银市',
      value: '620400'
    }, {
      province: '甘肃省',
      text: '天水市',
      value: '620500'
    }, {
      province: '甘肃省',
      text: '武威市',
      value: '620600'
    }, {
      province: '甘肃省',
      text: '张掖市',
      value: '620700'
    }, {
      province: '甘肃省',
      text: '平凉市',
      value: '620800'
    }, {
      province: '甘肃省',
      text: '酒泉市',
      value: '620900'
    }, {
      province: '甘肃省',
      text: '庆阳市',
      value: '621000'
    }, {
      province: '甘肃省',
      text: '定西市',
      value: '621100'
    }, {
      province: '甘肃省',
      text: '陇南市',
      value: '621200'
    }, {
      province: '甘肃省',
      text: '临夏回族自治州',
      value: '622900'
    }, {
      province: '甘肃省',
      text: '甘南藏族自治州',
      value: '623000'
    }],
    '630000': [{
      province: '青海省',
      text: '西宁市',
      value: '630100'
    }, {
      province: '青海省',
      text: '海东地区',
      value: '632100'
    }, {
      province: '青海省',
      text: '海北藏族自治州',
      value: '632200'
    }, {
      province: '青海省',
      text: '黄南藏族自治州',
      value: '632300'
    }, {
      province: '青海省',
      text: '海南藏族自治州',
      value: '632500'
    }, {
      province: '青海省',
      text: '果洛藏族自治州',
      value: '632600'
    }, {
      province: '青海省',
      text: '玉树藏族自治州',
      value: '632700'
    }, {
      province: '青海省',
      text: '海西蒙古族藏族自治州',
      value: '632800'
    }],
    '640000': [{
      province: '宁夏回族自治区',
      text: '银川市',
      value: '640100'
    }, {
      province: '宁夏回族自治区',
      text: '石嘴山市',
      value: '640200'
    }, {
      province: '宁夏回族自治区',
      text: '吴忠市',
      value: '640300'
    }, {
      province: '宁夏回族自治区',
      text: '固原市',
      value: '640400'
    }, {
      province: '宁夏回族自治区',
      text: '中卫市',
      value: '640500'
    }],
    '650000': [{
      province: '新疆维吾尔自治区',
      text: '乌鲁木齐市',
      value: '650100'
    }, {
      province: '新疆维吾尔自治区',
      text: '克拉玛依市',
      value: '650200'
    }, {
      province: '新疆维吾尔自治区',
      text: '吐鲁番地区',
      value: '652100'
    }, {
      province: '新疆维吾尔自治区',
      text: '哈密地区',
      value: '652200'
    }, {
      province: '新疆维吾尔自治区',
      text: '昌吉回族自治州',
      value: '652300'
    }, {
      province: '新疆维吾尔自治区',
      text: '博尔塔拉蒙古自治州',
      value: '652700'
    }, {
      province: '新疆维吾尔自治区',
      text: '巴音郭楞蒙古自治州',
      value: '652800'
    }, {
      province: '新疆维吾尔自治区',
      text: '阿克苏地区',
      value: '652900'
    }, {
      province: '新疆维吾尔自治区',
      text: '克孜勒苏柯尔克孜自治州',
      value: '653000'
    }, {
      province: '新疆维吾尔自治区',
      text: '喀什地区',
      value: '653100'
    }, {
      province: '新疆维吾尔自治区',
      text: '和田地区',
      value: '653200'
    }, {
      province: '新疆维吾尔自治区',
      text: '伊犁哈萨克自治州',
      value: '654000'
    }, {
      province: '新疆维吾尔自治区',
      text: '塔城地区',
      value: '654200'
    }, {
      province: '新疆维吾尔自治区',
      text: '阿勒泰地区',
      value: '654300'
    }, {
      province: '新疆维吾尔自治区',
      text: '自治区直辖县级行政区划',
      value: '659000'
    }]
  };
});

/***/ }),

/***/ 356:
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
  }, [_vm._v("所在省市")]), _vm._v(" "), (!_vm.readonly) ? _c('div', {
    staticClass: "hx-select-main"
  }, [_c('p', {
    staticClass: "select-main-info",
    on: {
      "click": _vm.showAddressPicker
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.location),
      expression: "location"
    }],
    class: _vm.location == _vm.placeholder ? 'main-info-init' : 'main-info-selected',
    attrs: {
      "placeholder": _vm.placeholder,
      "readonly": ""
    },
    domProps: {
      "value": (_vm.location)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.location = $event.target.value
      }
    }
  }), _vm._v(" "), _c('i', {
    class: _vm.disabled ? '' : 'icon-hualife-region'
  })])]) : _c('p', {
    staticClass: "select-main-info"
  }, [_vm._v(_vm._s(_vm.readValue.text.join(' ')))])]), _vm._v(" "), _c('cube-validator', {
    ref: "validator",
    attrs: {
      "model": _vm.location,
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