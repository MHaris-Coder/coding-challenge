"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RankingComponents_Tabs_Match_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var STORE = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var MATCHES = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _STORE$state$rankings;

      return (_STORE$state$rankings = STORE.state.rankingsModule.RANKING) === null || _STORE$state$rankings === void 0 ? void 0 : _STORE$state$rankings.matches;
    });
    return {
      MATCHES: MATCHES
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=template&id=829b6f3c&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=template&id=829b6f3c&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-829b6f3c"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container-fluid cards-container"
};
var _hoisted_2 = {
  "class": "row container-padding-control"
};
var _hoisted_3 = {
  "class": "col-12 single-card-parent"
};
var _hoisted_4 = {
  "class": "container"
};
var _hoisted_5 = {
  "class": "row card-row"
};
var _hoisted_6 = {
  "class": "col-3 profile-image"
};
var _hoisted_7 = ["src"];
var _hoisted_8 = {
  "class": "col-7 profile-text"
};
var _hoisted_9 = {
  "class": "col-2 profile-star-rating"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-star rating-numb-icon",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$MATCHES;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((_$setup$MATCHES = $setup.MATCHES) === null || _$setup$MATCHES === void 0 ? void 0 : _$setup$MATCHES.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.MATCHES, function (MATCH) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "w-100",
      src: _ctx.baseUrl + 'images/profile-icon.png'
    }, null, 8
    /* PROPS */
    , _hoisted_7)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(MATCH === null || MATCH === void 0 ? void 0 : MATCH.organization_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "#" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(MATCH === null || MATCH === void 0 ? void 0 : MATCH.rank) + " / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(MATCH === null || MATCH === void 0 ? void 0 : MATCH.total_games) + " jogos", 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(MATCH === null || MATCH === void 0 ? void 0 : MATCH.score), 1
    /* TEXT */
    )])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-12 single-card-parent\">\r\n                <div class=\"container\">\r\n                    <div class=\"row card-row\">\r\n                        <div class=\"col-3 profile-image\">\r\n                            <img class=\"w-100\" :src=\"baseUrl + 'images/profile-icon.png'\" />\r\n                        </div>\r\n                        <div class=\"col-7 profile-text\">\r\n                            <h2>Overall</h2>\r\n                            <h4>Organization name</h4>\r\n                        </div>\r\n                        <div class=\"col-2 profile-star-rating\">\r\n                            <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                            <h4>52</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 single-card-parent\">\r\n                <div class=\"container\">\r\n                    <div class=\"row card-row\">\r\n                        <div class=\"col-3 profile-image\">\r\n                            <img class=\"w-100\" :src=\"baseUrl + 'images/profile-icon.png'\" />\r\n                        </div>\r\n                        <div class=\"col-7 profile-text\">\r\n                            <h2>Game</h2>\r\n                            <h4>Organization name</h4>\r\n                        </div>\r\n                        <div class=\"col-2 profile-star-rating\">\r\n                            <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                            <h4>{{22}}</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 single-card-parent\">\r\n                <div class=\"container\">\r\n                    <div class=\"row card-row\">\r\n                        <div class=\"col-3 profile-image\">\r\n                            <img class=\"w-100\" :src=\"baseUrl + 'images/profile-icon.png'\" />\r\n                        </div>\r\n                        <div class=\"col-7 profile-text\">\r\n                            <h2>Challenge</h2>\r\n                            <h4>Organization name</h4>\r\n                        </div>\r\n                        <div class=\"col-2 profile-star-rating\">\r\n                            <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                            <h4>10</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> ")])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.dashboard-heading[data-v-829b6f3c] {\r\n    font-size: 19px;\r\n    font-weight: 900;\r\n    letter-spacing: 1px;\n}\n.dashboard-link[data-v-829b6f3c] {\r\n    color: #88cfde;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    letter-spacing: 1px;\n}\n.cards-container[data-v-829b6f3c] {\r\n    border: 1px solid rgba(0, 0, 0, .125);\r\n    border-bottom: none;\r\n    border-radius: 5px;\n}\n.card-row[data-v-829b6f3c]{\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 5px;\n}\n.single-card-parent[data-v-829b6f3c] {\r\n    padding: 5px 0;\n}\n.single-card-parent .container[data-v-829b6f3c]{\r\n    margin: 0;\r\n    max-width: 100%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 12px;\n}\n.profile-image[data-v-829b6f3c] {\r\n    max-width: 60px;\r\n    padding: 0 0 0 7px;\n}\n.profile-text[data-v-829b6f3c] {\r\npadding: 0 0 0 7px;\n}\n.profile-text h2[data-v-829b6f3c]{\r\n    font-size: 17px;\r\n    font-weight: 900;\n}\n.profile-text h4[data-v-829b6f3c]{\r\n    font-size: 15px;\r\n    font-weight: 100;\r\n    margin: 0;\n}\n.rating-numb-icon[data-v-829b6f3c]{\r\n    color:#fdb714;\r\n    font-size: 12px;\n}\n.profile-star-rating[data-v-829b6f3c]{\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border: 1px solid #e2e8f0;\r\n    padding: 2px 5px;\r\n    border-radius: 100px;\n}\n.profile-star-rating h4[data-v-829b6f3c]{\r\n    font-size: 15px;\r\n    font-weight: 100;\r\n    margin: 0;\n}\n.container-padding-control[data-v-829b6f3c]{\r\n    padding: 20px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Match_vue_vue_type_style_index_0_id_829b6f3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Match_vue_vue_type_style_index_0_id_829b6f3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Match_vue_vue_type_style_index_0_id_829b6f3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/RankingComponents/Tabs/Match.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/RankingComponents/Tabs/Match.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Match_vue_vue_type_template_id_829b6f3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Match.vue?vue&type=template&id=829b6f3c&scoped=true */ "./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=template&id=829b6f3c&scoped=true");
/* harmony import */ var _Match_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Match.vue?vue&type=script&lang=js */ "./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=script&lang=js");
/* harmony import */ var _Match_vue_vue_type_style_index_0_id_829b6f3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css */ "./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Match_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Match_vue_vue_type_template_id_829b6f3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-829b6f3c"],['__file',"resources/js/components/RankingComponents/Tabs/Match.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Match_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Match_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Match.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=template&id=829b6f3c&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=template&id=829b6f3c&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Match_vue_vue_type_template_id_829b6f3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Match_vue_vue_type_template_id_829b6f3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Match.vue?vue&type=template&id=829b6f3c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=template&id=829b6f3c&scoped=true");


/***/ }),

/***/ "./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Match_vue_vue_type_style_index_0_id_829b6f3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/RankingComponents/Tabs/Match.vue?vue&type=style&index=0&id=829b6f3c&scoped=true&lang=css");


/***/ })

}]);