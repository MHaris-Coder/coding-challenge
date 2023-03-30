"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["choose-players"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-no-of-players.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-no-of-players.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var StepsLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_layouts_StepsLayout_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../layouts/StepsLayout.vue */ "./resources/js/layouts/StepsLayout.vue"));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    StepsLayout: StepsLayout
  },
  setup: function setup() {
    return {};
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-no-of-players.vue?vue&type=template&id=6b383e91":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-no-of-players.vue?vue&type=template&id=6b383e91 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "game-setting-container"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "game-setting-card-row"
};
var _hoisted_4 = ["onClick"];
var _hoisted_5 = {
  "class": "game-settings-card-image"
};
var _hoisted_6 = {
  "class": "game-settings-card-tag"
};
var _hoisted_7 = {
  "class": "game-settings-card-tag-span"
};
var _hoisted_8 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$store, _ctx$$store$state, _ctx$$store$state$NO_, _ctx$$store2, _ctx$$store2$state;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <StepsLayout \r\n        :step=\"2\" \r\n        :title=\"'Manual Setting'\" \r\n        :subTitle=\"'Choose number of players.'\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((_ctx$$store = _ctx.$store) === null || _ctx$$store === void 0 ? void 0 : (_ctx$$store$state = _ctx$$store.state) === null || _ctx$$store$state === void 0 ? void 0 : (_ctx$$store$state$NO_ = _ctx$$store$state.NO_OF_PLAYERS) === null || _ctx$$store$state$NO_ === void 0 ? void 0 : _ctx$$store$state$NO_.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_ctx$$store2 = _ctx.$store) === null || _ctx$$store2 === void 0 ? void 0 : (_ctx$$store2$state = _ctx$$store2.state) === null || _ctx$$store2$state === void 0 ? void 0 : _ctx$$store2$state.NO_OF_PLAYERS, function (NOOFPLAYER, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": "game-setting-card",
      onClick: function onClick($event) {
        return _ctx.$store.dispatch('nextStep', {
          noOfPlayer: NOOFPLAYER === null || NOOFPLAYER === void 0 ? void 0 : NOOFPLAYER.players,
          gameSetting: _ctx.$store.state.gameSettingsModule.FORM_GAME_SETTINGS.GAME_SETTING
        });
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(NOOFPLAYER === null || NOOFPLAYER === void 0 ? void 0 : NOOFPLAYER.noOfPlayerPercentage) + "%", 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "image-fluid",
      src: _ctx.baseUrl + 'images/players-icon.png'
    }, null, 8
    /* PROPS */
    , _hoisted_8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(NOOFPLAYER === null || NOOFPLAYER === void 0 ? void 0 : NOOFPLAYER.players) + " jogadores", 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_4);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"game-setting-card\">\r\n                                <router-link to=\"/choose-neighbourhoods\">\r\n                                <div class=\"game-settings-card-image\">\r\n                                    <div class=\"game-settings-card-tag\">\r\n                                        <span class=\"game-settings-card-tag-span\">0%</span>\r\n                                    </div>\r\n                                    <img class=\"image-fluid\" :src=\"baseUrl + 'images/players-icon.png'\">\r\n                                </div>\r\n                                <h6>2 Players</h6>\r\n                            </router-link>\r\n                            </div>\r\n                            <div class=\"game-setting-card\">\r\n                                <router-link to=\"/choose-neighbourhoods\">\r\n                                <div class=\"game-settings-card-image\">\r\n                                    <div class=\"game-settings-card-tag\">\r\n                                        <span class=\"game-settings-card-tag-span\">0%</span>\r\n                                    </div>\r\n                                    <img class=\"image-fluid\" :src=\"baseUrl + 'images/players-icon.png'\">\r\n                                </div>\r\n                                <h6>3 Players</h6>\r\n                            </router-link>\r\n                            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"d-flex justify-content-around align-items-center mt-4\">\r\n                            <div class=\"game-setting-card\">\r\n                                <router-link to=\"/choose-neighbourhoods\">\r\n                                <div class=\"game-settings-card-image\">\r\n                                    <div class=\"game-settings-card-tag\">\r\n                                        <span class=\"game-settings-card-tag-span\">0%</span>\r\n                                    </div>\r\n                                    <img class=\"image-fluid\" :src=\"baseUrl + 'images/players-icon.png'\">\r\n                                </div>\r\n                                <h6>4 Players</h6>\r\n                            </router-link>\r\n                            </div>\r\n                        </div> ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </StepsLayout> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/views/choose-no-of-players.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/choose-no-of-players.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _choose_no_of_players_vue_vue_type_template_id_6b383e91__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choose-no-of-players.vue?vue&type=template&id=6b383e91 */ "./resources/js/views/choose-no-of-players.vue?vue&type=template&id=6b383e91");
/* harmony import */ var _choose_no_of_players_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose-no-of-players.vue?vue&type=script&lang=js */ "./resources/js/views/choose-no-of-players.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_choose_no_of_players_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_choose_no_of_players_vue_vue_type_template_id_6b383e91__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/choose-no-of-players.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/choose-no-of-players.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/choose-no-of-players.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_choose_no_of_players_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_choose_no_of_players_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./choose-no-of-players.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-no-of-players.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/choose-no-of-players.vue?vue&type=template&id=6b383e91":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/choose-no-of-players.vue?vue&type=template&id=6b383e91 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_choose_no_of_players_vue_vue_type_template_id_6b383e91__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_choose_no_of_players_vue_vue_type_template_id_6b383e91__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./choose-no-of-players.vue?vue&type=template&id=6b383e91 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/choose-no-of-players.vue?vue&type=template&id=6b383e91");


/***/ })

}]);