"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_modals_GameTurnModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/GameTurnModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/GameTurnModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  setup: function setup() {
    var STORE = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var QUESTION = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return STORE.state.gameSettingsModule.QUESTION;
    });
    return {
      QUESTION: QUESTION
    };
  },
  mounted: function mounted() {},
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['letsPlay']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/GameTurnModal.vue?vue&type=template&id=317cb3a0":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/GameTurnModal.vue?vue&type=template&id=317cb3a0 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "modal fade",
  id: "playquiz",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
};
var _hoisted_2 = {
  "class": "modal-dialog m-0",
  role: "document"
};
var _hoisted_3 = {
  "class": "modal-content"
};
var _hoisted_4 = {
  "class": "modal-body"
};
var _hoisted_5 = {
  "class": "row mb-3"
};
var _hoisted_6 = {
  "class": "col-3"
};
var _hoisted_7 = {
  "class": "col-9"
};
var _hoisted_8 = {
  "class": "mb-2"
};
var _hoisted_9 = {
  "class": "mb-2"
};
var _hoisted_10 = {
  key: 0,
  "class": "parent-modal-play"
};
var _hoisted_11 = {
  "class": "d-flex mb-3"
};
var _hoisted_12 = {
  "class": "modal-play-icon mr-2"
};
var _hoisted_13 = {
  "class": "img-container"
};
var _hoisted_14 = ["src"];
var _hoisted_15 = {
  "class": "modal-play-text"
};
var _hoisted_16 = {
  "class": "text-left"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-left ml-0"
}, "Adicionar um voto a um projeto que foi iniciado", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "modal-play-btn"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$QUESTION, _$setup$QUESTION$ques, _$setup$QUESTION2, _$setup$QUESTION2$que;

  var _component_free_style_shimmer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("free-style-shimmer");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_free_style_shimmer, {
    "is-loading": _ctx.$store.state.LOADING,
    height: "50px",
    width: "50px",
    color: "#d5e1e5",
    "border-radius": "50px"
  }, null, 8
  /* PROPS */
  , ["is-loading"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_free_style_shimmer, {
    "is-loading": _ctx.$store.state.LOADING,
    height: "15px",
    width: "60%",
    color: "#d5e1e5"
  }, null, 8
  /* PROPS */
  , ["is-loading"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_free_style_shimmer, {
    "is-loading": _ctx.$store.state.LOADING,
    height: "15px",
    width: "65%",
    color: "#d5e1e5"
  }, null, 8
  /* PROPS */
  , ["is-loading"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_free_style_shimmer, {
    "is-loading": _ctx.$store.state.LOADING,
    height: "50px",
    width: "100%",
    color: "#d5e1e5"
  }, null, 8
  /* PROPS */
  , ["is-loading"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_free_style_shimmer, {
    "is-loading": _ctx.$store.state.LOADING,
    height: "50px",
    width: "100%",
    color: "#d5e1e5"
  }, null, 8
  /* PROPS */
  , ["is-loading"])])]), !_ctx.$store.state.LOADING ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"row mb-3\" style=\"align-items: center;\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-3 pr-0\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.baseUrl + 'assets/questionCategories/' + ((_$setup$QUESTION = $setup.QUESTION) === null || _$setup$QUESTION === void 0 ? void 0 : (_$setup$QUESTION$ques = _$setup$QUESTION.question_category) === null || _$setup$QUESTION$ques === void 0 ? void 0 : _$setup$QUESTION$ques.icon),
    onError: _cache[0] || (_cache[0] = function (event) {
      return event.target.src = _ctx.baseUrl + 'images/placeholder.jpg';
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_14)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img style=\"width:50px; height:50px;\" class=\"image-fluid\" :src=\"baseUrl + 'images/Desafio_pic.png'\" />   ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-9\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_16, "Recompensa de " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$QUESTION2 = $setup.QUESTION) === null || _$setup$QUESTION2 === void 0 ? void 0 : (_$setup$QUESTION2$que = _$setup$QUESTION2.question_category) === null || _$setup$QUESTION2$que === void 0 ? void 0 : _$setup$QUESTION2$que.title), 1
  /* TEXT */
  ), _hoisted_17]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('startQuiz');
    }),
    "class": "choose-neighbourhoods-next-btn",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, "Arriscar e responder"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$emit('skipTurn');
    }),
    "class": "modal-play-cancel-btn",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, "Passar e continuar a jogar")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
}

/***/ }),

/***/ "./resources/js/components/modals/GameTurnModal.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/modals/GameTurnModal.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameTurnModal_vue_vue_type_template_id_317cb3a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameTurnModal.vue?vue&type=template&id=317cb3a0 */ "./resources/js/components/modals/GameTurnModal.vue?vue&type=template&id=317cb3a0");
/* harmony import */ var _GameTurnModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameTurnModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/GameTurnModal.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_GameTurnModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GameTurnModal_vue_vue_type_template_id_317cb3a0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/GameTurnModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/modals/GameTurnModal.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/modals/GameTurnModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameTurnModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameTurnModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameTurnModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/GameTurnModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/modals/GameTurnModal.vue?vue&type=template&id=317cb3a0":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/modals/GameTurnModal.vue?vue&type=template&id=317cb3a0 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameTurnModal_vue_vue_type_template_id_317cb3a0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_GameTurnModal_vue_vue_type_template_id_317cb3a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./GameTurnModal.vue?vue&type=template&id=317cb3a0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/GameTurnModal.vue?vue&type=template&id=317cb3a0");


/***/ })

}]);