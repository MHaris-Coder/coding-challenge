"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["game-settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
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
  methods: {
    nextScreen: function nextScreen(GAME_SETTING) {
      this.$store.dispatch('nextStep', {
        gameSetting: GAME_SETTING === null || GAME_SETTING === void 0 ? void 0 : GAME_SETTING.slug
      });
      this.$store.commit('setGameSettingTitles', {
        playerTitle: GAME_SETTING === null || GAME_SETTING === void 0 ? void 0 : GAME_SETTING.name
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var StepsLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_layouts_StepsLayout_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../layouts/StepsLayout.vue */ "./resources/js/layouts/StepsLayout.vue"));
});
var SummaryTurnLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_layouts_SummaryTurnLayout_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../layouts/SummaryTurnLayout.vue */ "./resources/js/layouts/SummaryTurnLayout.vue"));
});
var GameSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./game-settings.vue */ "./resources/js/views/game-settings.vue"));
});
var NoOfPlayers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "choose-players").then(__webpack_require__.bind(__webpack_require__, /*! ./choose-no-of-players.vue */ "./resources/js/views/choose-no-of-players.vue"));
});
var Neighbourhoods = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "choose-neighbourhoods").then(__webpack_require__.bind(__webpack_require__, /*! ./choose-neighbourhoods.vue */ "./resources/js/views/choose-neighbourhoods.vue"));
});
var Needs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "select-needs").then(__webpack_require__.bind(__webpack_require__, /*! ./select-needs.vue */ "./resources/js/views/select-needs.vue"));
});
var Resources = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "choose-resources").then(__webpack_require__.bind(__webpack_require__, /*! ./choose-resources.vue */ "./resources/js/views/choose-resources.vue"));
});
var Result = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "result").then(__webpack_require__.bind(__webpack_require__, /*! ./Result.vue */ "./resources/js/views/Result.vue"));
});
var SummaryTurnComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_summaryComponents_SummaryTurnComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../components/summaryComponents/SummaryTurnComponent.vue */ "./resources/js/components/summaryComponents/SummaryTurnComponent.vue"));
});
var SummarySettingScoreComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_summaryComponents_SummarySettingScoreComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../components/summaryComponents/SummarySettingScoreComponent.vue */ "./resources/js/components/summaryComponents/SummarySettingScoreComponent.vue"));
});
var SummaryNeedProjectComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_summaryComponents_SummaryNeedProjectComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../components/summaryComponents/SummaryNeedProjectComponent.vue */ "./resources/js/components/summaryComponents/SummaryNeedProjectComponent.vue"));
});
var SummaryScoreComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_summaryComponents_SummaryScoreComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../components/summaryComponents/SummaryScoreComponent.vue */ "./resources/js/components/summaryComponents/SummaryScoreComponent.vue"));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    StepsLayout: StepsLayout,
    SummaryTurnLayout: SummaryTurnLayout,
    GameSettings: GameSettings,
    NoOfPlayers: NoOfPlayers,
    Neighbourhoods: Neighbourhoods,
    Needs: Needs,
    Resources: Resources,
    Result: Result,
    SummaryTurnComponent: SummaryTurnComponent,
    SummarySettingScoreComponent: SummarySettingScoreComponent,
    SummaryNeedProjectComponent: SummaryNeedProjectComponent,
    SummaryScoreComponent: SummaryScoreComponent
  },
  setup: function setup() {
    return {};
  },
  mounted: function mounted() {
    if (this.USER_GAME !== null) {
      var _this$USER_GAME;

      if ((_this$USER_GAME = this.USER_GAME) !== null && _this$USER_GAME !== void 0 && _this$USER_GAME.is_finish_turn) {
        this.$store.commit('setNextSummaryScreen', {
          screen: 1
        });
      }
    }
  },
  methods: {},
  watch: {
    '$store.state.gameSettingsModule.CURRENT_SCREEN': function $storeStateGameSettingsModuleCURRENT_SCREEN(value) {
      console.log('value', value);
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    USER_GAME: function USER_GAME(state) {
      return state.gameSettingsModule.USER_GAME;
    },
    CURRENT_SCREEN: function CURRENT_SCREEN(state) {
      return state.gameSettingsModule.CURRENT_SCREEN;
    },
    SCREEN_INFO: function SCREEN_INFO(state) {
      return state.gameSettingsModule.SCREEN_INFO;
    },
    CURRENT_SUMMARY_SCREEN: function CURRENT_SUMMARY_SCREEN(state) {
      return state.gameSettingsModule.CURRENT_SUMMARY_SCREEN;
    }
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=template&id=5a137ba2":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=template&id=5a137ba2 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
  var _ctx$$store, _ctx$$store$state, _ctx$$store$state$GAM, _ctx$$store2, _ctx$$store2$state;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <StepsLayout \r\n        :step=\"1\" \r\n        :title=\"'Que tipo de setup pretendido?'\" \r\n        :subTitle=\"'You can pick one'\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((_ctx$$store = _ctx.$store) === null || _ctx$$store === void 0 ? void 0 : (_ctx$$store$state = _ctx$$store.state) === null || _ctx$$store$state === void 0 ? void 0 : (_ctx$$store$state$GAM = _ctx$$store$state.GAME_SETTINGS) === null || _ctx$$store$state$GAM === void 0 ? void 0 : _ctx$$store$state$GAM.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_ctx$$store2 = _ctx.$store) === null || _ctx$$store2 === void 0 ? void 0 : (_ctx$$store2$state = _ctx$$store2.state) === null || _ctx$$store2$state === void 0 ? void 0 : _ctx$$store2$state.GAME_SETTINGS, function (GAME_SETTING) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "game-setting-card",
      onClick: function onClick($event) {
        return $options.nextScreen(GAME_SETTING);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(GAME_SETTING === null || GAME_SETTING === void 0 ? void 0 : GAME_SETTING.gameSettingCount) + "%", 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "image-fluid",
      src: _ctx.baseUrl + 'images/game-settings-icons/random-icon.png'
    }, null, 8
    /* PROPS */
    , _hoisted_8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(GAME_SETTING === null || GAME_SETTING === void 0 ? void 0 : GAME_SETTING.name), 1
    /* TEXT */
    )], 8
    /* PROPS */
    , _hoisted_4);
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"game-setting-card\">\r\n                            <div class=\"game-settings-card-image\">\r\n                                <div class=\"game-settings-card-tag\">\r\n                                    <span class=\"game-settings-card-tag-span\">0%</span>\r\n                                </div>\r\n                                <h6>Random Setting</h6>\r\n                            </router-link>\r\n                        </div>\r\n                        <div class=\"game-setting-card\">\r\n                            <router-link to=\"/choose-players\">\r\n                                <div class=\"game-settings-card-image\">\r\n                                    <div class=\"game-settings-card-tag\">\r\n                                        <span class=\"game-settings-card-tag-span\">15%</span>\r\n                                    </div>\r\n                                    <img class=\"image-fluid\"\r\n                                        :src=\"baseUrl + 'images/game-settings-icons/manual-icon.png'\">\r\n                                </div>\r\n                                <img class=\"image-fluid\" :src=\"baseUrl + 'images/game-settings-icons/manual-icon.png'\">\r\n                            </div>\r\n                            <h6>Manual Setting</h6>\r\n                        </div> ")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </StepsLayout> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=template&id=62549dba&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=template&id=62549dba&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-62549dba"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "main_container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$SCREEN_INFO$_ctx, _ctx$SCREEN_INFO$_ctx2;

  var _component_GameSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GameSettings");

  var _component_NoOfPlayers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NoOfPlayers");

  var _component_Neighbourhoods = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Neighbourhoods");

  var _component_Needs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Needs");

  var _component_Resources = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Resources");

  var _component_Result = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Result");

  var _component_StepsLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StepsLayout");

  var _component_SummaryTurnComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SummaryTurnComponent");

  var _component_SummarySettingScoreComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SummarySettingScoreComponent");

  var _component_SummaryNeedProjectComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SummaryNeedProjectComponent");

  var _component_SummaryScoreComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SummaryScoreComponent");

  var _component_SummaryTurnLayout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SummaryTurnLayout");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.USER_GAME == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_StepsLayout, {
    key: 0,
    step: _ctx.CURRENT_SCREEN + 1,
    title: (_ctx$SCREEN_INFO$_ctx = _ctx.SCREEN_INFO[_ctx.CURRENT_SCREEN]) === null || _ctx$SCREEN_INFO$_ctx === void 0 ? void 0 : _ctx$SCREEN_INFO$_ctx.title,
    subTitle: (_ctx$SCREEN_INFO$_ctx2 = _ctx.SCREEN_INFO[_ctx.CURRENT_SCREEN]) === null || _ctx$SCREEN_INFO$_ctx2 === void 0 ? void 0 : _ctx$SCREEN_INFO$_ctx2.subTitle
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _ctx$SCREEN_INFO$_ctx3, _ctx$SCREEN_INFO$_ctx4, _ctx$SCREEN_INFO$_ctx5, _ctx$SCREEN_INFO$_ctx6, _ctx$SCREEN_INFO$_ctx7, _ctx$SCREEN_INFO$_ctx8;

      return [_ctx.CURRENT_SCREEN === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_GameSettings, {
        key: 0
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.CURRENT_SCREEN === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NoOfPlayers, {
        key: 1
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.CURRENT_SCREEN === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Neighbourhoods, {
        key: 2
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.CURRENT_SCREEN === 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Needs, {
        key: 3,
        title: (_ctx$SCREEN_INFO$_ctx3 = _ctx.SCREEN_INFO[_ctx.CURRENT_SCREEN]) === null || _ctx$SCREEN_INFO$_ctx3 === void 0 ? void 0 : _ctx$SCREEN_INFO$_ctx3.title,
        subTitle: (_ctx$SCREEN_INFO$_ctx4 = _ctx.SCREEN_INFO[_ctx.CURRENT_SCREEN]) === null || _ctx$SCREEN_INFO$_ctx4 === void 0 ? void 0 : _ctx$SCREEN_INFO$_ctx4.subTitle
      }, null, 8
      /* PROPS */
      , ["title", "subTitle"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.CURRENT_SCREEN === 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Resources, {
        key: 4,
        title: (_ctx$SCREEN_INFO$_ctx5 = _ctx.SCREEN_INFO[_ctx.CURRENT_SCREEN]) === null || _ctx$SCREEN_INFO$_ctx5 === void 0 ? void 0 : _ctx$SCREEN_INFO$_ctx5.title,
        subTitle: (_ctx$SCREEN_INFO$_ctx6 = _ctx.SCREEN_INFO[_ctx.CURRENT_SCREEN]) === null || _ctx$SCREEN_INFO$_ctx6 === void 0 ? void 0 : _ctx$SCREEN_INFO$_ctx6.subTitle
      }, null, 8
      /* PROPS */
      , ["title", "subTitle"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.CURRENT_SCREEN === 5 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Result, {
        key: 5,
        title: (_ctx$SCREEN_INFO$_ctx7 = _ctx.SCREEN_INFO[_ctx.CURRENT_SCREEN]) === null || _ctx$SCREEN_INFO$_ctx7 === void 0 ? void 0 : _ctx$SCREEN_INFO$_ctx7.title,
        subTitle: (_ctx$SCREEN_INFO$_ctx8 = _ctx.SCREEN_INFO[_ctx.CURRENT_SCREEN]) === null || _ctx$SCREEN_INFO$_ctx8 === void 0 ? void 0 : _ctx$SCREEN_INFO$_ctx8.subTitle
      }, null, 8
      /* PROPS */
      , ["title", "subTitle"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["step", "title", "subTitle"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SummaryTurnLayout, {
    key: 1
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.CURRENT_SUMMARY_SCREEN === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SummaryTurnComponent, {
        key: 0
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.CURRENT_SUMMARY_SCREEN === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SummarySettingScoreComponent, {
        key: 1
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.CURRENT_SUMMARY_SCREEN === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SummaryNeedProjectComponent, {
        key: 2
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.CURRENT_SUMMARY_SCREEN === 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SummaryScoreComponent, {
        key: 3
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }))]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* body {\r\n    background-color: #f0f1f1;\r\n} */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_Frame_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/images/Frame.png */ "./public/images/Frame.png");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_Frame_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.main_container[data-v-62549dba] {\r\n        background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") #f0f1f1;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        background-position: center;\r\n        min-height: 100vh;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./public/images/Frame.png":
/*!*********************************!*\
  !*** ./public/images/Frame.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Frame.png?9b6c3277984b1c260643bf21e1efde2f");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_game_settings_vue_vue_type_style_index_0_id_5a137ba2_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_game_settings_vue_vue_type_style_index_0_id_5a137ba2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_game_settings_vue_vue_type_style_index_0_id_5a137ba2_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_gameSettingsFormWizard_vue_vue_type_style_index_0_id_62549dba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_gameSettingsFormWizard_vue_vue_type_style_index_0_id_62549dba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_gameSettingsFormWizard_vue_vue_type_style_index_0_id_62549dba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/game-settings.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/game-settings.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_settings_vue_vue_type_template_id_5a137ba2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-settings.vue?vue&type=template&id=5a137ba2 */ "./resources/js/views/game-settings.vue?vue&type=template&id=5a137ba2");
/* harmony import */ var _game_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-settings.vue?vue&type=script&lang=js */ "./resources/js/views/game-settings.vue?vue&type=script&lang=js");
/* harmony import */ var _game_settings_vue_vue_type_style_index_0_id_5a137ba2_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css */ "./resources/js/views/game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_game_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_game_settings_vue_vue_type_template_id_5a137ba2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/game-settings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/gameSettingsFormWizard.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/gameSettingsFormWizard.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameSettingsFormWizard_vue_vue_type_template_id_62549dba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameSettingsFormWizard.vue?vue&type=template&id=62549dba&scoped=true */ "./resources/js/views/gameSettingsFormWizard.vue?vue&type=template&id=62549dba&scoped=true");
/* harmony import */ var _gameSettingsFormWizard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameSettingsFormWizard.vue?vue&type=script&lang=js */ "./resources/js/views/gameSettingsFormWizard.vue?vue&type=script&lang=js");
/* harmony import */ var _gameSettingsFormWizard_vue_vue_type_style_index_0_id_62549dba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css */ "./resources/js/views/gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_gameSettingsFormWizard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_gameSettingsFormWizard_vue_vue_type_template_id_62549dba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-62549dba"],['__file',"resources/js/views/gameSettingsFormWizard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/game-settings.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/game-settings.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_game_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_game_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./game-settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/gameSettingsFormWizard.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/gameSettingsFormWizard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_gameSettingsFormWizard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_gameSettingsFormWizard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./gameSettingsFormWizard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/game-settings.vue?vue&type=template&id=5a137ba2":
/*!****************************************************************************!*\
  !*** ./resources/js/views/game-settings.vue?vue&type=template&id=5a137ba2 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_game_settings_vue_vue_type_template_id_5a137ba2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_game_settings_vue_vue_type_template_id_5a137ba2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./game-settings.vue?vue&type=template&id=5a137ba2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=template&id=5a137ba2");


/***/ }),

/***/ "./resources/js/views/gameSettingsFormWizard.vue?vue&type=template&id=62549dba&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/gameSettingsFormWizard.vue?vue&type=template&id=62549dba&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_gameSettingsFormWizard_vue_vue_type_template_id_62549dba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_gameSettingsFormWizard_vue_vue_type_template_id_62549dba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./gameSettingsFormWizard.vue?vue&type=template&id=62549dba&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=template&id=62549dba&scoped=true");


/***/ }),

/***/ "./resources/js/views/game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_game_settings_vue_vue_type_style_index_0_id_5a137ba2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/game-settings.vue?vue&type=style&index=0&id=5a137ba2&lang=css");


/***/ }),

/***/ "./resources/js/views/gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_gameSettingsFormWizard_vue_vue_type_style_index_0_id_62549dba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/gameSettingsFormWizard.vue?vue&type=style&index=0&id=62549dba&scoped=true&lang=css");


/***/ })

}]);