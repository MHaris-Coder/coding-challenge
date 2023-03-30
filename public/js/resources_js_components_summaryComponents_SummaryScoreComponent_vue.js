"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_summaryComponents_SummaryScoreComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


var PlayGameModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_modals_PlayGameModal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../modals/PlayGameModal.vue */ "./resources/js/components/modals/PlayGameModal.vue"));
});
var EndGameAlert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_modals_EndGameWarningModal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../modals/EndGameWarningModal.vue */ "./resources/js/components/modals/EndGameWarningModal.vue"));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PlayGameModal: PlayGameModal,
    EndGameAlert: EndGameAlert
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var GAME_TIME = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.gameSettingsModule.GAME_TIME;
    });
    var GAME_NEIGHBOURHOODS = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _store$state$gameSett;

      return (_store$state$gameSett = store.state.gameSettingsModule.USER_GAME) === null || _store$state$gameSett === void 0 ? void 0 : _store$state$gameSett.game_neighbourhood;
    });
    var FINAL_SCORE = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _store$state$gameSett2;

      return (_store$state$gameSett2 = store.state.gameSettingsModule.SCORE_RESULT) === null || _store$state$gameSett2 === void 0 ? void 0 : _store$state$gameSett2.final_score;
    });
    var DATE = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _store$state$gameSett3;

      return (_store$state$gameSett3 = store.state.gameSettingsModule.SCORE_RESULT) === null || _store$state$gameSett3 === void 0 ? void 0 : _store$state$gameSett3.date;
    });
    var TOTAL_NEEDS_POINTS = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _store$state$gameSett4;

      return (_store$state$gameSett4 = store.state.gameSettingsModule.SCORE_RESULT) === null || _store$state$gameSett4 === void 0 ? void 0 : _store$state$gameSett4.total_needs_points;
    });
    var POPULATION = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _store$state$gameSett5;

      return (_store$state$gameSett5 = store.state.gameSettingsModule.SCORE_RESULT) === null || _store$state$gameSett5 === void 0 ? void 0 : _store$state$gameSett5.population;
    });
    var RANK = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.gameSettingsModule.RANK;
    });
    var USER_GAME = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.state.gameSettingsModule.USER_GAME;
    });
    return {
      GAME_TIME: GAME_TIME,
      FINAL_SCORE: FINAL_SCORE,
      DATE: DATE,
      GAME_NEIGHBOURHOODS: GAME_NEIGHBOURHOODS,
      TOTAL_NEEDS_POINTS: TOTAL_NEEDS_POINTS,
      POPULATION: POPULATION,
      RANK: RANK,
      USER_GAME: USER_GAME
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('calcRanking', {
      score: this.FINAL_SCORE,
      date: this.DATE
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=template&id=1a6ea07a&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=template&id=1a6ea07a&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1a6ea07a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "header"
};
var _hoisted_2 = {
  "class": "icon"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "title"
};
var _hoisted_5 = {
  "class": "container-fluid"
};
var _hoisted_6 = {
  "class": "row cstm-container"
};
var _hoisted_7 = {
  "class": "col-xs-12 game-score-board-parent-bg pt-3 pb-3 col-sm-12 col-md-12 d-flex justify-content-between"
};
var _hoisted_8 = {
  "class": "game-score-board-image-parent"
};
var _hoisted_9 = ["src"];
var _hoisted_10 = {
  "class": "game-score-under-image-text"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Data do jogo", -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  "class": "game-score-board-percentage"
};
var _hoisted_13 = {
  "class": "game-score-board-percentage-text"
};

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Resultado Final", -1
  /* HOISTED */
  );
});

var _hoisted_15 = {
  "class": "game-score-board-percentage-text"
};

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "População Alcançada", -1
  /* HOISTED */
  );
});

var _hoisted_17 = {
  "class": "game-score-board-percentage-text"
};

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Classificação", -1
  /* HOISTED */
  );
});

var _hoisted_19 = {
  "class": "col-xs-12 col-sm-12 col-md-12 mt-3"
};
var _hoisted_20 = {
  "class": "game-score-card-parent d-flex"
};
var _hoisted_21 = {
  "class": "game-score-watch-icon"
};
var _hoisted_22 = ["src"];
var _hoisted_23 = {
  "class": "game-score-watch-text"
};

var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Tempo de jogo", -1
  /* HOISTED */
  );
});

var _hoisted_25 = {
  "class": "col-xs-12 col-sm-12 col-md-12 mt-3"
};
var _hoisted_26 = {
  "class": "game-scores-card d-flex"
};
var _hoisted_27 = {
  "class": "w-100"
};

var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "game-score-table-label game-score-table-title"
  }, "Bairros", -1
  /* HOISTED */
  );
});

var _hoisted_29 = {
  "class": "game-score-table-value game-score-table-title-number"
};
var _hoisted_30 = {
  "class": "game-score-table-label"
};
var _hoisted_31 = {
  "class": "game-score-table-value"
};
var _hoisted_32 = {
  "class": "col-xs-12 col-sm-12 col-md-12 mt-3"
};
var _hoisted_33 = {
  "class": "game-scores-card d-flex"
};
var _hoisted_34 = {
  "class": "w-100"
};

var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
    "class": "text-left game-score-table-title"
  }, "Necessidades Colmatadas", -1
  /* HOISTED */
  );
});

var _hoisted_36 = {
  "class": "text-right game-score-table-title-number"
};
var _hoisted_37 = {
  "class": "game-score-table-label"
};
var _hoisted_38 = {
  "class": "game-score-table-value"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<footer data-v-1a6ea07a><div class=\"summary-footer\" data-v-1a6ea07a><div class=\"container-fluid\" data-v-1a6ea07a><div class=\"row\" data-v-1a6ea07a><div class=\"col-xs-12 col-sm-12 col-md-12\" data-v-1a6ea07a><button data-toggle=\"modal\" data-target=\"#EndGameAlert\" class=\"choose-neighbourhoods-next-btn\" data-v-1a6ea07a>Acabar jogo</button></div></div></div></div></footer>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$USER_GAME, _$setup$USER_GAME2, _$setup$USER_GAME2$ga, _$setup$GAME_NEIGHBOU, _$setup$GAME_NEIGHBOU2, _$setup$TOTAL_NEEDS_P, _$setup$TOTAL_NEEDS_P2;

  var _component_PlayGameModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PlayGameModal");

  var _component_EndGameAlert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EndGameAlert");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$store.commit('setPrevSummaryScreen', {
        screen: 1
      });
    }),
    href: "javascript:void(0);"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.baseUrl + 'images/header-icons/cross-icon.png'
  }, null, 8
  /* PROPS */
  , _hoisted_3)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "ID 000" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$USER_GAME = $setup.USER_GAME) === null || _$setup$USER_GAME === void 0 ? void 0 : _$setup$USER_GAME.id), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Turno " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$USER_GAME2 = $setup.USER_GAME) === null || _$setup$USER_GAME2 === void 0 ? void 0 : (_$setup$USER_GAME2$ga = _$setup$USER_GAME2.game_turn[0]) === null || _$setup$USER_GAME2$ga === void 0 ? void 0 : _$setup$USER_GAME2$ga.turn), 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "game-score-board-image",
    src: _ctx.baseUrl + 'images/Group17309.png'
  }, null, 8
  /* PROPS */
  , _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.DATE), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.FINAL_SCORE), 1
  /* TEXT */
  ), _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.POPULATION) + "%", 1
  /* TEXT */
  ), _hoisted_16]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h2>\r\n                                {{RANK}}<template v-if=\"RANK === 1\">st</template><template v-if=\"RANK === 2\">nd</template><template v-if=\"RANK !== 1 && RANK !== 2\">th</template>\r\n                            </h2> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.RANK) + "° ", 1
  /* TEXT */
  ), _hoisted_18])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "game-score-board-image",
    src: _ctx.baseUrl + 'images/stop-watch.png'
  }, null, 8
  /* PROPS */
  , _hoisted_22)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.GAME_TIME.HOURS) + "h " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.GAME_TIME.MINUTES) + "m " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.GAME_TIME.SECONDS) + "s", 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$GAME_NEIGHBOU = $setup.GAME_NEIGHBOURHOODS) === null || _$setup$GAME_NEIGHBOU === void 0 ? void 0 : _$setup$GAME_NEIGHBOU.length), 1
  /* TEXT */
  )]), ((_$setup$GAME_NEIGHBOU2 = $setup.GAME_NEIGHBOURHOODS) === null || _$setup$GAME_NEIGHBOU2 === void 0 ? void 0 : _$setup$GAME_NEIGHBOU2.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.GAME_NEIGHBOURHOODS, function (GAME_NEIGHBOURHOOD, INDEX) {
    var _GAME_NEIGHBOURHOOD$n;

    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: INDEX
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(GAME_NEIGHBOURHOOD === null || GAME_NEIGHBOURHOOD === void 0 ? void 0 : (_GAME_NEIGHBOURHOOD$n = GAME_NEIGHBOURHOOD.neighbourhood) === null || _GAME_NEIGHBOURHOOD$n === void 0 ? void 0 : _GAME_NEIGHBOURHOOD$n.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(GAME_NEIGHBOURHOOD === null || GAME_NEIGHBOURHOOD === void 0 ? void 0 : GAME_NEIGHBOURHOOD.total_neighbourhood_points) + " pts", 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$TOTAL_NEEDS_P = $setup.TOTAL_NEEDS_POINTS) === null || _$setup$TOTAL_NEEDS_P === void 0 ? void 0 : _$setup$TOTAL_NEEDS_P.length), 1
  /* TEXT */
  )]), ((_$setup$TOTAL_NEEDS_P2 = $setup.TOTAL_NEEDS_POINTS) === null || _$setup$TOTAL_NEEDS_P2 === void 0 ? void 0 : _$setup$TOTAL_NEEDS_P2.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.TOTAL_NEEDS_POINTS, function (TOTAL_NEEDS_POINT, INDEX) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: INDEX
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(TOTAL_NEEDS_POINT === null || TOTAL_NEEDS_POINT === void 0 ? void 0 : TOTAL_NEEDS_POINT.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(TOTAL_NEEDS_POINT === null || TOTAL_NEEDS_POINT === void 0 ? void 0 : TOTAL_NEEDS_POINT.points) + " pts", 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])])]), _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PlayGameModal), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EndGameAlert)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* body {\r\n        background-color: #f0f1f1;\r\n    } */\r\n    \r\n    /* #app {\r\n        overflow: auto;\r\n        margin-bottom: 100px;\r\n    } */\n.header[data-v-1a6ea07a] {\r\n        min-height: 70px;\r\n        background-color: #fff;\r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\n}\n.header .icon[data-v-1a6ea07a] {\r\n        position: absolute;\r\n        left: 15px;\r\n        top: 15px;\n}\n.header .title[data-v-1a6ea07a] {\r\n        flex: 1;\r\n        text-align: center;\n}\n.header .title h2[data-v-1a6ea07a] {\r\n        margin-bottom: 0;\r\n        font-size: 17px;\r\n        font-weight: 700;\n}\n.header .title p[data-v-1a6ea07a] {\r\n        margin-bottom: 0;\n}\n.cstm-container[data-v-1a6ea07a]{\r\n        padding-bottom: 90px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryScoreComponent_vue_vue_type_style_index_0_id_1a6ea07a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryScoreComponent_vue_vue_type_style_index_0_id_1a6ea07a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryScoreComponent_vue_vue_type_style_index_0_id_1a6ea07a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/summaryComponents/SummaryScoreComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/SummaryScoreComponent.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SummaryScoreComponent_vue_vue_type_template_id_1a6ea07a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SummaryScoreComponent.vue?vue&type=template&id=1a6ea07a&scoped=true */ "./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=template&id=1a6ea07a&scoped=true");
/* harmony import */ var _SummaryScoreComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SummaryScoreComponent.vue?vue&type=script&lang=js */ "./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _SummaryScoreComponent_vue_vue_type_style_index_0_id_1a6ea07a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css */ "./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SummaryScoreComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SummaryScoreComponent_vue_vue_type_template_id_1a6ea07a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1a6ea07a"],['__file',"resources/js/components/summaryComponents/SummaryScoreComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryScoreComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryScoreComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SummaryScoreComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=template&id=1a6ea07a&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=template&id=1a6ea07a&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryScoreComponent_vue_vue_type_template_id_1a6ea07a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryScoreComponent_vue_vue_type_template_id_1a6ea07a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SummaryScoreComponent.vue?vue&type=template&id=1a6ea07a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=template&id=1a6ea07a&scoped=true");


/***/ }),

/***/ "./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SummaryScoreComponent_vue_vue_type_style_index_0_id_1a6ea07a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/summaryComponents/SummaryScoreComponent.vue?vue&type=style&index=0&id=1a6ea07a&scoped=true&lang=css");


/***/ })

}]);