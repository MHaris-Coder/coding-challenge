"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_summaryComponents_summaryTurnComponents_GameSummary_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var AlertMessageTypeComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Alerts_AlertMessageType_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../../Alerts/AlertMessageType.vue */ "./resources/js/components/Alerts/AlertMessageType.vue"));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(props) {
    var eventResponse = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var isExitAlert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var alertNeed = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');

    var activeAlertFunc = function activeAlertFunc(payload) {
      eventResponse.value = payload;
    };

    var exitAlertFunc = function exitAlertFunc() {
      isExitAlert.value++;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      activeAlertFunc(props.alertMessageType);
    });
    return {
      //Variables
      eventResponse: eventResponse,
      isExitAlert: isExitAlert,
      alertNeed: alertNeed,
      //Methods
      activeAlertFunc: activeAlertFunc,
      exitAlertFunc: exitAlertFunc
    };
  },
  props: {
    summary: Object,
    alertMessageType: String,
    exitAlertOnSkipTurn: Boolean
  },
  components: {
    AlertMessageTypeComponent: AlertMessageTypeComponent
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=template&id=14d07570&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=template&id=14d07570&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-14d07570"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container-fluid game-setting-parent-bg"
};
var _hoisted_2 = {
  "class": "row pb-5"
};
var _hoisted_3 = {
  "class": "col-xs-12 col-sm-12 col-md-12"
};
var _hoisted_4 = {
  "class": "game-summary"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Resumo do jogo", -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "summary-card-heading"
};
var _hoisted_7 = {
  "class": "mb-0"
};
var _hoisted_8 = {
  "class": "neighbourhood_image"
};
var _hoisted_9 = ["src"];
var _hoisted_10 = {
  "class": "d-flex summary-card-details"
};
var _hoisted_11 = {
  "class": "summary-card-profile-image"
};
var _hoisted_12 = ["src"];
var _hoisted_13 = {
  "class": "summary-card-profite-name"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$summary, _$props$summary2;

  var _component_AlertMessageTypeComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AlertMessageTypeComponent");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AlertMessageTypeComponent, {
    type: $setup.eventResponse,
    exitAlert: $setup.isExitAlert,
    need: $setup.alertNeed
  }, null, 8
  /* PROPS */
  , ["type", "exitAlert", "need"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button @click=\"activeAlertFunc('success')\">Success Alert Message</button>\r\n        <button @click=\"activeAlertFunc('error')\">Success Alert Message</button> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button @click=\"exitAlertFunc()\">exitAlertFunc</button> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Total " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$summary = $props.summary) === null || _$props$summary === void 0 ? void 0 : _$props$summary.length), 1
  /* TEXT */
  )]), ((_$props$summary2 = $props.summary) === null || _$props$summary2 === void 0 ? void 0 : _$props$summary2.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.summary, function (_summary, index) {
    var _summary$resource, _summary$neighbourhoo, _summary$game_need;

    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["summary-card", {
        'mt-4': index != 0
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_summary === null || _summary === void 0 ? void 0 : _summary.neighbourhood.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_summary === null || _summary === void 0 ? void 0 : (_summary$resource = _summary.resource) === null || _summary$resource === void 0 ? void 0 : _summary$resource.no_of_resources) + " Recursos", 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img class=\"w-100\" :src=\"baseUrl + 'images/6.png'\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: _ctx.baseUrl + 'assets/neighbourhoods/' + (_summary === null || _summary === void 0 ? void 0 : (_summary$neighbourhoo = _summary.neighbourhood) === null || _summary$neighbourhoo === void 0 ? void 0 : _summary$neighbourhoo.icon),
      onError: _cache[0] || (_cache[0] = function (event) {
        return event.target.src = _ctx.baseUrl + 'images/placeholder.jpg';
      })
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_9)]), (_summary === null || _summary === void 0 ? void 0 : (_summary$game_need = _summary.game_need) === null || _summary$game_need === void 0 ? void 0 : _summary$game_need.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_summary === null || _summary === void 0 ? void 0 : _summary.game_need, function (_need) {
      var _need$need, _need$need2;

      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img class=\"image-fluid\" :src=\"baseUrl + 'images/needs-icons/5.png'\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.baseUrl + 'assets/needs/' + (_need === null || _need === void 0 ? void 0 : (_need$need = _need.need) === null || _need$need === void 0 ? void 0 : _need$need.icon),
        onError: _cache[1] || (_cache[1] = function (event) {
          return event.target.src = _ctx.baseUrl + 'images/placeholder.jpg';
        })
      }, null, 40
      /* PROPS, HYDRATE_EVENTS */
      , _hoisted_12)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_need === null || _need === void 0 ? void 0 : (_need$need2 = _need.need) === null || _need$need2 === void 0 ? void 0 : _need$need2.name), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"summary-card-likes d-flex ml-auto\">\r\n                                        <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>\r\n                                        <h6>{{_need?.project_like_count}}</h6>\r\n                                    </div> ")]);
    }), 256
    /* UNKEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.neighbourhood_image[data-v-14d07570] {\r\n        height: 100px;\n}\n.neighbourhood_image img[data-v-14d07570] {\r\n        width: 100%;\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameSummary_vue_vue_type_style_index_0_id_14d07570_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameSummary_vue_vue_type_style_index_0_id_14d07570_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameSummary_vue_vue_type_style_index_0_id_14d07570_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameSummary_vue_vue_type_template_id_14d07570_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameSummary.vue?vue&type=template&id=14d07570&scoped=true */ "./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=template&id=14d07570&scoped=true");
/* harmony import */ var _GameSummary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameSummary.vue?vue&type=script&lang=js */ "./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=script&lang=js");
/* harmony import */ var _GameSummary_vue_vue_type_style_index_0_id_14d07570_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css */ "./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_GameSummary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GameSummary_vue_vue_type_template_id_14d07570_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-14d07570"],['__file',"resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameSummary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameSummary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameSummary.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=template&id=14d07570&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=template&id=14d07570&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameSummary_vue_vue_type_template_id_14d07570_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameSummary_vue_vue_type_template_id_14d07570_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameSummary.vue?vue&type=template&id=14d07570&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=template&id=14d07570&scoped=true");


/***/ }),

/***/ "./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameSummary_vue_vue_type_style_index_0_id_14d07570_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/summaryTurnComponents/GameSummary.vue?vue&type=style&index=0&id=14d07570&scoped=true&lang=css");


/***/ })

}]);