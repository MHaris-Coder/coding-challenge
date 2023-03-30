"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["choose-resources"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-resources.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-resources.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var StepsLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_layouts_StepsLayout_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../layouts/StepsLayout.vue */ "./resources/js/layouts/StepsLayout.vue"));
});
var RESOURCES = [];
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
    this.RESOURCES = this.$store.state.RESOURCES;
  },
  mounted: function mounted() {},
  methods: {
    selectResources: function selectResources(index, resource) {
      this.$store.commit('setResourcesInSummary', resource);
      this.$store.commit('setNeighbourhoodSelectableScreenIndex');

      if (this.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.NEIGHBOURHOOD.length == this.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.SUMMARY.length) {
        this.$store.dispatch('nextStep');
      } else {
        this.$store.commit('setManuallyCurrentScreen', 3);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-resources.vue?vue&type=template&id=2a7d2124":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-resources.vue?vue&type=template&id=2a7d2124 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "margin-bottom": "9em"
  }
};
var _hoisted_2 = {
  "class": "container-fluid choose-resources-parent-bg mb-4"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "choose-resources-title-text"
};
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = {
  "class": "container-fluid"
};
var _hoisted_7 = {
  "class": "row overflow-auto"
};
var _hoisted_8 = {
  "class": "col-xs-12 col-sm-12 col-md-12 d-flex justify-content-between"
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
  "class": "choose-resources-card-img"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Recursos", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$store$state$gam, _ctx$RESOURCES;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "choose-resources-title-bar",
    src: _ctx.baseUrl + 'images/select-needs.png'
  }, null, 8
  /* PROPS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: $props.title
  }, null, 8
  /* PROPS */
  , _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_ctx$$store$state$gam = _ctx.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.NEIGHBOURHOOD[_ctx.$store.state.gameSettingsModule.CURRENT_NEIGHBOURHOOD]) === null || _ctx$$store$state$gam === void 0 ? void 0 : _ctx$$store$state$gam.name), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [((_ctx$RESOURCES = _ctx.RESOURCES) === null || _ctx$RESOURCES === void 0 ? void 0 : _ctx$RESOURCES.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.RESOURCES, function (RESOURCE, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["choose-resources-card border", {
        'border-primary': RESOURCE.selected
      }]),
      onClick: function onClick($event) {
        return $options.selectResources(index, RESOURCE);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(RESOURCE === null || RESOURCE === void 0 ? void 0 : RESOURCE.no_of_resources), 1
    /* TEXT */
    )]), _hoisted_11], 10
    /* CLASS, PROPS */
    , _hoisted_9);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"choose-resources-card\">\r\n                        <div class=\"choose-resources-card-img\">\r\n                            <h1>0</h1>\r\n                        </div>\r\n                        <h4>Reesources</h4>\r\n                    </div>\r\n                    <div class=\"choose-resources-card\">\r\n                        <div class=\"choose-resources-card-img\">\r\n                            <h1>1</h1>\r\n                        </div>\r\n                        <h4>Reesources</h4>\r\n                    </div>\r\n                    <div class=\"choose-resources-card\">\r\n                        <div class=\"choose-resources-card-img\">\r\n                            <h1>2</h1>\r\n                        </div>\r\n                        <h4>Reesources</h4>\r\n                    </div>\r\n                    <div class=\"choose-resources-card\">\r\n                        <div class=\"choose-resources-card-img\">\r\n                            <h1>3</h1>\r\n                        </div>\r\n                        <h4>Reesources</h4>\r\n                    </div> ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"container-fluid choose-resources-btn\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                <button class=\"choose-neighbourhoods-next-btn\" @click=\"goToNext()\">Próximo</button>\r\n            </div>\r\n        </div>\r\n    </div> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/views/choose-resources.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/choose-resources.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _choose_resources_vue_vue_type_template_id_2a7d2124__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-resources.vue?vue&type=template&id=2a7d2124 */ "./resources/js/views/choose-resources.vue?vue&type=template&id=2a7d2124");
/* harmony import */ var _choose_resources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-resources.vue?vue&type=script&lang=js */ "./resources/js/views/choose-resources.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_choose_resources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_choose_resources_vue_vue_type_template_id_2a7d2124__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/choose-resources.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/choose-resources.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/views/choose-resources.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_choose_resources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_choose_resources_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./choose-resources.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-resources.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/choose-resources.vue?vue&type=template&id=2a7d2124":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/choose-resources.vue?vue&type=template&id=2a7d2124 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_choose_resources_vue_vue_type_template_id_2a7d2124__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_choose_resources_vue_vue_type_template_id_2a7d2124__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./choose-resources.vue?vue&type=template&id=2a7d2124 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-resources.vue?vue&type=template&id=2a7d2124");


/***/ })

}]);