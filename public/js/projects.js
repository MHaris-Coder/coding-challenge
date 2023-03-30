"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["projects"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
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
    var USER = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return STORE.state.user.details;
    });
    var USER_GAME_LASTEST_RECORD = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return STORE.state.USER_GAME_LASTEST_RECORD;
    });
    return {
      USER: USER,
      USER_GAME_LASTEST_RECORD: USER_GAME_LASTEST_RECORD
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var STORE = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var ROUTE = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRoute)();
    var PROJECT = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
      var _STORE$state$projects, _STORE$state$projects2;

      if (((_STORE$state$projects = STORE.state.projectsModule.PROJECT_CATEGORIES) === null || _STORE$state$projects === void 0 ? void 0 : _STORE$state$projects.length) == 0) STORE.dispatch('projects');
      PROJECT.value = (_STORE$state$projects2 = STORE.state.projectsModule.PROJECT_CATEGORIES[ROUTE.params.category_index]) === null || _STORE$state$projects2 === void 0 ? void 0 : _STORE$state$projects2.project[ROUTE.params.project_index];
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return STORE.state.projectsModule.PROJECT_CATEGORIES;
    }, function (value) {
      var _value$ROUTE$params$c;

      PROJECT.value = (_value$ROUTE$params$c = value[ROUTE.params.category_index]) === null || _value$ROUTE$params$c === void 0 ? void 0 : _value$ROUTE$params$c.project[ROUTE.params.project_index];
    });
    return {
      ROUTE: ROUTE,
      PROJECT: PROJECT
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var STORE = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var ROUTER = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    var PROJECT_CATEGORIES = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return STORE.state.projectsModule.PROJECT_CATEGORIES;
    });

    var PROJECT_CONTENT_FUNC = function PROJECT_CONTENT_FUNC(category_index, project_index) {
      ROUTER.push("/project-content/".concat(category_index, "/").concat(project_index));
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
      var _STORE$state$projects;

      if (((_STORE$state$projects = STORE.state.projectsModule.PROJECT_CATEGORIES) === null || _STORE$state$projects === void 0 ? void 0 : _STORE$state$projects.length) == 0) STORE.dispatch('projects');
    });
    return {
      STORE: STORE,
      PROJECT_CATEGORIES: PROJECT_CATEGORIES,
      PROJECT_CONTENT_FUNC: PROJECT_CONTENT_FUNC
    };
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


var Filter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_RankingComponents_Filter_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../components/RankingComponents/Filter.vue */ "./resources/js/components/RankingComponents/Filter.vue"));
});
var Tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_RankingComponents_Tabs_Index_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../components/RankingComponents/Tabs/Index.vue */ "./resources/js/components/RankingComponents/Tabs/Index.vue"));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var STORE = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)(); // const OVERALL = computed(() => STORE.state.rankingsModule.RANKING?.overall)
    // const MATCHES = computed(() => STORE.state.rankingsModule.RANKING?.matches)
    // const CHALLENGES = computed(() => STORE.state.rankingsModule.RANKING?.challenges)

    var OVERALL = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var MATCHES = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var CHALLENGES = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var TABS = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(2);

    var TABS_FUNC = function TABS_FUNC(value) {
      TABS.value = value;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      STORE.dispatch('ranking');
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      var _STORE$state$rankings;

      return (_STORE$state$rankings = STORE.state.rankingsModule.RANKING) === null || _STORE$state$rankings === void 0 ? void 0 : _STORE$state$rankings.overall;
    }, function (overall) {
      for (var key in overall) {
        if (Object.hasOwnProperty.call(overall, key)) {
          var element = overall[key];
          if ((element === null || element === void 0 ? void 0 : element.rank) == 2) OVERALL.value[0] = element;
          if ((element === null || element === void 0 ? void 0 : element.rank) == 1) OVERALL.value[1] = element;
          if ((element === null || element === void 0 ? void 0 : element.rank) == 3) OVERALL.value[2] = element;
        }
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      var _STORE$state$rankings2;

      return (_STORE$state$rankings2 = STORE.state.rankingsModule.RANKING) === null || _STORE$state$rankings2 === void 0 ? void 0 : _STORE$state$rankings2.matches;
    }, function (matches) {
      for (var key in matches) {
        if (Object.hasOwnProperty.call(matches, key)) {
          var element = matches[key];
          if ((element === null || element === void 0 ? void 0 : element.rank) == 2) MATCHES.value[0] = element;
          if ((element === null || element === void 0 ? void 0 : element.rank) == 1) MATCHES.value[1] = element;
          if ((element === null || element === void 0 ? void 0 : element.rank) == 3) MATCHES.value[2] = element;
        }
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      var _STORE$state$rankings3;

      return (_STORE$state$rankings3 = STORE.state.rankingsModule.RANKING) === null || _STORE$state$rankings3 === void 0 ? void 0 : _STORE$state$rankings3.challenges;
    }, function (challenges) {
      for (var key in challenges) {
        if (Object.hasOwnProperty.call(challenges, key)) {
          var element = challenges[key];
          if ((element === null || element === void 0 ? void 0 : element.rank) == 2) CHALLENGES.value[0] = element;
          if ((element === null || element === void 0 ? void 0 : element.rank) == 1) CHALLENGES.value[1] = element;
          if ((element === null || element === void 0 ? void 0 : element.rank) == 3) CHALLENGES.value[2] = element;
        }
      }
    });
    return {
      OVERALL: OVERALL,
      MATCHES: MATCHES,
      CHALLENGES: CHALLENGES,
      TABS: TABS,
      TABS_FUNC: TABS_FUNC
    };
  },
  components: {
    Filter: Filter,
    Tabs: Tabs
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=template&id=c86b6838&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=template&id=c86b6838&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-c86b6838"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "main"
};
var _hoisted_2 = {
  "class": "container-fluid header-fixed"
};
var _hoisted_3 = {
  "class": "row header"
};
var _hoisted_4 = {
  "class": "col-2"
};
var _hoisted_5 = ["src"];

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-8 title"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Jogos")], -1
  /* HOISTED */
  );
});

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-2"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_8 = {
  "class": "row matches-header"
};

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-8 title text-left"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Lista de Jogos")], -1
  /* HOISTED */
  );
});

var _hoisted_10 = {
  "class": "col-4 entry-count text-right"
};
var _hoisted_11 = {
  "class": "container-fluid cards-container"
};
var _hoisted_12 = {
  "class": "row container-padding-control"
};
var _hoisted_13 = {
  "class": "col-12 single-card-parent"
};
var _hoisted_14 = {
  "class": "container"
};
var _hoisted_15 = {
  "class": "row card-row"
};
var _hoisted_16 = {
  "class": "col-3 profile-image"
};
var _hoisted_17 = ["src"];
var _hoisted_18 = {
  "class": "col-7 profile-text"
};
var _hoisted_19 = {
  "class": "col-2 profile-star-rating"
};

var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-star rating-numb-icon",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$USER_GAME_LAS, _$setup$USER_GAME_LAS2;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$router.push('/profile');
    }),
    href: "javascript:void(0);"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.baseUrl + 'images/header-icons/cross-icon.png'
  }, null, 8
  /* PROPS */
  , _hoisted_5)])]), _hoisted_6, _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Total " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$USER_GAME_LAS = $setup.USER_GAME_LASTEST_RECORD) === null || _$setup$USER_GAME_LAS === void 0 ? void 0 : _$setup$USER_GAME_LAS.length), 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [((_$setup$USER_GAME_LAS2 = $setup.USER_GAME_LASTEST_RECORD) === null || _$setup$USER_GAME_LAS2 === void 0 ? void 0 : _$setup$USER_GAME_LAS2.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.USER_GAME_LASTEST_RECORD, function (USER_GAME, INDEX) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "w-100",
      src: _ctx.baseUrl + 'images/id-image.png'
    }, null, 8
    /* PROPS */
    , _hoisted_17)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "ID 000" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(USER_GAME === null || USER_GAME === void 0 ? void 0 : USER_GAME.id), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(USER_GAME === null || USER_GAME === void 0 ? void 0 : USER_GAME.date), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(USER_GAME === null || USER_GAME === void 0 ? void 0 : USER_GAME.rank), 1
    /* TEXT */
    )])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-12 single-card-parent\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row card-row\">\r\n                                <div class=\"col-3 profile-image\">\r\n                                    <img class=\"w-100\" :src=\"baseUrl + 'images/id-image.png'\" />\r\n                                </div>\r\n                                <div class=\"col-7 profile-text\">\r\n                                    <h2>ID 00220722</h2>\r\n                                    <h4>20/12/2022</h4>\r\n                                </div>\r\n                                <div class=\"col-2 profile-star-rating\">\r\n                                    <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                                    <h4>000</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 single-card-parent\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row card-row\">\r\n                                <div class=\"col-3 profile-image\">\r\n                                    <img class=\"w-100\" :src=\"baseUrl + 'images/id-image.png'\" />\r\n                                </div>\r\n                                <div class=\"col-7 profile-text\">\r\n                                    <h2>ID 00220722</h2>\r\n                                    <h4>20/12/2022</h4>\r\n                                </div>\r\n                                <div class=\"col-2 profile-star-rating\">\r\n                                    <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                                    <h4>000</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 single-card-parent\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row card-row\">\r\n                                <div class=\"col-3 profile-image\">\r\n                                    <img class=\"w-100\" :src=\"baseUrl + 'images/id-image.png'\" />\r\n                                </div>\r\n                                <div class=\"col-7 profile-text\">\r\n                                    <h2>ID 00220722</h2>\r\n                                    <h4>20/12/2022</h4>\r\n                                </div>\r\n                                <div class=\"col-2 profile-star-rating\">\r\n                                    <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                                    <h4>000</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 single-card-parent\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row card-row\">\r\n                                <div class=\"col-3 profile-image\">\r\n                                    <img class=\"w-100\" :src=\"baseUrl + 'images/id-image.png'\" />\r\n                                </div>\r\n                                <div class=\"col-7 profile-text\">\r\n                                    <h2>ID 00220722</h2>\r\n                                    <h4>20/12/2022</h4>\r\n                                </div>\r\n                                <div class=\"col-2 profile-star-rating\">\r\n                                    <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                                    <h4>000</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 single-card-parent\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row card-row\">\r\n                                <div class=\"col-3 profile-image\">\r\n                                    <img class=\"w-100\" :src=\"baseUrl + 'images/id-image.png'\" />\r\n                                </div>\r\n                                <div class=\"col-7 profile-text\">\r\n                                    <h2>ID 00220722</h2>\r\n                                    <h4>20/12/2022</h4>\r\n                                </div>\r\n                                <div class=\"col-2 profile-star-rating\">\r\n                                    <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                                    <h4>000</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 single-card-parent\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row card-row\">\r\n                                <div class=\"col-3 profile-image\">\r\n                                    <img class=\"w-100\" :src=\"baseUrl + 'images/id-image.png'\" />\r\n                                </div>\r\n                                <div class=\"col-7 profile-text\">\r\n                                    <h2>ID 00220722</h2>\r\n                                    <h4>20/12/2022</h4>\r\n                                </div>\r\n                                <div class=\"col-2 profile-star-rating\">\r\n                                    <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                                    <h4>000</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 single-card-parent\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row card-row\">\r\n                                <div class=\"col-3 profile-image\">\r\n                                    <img class=\"w-100\" :src=\"baseUrl + 'images/id-image.png'\" />\r\n                                </div>\r\n                                <div class=\"col-7 profile-text\">\r\n                                    <h2>ID 00220722</h2>\r\n                                    <h4>20/12/2022</h4>\r\n                                </div>\r\n                                <div class=\"col-2 profile-star-rating\">\r\n                                    <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                                    <h4>000</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 single-card-parent\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row card-row\">\r\n                                <div class=\"col-3 profile-image\">\r\n                                    <img class=\"w-100\" :src=\"baseUrl + 'images/id-image.png'\" />\r\n                                </div>\r\n                                <div class=\"col-7 profile-text\">\r\n                                    <h2>ID 00220722</h2>\r\n                                    <h4>20/12/2022</h4>\r\n                                </div>\r\n                                <div class=\"col-2 profile-star-rating\">\r\n                                    <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                                    <h4>000</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 single-card-parent\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row card-row\">\r\n                                <div class=\"col-3 profile-image\">\r\n                                    <img class=\"w-100\" :src=\"baseUrl + 'images/id-image.png'\" />\r\n                                </div>\r\n                                <div class=\"col-7 profile-text\">\r\n                                    <h2>ID 00220722</h2>\r\n                                    <h4>20/12/2022</h4>\r\n                                </div>\r\n                                <div class=\"col-2 profile-star-rating\">\r\n                                    <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                                    <h4>000</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 single-card-parent\">\r\n                        <div class=\"container\">\r\n                            <div class=\"row card-row\">\r\n                                <div class=\"col-3 profile-image\">\r\n                                    <img class=\"w-100\" :src=\"baseUrl + 'images/id-image.png'\" />\r\n                                </div>\r\n                                <div class=\"col-7 profile-text\">\r\n                                    <h2>ID 00220722</h2>\r\n                                    <h4>20/12/2022</h4>\r\n                                </div>\r\n                                <div class=\"col-2 profile-star-rating\">\r\n                                    <i class=\"fa fa-star rating-numb-icon\" aria-hidden=\"true\"></i>\r\n                                    <h4>000</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> ")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=template&id=56f475ff&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=template&id=56f475ff&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-56f475ff"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "main"
};
var _hoisted_2 = {
  "class": "header"
};
var _hoisted_3 = {
  "class": "icon"
};
var _hoisted_4 = ["src"];

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "title"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Evento")], -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "media_wrapper"
};
var _hoisted_7 = {
  key: 0,
  "class": "image"
};
var _hoisted_8 = ["src"];
var _hoisted_9 = {
  key: 1,
  "class": "video"
};
var _hoisted_10 = {
  "class": "container-fluid"
};
var _hoisted_11 = ["src"];
var _hoisted_12 = {
  "class": "content"
};
var _hoisted_13 = {
  "class": "container-fluid"
};
var _hoisted_14 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$PROJECT, _$setup$PROJECT2, _$setup$PROJECT3, _$setup$PROJECT4, _$setup$PROJECT5, _$setup$PROJECT6, _$setup$PROJECT7;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$router.push('/projects');
    }),
    href: "javascript:void(0);"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.baseUrl + 'images/header-icons/cross-icon.png'
  }, null, 8
  /* PROPS */
  , _hoisted_4)])]), _hoisted_5])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_6, [((_$setup$PROJECT = $setup.PROJECT) === null || _$setup$PROJECT === void 0 ? void 0 : _$setup$PROJECT.image_path) != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.baseUrl + 'assets/projects/' + ((_$setup$PROJECT2 = $setup.PROJECT) === null || _$setup$PROJECT2 === void 0 ? void 0 : _$setup$PROJECT2.image_path),
    onError: _cache[1] || (_cache[1] = function (event) {
      return event.target.src = _ctx.baseUrl + 'images/placeholder.jpg';
    })
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_8)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), typeof ((_$setup$PROJECT3 = $setup.PROJECT) === null || _$setup$PROJECT3 === void 0 ? void 0 : _$setup$PROJECT3.video_path) == 'string' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
    width: "100%",
    height: "200px",
    src: (_$setup$PROJECT4 = $setup.PROJECT) === null || _$setup$PROJECT4 === void 0 ? void 0 : _$setup$PROJECT4.video_path
  }, "\r\n                    ", 8
  /* PROPS */
  , _hoisted_11)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$PROJECT5 = $setup.PROJECT) === null || _$setup$PROJECT5 === void 0 ? void 0 : _$setup$PROJECT5.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$PROJECT6 = $setup.PROJECT) === null || _$setup$PROJECT6 === void 0 ? void 0 : _$setup$PROJECT6.date_publication), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    innerHTML: (_$setup$PROJECT7 = $setup.PROJECT) === null || _$setup$PROJECT7 === void 0 ? void 0 : _$setup$PROJECT7.description
  }, null, 8
  /* PROPS */
  , _hoisted_14)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=template&id=f7b760ce&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=template&id=f7b760ce&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f7b760ce"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "main"
};
var _hoisted_2 = {
  "class": "header"
};
var _hoisted_3 = {
  "class": "icon"
};
var _hoisted_4 = ["src"];

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "title"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Conteúdos")], -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "container-fluid"
};
var _hoisted_7 = {
  id: "accordians"
};
var _hoisted_8 = {
  "class": "card border-left-0 border-right-0 border-bottom-0"
};
var _hoisted_9 = ["href"];
var _hoisted_10 = {
  "class": "card-link d-flex align-items-center"
};
var _hoisted_11 = {
  "class": "mb-0"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-chevron-down ml-auto"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_13 = ["id"];
var _hoisted_14 = {
  "class": "card-body p-0"
};
var _hoisted_15 = ["onClick"];
var _hoisted_16 = {
  "class": "inner-card border-bottom"
};
var _hoisted_17 = {
  "class": "mb-0"
};

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-chevron-right ml-auto"
  }, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$PROJECT_CATEG;

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$router.push('/dashboard');
    }),
    href: "javascript:void(0);"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.baseUrl + 'images/header-icons/cross-icon.png'
  }, null, 8
  /* PROPS */
  , _hoisted_4)])]), _hoisted_5])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((_$setup$PROJECT_CATEG = $setup.PROJECT_CATEGORIES) === null || _$setup$PROJECT_CATEG === void 0 ? void 0 : _$setup$PROJECT_CATEG.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.PROJECT_CATEGORIES, function (PROJECT_CATEGORY, INDEX) {
    var _PROJECT_CATEGORY$pro;

    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "card-header bg-transparent",
      "data-toggle": "collapse",
      href: '#collapse_' + INDEX
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(PROJECT_CATEGORY === null || PROJECT_CATEGORY === void 0 ? void 0 : PROJECT_CATEGORY.title), 1
    /* TEXT */
    ), _hoisted_12])], 8
    /* PROPS */
    , _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :class=\"{'show': INDEX === 0}\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      id: 'collapse_' + INDEX,
      "class": "collapse",
      "data-parent": "#accordion"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(PROJECT_CATEGORY === null || PROJECT_CATEGORY === void 0 ? void 0 : (_PROJECT_CATEGORY$pro = PROJECT_CATEGORY.project) === null || _PROJECT_CATEGORY$pro === void 0 ? void 0 : _PROJECT_CATEGORY$pro.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 0
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(PROJECT_CATEGORY === null || PROJECT_CATEGORY === void 0 ? void 0 : PROJECT_CATEGORY.project, function (PROJECT, _INDEX) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
        onClick: function onClick($event) {
          return $setup.PROJECT_CONTENT_FUNC(INDEX, _INDEX);
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(PROJECT === null || PROJECT === void 0 ? void 0 : PROJECT.title), 1
      /* TEXT */
      ), _hoisted_18])], 8
      /* PROPS */
      , _hoisted_15);
    }), 256
    /* UNKEYED_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 8
    /* PROPS */
    , _hoisted_13)]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=template&id=e56d5532&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=template&id=e56d5532&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-e56d5532"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "main"
};
var _hoisted_2 = {
  "class": "header"
};
var _hoisted_3 = {
  "class": "icon"
};
var _hoisted_4 = ["src"];

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "title"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Classificação")], -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "top_ranks"
};
var _hoisted_7 = {
  "class": "container-fluid"
};
var _hoisted_8 = {
  key: 0,
  "class": "row align-items-end"
};
var _hoisted_9 = {
  key: 0,
  "class": "col-4 text-center"
};
var _hoisted_10 = {
  "class": "profile-parent"
};
var _hoisted_11 = ["src"];
var _hoisted_12 = {
  "class": "ranking-img"
};
var _hoisted_13 = ["src"];
var _hoisted_14 = {
  "class": "title-school"
};
var _hoisted_15 = {
  key: 1,
  "class": "col-4 text-center"
};
var _hoisted_16 = {
  "class": "profile-parent"
};
var _hoisted_17 = ["src"];
var _hoisted_18 = {
  "class": "ranking-img"
};
var _hoisted_19 = ["src"];
var _hoisted_20 = {
  "class": "title-school"
};
var _hoisted_21 = {
  key: 2,
  "class": "col-4 text-center"
};
var _hoisted_22 = {
  "class": "profile-parent"
};
var _hoisted_23 = ["src"];
var _hoisted_24 = {
  "class": "ranking-img"
};
var _hoisted_25 = ["src"];
var _hoisted_26 = {
  "class": "title-school"
};
var _hoisted_27 = {
  key: 1,
  "class": "container-fluid"
};

var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "No Record Found", -1
  /* HOISTED */
  );
});

var _hoisted_29 = [_hoisted_28];
var _hoisted_30 = {
  key: 1,
  "class": "row align-items-end"
};
var _hoisted_31 = {
  key: 0,
  "class": "col-4 text-center"
};
var _hoisted_32 = {
  "class": "profile-parent"
};
var _hoisted_33 = ["src"];
var _hoisted_34 = {
  "class": "ranking-img"
};
var _hoisted_35 = ["src"];
var _hoisted_36 = {
  "class": "title-school"
};
var _hoisted_37 = {
  "class": "school-rating"
};

var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-star rating-icon",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_39 = {
  key: 1,
  "class": "col-4 text-center"
};
var _hoisted_40 = {
  "class": "profile-parent"
};
var _hoisted_41 = ["src"];
var _hoisted_42 = {
  "class": "ranking-img"
};
var _hoisted_43 = ["src"];
var _hoisted_44 = {
  "class": "title-school"
};
var _hoisted_45 = {
  "class": "school-rating"
};

var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-star rating-icon",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_47 = {
  key: 2,
  "class": "col-4 text-center"
};
var _hoisted_48 = {
  "class": "profile-parent"
};
var _hoisted_49 = ["src"];
var _hoisted_50 = {
  "class": "ranking-img"
};
var _hoisted_51 = ["src"];
var _hoisted_52 = {
  "class": "title-school"
};
var _hoisted_53 = {
  "class": "school-rating"
};

var _hoisted_54 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-star rating-icon",
    "aria-hidden": "true"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_55 = {
  key: 1,
  "class": "container-fluid"
};

var _hoisted_56 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "No Record Found", -1
  /* HOISTED */
  );
});

var _hoisted_57 = [_hoisted_56];
var _hoisted_58 = {
  key: 2,
  "class": "row align-items-end"
};
var _hoisted_59 = {
  key: 0,
  "class": "col-4 text-center"
};
var _hoisted_60 = {
  "class": "profile-parent"
};
var _hoisted_61 = ["src"];
var _hoisted_62 = {
  "class": "ranking-img"
};
var _hoisted_63 = ["src"];
var _hoisted_64 = {
  "class": "title-school"
};
var _hoisted_65 = {
  "class": "school-rating"
};
var _hoisted_66 = {
  key: 1,
  "class": "col-4 text-center"
};
var _hoisted_67 = {
  "class": "profile-parent"
};
var _hoisted_68 = ["src"];
var _hoisted_69 = {
  "class": "ranking-img"
};
var _hoisted_70 = ["src"];
var _hoisted_71 = {
  "class": "title-school"
};
var _hoisted_72 = {
  "class": "school-rating"
};
var _hoisted_73 = {
  key: 2,
  "class": "col-4 text-center"
};
var _hoisted_74 = {
  "class": "profile-parent"
};
var _hoisted_75 = ["src"];
var _hoisted_76 = {
  "class": "ranking-img"
};
var _hoisted_77 = ["src"];
var _hoisted_78 = {
  "class": "title-school"
};
var _hoisted_79 = {
  "class": "school-rating"
};
var _hoisted_80 = {
  key: 1,
  "class": "container-fluid"
};

var _hoisted_81 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "No Record Found", -1
  /* HOISTED */
  );
});

var _hoisted_82 = [_hoisted_81];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$OVERALL, _$setup$MATCHES, _$setup$CHALLENGES;

  var _component_Filter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Filter");

  var _component_Tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Tabs");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$router.push('/dashboard');
    }),
    href: "javascript:void(0);"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.baseUrl + 'images/cross.png'
  }, null, 8
  /* PROPS */
  , _hoisted_4)])]), _hoisted_5])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Filter), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [$setup.TABS === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [((_$setup$OVERALL = $setup.OVERALL) === null || _$setup$OVERALL === void 0 ? void 0 : _$setup$OVERALL.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.OVERALL, function (ALL, INDEX) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(ALL === null || ALL === void 0 ? void 0 : ALL.rank) == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "school-profile",
      src: _ctx.baseUrl + 'images/school-profile.png'
    }, null, 8
    /* PROPS */
    , _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "",
      src: _ctx.baseUrl + 'images/2nd.png'
    }, null, 8
    /* PROPS */
    , _hoisted_13)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ALL === null || ALL === void 0 ? void 0 : ALL.organization_name), 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (ALL === null || ALL === void 0 ? void 0 : ALL.rank) == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "school-profile-first-position",
      src: _ctx.baseUrl + 'images/school-profile.png'
    }, null, 8
    /* PROPS */
    , _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "",
      src: _ctx.baseUrl + 'images/1st.png'
    }, null, 8
    /* PROPS */
    , _hoisted_19)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ALL === null || ALL === void 0 ? void 0 : ALL.organization_name), 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (ALL === null || ALL === void 0 ? void 0 : ALL.rank) == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "school-profile",
      src: _ctx.baseUrl + 'images/school-profile.png'
    }, null, 8
    /* PROPS */
    , _hoisted_23), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "",
      src: _ctx.baseUrl + 'images/3rd.png'
    }, null, 8
    /* PROPS */
    , _hoisted_25)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ALL === null || ALL === void 0 ? void 0 : ALL.organization_name), 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, _hoisted_29))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.TABS === 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [((_$setup$MATCHES = $setup.MATCHES) === null || _$setup$MATCHES === void 0 ? void 0 : _$setup$MATCHES.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.MATCHES, function (MATCH, INDEX) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(MATCH === null || MATCH === void 0 ? void 0 : MATCH.rank) == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "school-profile",
      src: _ctx.baseUrl + 'images/school-profile.png'
    }, null, 8
    /* PROPS */
    , _hoisted_33), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "",
      src: _ctx.baseUrl + 'images/2nd.png'
    }, null, 8
    /* PROPS */
    , _hoisted_35)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(MATCH === null || MATCH === void 0 ? void 0 : MATCH.organization_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(MATCH === null || MATCH === void 0 ? void 0 : MATCH.score), 1
    /* TEXT */
    )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (MATCH === null || MATCH === void 0 ? void 0 : MATCH.rank) == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "school-profile-first-position",
      src: _ctx.baseUrl + 'images/school-profile.png'
    }, null, 8
    /* PROPS */
    , _hoisted_41), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "",
      src: _ctx.baseUrl + 'images/1st.png'
    }, null, 8
    /* PROPS */
    , _hoisted_43)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(MATCH === null || MATCH === void 0 ? void 0 : MATCH.organization_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(MATCH === null || MATCH === void 0 ? void 0 : MATCH.score), 1
    /* TEXT */
    )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (MATCH === null || MATCH === void 0 ? void 0 : MATCH.rank) == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "school-profile",
      src: _ctx.baseUrl + 'images/school-profile.png'
    }, null, 8
    /* PROPS */
    , _hoisted_49), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "",
      src: _ctx.baseUrl + 'images/3rd.png'
    }, null, 8
    /* PROPS */
    , _hoisted_51)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(MATCH === null || MATCH === void 0 ? void 0 : MATCH.organization_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(MATCH === null || MATCH === void 0 ? void 0 : MATCH.score), 1
    /* TEXT */
    )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_55, _hoisted_57))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.TABS === 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_58, [((_$setup$CHALLENGES = $setup.CHALLENGES) === null || _$setup$CHALLENGES === void 0 ? void 0 : _$setup$CHALLENGES.length) > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.CHALLENGES, function (CHALLENGE, INDEX) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(CHALLENGE === null || CHALLENGE === void 0 ? void 0 : CHALLENGE.rank) == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "school-profile",
      src: _ctx.baseUrl + 'images/school-profile.png'
    }, null, 8
    /* PROPS */
    , _hoisted_61), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "",
      src: _ctx.baseUrl + 'images/2nd.png'
    }, null, 8
    /* PROPS */
    , _hoisted_63)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(CHALLENGE === null || CHALLENGE === void 0 ? void 0 : CHALLENGE.organization_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(CHALLENGE === null || CHALLENGE === void 0 ? void 0 : CHALLENGE.ranking_percentage) + " %", 1
    /* TEXT */
    )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (CHALLENGE === null || CHALLENGE === void 0 ? void 0 : CHALLENGE.rank) == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "school-profile-first-position",
      src: _ctx.baseUrl + 'images/school-profile.png'
    }, null, 8
    /* PROPS */
    , _hoisted_68), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "",
      src: _ctx.baseUrl + 'images/1st.png'
    }, null, 8
    /* PROPS */
    , _hoisted_70)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(CHALLENGE === null || CHALLENGE === void 0 ? void 0 : CHALLENGE.organization_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(CHALLENGE === null || CHALLENGE === void 0 ? void 0 : CHALLENGE.ranking_percentage) + " %", 1
    /* TEXT */
    )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (CHALLENGE === null || CHALLENGE === void 0 ? void 0 : CHALLENGE.rank) == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "school-profile",
      src: _ctx.baseUrl + 'images/school-profile.png'
    }, null, 8
    /* PROPS */
    , _hoisted_75), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "",
      src: _ctx.baseUrl + 'images/3rd.png'
    }, null, 8
    /* PROPS */
    , _hoisted_77)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(CHALLENGE === null || CHALLENGE === void 0 ? void 0 : CHALLENGE.organization_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(CHALLENGE === null || CHALLENGE === void 0 ? void 0 : CHALLENGE.ranking_percentage) + " %", 1
    /* TEXT */
    )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_80, _hoisted_82))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Tabs, {
    onTabs: $setup.TABS_FUNC
  }, null, 8
  /* PROPS */
  , ["onTabs"])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.main[data-v-c86b6838] {\r\n    background-color: #fff;\r\n    min-height: 100vh;\n}\n.header-fixed[data-v-c86b6838] {\r\n    position: fixed;\r\n    width: 100%;\r\n    background: white;\r\n    z-index: 999;\n}\n.header[data-v-c86b6838] {\r\n    min-height: 50px;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.matches-header[data-v-c86b6838]{\r\n    min-height: 30px;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.header .icon[data-v-c86b6838] {\r\n    position: absolute;\r\n    left: 15px;\n}\n.title[data-v-c86b6838] {\r\n    flex: 1;\r\n    text-align: center;\n}\n.title h2[data-v-c86b6838] {\r\n    margin-bottom: 0;\r\n    font-size: 17px;\r\n    font-weight: 700;\n}\n.entry-count h2[data-v-c86b6838] {\r\n    margin-bottom: 0;\r\n    font-size: 17px;\r\n    font-weight: 500;\n}\n.cards-container[data-v-c86b6838] {\r\n    border: none;\r\n    border-bottom: none;\r\n    border-radius: 5px;\n}\n.card-row[data-v-c86b6838] {\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 5px;\n}\n.single-card-parent[data-v-c86b6838] {\r\n    padding: 5px 0;\n}\n.single-card-parent .container[data-v-c86b6838] {\r\n    margin: 0;\r\n    max-width: 100%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 12px;\n}\n.profile-image[data-v-c86b6838] {\r\n    max-width: 60px;\r\n    padding: 0 0 0 7px;\n}\n.profile-text[data-v-c86b6838] {\r\n    padding: 0 0 0 7px;\n}\n.profile-text h2[data-v-c86b6838] {\r\n    font-size: 17px;\r\n    font-weight: 900;\n}\n.profile-text h4[data-v-c86b6838] {\r\n    font-size: 15px;\r\n    font-weight: 100;\r\n    margin: 0;\n}\n.rating-numb-icon[data-v-c86b6838] {\r\n    color: #fdb714;\r\n    font-size: 12px;\n}\n.profile-star-rating[data-v-c86b6838] {\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\n}\n.profile-star-rating h4[data-v-c86b6838] {\r\n    font-size: 15px;\r\n    font-weight: 100;\r\n    margin: 0;\n}\n.container-padding-control[data-v-c86b6838] {\r\n    padding: 90px 20px 5px 20px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.main[data-v-56f475ff] {\r\n        background-color: #fff;\r\n        min-height: 100vh;\n}\n.header[data-v-56f475ff] {\r\n        min-height: 50px;\r\n        \r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\n}\n.header .icon[data-v-56f475ff] {\r\n        position: absolute;\r\n        left: 15px;\n}\n.header .title[data-v-56f475ff] {\r\n        flex: 1;\r\n        text-align: center;\n}\n.header .title h2[data-v-56f475ff] {\r\n        margin-bottom: 0;\r\n        font-size: 17px;\r\n        font-weight: 700;\n}\n.media_wrapper .video[data-v-56f475ff] {margin-bottom: 15px;height: 200px;}\n.media_wrapper .image[data-v-56f475ff] {margin-bottom: 15px;height: 300px;}\n.media_wrapper .image img[data-v-56f475ff] {\r\n        width: 100%;\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\n}\n.media_wrapper .content[data-v-56f475ff] {\r\n        margin-top: 15px;\n}\n.media_wrapper .content h2[data-v-56f475ff] {\r\n        font-size: 17px;\r\n        margin-bottom: 0;\r\n        font-weight: 700;\n}\n.media_wrapper .content label[data-v-56f475ff] {\r\n        font-size: 15px;\r\n        color: #8b8b8b;\n}\n.media_wrapper .content p[data-v-56f475ff] {\r\n        font-size: 14px;\n}\r\n    \r\n    \r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.main[data-v-f7b760ce] {\r\n        background-color: #fff;\r\n        min-height: 100vh;\n}\n.header[data-v-f7b760ce] {\r\n        min-height: 50px;\r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\n}\n.header .icon[data-v-f7b760ce] {\r\n        position: absolute;\r\n        left: 15px;\n}\n.header .title[data-v-f7b760ce] {\r\n        flex: 1;\r\n        text-align: center;\n}\n.header .title h2[data-v-f7b760ce] {\r\n        margin-bottom: 0;\r\n        font-size: 17px;\r\n        font-weight: 700;\n}\n.question-section[data-v-f7b760ce] {\r\n        background-color: #f0f1f1;\r\n        min-height: 100vh;\n}\n#accordians[data-v-f7b760ce] {\r\n        margin-top: 15px;\n}\n.inner-card[data-v-f7b760ce] {\r\n        padding: .75rem 1.25rem;\r\n        display: flex;\r\n        align-items: center;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.main[data-v-e56d5532] {\r\n    background-color: #f0f1f1;\r\n    min-height: 100vh;\n}\n.header[data-v-e56d5532] {\r\n    background-color: #455666;\r\n    min-height: 50px;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.header .icon[data-v-e56d5532] {\r\n    position: absolute;\r\n    left: 15px;\n}\n.header .title[data-v-e56d5532] {\r\n    flex: 1;\r\n    color: white;\r\n    text-align: center;\n}\n.header .title h2[data-v-e56d5532] {\r\n    margin-bottom: 0;\r\n    font-size: 17px;\r\n    font-weight: 700;\n}\n.title-school[data-v-e56d5532] {\r\n    font-size: 13px;\n}\n.school-profile[data-v-e56d5532] {\r\n    max-width: 100%;\n}\n.school-profile-first-position[data-v-e56d5532] {\r\n    max-width: 100%;\r\n    min-height: 80px;\n}\n.school-rating[data-v-e56d5532] {\r\n    padding: 2px 10px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    max-width: -moz-max-content;\r\n    max-width: max-content;\r\n    margin: 0 auto;\r\n    background-color: white;\r\n    border-radius: 15px;\n}\n.school-rating h4[data-v-e56d5532] {\r\n    font-size: 15px;\r\n    font-weight: 100;\r\n    margin: 0;\r\n    padding-left: 10px;\n}\n.rating-icon[data-v-e56d5532]{\r\n    color:#fdb714;\r\n    font-size: 12px;\n}\n.profile-parent[data-v-e56d5532]{\r\n    max-width: -moz-max-content;\r\n    max-width: max-content;\r\n    position: relative;\r\n    margin: 0 auto;\r\n    margin-bottom: 15px;\n}\n.ranking-img[data-v-e56d5532]{\r\n    position: absolute;\r\n    right: -15px;\r\n    bottom: -10px;\r\n    width: 50px;\n}\n.top_ranks[data-v-e56d5532] {\r\n    min-height: 155px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Matches_vue_vue_type_style_index_0_id_c86b6838_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Matches_vue_vue_type_style_index_0_id_c86b6838_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Matches_vue_vue_type_style_index_0_id_c86b6838_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectContent_vue_vue_type_style_index_0_id_56f475ff_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectContent_vue_vue_type_style_index_0_id_56f475ff_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectContent_vue_vue_type_style_index_0_id_56f475ff_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_f7b760ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_f7b760ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_f7b760ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ranking_vue_vue_type_style_index_0_id_e56d5532_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ranking_vue_vue_type_style_index_0_id_e56d5532_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ranking_vue_vue_type_style_index_0_id_e56d5532_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Matches.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Matches.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Matches_vue_vue_type_template_id_c86b6838_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matches.vue?vue&type=template&id=c86b6838&scoped=true */ "./resources/js/views/Matches.vue?vue&type=template&id=c86b6838&scoped=true");
/* harmony import */ var _Matches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matches.vue?vue&type=script&lang=js */ "./resources/js/views/Matches.vue?vue&type=script&lang=js");
/* harmony import */ var _Matches_vue_vue_type_style_index_0_id_c86b6838_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css */ "./resources/js/views/Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Matches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Matches_vue_vue_type_template_id_c86b6838_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-c86b6838"],['__file',"resources/js/views/Matches.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/ProjectContent.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/ProjectContent.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectContent_vue_vue_type_template_id_56f475ff_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectContent.vue?vue&type=template&id=56f475ff&scoped=true */ "./resources/js/views/ProjectContent.vue?vue&type=template&id=56f475ff&scoped=true");
/* harmony import */ var _ProjectContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectContent.vue?vue&type=script&lang=js */ "./resources/js/views/ProjectContent.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectContent_vue_vue_type_style_index_0_id_56f475ff_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css */ "./resources/js/views/ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ProjectContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProjectContent_vue_vue_type_template_id_56f475ff_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-56f475ff"],['__file',"resources/js/views/ProjectContent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Projects.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Projects.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projects_vue_vue_type_template_id_f7b760ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=f7b760ce&scoped=true */ "./resources/js/views/Projects.vue?vue&type=template&id=f7b760ce&scoped=true");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js */ "./resources/js/views/Projects.vue?vue&type=script&lang=js");
/* harmony import */ var _Projects_vue_vue_type_style_index_0_id_f7b760ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css */ "./resources/js/views/Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Projects_vue_vue_type_template_id_f7b760ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f7b760ce"],['__file',"resources/js/views/Projects.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Ranking.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Ranking.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ranking_vue_vue_type_template_id_e56d5532_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ranking.vue?vue&type=template&id=e56d5532&scoped=true */ "./resources/js/views/Ranking.vue?vue&type=template&id=e56d5532&scoped=true");
/* harmony import */ var _Ranking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ranking.vue?vue&type=script&lang=js */ "./resources/js/views/Ranking.vue?vue&type=script&lang=js");
/* harmony import */ var _Ranking_vue_vue_type_style_index_0_id_e56d5532_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css */ "./resources/js/views/Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_fractal_mind_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Ranking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Ranking_vue_vue_type_template_id_e56d5532_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-e56d5532"],['__file',"resources/js/views/Ranking.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Matches.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/views/Matches.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Matches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Matches_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Matches.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/ProjectContent.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/views/ProjectContent.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectContent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Projects.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Projects.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Ranking.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/views/Ranking.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ranking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ranking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Ranking.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Matches.vue?vue&type=template&id=c86b6838&scoped=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Matches.vue?vue&type=template&id=c86b6838&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Matches_vue_vue_type_template_id_c86b6838_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Matches_vue_vue_type_template_id_c86b6838_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Matches.vue?vue&type=template&id=c86b6838&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=template&id=c86b6838&scoped=true");


/***/ }),

/***/ "./resources/js/views/ProjectContent.vue?vue&type=template&id=56f475ff&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/ProjectContent.vue?vue&type=template&id=56f475ff&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectContent_vue_vue_type_template_id_56f475ff_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectContent_vue_vue_type_template_id_56f475ff_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectContent.vue?vue&type=template&id=56f475ff&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=template&id=56f475ff&scoped=true");


/***/ }),

/***/ "./resources/js/views/Projects.vue?vue&type=template&id=f7b760ce&scoped=true":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Projects.vue?vue&type=template&id=f7b760ce&scoped=true ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_f7b760ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_f7b760ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=template&id=f7b760ce&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=template&id=f7b760ce&scoped=true");


/***/ }),

/***/ "./resources/js/views/Ranking.vue?vue&type=template&id=e56d5532&scoped=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Ranking.vue?vue&type=template&id=e56d5532&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ranking_vue_vue_type_template_id_e56d5532_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ranking_vue_vue_type_template_id_e56d5532_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Ranking.vue?vue&type=template&id=e56d5532&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=template&id=e56d5532&scoped=true");


/***/ }),

/***/ "./resources/js/views/Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Matches_vue_vue_type_style_index_0_id_c86b6838_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Matches.vue?vue&type=style&index=0&id=c86b6838&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectContent_vue_vue_type_style_index_0_id_56f475ff_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/ProjectContent.vue?vue&type=style&index=0&id=56f475ff&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_style_index_0_id_f7b760ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Projects.vue?vue&type=style&index=0&id=f7b760ce&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Ranking_vue_vue_type_style_index_0_id_e56d5532_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Ranking.vue?vue&type=style&index=0&id=e56d5532&scoped=true&lang=css");


/***/ })

}]);