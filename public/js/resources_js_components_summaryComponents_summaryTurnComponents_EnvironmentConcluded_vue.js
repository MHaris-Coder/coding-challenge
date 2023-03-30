"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_summaryComponents_summaryTurnComponents_EnvironmentConcluded_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var EnvironmentConcludedLoadingComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_LoadingComponents_EnvironmentConcludedLoading_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../../LoadingComponents/EnvironmentConcludedLoading.vue */ "./resources/js/components/LoadingComponents/EnvironmentConcludedLoading.vue"));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var STORE = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var QUESTION = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return STORE.state.gameSettingsModule.QUESTION;
    });
    var CORRECT_ANSWER = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return STORE.state.gameSettingsModule.ENVIRONMENT_CONCLUDED.CORRECT;
    });
    var NOT_CORRECT_ANSWER = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return STORE.state.gameSettingsModule.ENVIRONMENT_CONCLUDED.NOT_CORRECT;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      STORE.commit('setLoading', true);
      STORE.dispatch('getEnvironmentConcluded', QUESTION.value.id).then(function (resp) {
        STORE.commit('setLoading', false);
      });
    });
    return {
      CORRECT_ANSWER: CORRECT_ANSWER,
      NOT_CORRECT_ANSWER: NOT_CORRECT_ANSWER,
      QUESTION: QUESTION
    };
  },
  components: {
    EnvironmentConcludedLoadingComponent: EnvironmentConcludedLoadingComponent
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=template&id=11ef95cc&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=template&id=11ef95cc&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-11ef95cc"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "environment_concluded_container"
};
var _hoisted_2 = {
  key: 1,
  "class": "text-center w-100"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "mb-4"
};
var _hoisted_5 = {
  "class": "text-success"
};
var _hoisted_6 = {
  "class": "text-danger"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$QUESTION, _$setup$QUESTION$ques, _$setup$QUESTION2, _$setup$QUESTION2$que;

  var _component_EnvironmentConcludedLoadingComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EnvironmentConcludedLoadingComponent");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.$store.state.LOADING ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_EnvironmentConcludedLoadingComponent, {
    key: 0
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    style: {
      "width": "80px",
      "height": "80px",
      "margin-bottom": "20px",
      "border-radius": "80px"
    },
    src: _ctx.baseUrl + 'assets/questionCategories/' + ((_$setup$QUESTION = $setup.QUESTION) === null || _$setup$QUESTION === void 0 ? void 0 : (_$setup$QUESTION$ques = _$setup$QUESTION.question_category) === null || _$setup$QUESTION$ques === void 0 ? void 0 : _$setup$QUESTION$ques.icon),
    onError: _cache[0] || (_cache[0] = function (event) {
      return event.target.src = _ctx.baseUrl + 'images/placeholder.jpg';
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img style=\"width:80px; height:80px; margin-bottom:20px\" class=\"image-fluid\" :src=\"baseUrl + 'images/Desafio_pic.png'\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$QUESTION2 = $setup.QUESTION) === null || _$setup$QUESTION2 === void 0 ? void 0 : (_$setup$QUESTION2$que = _$setup$QUESTION2.question_category) === null || _$setup$QUESTION2$que === void 0 ? void 0 : _$setup$QUESTION2$que.title) + " Concluído!", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Respostas corretas: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.CORRECT_ANSWER), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Respostas incorretas: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.NOT_CORRECT_ANSWER), 1
  /* TEXT */
  )])]))]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.environment_concluded_container[data-v-11ef95cc] {\r\n        background-color: white;\r\n        min-height: 85vh;\r\n        padding-top: 18vh;\r\n        /* display: flex;\r\n        align-items: center; */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EnvironmentConcluded_vue_vue_type_style_index_0_id_11ef95cc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EnvironmentConcluded_vue_vue_type_style_index_0_id_11ef95cc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EnvironmentConcluded_vue_vue_type_style_index_0_id_11ef95cc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EnvironmentConcluded_vue_vue_type_template_id_11ef95cc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnvironmentConcluded.vue?vue&type=template&id=11ef95cc&scoped=true */ "./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=template&id=11ef95cc&scoped=true");
/* harmony import */ var _EnvironmentConcluded_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnvironmentConcluded.vue?vue&type=script&lang=js */ "./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=script&lang=js");
/* harmony import */ var _EnvironmentConcluded_vue_vue_type_style_index_0_id_11ef95cc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css */ "./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_EnvironmentConcluded_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EnvironmentConcluded_vue_vue_type_template_id_11ef95cc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-11ef95cc"],['__file',"resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EnvironmentConcluded_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EnvironmentConcluded_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EnvironmentConcluded.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=template&id=11ef95cc&scoped=true":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=template&id=11ef95cc&scoped=true ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EnvironmentConcluded_vue_vue_type_template_id_11ef95cc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EnvironmentConcluded_vue_vue_type_template_id_11ef95cc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EnvironmentConcluded.vue?vue&type=template&id=11ef95cc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=template&id=11ef95cc&scoped=true");


/***/ }),

/***/ "./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EnvironmentConcluded_vue_vue_type_style_index_0_id_11ef95cc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/EnvironmentConcluded.vue?vue&type=style&index=0&id=11ef95cc&scoped=true&lang=css");


/***/ })

}]);