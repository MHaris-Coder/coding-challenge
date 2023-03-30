"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Alerts_AlertMessageType_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Alerts/AlertMessageType.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Alerts/AlertMessageType.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


var responseType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');

var closeAlert = function closeAlert() {
  responseType.value = '';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(props) {
    var STORE = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var QUESTION = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return STORE.state.gameSettingsModule.QUESTION;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      responseType.value = '';
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(function () {
      if (props !== null && props !== void 0 && props.type) responseType.value = props.type;
    });
    return {
      responseType: responseType,
      QUESTION: QUESTION,
      closeAlert: closeAlert
    };
  },
  props: {
    title: String,
    content: String,
    type: String,
    exitAlert: Number
  },
  watch: {
    'exitAlert': function exitAlert() {
      closeAlert();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Alerts/AlertMessageType.vue?vue&type=template&id=2acb8262":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Alerts/AlertMessageType.vue?vue&type=template&id=2acb8262 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "alert alert-success text-success p-2 mb-0"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "row"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-1 p-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-check-circle fa-2x"
})])], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "col-10"
};
var _hoisted_6 = {
  "class": "col-1 p-0"
};
var _hoisted_7 = {
  "class": "text-right"
};
var _hoisted_8 = {
  key: 1,
  "class": "alert alert-danger text-danger p-2 mb-0"
};
var _hoisted_9 = {
  "class": "container-fluid"
};
var _hoisted_10 = {
  "class": "row"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-1 p-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-times-circle fa-2x"
})])], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "col-10"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Evento falhado!", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "col-1 p-0"
};
var _hoisted_15 = {
  "class": "text-right"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$QUESTION, _$setup$QUESTION$ques, _$setup$QUESTION2, _$setup$QUESTION3;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["container-fluid", {
      'mt-3': $setup.responseType === 'success' || $setup.responseType === 'error'
    }])
  }, [$setup.responseType === 'success' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Recompensa de " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$QUESTION = $setup.QUESTION) === null || _$setup$QUESTION === void 0 ? void 0 : (_$setup$QUESTION$ques = _$setup$QUESTION.question_category) === null || _$setup$QUESTION$ques === void 0 ? void 0 : _$setup$QUESTION$ques.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$QUESTION2 = $setup.QUESTION) === null || _$setup$QUESTION2 === void 0 ? void 0 : _$setup$QUESTION2.success_message), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.closeAlert();
    }),
    href: "javascript:void(0);",
    title: "",
    "class": "fa fa-close text-lg"
  })])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.responseType === 'error' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$QUESTION3 = $setup.QUESTION) === null || _$setup$QUESTION3 === void 0 ? void 0 : _$setup$QUESTION3.fail_message), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.closeAlert();
    }),
    href: "javascript:void(0);",
    title: "",
    "class": "fa fa-close text-lg"
  })])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./resources/js/components/Alerts/AlertMessageType.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Alerts/AlertMessageType.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertMessageType_vue_vue_type_template_id_2acb8262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertMessageType.vue?vue&type=template&id=2acb8262 */ "./resources/js/components/Alerts/AlertMessageType.vue?vue&type=template&id=2acb8262");
/* harmony import */ var _AlertMessageType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertMessageType.vue?vue&type=script&lang=js */ "./resources/js/components/Alerts/AlertMessageType.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AlertMessageType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AlertMessageType_vue_vue_type_template_id_2acb8262__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Alerts/AlertMessageType.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Alerts/AlertMessageType.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Alerts/AlertMessageType.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertMessageType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertMessageType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AlertMessageType.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Alerts/AlertMessageType.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Alerts/AlertMessageType.vue?vue&type=template&id=2acb8262":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Alerts/AlertMessageType.vue?vue&type=template&id=2acb8262 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertMessageType_vue_vue_type_template_id_2acb8262__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AlertMessageType_vue_vue_type_template_id_2acb8262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AlertMessageType.vue?vue&type=template&id=2acb8262 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Alerts/AlertMessageType.vue?vue&type=template&id=2acb8262");


/***/ })

}]);