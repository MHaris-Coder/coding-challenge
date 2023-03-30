"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["select-needs"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var StepsLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_layouts_StepsLayout_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../layouts/StepsLayout.vue */ "./resources/js/layouts/StepsLayout.vue"));
});
var NEEDS = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    StepsLayout: StepsLayout
  },
  props: {
    title: String,
    subTitle: String
  },
  setup: function setup() {
    return {};
  },
  created: function created() {
    this.NEEDS = _objectSpread({}, this.$store.state.NEEDS);
  },
  mounted: function mounted() {},
  methods: {
    selectNeeds: function selectNeeds(index) {
      var _this$$store$state$ga, _this$alreadySelected;

      this.NEEDS[index].selected = !this.NEEDS[index].selected;

      if (((_this$$store$state$ga = this.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.NEIGHBOURHOOD[this.$store.state.gameSettingsModule.CURRENT_NEIGHBOURHOOD]) === null || _this$$store$state$ga === void 0 ? void 0 : _this$$store$state$ga.need_limit) < ((_this$alreadySelected = this.alreadySelectedNeeds()) === null || _this$alreadySelected === void 0 ? void 0 : _this$alreadySelected.length)) {
        var _this$$store$state$ga2;

        this.NEEDS[index].selected = !this.NEEDS[index].selected;
        this.$store.dispatch('errorToast', 'You have required to ' + ((_this$$store$state$ga2 = this.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.NEIGHBOURHOOD[this.$store.state.gameSettingsModule.CURRENT_NEIGHBOURHOOD]) === null || _this$$store$state$ga2 === void 0 ? void 0 : _this$$store$state$ga2.need_limit) + ' needs');
      }
    },
    alreadySelectedNeeds: function alreadySelectedNeeds() {
      if (_typeof(this.NEEDS) == 'object' && Object.keys(this.NEEDS).length > 0) {
        var result = Object.values(this.NEEDS).filter(function (value) {
          return (value === null || value === void 0 ? void 0 : value.selected) == true;
        });
        return result;
      }
    },
    goToNext: function goToNext() {
      var _this$$store$state$ga3, _this$alreadySelected2;

      if (((_this$$store$state$ga3 = this.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.NEIGHBOURHOOD[this.$store.state.gameSettingsModule.CURRENT_NEIGHBOURHOOD]) === null || _this$$store$state$ga3 === void 0 ? void 0 : _this$$store$state$ga3.need_limit) == ((_this$alreadySelected2 = this.alreadySelectedNeeds()) === null || _this$alreadySelected2 === void 0 ? void 0 : _this$alreadySelected2.length)) {
        this.$store.dispatch('addNeighbourhoodInSummary');
        this.$store.commit('setNeedsInSummary', this.alreadySelectedNeeds());
        this.$store.dispatch('nextStep');

        var _iterator = _createForOfIteratorHelper(this.$store.state.NEEDS),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var iterator = _step.value;
            iterator.selected = false;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        var _this$$store$state$ga4;

        this.$store.dispatch('errorToast', 'You must required to ' + ((_this$$store$state$ga4 = this.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.NEIGHBOURHOOD[this.$store.state.gameSettingsModule.CURRENT_NEIGHBOURHOOD]) === null || _this$$store$state$ga4 === void 0 ? void 0 : _this$$store$state$ga4.need_limit) + ' needs');
      }
    }
  },
  watch: {// '$store.state.gameSettingsModule.CURRENT_SCREEN': {
    //     handler: function(oldValue, newValue) {
    //         console.log('oldValue, newValue', oldValue, newValue)
    //         this.NEEDS = this.$store.state.NEEDS
    //     },
    //     deep: true
    // }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=template&id=0c7da50b&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=template&id=0c7da50b&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0c7da50b"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container-fluid select-needs-parent-bg mb-4"
};
var _hoisted_2 = ["src"];
var _hoisted_3 = {
  "class": "select-needs-title-text"
};
var _hoisted_4 = {
  "class": "container-fluid"
};
var _hoisted_5 = {
  "class": "overflow-auto d-flex overflow-auto select-needs-card-container"
};
var _hoisted_6 = ["onClick"];
var _hoisted_7 = {
  "class": "need_image"
};
var _hoisted_8 = ["src"];
var _hoisted_9 = {
  style: {
    "word-break": "break-all"
  }
};
var _hoisted_10 = {
  "class": "container-fluid"
};
var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = {
  "class": "col-xs-12 col-sm-12 col-md-12 d-flex mt-4 mb-4 justify-content-center align-items-center"
};

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    style: {
      "color": "white",
      "margin-right": "10px",
      "font-size": "5vw"
    },
    "class": "fa fa-info-circle",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_14 = {
  style: {
    "font-size": "4vw",
    "margin-bottom": "0"
  }
};
var _hoisted_15 = {
  "class": "container-fluid choose-resources-btn"
};
var _hoisted_16 = {
  "class": "row"
};
var _hoisted_17 = {
  "class": "col-xs-12 col-sm-12 col-md-12"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$store$state$gam, _ctx$$store$state$gam2, _ctx$$store$state$gam3;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "select-needs-title-bar",
    src: _ctx.baseUrl + 'images/select-needs.png'
  }, null, 8
  /* PROPS */
  , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Escolhe " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_ctx$$store$state$gam = _ctx.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.NEIGHBOURHOOD[_ctx.$store.state.gameSettingsModule.CURRENT_NEIGHBOURHOOD]) === null || _ctx$$store$state$gam === void 0 ? void 0 : _ctx$$store$state$gam.need_limit) + " necessidades", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_ctx$$store$state$gam2 = _ctx.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.NEIGHBOURHOOD[_ctx.$store.state.gameSettingsModule.CURRENT_NEIGHBOURHOOD]) === null || _ctx$$store$state$gam2 === void 0 ? void 0 : _ctx$$store$state$gam2.name), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <template v-if=\"NEEDS?.length > 0\"> "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.NEEDS, function (NEED, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["select-needs-card border", {
        'border-primary': NEED.selected
      }]),
      onClick: function onClick($event) {
        return $options.selectNeeds(index);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img class=\"image-fluid\" :src=\"baseUrl + 'images/needs-icons/1.png'\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: _ctx.baseUrl + 'assets/needs/' + (NEED === null || NEED === void 0 ? void 0 : NEED.icon),
      onError: _cache[0] || (_cache[0] = function (event) {
        return event.target.src = _ctx.baseUrl + 'images/placeholder.jpg';
      })
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(NEED === null || NEED === void 0 ? void 0 : NEED.name), 1
    /* TEXT */
    )], 10
    /* CLASS, PROPS */
    , _hoisted_6);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </template> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"select-needs-card\">\r\n                    <div class=\"select-needs-card-img\">\r\n                        <img class=\"image-fluid\" :src=\"baseUrl + 'images/needs-icons/1.png'\">\r\n                    </div>\r\n                    <h4>Ajuda</h4>\r\n                </div>\r\n                <div class=\"select-needs-card\">\r\n                    <div class=\"select-needs-card-img\">\r\n                        <img class=\"image-fluid\" :src=\"baseUrl + 'images/needs-icons/2.png'\">\r\n                    </div>\r\n                    <h4>Ajuda</h4>\r\n                </div>\r\n                <div class=\"select-needs-card\">\r\n                    <div class=\"select-needs-card-img\">\r\n                        <img class=\"image-fluid\" :src=\"baseUrl + 'images/needs-icons/3.png'\">\r\n                    </div>\r\n                    <h4>Ajuda</h4>\r\n                </div>\r\n                <div class=\"select-needs-card\">\r\n                    <div class=\"select-needs-card-img\">\r\n                        <img class=\"image-fluid\" :src=\"baseUrl + 'images/needs-icons/4.png'\">\r\n                    </div>\r\n                    <h4>Ajuda</h4>\r\n                </div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-xs-12 col-sm-12 col-md-12 d-flex justify-content-between mt-4\">\r\n                <div class=\"select-needs-card\">\r\n                    <div class=\"select-needs-card-img\">\r\n                        <img class=\"image-fluid\" :src=\"baseUrl + 'images/needs-icons/5.png'\">\r\n                    </div>\r\n                    <h4>Ajuda</h4>\r\n                </div>\r\n                <div class=\"select-needs-card\">\r\n                    <div class=\"select-needs-card-img\">\r\n                        <img class=\"image-fluid\" :src=\"baseUrl + 'images/needs-icons/6.png'\">\r\n                    </div>\r\n                    <h4>Ajuda</h4>\r\n                </div>\r\n                <div class=\"select-needs-card\">\r\n                    <div class=\"select-needs-card-img\">\r\n                        <img class=\"image-fluid\" :src=\"baseUrl + 'images/needs-icons/7.png'\">\r\n                    </div>\r\n                    <h4>Ajuda</h4>\r\n                </div>\r\n                <div class=\"select-needs-card\">\r\n                    <div class=\"select-needs-card-img\">\r\n                        <img class=\"image-fluid\" :src=\"baseUrl + 'images/needs-icons/8.png'\">\r\n                    </div>\r\n                    <h4>Ajuda</h4>\r\n                </div>\r\n            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_14, "Max " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_ctx$$store$state$gam3 = _ctx.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.NEIGHBOURHOOD[_ctx.$store.state.gameSettingsModule.CURRENT_NEIGHBOURHOOD]) === null || _ctx$$store$state$gam3 === void 0 ? void 0 : _ctx$$store$state$gam3.need_limit) + " necessidades por bairro", 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.goToNext();
    }),
    "class": "choose-neighbourhoods-next-btn"
  }, "Próximo")])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.need_image[data-v-0c7da50b] {\r\n        height: 50px;\r\n        width: 50px;\r\n        margin: 0 auto 15px auto;\r\n        background-color: #f0f1f1;\r\n        border-radius: 50px;\r\n        overflow: hidden;\n}\n.need_image img[data-v-0c7da50b] {\r\n        width: 100%;\r\n        height: 100%;\r\n        -o-object-fit: contain;\r\n           object-fit: contain;\n}\n.choose-resources-btn[data-v-0c7da50b]{\r\n        padding-bottom:100px;\r\n        position: inherit;\r\n        bottom: 0px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_select_needs_vue_vue_type_style_index_0_id_0c7da50b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_select_needs_vue_vue_type_style_index_0_id_0c7da50b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_select_needs_vue_vue_type_style_index_0_id_0c7da50b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/select-needs.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/select-needs.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _select_needs_vue_vue_type_template_id_0c7da50b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-needs.vue?vue&type=template&id=0c7da50b&scoped=true */ "./resources/js/views/select-needs.vue?vue&type=template&id=0c7da50b&scoped=true");
/* harmony import */ var _select_needs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-needs.vue?vue&type=script&lang=js */ "./resources/js/views/select-needs.vue?vue&type=script&lang=js");
/* harmony import */ var _select_needs_vue_vue_type_style_index_0_id_0c7da50b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css */ "./resources/js/views/select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_select_needs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_select_needs_vue_vue_type_template_id_0c7da50b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0c7da50b"],['__file',"resources/js/views/select-needs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/select-needs.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/views/select-needs.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_select_needs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_select_needs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./select-needs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/select-needs.vue?vue&type=template&id=0c7da50b&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/select-needs.vue?vue&type=template&id=0c7da50b&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_select_needs_vue_vue_type_template_id_0c7da50b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_select_needs_vue_vue_type_template_id_0c7da50b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./select-needs.vue?vue&type=template&id=0c7da50b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=template&id=0c7da50b&scoped=true");


/***/ }),

/***/ "./resources/js/views/select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_select_needs_vue_vue_type_style_index_0_id_0c7da50b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/select-needs.vue?vue&type=style&index=0&id=0c7da50b&scoped=true&lang=css");


/***/ })

}]);