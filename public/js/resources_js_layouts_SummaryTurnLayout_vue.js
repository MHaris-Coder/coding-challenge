"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layouts_SummaryTurnLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/SummaryTurnLayout.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/SummaryTurnLayout.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  setup: function setup() {
    return {};
  },
  mounted: function mounted() {},
  methods: {
    checkAllowHeaderOnScreen: function checkAllowHeaderOnScreen() {
      return this.$store.state.gameSettingsModule.ALLOW_SUMMARY_HEADERS_ON_SCREEN.includes(this.$store.state.gameSettingsModule.CURRENT_SUMMARY_SCREEN);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/SummaryTurnLayout.vue?vue&type=template&id=3b556fce":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/SummaryTurnLayout.vue?vue&type=template&id=3b556fce ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div v-if=\"checkAllowHeaderOnScreen()\" class=\"container-fluid game-setting-head-parent-bg\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n                <div class=\"parent-div d-flex\">\r\n                    \r\n                    <div class=\"close-icon\">\r\n                        <img :src=\"baseUrl + 'images/header-icons/back-arrow.png'\" />    \r\n                    </div>\r\n                        \r\n                    <div class=\"text-on-header\">\r\n                        <h2>Match 01</h2>\r\n                        <p>{{$store.state.gameSettingsModule.CURRENT_TURN}} turn</p>\r\n                    </div>\r\n                    <div class=\"blank-div\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/layouts/SummaryTurnLayout.vue":
/*!****************************************************!*\
  !*** ./resources/js/layouts/SummaryTurnLayout.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SummaryTurnLayout_vue_vue_type_template_id_3b556fce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SummaryTurnLayout.vue?vue&type=template&id=3b556fce */ "./resources/js/layouts/SummaryTurnLayout.vue?vue&type=template&id=3b556fce");
/* harmony import */ var _SummaryTurnLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SummaryTurnLayout.vue?vue&type=script&lang=js */ "./resources/js/layouts/SummaryTurnLayout.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SummaryTurnLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SummaryTurnLayout_vue_vue_type_template_id_3b556fce__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/layouts/SummaryTurnLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/layouts/SummaryTurnLayout.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/layouts/SummaryTurnLayout.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryTurnLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryTurnLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SummaryTurnLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/SummaryTurnLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/layouts/SummaryTurnLayout.vue?vue&type=template&id=3b556fce":
/*!**********************************************************************************!*\
  !*** ./resources/js/layouts/SummaryTurnLayout.vue?vue&type=template&id=3b556fce ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryTurnLayout_vue_vue_type_template_id_3b556fce__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryTurnLayout_vue_vue_type_template_id_3b556fce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SummaryTurnLayout.vue?vue&type=template&id=3b556fce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/SummaryTurnLayout.vue?vue&type=template&id=3b556fce");


/***/ })

}]);