(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
      var map = {
        "./af": "./node_modules/moment/locale/af.js",
        "./af.js": "./node_modules/moment/locale/af.js",
        "./ar": "./node_modules/moment/locale/ar.js",
        "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
        "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
        "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
        "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
        "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
        "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
        "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
        "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
        "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
        "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
        "./ar.js": "./node_modules/moment/locale/ar.js",
        "./az": "./node_modules/moment/locale/az.js",
        "./az.js": "./node_modules/moment/locale/az.js",
        "./be": "./node_modules/moment/locale/be.js",
        "./be.js": "./node_modules/moment/locale/be.js",
        "./bg": "./node_modules/moment/locale/bg.js",
        "./bg.js": "./node_modules/moment/locale/bg.js",
        "./bm": "./node_modules/moment/locale/bm.js",
        "./bm.js": "./node_modules/moment/locale/bm.js",
        "./bn": "./node_modules/moment/locale/bn.js",
        "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
        "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
        "./bn.js": "./node_modules/moment/locale/bn.js",
        "./bo": "./node_modules/moment/locale/bo.js",
        "./bo.js": "./node_modules/moment/locale/bo.js",
        "./br": "./node_modules/moment/locale/br.js",
        "./br.js": "./node_modules/moment/locale/br.js",
        "./bs": "./node_modules/moment/locale/bs.js",
        "./bs.js": "./node_modules/moment/locale/bs.js",
        "./ca": "./node_modules/moment/locale/ca.js",
        "./ca.js": "./node_modules/moment/locale/ca.js",
        "./cs": "./node_modules/moment/locale/cs.js",
        "./cs.js": "./node_modules/moment/locale/cs.js",
        "./cv": "./node_modules/moment/locale/cv.js",
        "./cv.js": "./node_modules/moment/locale/cv.js",
        "./cy": "./node_modules/moment/locale/cy.js",
        "./cy.js": "./node_modules/moment/locale/cy.js",
        "./da": "./node_modules/moment/locale/da.js",
        "./da.js": "./node_modules/moment/locale/da.js",
        "./de": "./node_modules/moment/locale/de.js",
        "./de-at": "./node_modules/moment/locale/de-at.js",
        "./de-at.js": "./node_modules/moment/locale/de-at.js",
        "./de-ch": "./node_modules/moment/locale/de-ch.js",
        "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
        "./de.js": "./node_modules/moment/locale/de.js",
        "./dv": "./node_modules/moment/locale/dv.js",
        "./dv.js": "./node_modules/moment/locale/dv.js",
        "./el": "./node_modules/moment/locale/el.js",
        "./el.js": "./node_modules/moment/locale/el.js",
        "./en-au": "./node_modules/moment/locale/en-au.js",
        "./en-au.js": "./node_modules/moment/locale/en-au.js",
        "./en-ca": "./node_modules/moment/locale/en-ca.js",
        "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
        "./en-gb": "./node_modules/moment/locale/en-gb.js",
        "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
        "./en-ie": "./node_modules/moment/locale/en-ie.js",
        "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
        "./en-il": "./node_modules/moment/locale/en-il.js",
        "./en-il.js": "./node_modules/moment/locale/en-il.js",
        "./en-in": "./node_modules/moment/locale/en-in.js",
        "./en-in.js": "./node_modules/moment/locale/en-in.js",
        "./en-nz": "./node_modules/moment/locale/en-nz.js",
        "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
        "./en-sg": "./node_modules/moment/locale/en-sg.js",
        "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
        "./eo": "./node_modules/moment/locale/eo.js",
        "./eo.js": "./node_modules/moment/locale/eo.js",
        "./es": "./node_modules/moment/locale/es.js",
        "./es-do": "./node_modules/moment/locale/es-do.js",
        "./es-do.js": "./node_modules/moment/locale/es-do.js",
        "./es-mx": "./node_modules/moment/locale/es-mx.js",
        "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
        "./es-us": "./node_modules/moment/locale/es-us.js",
        "./es-us.js": "./node_modules/moment/locale/es-us.js",
        "./es.js": "./node_modules/moment/locale/es.js",
        "./et": "./node_modules/moment/locale/et.js",
        "./et.js": "./node_modules/moment/locale/et.js",
        "./eu": "./node_modules/moment/locale/eu.js",
        "./eu.js": "./node_modules/moment/locale/eu.js",
        "./fa": "./node_modules/moment/locale/fa.js",
        "./fa.js": "./node_modules/moment/locale/fa.js",
        "./fi": "./node_modules/moment/locale/fi.js",
        "./fi.js": "./node_modules/moment/locale/fi.js",
        "./fil": "./node_modules/moment/locale/fil.js",
        "./fil.js": "./node_modules/moment/locale/fil.js",
        "./fo": "./node_modules/moment/locale/fo.js",
        "./fo.js": "./node_modules/moment/locale/fo.js",
        "./fr": "./node_modules/moment/locale/fr.js",
        "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
        "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
        "./fr.js": "./node_modules/moment/locale/fr.js",
        "./fy": "./node_modules/moment/locale/fy.js",
        "./fy.js": "./node_modules/moment/locale/fy.js",
        "./ga": "./node_modules/moment/locale/ga.js",
        "./ga.js": "./node_modules/moment/locale/ga.js",
        "./gd": "./node_modules/moment/locale/gd.js",
        "./gd.js": "./node_modules/moment/locale/gd.js",
        "./gl": "./node_modules/moment/locale/gl.js",
        "./gl.js": "./node_modules/moment/locale/gl.js",
        "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
        "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
        "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
        "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
        "./gu": "./node_modules/moment/locale/gu.js",
        "./gu.js": "./node_modules/moment/locale/gu.js",
        "./he": "./node_modules/moment/locale/he.js",
        "./he.js": "./node_modules/moment/locale/he.js",
        "./hi": "./node_modules/moment/locale/hi.js",
        "./hi.js": "./node_modules/moment/locale/hi.js",
        "./hr": "./node_modules/moment/locale/hr.js",
        "./hr.js": "./node_modules/moment/locale/hr.js",
        "./hu": "./node_modules/moment/locale/hu.js",
        "./hu.js": "./node_modules/moment/locale/hu.js",
        "./hy-am": "./node_modules/moment/locale/hy-am.js",
        "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
        "./id": "./node_modules/moment/locale/id.js",
        "./id.js": "./node_modules/moment/locale/id.js",
        "./is": "./node_modules/moment/locale/is.js",
        "./is.js": "./node_modules/moment/locale/is.js",
        "./it": "./node_modules/moment/locale/it.js",
        "./it-ch": "./node_modules/moment/locale/it-ch.js",
        "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
        "./it.js": "./node_modules/moment/locale/it.js",
        "./ja": "./node_modules/moment/locale/ja.js",
        "./ja.js": "./node_modules/moment/locale/ja.js",
        "./jv": "./node_modules/moment/locale/jv.js",
        "./jv.js": "./node_modules/moment/locale/jv.js",
        "./ka": "./node_modules/moment/locale/ka.js",
        "./ka.js": "./node_modules/moment/locale/ka.js",
        "./kk": "./node_modules/moment/locale/kk.js",
        "./kk.js": "./node_modules/moment/locale/kk.js",
        "./km": "./node_modules/moment/locale/km.js",
        "./km.js": "./node_modules/moment/locale/km.js",
        "./kn": "./node_modules/moment/locale/kn.js",
        "./kn.js": "./node_modules/moment/locale/kn.js",
        "./ko": "./node_modules/moment/locale/ko.js",
        "./ko.js": "./node_modules/moment/locale/ko.js",
        "./ku": "./node_modules/moment/locale/ku.js",
        "./ku.js": "./node_modules/moment/locale/ku.js",
        "./ky": "./node_modules/moment/locale/ky.js",
        "./ky.js": "./node_modules/moment/locale/ky.js",
        "./lb": "./node_modules/moment/locale/lb.js",
        "./lb.js": "./node_modules/moment/locale/lb.js",
        "./lo": "./node_modules/moment/locale/lo.js",
        "./lo.js": "./node_modules/moment/locale/lo.js",
        "./lt": "./node_modules/moment/locale/lt.js",
        "./lt.js": "./node_modules/moment/locale/lt.js",
        "./lv": "./node_modules/moment/locale/lv.js",
        "./lv.js": "./node_modules/moment/locale/lv.js",
        "./me": "./node_modules/moment/locale/me.js",
        "./me.js": "./node_modules/moment/locale/me.js",
        "./mi": "./node_modules/moment/locale/mi.js",
        "./mi.js": "./node_modules/moment/locale/mi.js",
        "./mk": "./node_modules/moment/locale/mk.js",
        "./mk.js": "./node_modules/moment/locale/mk.js",
        "./ml": "./node_modules/moment/locale/ml.js",
        "./ml.js": "./node_modules/moment/locale/ml.js",
        "./mn": "./node_modules/moment/locale/mn.js",
        "./mn.js": "./node_modules/moment/locale/mn.js",
        "./mr": "./node_modules/moment/locale/mr.js",
        "./mr.js": "./node_modules/moment/locale/mr.js",
        "./ms": "./node_modules/moment/locale/ms.js",
        "./ms-my": "./node_modules/moment/locale/ms-my.js",
        "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
        "./ms.js": "./node_modules/moment/locale/ms.js",
        "./mt": "./node_modules/moment/locale/mt.js",
        "./mt.js": "./node_modules/moment/locale/mt.js",
        "./my": "./node_modules/moment/locale/my.js",
        "./my.js": "./node_modules/moment/locale/my.js",
        "./nb": "./node_modules/moment/locale/nb.js",
        "./nb.js": "./node_modules/moment/locale/nb.js",
        "./ne": "./node_modules/moment/locale/ne.js",
        "./ne.js": "./node_modules/moment/locale/ne.js",
        "./nl": "./node_modules/moment/locale/nl.js",
        "./nl-be": "./node_modules/moment/locale/nl-be.js",
        "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
        "./nl.js": "./node_modules/moment/locale/nl.js",
        "./nn": "./node_modules/moment/locale/nn.js",
        "./nn.js": "./node_modules/moment/locale/nn.js",
        "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
        "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
        "./pa-in": "./node_modules/moment/locale/pa-in.js",
        "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
        "./pl": "./node_modules/moment/locale/pl.js",
        "./pl.js": "./node_modules/moment/locale/pl.js",
        "./pt": "./node_modules/moment/locale/pt.js",
        "./pt-br": "./node_modules/moment/locale/pt-br.js",
        "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
        "./pt.js": "./node_modules/moment/locale/pt.js",
        "./ro": "./node_modules/moment/locale/ro.js",
        "./ro.js": "./node_modules/moment/locale/ro.js",
        "./ru": "./node_modules/moment/locale/ru.js",
        "./ru.js": "./node_modules/moment/locale/ru.js",
        "./sd": "./node_modules/moment/locale/sd.js",
        "./sd.js": "./node_modules/moment/locale/sd.js",
        "./se": "./node_modules/moment/locale/se.js",
        "./se.js": "./node_modules/moment/locale/se.js",
        "./si": "./node_modules/moment/locale/si.js",
        "./si.js": "./node_modules/moment/locale/si.js",
        "./sk": "./node_modules/moment/locale/sk.js",
        "./sk.js": "./node_modules/moment/locale/sk.js",
        "./sl": "./node_modules/moment/locale/sl.js",
        "./sl.js": "./node_modules/moment/locale/sl.js",
        "./sq": "./node_modules/moment/locale/sq.js",
        "./sq.js": "./node_modules/moment/locale/sq.js",
        "./sr": "./node_modules/moment/locale/sr.js",
        "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr.js": "./node_modules/moment/locale/sr.js",
        "./ss": "./node_modules/moment/locale/ss.js",
        "./ss.js": "./node_modules/moment/locale/ss.js",
        "./sv": "./node_modules/moment/locale/sv.js",
        "./sv.js": "./node_modules/moment/locale/sv.js",
        "./sw": "./node_modules/moment/locale/sw.js",
        "./sw.js": "./node_modules/moment/locale/sw.js",
        "./ta": "./node_modules/moment/locale/ta.js",
        "./ta.js": "./node_modules/moment/locale/ta.js",
        "./te": "./node_modules/moment/locale/te.js",
        "./te.js": "./node_modules/moment/locale/te.js",
        "./tet": "./node_modules/moment/locale/tet.js",
        "./tet.js": "./node_modules/moment/locale/tet.js",
        "./tg": "./node_modules/moment/locale/tg.js",
        "./tg.js": "./node_modules/moment/locale/tg.js",
        "./th": "./node_modules/moment/locale/th.js",
        "./th.js": "./node_modules/moment/locale/th.js",
        "./tk": "./node_modules/moment/locale/tk.js",
        "./tk.js": "./node_modules/moment/locale/tk.js",
        "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
        "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
        "./tlh": "./node_modules/moment/locale/tlh.js",
        "./tlh.js": "./node_modules/moment/locale/tlh.js",
        "./tr": "./node_modules/moment/locale/tr.js",
        "./tr.js": "./node_modules/moment/locale/tr.js",
        "./tzl": "./node_modules/moment/locale/tzl.js",
        "./tzl.js": "./node_modules/moment/locale/tzl.js",
        "./tzm": "./node_modules/moment/locale/tzm.js",
        "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm.js": "./node_modules/moment/locale/tzm.js",
        "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
        "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
        "./uk": "./node_modules/moment/locale/uk.js",
        "./uk.js": "./node_modules/moment/locale/uk.js",
        "./ur": "./node_modules/moment/locale/ur.js",
        "./ur.js": "./node_modules/moment/locale/ur.js",
        "./uz": "./node_modules/moment/locale/uz.js",
        "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
        "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
        "./uz.js": "./node_modules/moment/locale/uz.js",
        "./vi": "./node_modules/moment/locale/vi.js",
        "./vi.js": "./node_modules/moment/locale/vi.js",
        "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
        "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
        "./yo": "./node_modules/moment/locale/yo.js",
        "./yo.js": "./node_modules/moment/locale/yo.js",
        "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
        "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
        "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
        "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
        "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
        "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
        "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
        "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/guards/auth.guard */
      "./src/app/core/guards/auth.guard.ts");
      /* harmony import */


      var _layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/layout/layout.component */
      "./src/app/layouts/layout/layout.component.ts");

      var routes = [{
        path: 'account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | account-account-module */
          "account-account-module").then(__webpack_require__.bind(null,
          /*! ./account/account.module */
          "./src/app/account/account.module.ts")).then(function (m) {
            return m.AccountModule;
          });
        }
      }, // tslint:disable-next-line: max-line-length
      {
        path: '',
        component: _layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/pages.module */
          "./src/app/pages/pages.module.ts")).then(function (m) {
            return m.PagesModule;
          });
        },
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'CERAMIC';
      });

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layouts/layouts.module */
      "./src/app/layouts/layouts.module.ts");
      /* harmony import */


      var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/pages.module */
      "./src/app/pages/pages.module.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _authUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./authUtils */
      "./src/app/authUtils.ts");
      /* harmony import */


      var _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./core/helpers/error.interceptor */
      "./src/app/core/helpers/error.interceptor.ts");
      /* harmony import */


      var _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./core/helpers/jwt.interceptor */
      "./src/app/core/helpers/jwt.interceptor.ts");
      /* harmony import */


      var _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./core/helpers/fake-backend */
      "./src/app/core/helpers/fake-backend.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].defaultauth === 'firebase') {
        Object(_authUtils__WEBPACK_IMPORTED_MODULE_10__["initFirebaseBackend"])(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig);
      } else {
        // tslint:disable-next-line: no-unused-expression
        _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_13__["FakeBackendInterceptor"];
      }

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
      }

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_13__["FakeBackendInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"], _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_6__["LayoutsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"], _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_6__["LayoutsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"], _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_6__["LayoutsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                useFactory: createTranslateLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
              }
            })],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_13__["FakeBackendInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/authUtils.ts":
    /*!******************************!*\
      !*** ./src/app/authUtils.ts ***!
      \******************************/

    /*! exports provided: initFirebaseBackend, getFirebaseBackend */

    /***/
    function srcAppAuthUtilsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initFirebaseBackend", function () {
        return initFirebaseBackend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getFirebaseBackend", function () {
        return getFirebaseBackend;
      });
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.cjs.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/auth */
      "./node_modules/firebase/auth/dist/index.esm.js");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/firestore */
      "./node_modules/firebase/firestore/dist/index.esm.js"); // Add the Firebase products that you want to use


      var FirebaseAuthBackend = /*#__PURE__*/function () {
        function FirebaseAuthBackend(firebaseConfig) {
          var _this = this;

          _classCallCheck(this, FirebaseAuthBackend);

          /**
           * Registers the user with given details
           */
          this.registerUser = function (email, password) {
            return new Promise(function (resolve, reject) {
              firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().currentUser;
                resolve(user);
              }, function (error) {
                reject(_this._handleError(error));
              });
            });
          };
          /**
           * Login user with given details
           */


          this.loginUser = function (email, password) {
            return new Promise(function (resolve, reject) {
              firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithEmailAndPassword(email, password).then(function (user) {
                // eslint-disable-next-line no-redeclare
                var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().currentUser;
                resolve(user);
              }, function (error) {
                reject(_this._handleError(error));
              });
            });
          };
          /**
           * forget Password user with given details
           */


          this.forgetPassword = function (email) {
            return new Promise(function (resolve, reject) {
              // tslint:disable-next-line: max-line-length
              firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().sendPasswordResetEmail(email, {
                url: window.location.protocol + '//' + window.location.host + '/login'
              }).then(function () {
                resolve(true);
              })["catch"](function (error) {
                reject(_this._handleError(error));
              });
            });
          };
          /**
           * Logout the user
           */


          this.logout = function () {
            return new Promise(function (resolve, reject) {
              firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().signOut().then(function () {
                resolve(true);
              })["catch"](function (error) {
                reject(_this._handleError(error));
              });
            });
          };

          this.setLoggeedInUser = function (user) {
            sessionStorage.setItem('authUser', JSON.stringify(user));
          };
          /**
           * Returns the authenticated user
           */


          this.getAuthenticatedUser = function () {
            if (!sessionStorage.getItem('authUser')) {
              return null;
            }

            return JSON.parse(sessionStorage.getItem('authUser'));
          };

          if (firebaseConfig) {
            // Initialize Firebase
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig);
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().onAuthStateChanged(function (user) {
              if (user) {
                sessionStorage.setItem('authUser', JSON.stringify(user));
              } else {
                sessionStorage.removeItem('authUser');
              }
            });
          }
        }
        /**
         * Handle the error
         * @param error error
         */


        _createClass(FirebaseAuthBackend, [{
          key: "_handleError",
          value: function _handleError(error) {
            // tslint:disable-next-line: prefer-const
            var errorMessage = error.message;
            return errorMessage;
          }
        }]);

        return FirebaseAuthBackend;
      }(); // tslint:disable-next-line: variable-name


      var _fireBaseBackend = null;
      /**
       * Initilize the backend
       * @param config configuration
       */

      var initFirebaseBackend = function initFirebaseBackend(config) {
        if (!_fireBaseBackend) {
          _fireBaseBackend = new FirebaseAuthBackend(config);
        }

        return _fireBaseBackend;
      };
      /**
       * Returns the firebase backend
       */


      var getFirebaseBackend = function getFirebaseBackend() {
        return _fireBaseBackend;
      };
      /***/

    },

    /***/
    "./src/app/core/guards/auth.guard.ts":
    /*!*******************************************!*\
      !*** ./src/app/core/guards/auth.guard.ts ***!
      \*******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppCoreGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/core/services/auth.service.ts");
      /* harmony import */


      var _services_authfake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/authfake.service */
      "./src/app/core/services/authfake.service.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService, authFackservice) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
          this.authFackservice = authFackservice;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultauth === 'firebase') {
              var currentUser = this.authenticationService.currentUser();

              if (currentUser) {
                // logged in so return true
                return true;
              }
            } else {
              var _currentUser = this.authFackservice.currentUserValue;

              if (_currentUser) {
                // logged in so return true
                return true;
              }
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/account/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.??fac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__["AuthfakeauthenticationService"]));
      };

      AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _services_authfake_service__WEBPACK_IMPORTED_MODULE_4__["AuthfakeauthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/helpers/error.interceptor.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/helpers/error.interceptor.ts ***!
      \***************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function srcAppCoreHelpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/core/services/auth.service.ts");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authenticationService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this2 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this2.authenticationService.logout();

                location.reload();
              }

              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.??fac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      ErrorInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/helpers/fake-backend.ts":
    /*!**********************************************!*\
      !*** ./src/app/core/helpers/fake-backend.ts ***!
      \**********************************************/

    /*! exports provided: FakeBackendInterceptor */

    /***/
    function srcAppCoreHelpersFakeBackendTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
        return FakeBackendInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var FakeBackendInterceptor = /*#__PURE__*/function () {
        function FakeBackendInterceptor() {
          _classCallCheck(this, FakeBackendInterceptor);
        }

        _createClass(FakeBackendInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // array in local storage for registered users
            // tslint:disable-next-line: max-line-length
            var users = JSON.parse(localStorage.getItem('users')) || [{
              username: 'admin',
              email: 'admin@themesbrand.com',
              password: '123456'
            }]; // wrap in delayed observable to simulate server api call

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
              // authenticate
              if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                var filteredUsers = users.filter(function (user) {
                  return user.email === request.body.email && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                  // if login details are valid return 200 OK with user details and fake jwt token
                  var user = filteredUsers[0];
                  var body = {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: 'fake-jwt-token'
                  };
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: body
                  }));
                } else {
                  // else return 400 bad request
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                    error: {
                      message: 'Username or password is incorrect'
                    }
                  });
                }
              } // get users


              if (request.url.endsWith('/users') && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: users
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                    status: 401,
                    error: {
                      message: 'Unauthorised'
                    }
                  });
                }
              } // get user by id


              if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  // find user by id in users array
                  var urlParts = request.url.split('/'); // tslint:disable-next-line: radix

                  var id = parseInt(urlParts[urlParts.length - 1]); // tslint:disable-next-line: no-shadowed-variable

                  var matchedUsers = users.filter(function (user) {
                    return user.id === id;
                  });

                  var _user = matchedUsers.length ? matchedUsers[0] : null;

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200,
                    body: _user
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                    status: 401,
                    error: {
                      message: 'Unauthorised'
                    }
                  });
                }
              } // register user


              if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser = request.body; // validation

                var duplicateUser = users.filter(function (user) {
                  return user.username === newUser.username;
                }).length;

                if (duplicateUser) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                    error: {
                      message: 'Username "' + newUser.username + '" is already taken'
                    }
                  });
                } // save new user


                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users)); // respond 200 OK

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                  status: 200
                }));
              } // delete user


              if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                  // find user by id in users array
                  var _urlParts = request.url.split('/'); // tslint:disable-next-line: radix


                  var _id = parseInt(_urlParts[_urlParts.length - 1]);

                  for (var i = 0; i < users.length; i++) {
                    var _user2 = users[i];

                    if (_user2.id === _id) {
                      // delete user
                      users.splice(i, 1);
                      localStorage.setItem('users', JSON.stringify(users));
                      break;
                    }
                  } // respond 200 OK


                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                    status: 200
                  }));
                } else {
                  // return 401 not authorised if token is null or invalid
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                    status: 401,
                    error: {
                      message: 'Unauthorised'
                    }
                  });
                }
              } // pass through any requests not handled above


              return next.handle(request);
            })) // tslint:disable-next-line: max-line-length
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
          }
        }]);

        return FakeBackendInterceptor;
      }();

      FakeBackendInterceptor.??fac = function FakeBackendInterceptor_Factory(t) {
        return new (t || FakeBackendInterceptor)();
      };

      FakeBackendInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: FakeBackendInterceptor,
        factory: FakeBackendInterceptor.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FakeBackendInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/helpers/jwt.interceptor.ts":
    /*!*************************************************!*\
      !*** ./src/app/core/helpers/jwt.interceptor.ts ***!
      \*************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function srcAppCoreHelpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/core/services/auth.service.ts");
      /* harmony import */


      var _services_authfake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/authfake.service */
      "./src/app/core/services/authfake.service.ts");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService, authfackservice) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
          this.authfackservice = authfackservice;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultauth === 'firebase') {
              var currentUser = this.authenticationService.currentUser();

              if (currentUser && currentUser.token) {
                request = request.clone({
                  setHeaders: {
                    Authorization: "Bearer ".concat(currentUser.token)
                  }
                });
              }
            } else {
              // add authorization header with jwt token if available
              var _currentUser2 = this.authfackservice.currentUserValue;

              if (_currentUser2 && _currentUser2.token) {
                request = request.clone({
                  setHeaders: {
                    Authorization: "Bearer ".concat(_currentUser2.token)
                  }
                });
              }
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.??fac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_3__["AuthfakeauthenticationService"]));
      };

      JwtInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }, {
            type: _services_authfake_service__WEBPACK_IMPORTED_MODULE_3__["AuthfakeauthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/Qr.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/core/services/Qr.service.ts ***!
      \*********************************************/

    /*! exports provided: QrService */

    /***/
    function srcAppCoreServicesQrServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrService", function () {
        return QrService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // import { HttpHeaders } from '@angular/common/http';


      var QrService = /*#__PURE__*/function () {
        function QrService(http) {
          _classCallCheck(this, QrService);

          this.http = http;
          this.baseUrl = 'http://localhost:3000';
        }

        _createClass(QrService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get(this.baseUrl + '/utilisateurs').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleHttpError));
          }
        }, {
          key: "getLastUser",
          value: function getLastUser() {
            return this.http.get(this.baseUrl + '/lastuser').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleHttpError));
          } //    getAll(){
          //    this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data =>{
          //     this.data.push(data);
          //     console.log(this.data);
          //   }, error=> console.error(error));
          // }

        }, {
          key: "fetchAll",
          value: function fetchAll() {
            return this.http.get('https://jsonplaceholder.typicode.com/comments', {
              responseType: "json"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              return console.log('fetched Codes');
            }));
          } // public create(Code):Observable<any> {
          //   // console.log(qrCode);
          //   return this.http.post<any>('https://ceramic-services.000webhostapp.com/ceramic/web/setQrCode.php', Code).pipe(
          //     catchError(this.handleHttpError));
          //   // return this.http.post<string>('http://localhost:80/ceramic/setQrCode.php', qrCode);
          // }

        }, {
          key: "getHotels",
          value: function getHotels() {
            return this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleHttpError));
          } // const httpOptions = {
          //   headers: new HttpHeaders({
          //     'Content-Type':  'application/json',
          //     // 'Authorization': 'mon-jeton'
          //   })
          // };
          // "https://ceramic-services.000webhostapp.com/ceramic/web/setQrCode.php"
          // create(formData: FormData): Observable<any> {
          //  return this.http.post<string>('https://jsonplaceholder.typicode.com/posts', formData)
          //    .pipe(
          //      catchError(this.handleHttpError)
          //    );
          // }

        }, {
          key: "create",
          value: function create(data) {
            return this.http.post('http://localhost:3000/addcode', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleHttpError));
          }
        }, {
          key: "handleHttpError",
          value: function handleHttpError(err) {
            var error;

            if (err.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', err.error.message);
              error = "An error occurred: ".concat(err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(err.status, ", ") + "body was: ".concat(err.error));
              error = "Backend returned code ".concat(err.status, ", body was: ").concat(err.error);
            } // Return an observable with a user-facing error message.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.' + '\n' + error);
          }
        }]);

        return QrService;
      }();

      QrService.??fac = function QrService_Factory(t) {
        return new (t || QrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      QrService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: QrService,
        factory: QrService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](QrService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/auth.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/core/services/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function srcAppCoreServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _authUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../authUtils */
      "./src/app/authUtils.ts");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService() {
          _classCallCheck(this, AuthenticationService);
        }
        /**
         * Returns the current user
         */


        _createClass(AuthenticationService, [{
          key: "currentUser",
          value: function currentUser() {
            return Object(_authUtils__WEBPACK_IMPORTED_MODULE_1__["getFirebaseBackend"])().getAuthenticatedUser();
          }
          /**
           * Performs the auth
           * @param email email of user
           * @param password password of user
           */

        }, {
          key: "login",
          value: function login(email, password) {
            return Object(_authUtils__WEBPACK_IMPORTED_MODULE_1__["getFirebaseBackend"])().loginUser(email, password).then(function (response) {
              var user = response;
              return user;
            });
          }
          /**
           * Performs the register
           * @param email email
           * @param password password
           */

        }, {
          key: "register",
          value: function register(email, password) {
            return Object(_authUtils__WEBPACK_IMPORTED_MODULE_1__["getFirebaseBackend"])().registerUser(email, password).then(function (response) {
              var user = response;
              return user;
            });
          }
          /**
           * Reset password
           * @param email email
           */

        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            return Object(_authUtils__WEBPACK_IMPORTED_MODULE_1__["getFirebaseBackend"])().forgetPassword(email).then(function (response) {
              var message = response.data;
              return message;
            });
          }
          /**
           * Logout the user
           */

        }, {
          key: "logout",
          value: function logout() {
            // logout the user
            Object(_authUtils__WEBPACK_IMPORTED_MODULE_1__["getFirebaseBackend"])().logout();
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.??fac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)();
      };

      AuthenticationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/authfake.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/services/authfake.service.ts ***!
      \***************************************************/

    /*! exports provided: AuthfakeauthenticationService */

    /***/
    function srcAppCoreServicesAuthfakeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthfakeauthenticationService", function () {
        return AuthfakeauthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AuthfakeauthenticationService = /*#__PURE__*/function () {
        function AuthfakeauthenticationService(http) {
          _classCallCheck(this, AuthfakeauthenticationService);

          this.http = http;
          this.baseUrl = 'http://localhost:3000';
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthfakeauthenticationService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "login",
          value: function login() {
            var _this3 = this;

            return this.http.get(this.baseUrl + "/ceramicauth").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              // login successful if there's a jwt token in the response
              if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));

                _this3.currentUserSubject.next(user); // console.log("user :"+ user);

              }

              return user;
            }));
          }
        }, {
          key: "getmdp",
          value: function getmdp() {
            return this.http.get(this.baseUrl + '/ceramicauth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleHttpError));
          } // logout() {
          //     // remove user from local storage to log user out
          //     localStorage.removeItem('currentUser');
          //     this.currentUserSubject.next(null);
          // }

        }, {
          key: "handleHttpError",
          value: function handleHttpError(err) {
            var error;

            if (err.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', err.error.message);
              error = "An error occurred: ".concat(err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(err.status, ", ") + "body was: ".concat(err.error));
              error = "Backend returned code ".concat(err.status, ", body was: ").concat(err.error);
            } // Return an observable with a user-facing error message.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.' + '\n' + error);
          }
        }]);

        return AuthfakeauthenticationService;
      }();

      AuthfakeauthenticationService.??fac = function AuthfakeauthenticationService_Factory(t) {
        return new (t || AuthfakeauthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AuthfakeauthenticationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AuthfakeauthenticationService,
        factory: AuthfakeauthenticationService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthfakeauthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/event.service.ts":
    /*!************************************************!*\
      !*** ./src/app/core/services/event.service.ts ***!
      \************************************************/

    /*! exports provided: EventService */

    /***/
    function srcAppCoreServicesEventServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var EventService = /*#__PURE__*/function () {
        function EventService() {
          _classCallCheck(this, EventService);

          this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        /**
         * Broadcast the event
         * @param type type of event
         * @param payload payload
         */


        _createClass(EventService, [{
          key: "broadcast",
          value: function broadcast(type) {
            var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.handler.next({
              type: type,
              payload: payload
            });
          }
          /**
           * Subscribe to event
           * @param type type of event
           * @param callback call back function
           */

        }, {
          key: "subscribe",
          value: function subscribe(type, callback) {
            return this.handler.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event.type === type;
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
              return event.payload;
            })).subscribe(callback);
          }
        }]);

        return EventService;
      }();

      EventService.??fac = function EventService_Factory(t) {
        return new (t || EventService)();
      };

      EventService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: EventService,
        factory: EventService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EventService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/language.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/services/language.service.ts ***!
      \***************************************************/

    /*! exports provided: LanguageService */

    /***/
    function srcAppCoreServicesLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
        return LanguageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

      var LanguageService = /*#__PURE__*/function () {
        function LanguageService(translate, cookieService) {
          _classCallCheck(this, LanguageService);

          this.translate = translate;
          this.cookieService = cookieService;
          this.languages = ['en', 'es', 'de', 'it', 'ru'];
          var browserLang;
          this.translate.addLangs(this.languages);

          if (this.cookieService.check('lang')) {
            browserLang = this.cookieService.get('lang');
          } else {
            browserLang = translate.getBrowserLang();
          }

          translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
        }

        _createClass(LanguageService, [{
          key: "setLanguage",
          value: function setLanguage(lang) {
            this.translate.use(lang);
            this.cookieService.set('lang', lang);
          }
        }]);

        return LanguageService;
      }();

      LanguageService.??fac = function LanguageService_Factory(t) {
        return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]));
      };

      LanguageService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: LanguageService,
        factory: LanguageService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LanguageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/layout/layout.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/layouts/layout/layout.component.ts ***!
      \****************************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function srcAppLayoutsLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _layouts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layouts.model */
      "./src/app/layouts/layout/layouts.model.ts");
      /* harmony import */


      var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/services/event.service */
      "./src/app/core/services/event.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../vertical/vertical.component */
      "./src/app/layouts/vertical/vertical.component.ts");

      function LayoutComponent_app_vertical_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-vertical");
        }
      }

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent(eventService) {
          _classCallCheck(this, LayoutComponent);

          this.eventService = eventService;
        }

        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            // default settings
            this.layoutType = _layouts_model__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_VERTICAL"]; // listen to event and change the layout, theme, etc

            this.eventService.subscribe('changeLayout', function (layout) {
              _this4.layoutType = layout;
            });
          }
          /**
           * Check if the vertical layout is requested
           */

        }, {
          key: "isVerticalLayoutRequested",
          value: function isVerticalLayoutRequested() {
            return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_VERTICAL"];
          }
          /**
           * Check if the horizontal layout is requested
           */

        }, {
          key: "isHorizontalLayoutRequested",
          value: function isHorizontalLayoutRequested() {
            return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_HORIZONTAL"];
          }
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.??fac = function LayoutComponent_Factory(t) {
        return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]));
      };

      LayoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LayoutComponent,
        selectors: [["app-layout"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, LayoutComponent_app_vertical_0_Template, 1, 0, "app-vertical", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isVerticalLayoutRequested());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_4__["VerticalComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-layout',
            templateUrl: './layout.component.html',
            styleUrls: ['./layout.component.scss']
          }]
        }], function () {
          return [{
            type: _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/layout/layouts.model.ts":
    /*!*************************************************!*\
      !*** ./src/app/layouts/layout/layouts.model.ts ***!
      \*************************************************/

    /*! exports provided: LAYOUT_VERTICAL, LAYOUT_HORIZONTAL */

    /***/
    function srcAppLayoutsLayoutLayoutsModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAYOUT_VERTICAL", function () {
        return LAYOUT_VERTICAL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAYOUT_HORIZONTAL", function () {
        return LAYOUT_HORIZONTAL;
      }); // export layout related constants


      var LAYOUT_VERTICAL = 'vertical';
      var LAYOUT_HORIZONTAL = 'horizontal';
      /***/
    },

    /***/
    "./src/app/layouts/layouts.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/layouts/layouts.module.ts ***!
      \*******************************************/

    /*! exports provided: LayoutsModule */

    /***/
    function srcAppLayoutsLayoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutsModule", function () {
        return LayoutsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/shared.module */
      "./src/app/layouts/shared/shared.module.ts");
      /* harmony import */


      var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vertical/vertical.component */
      "./src/app/layouts/vertical/vertical.component.ts");
      /* harmony import */


      var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layout/layout.component */
      "./src/app/layouts/layout/layout.component.ts");

      var LayoutsModule = /*#__PURE__*/_createClass(function LayoutsModule() {
        _classCallCheck(this, LayoutsModule);
      });

      LayoutsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: LayoutsModule
      });
      LayoutsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function LayoutsModule_Factory(t) {
          return new (t || LayoutsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LayoutsModule, {
          declarations: [_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_4__["VerticalComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_4__["VerticalComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LayoutsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_4__["VerticalComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            exports: [_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_4__["VerticalComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/shared/footer/footer.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/layouts/shared/footer/footer.component.ts ***!
      \***********************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppLayoutsSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 10,
        vars: 0,
        consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-sm-6"], [1, "text-sm-right", "d-none", "d-sm-block"], [1, "mdi", "mdi-heart", "text-danger"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " 2020 \xA9 CERAMIC. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Creer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " par Dassi Idriss ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/shared/shared.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/layouts/shared/shared.module.ts ***!
      \*************************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppLayoutsSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-click-outside */
      "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var _core_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/services/language.service */
      "./src/app/core/services/language.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./topbar/topbar.component */
      "./src/app/layouts/shared/topbar/topbar.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/layouts/shared/footer/footer.component.ts");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "./src/app/layouts/shared/sidebar/sidebar.component.ts");

      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: SharedModule
      });
      SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [_core_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SharedModule, {
          declarations: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            // tslint:disable-next-line: max-line-length
            declarations: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            exports: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"]],
            providers: [_core_services_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/shared/sidebar/menu.ts":
    /*!************************************************!*\
      !*** ./src/app/layouts/shared/sidebar/menu.ts ***!
      \************************************************/

    /*! exports provided: MENU */

    /***/
    function srcAppLayoutsSharedSidebarMenuTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MENU", function () {
        return MENU;
      });

      var MENU = [{
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
      }, {
        id: 2,
        label: 'Accueil',
        icon: 'ri-dashboard-line',
        // badge: {
        //     variant: 'success',
        //     text: 'MENUITEMS.DASHBOARDS.BADGE',
        // },
        link: '/'
      }, {
        id: 59,
        label: 'Comptes',
        link: '/tables/advanced',
        icon: 'ri-table-2'
      }, {
        id: 61,
        label: 'Analyses',
        link: '/charts/apex',
        icon: 'ri-bar-chart-line'
      }];
      /***/
    },

    /***/
    "./src/app/layouts/shared/sidebar/sidebar.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/layouts/shared/sidebar/sidebar.component.ts ***!
      \*************************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcAppLayoutsSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! metismenujs/dist/metismenujs */
      "./node_modules/metismenujs/dist/metismenujs.js");
      /* harmony import */


      var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu */
      "./src/app/layouts/shared/sidebar/menu.ts");
      /* harmony import */


      var _core_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/event.service */
      "./src/app/core/services/event.service.ts");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var _c0 = ["sideMenu"];

      function SidebarComponent_ng_container_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, item_r2.label));
        }
      }

      function SidebarComponent_ng_container_5_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Layouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_ng_container_5_li_2_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r7.changeLayout("horizontal");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_ng_container_5_li_2_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r9.lightSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_ng_container_5_li_2_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r10.compactSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_ng_container_5_li_2_Template_a_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r11.iconSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_ng_container_5_li_2_Template_a_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r12.boxedLayout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 5, "MENUITEMS.LAYOUTS.LIST.HORIZONTAL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 7, "MENUITEMS.LAYOUTS.LIST.LIGHTSIDEBAR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](17, 9, "MENUITEMS.LAYOUTS.LIST.COMPACTSIDEBAR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](21, 11, "MENUITEMS.LAYOUTS.LIST.ICONSIDEBAR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 13, "MENUITEMS.LAYOUTS.LIST.BOXED"));
        }
      }

      function SidebarComponent_ng_container_5_li_3_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i");
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("bx ", item_r2.icon, "");
        }
      }

      function SidebarComponent_ng_container_5_li_3_a_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-pill badge-", item_r2.badge.variant, " float-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 4, item_r2.badge.text));
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "has-arrow": a0,
          "has-dropdown": a1
        };
      };

      function SidebarComponent_ng_container_5_li_3_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_ng_container_5_li_3_a_1_i_1_Template, 1, 3, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, SidebarComponent_ng_container_5_li_3_a_1_span_5_Template, 3, 6, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](6, _c1, !item_r2.badge, item_r2.badge));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 4, item_r2.label), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r2.badge);
        }
      }

      function SidebarComponent_ng_container_5_li_3_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i");
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("bx ", item_r2.icon, "");
        }
      }

      function SidebarComponent_ng_container_5_li_3_a_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("badge badge-pill badge-", item_r2.badge.variant, " float-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 4, item_r2.badge.text));
        }
      }

      function SidebarComponent_ng_container_5_li_3_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_ng_container_5_li_3_a_2_i_1_Template, 1, 3, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, SidebarComponent_ng_container_5_li_3_a_2_span_5_Template, 3, 6, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", item_r2.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 4, item_r2.label), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r2.badge);
        }
      }

      function SidebarComponent_ng_container_5_li_3_ul_3_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var subitem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", subitem_r27.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-parent", subitem_r27.parentId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 3, subitem_r27.label), " ");
        }
      }

      function SidebarComponent_ng_container_5_li_3_ul_3_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var subitem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-parent", subitem_r27.parentId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, subitem_r27.label), " ");
        }
      }

      function SidebarComponent_ng_container_5_li_3_ul_3_li_1_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var subSubitem_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", subSubitem_r34.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-parent", subSubitem_r34.parentId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 3, subSubitem_r34.label), " ");
        }
      }

      function SidebarComponent_ng_container_5_li_3_ul_3_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_ng_container_5_li_3_ul_3_li_1_ul_3_li_1_Template, 4, 5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var subitem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", subitem_r27.subItems);
        }
      }

      function SidebarComponent_ng_container_5_li_3_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_ng_container_5_li_3_ul_3_li_1_a_1_Template, 3, 5, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SidebarComponent_ng_container_5_li_3_ul_3_li_1_a_2_Template, 3, 4, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_ng_container_5_li_3_ul_3_li_1_ul_3_Template, 2, 1, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var subitem_r27 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r26.hasItems(subitem_r27));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r26.hasItems(subitem_r27));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r26.hasItems(subitem_r27));
        }
      }

      function SidebarComponent_ng_container_5_li_3_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_ng_container_5_li_3_ul_3_li_1_Template, 4, 3, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", item_r2.subItems);
        }
      }

      function SidebarComponent_ng_container_5_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_ng_container_5_li_3_a_1_Template, 6, 9, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SidebarComponent_ng_container_5_li_3_a_2_Template, 6, 6, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_ng_container_5_li_3_ul_3_Template, 2, 1, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.hasItems(item_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r5.hasItems(item_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.hasItems(item_r2));
        }
      }

      function SidebarComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, SidebarComponent_ng_container_5_li_1_Template, 3, 3, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, SidebarComponent_ng_container_5_li_2_Template, 26, 15, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, SidebarComponent_ng_container_5_li_3_Template, 4, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r2.isTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r2.isLayout);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !item_r2.isTitle && !item_r2.isLayout);
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(eventService, router) {
          var _this5 = this;

          _classCallCheck(this, SidebarComponent);

          this.eventService = eventService;
          this.router = router;
          this.menuItems = [];
          router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this5._activateMenuDropdown();
            }
          });
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.menu = new metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_1___default.a(this.sideMenu.nativeElement);

            this._activateMenuDropdown();
          }
          /**
           * remove active and mm-active class
           */

        }, {
          key: "_removeAllClass",
          value: function _removeAllClass(className) {
            var els = document.getElementsByClassName(className);

            while (els[0]) {
              els[0].classList.remove(className);
            }
          }
          /**
           * Activate the parent dropdown
           */

        }, {
          key: "_activateMenuDropdown",
          value: function _activateMenuDropdown() {
            this._removeAllClass('mm-active');

            this._removeAllClass('mm-show');

            var links = document.getElementsByClassName('side-nav-link-ref');
            var menuItemEl = null;
            var paths = []; // tslint:disable-next-line: prefer-for-of

            for (var i = 0; i < links.length; i++) {
              // tslint:disable-next-line: no-string-literal
              paths.push(links[i]['pathname']);
            }

            var itemIndex = paths.indexOf(window.location.pathname);

            if (itemIndex === -1) {
              var strIndex = window.location.pathname.lastIndexOf('/');
              var item = window.location.pathname.substr(0, strIndex).toString();
              menuItemEl = links[paths.indexOf(item)];
            } else {
              menuItemEl = links[itemIndex];
            }

            if (menuItemEl) {
              menuItemEl.classList.add('active');
              var parentEl = menuItemEl.parentElement;

              if (parentEl) {
                parentEl.classList.add('mm-active');
                var parent2El = parentEl.parentElement.closest('ul');

                if (parent2El && parent2El.id !== 'side-menu') {
                  parent2El.classList.add('mm-show');
                  var parent3El = parent2El.parentElement;

                  if (parent3El && parent3El.id !== 'side-menu') {
                    parent3El.classList.add('mm-active');
                    var childAnchor = parent3El.querySelector('.has-arrow');
                    var childDropdown = parent3El.querySelector('.has-dropdown');

                    if (childAnchor) {
                      childAnchor.classList.add('mm-active');
                    }

                    if (childDropdown) {
                      childDropdown.classList.add('mm-active');
                    }

                    var parent4El = parent3El.parentElement;

                    if (parent4El && parent4El.id !== 'side-menu') {
                      parent4El.classList.add('mm-show');
                      var parent5El = parent4El.parentElement;

                      if (parent5El && parent5El.id !== 'side-menu') {
                        parent5El.classList.add('mm-active');
                        var childanchor = parent5El.querySelector('.is-parent');

                        if (childanchor && parent5El.id !== 'side-menu') {
                          childanchor.classList.add('mm-active');
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          /**
           * Initialize
           */

        }, {
          key: "initialize",
          value: function initialize() {
            this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_3__["MENU"];
          }
          /**
           * Returns true or false if given menu item has child or not
           * @param item menuItem
           */

        }, {
          key: "hasItems",
          value: function hasItems(item) {
            return item.subItems !== undefined ? item.subItems.length > 0 : false;
          }
          /**
           * Change the layout onclick
           * @param layout Change the layout
           */

        }, {
          key: "changeLayout",
          value: function changeLayout(layout) {
            this.eventService.broadcast('changeLayout', layout);
          }
          /**
           * Light sidebar
           */

        }, {
          key: "lightSidebar",
          value: function lightSidebar() {
            document.body.setAttribute('data-sidebar', 'light');
            document.body.setAttribute('data-topbar', 'dark');
            document.body.removeAttribute('data-sidebar-size');
            document.body.removeAttribute('data-layout-size');
            document.body.removeAttribute('data-keep-enlarged');
            document.body.classList.remove('vertical-collpsed');
          }
          /**
           * Compact sidebar
           */

        }, {
          key: "compactSidebar",
          value: function compactSidebar() {
            document.body.setAttribute('data-sidebar-size', 'small');
            document.body.setAttribute('data-sidebar', 'dark');
            document.body.removeAttribute('data-topbar');
            document.body.removeAttribute('data-layout-size');
            document.body.removeAttribute('data-keep-enlarged');
            document.body.classList.remove('sidebar-enable');
            document.body.classList.remove('vertical-collpsed');
          }
          /**
           * Icon sidebar
           */

        }, {
          key: "iconSidebar",
          value: function iconSidebar() {
            document.body.classList.add('sidebar-enable');
            document.body.classList.add('vertical-collpsed');
            document.body.setAttribute('data-sidebar', 'dark');
            document.body.removeAttribute('data-layout-size');
            document.body.removeAttribute('data-keep-enlarged');
            document.body.removeAttribute('data-topbar');
          }
          /**
           * Boxed layout
           */

        }, {
          key: "boxedLayout",
          value: function boxedLayout() {
            document.body.setAttribute('data-keep-enlarged', 'true');
            document.body.setAttribute('data-layout-size', 'boxed');
            document.body.setAttribute('data-sidebar', 'dark');
            document.body.classList.add('vertical-collpsed');
            document.body.classList.remove('sidebar-enable');
            document.body.removeAttribute('data-topbar');
          }
          /**
           * Colored sidebar
           */

        }, {
          key: "coloredSidebar",
          value: function coloredSidebar() {
            document.body.setAttribute('data-sidebar', 'colored');
            document.body.removeAttribute('data-sidebar-size');
            document.body.removeAttribute('data-layout-size');
            document.body.classList.remove('vertical-collpsed');
            document.body.removeAttribute('data-topbar');
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.??fac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        viewQuery: function SidebarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sideMenu = _t.first);
          }
        },
        decls: 6,
        vars: 1,
        consts: [[1, "vertical-menu"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu", "list-unstyled"], ["sideMenu", ""], [4, "ngFor", "ngForOf"], ["class", "menu-title", 4, "ngIf"], [4, "ngIf"], [1, "menu-title"], ["href", "javascript: void(0);", 1, "has-arrow"], [1, "ri-layout-3-line"], ["aria-expanded", "false", 1, "sub-menu"], ["href", "javascript: void(0);", 3, "click"], ["href", "javascript:void(0);", "class", "is-parent", 3, "ngClass", 4, "ngIf"], ["class", "side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "sub-menu", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 1, "is-parent", 3, "ngClass"], [3, "class", 4, "ngIf"], ["routerLinkActive", "active", 1, "side-nav-link-ref", 3, "routerLink"], ["class", "side-nav-link-a-ref has-arrow", "href", "javascript:void(0);", 4, "ngIf"], ["class", "sub-menu mm-collapse", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 1, "side-nav-link-a-ref", "has-arrow"], ["aria-expanded", "false", 1, "sub-menu", "mm-collapse"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "perfect-scrollbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, SidebarComponent_ng_container_5_Template, 4, 3, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
          }]
        }], function () {
          return [{
            type: _core_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, {
          sideMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sideMenu']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/layouts/shared/topbar/topbar.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/layouts/shared/topbar/topbar.component.ts ***!
      \***********************************************************/

    /*! exports provided: TopbarComponent */

    /***/
    function srcAppLayoutsSharedTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
        return TopbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/services/auth.service */
      "./src/app/core/services/auth.service.ts");
      /* harmony import */


      var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/authfake.service */
      "./src/app/core/services/authfake.service.ts");
      /* harmony import */


      var _core_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/services/language.service */
      "./src/app/core/services/language.service.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var TopbarComponent = /*#__PURE__*/function () {
        // tslint:disable-next-line: max-line-length
        function TopbarComponent(document, router, authService, authFackservice, languageService, cookiesService) {
          _classCallCheck(this, TopbarComponent);

          this.document = document;
          this.router = router;
          this.authService = authService;
          this.authFackservice = authFackservice;
          this.languageService = languageService;
          this.cookiesService = cookiesService;
          this.listLang = [{
            text: 'English',
            flag: 'assets/images/flags/us.jpg',
            lang: 'en'
          }, {
            text: 'Spanish',
            flag: 'assets/images/flags/spain.jpg',
            lang: 'es'
          }, {
            text: 'German',
            flag: 'assets/images/flags/germany.jpg',
            lang: 'de'
          }, {
            text: 'Italian',
            flag: 'assets/images/flags/italy.jpg',
            lang: 'it'
          }, {
            text: 'Russian',
            flag: 'assets/images/flags/russia.jpg',
            lang: 'ru'
          }];
          this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(TopbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.element = document.documentElement;
            this.configData = {
              suppressScrollX: true,
              wheelSpeed: 0.3
            };
            this.cookieValue = this.cookiesService.get('lang');
            var val = this.listLang.filter(function (x) {
              return x.lang === _this6.cookieValue;
            });
            this.countryName = val.map(function (element) {
              return element.text;
            });

            if (val.length === 0) {
              if (this.flagvalue === undefined) {
                this.valueset = 'assets/images/flags/us.jpg';
              }
            } else {
              this.flagvalue = val.map(function (element) {
                return element.flag;
              });
            }
          }
          /**
           * Toggle the menu bar when having mobile screen
           */

        }, {
          key: "toggleMobileMenu",
          value: function toggleMobileMenu(event) {
            event.preventDefault();
            this.mobileMenuButtonClicked.emit();
          }
          /**
           * Toggles the right sidebar
           */

        }, {
          key: "toggleRightSidebar",
          value: function toggleRightSidebar() {
            this.settingsButtonClicked.emit();
          }
          /**
           * Fullscreen method
           */

        }, {
          key: "fullscreen",
          value: function fullscreen() {
            document.body.classList.toggle('fullscreen-enable');

            if (!document.fullscreenElement && !this.element.mozFullScreenElement && !this.element.webkitFullscreenElement) {
              if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
              } else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
              } else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
              } else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
              }
            } else {
              if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
              } else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
              } else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
              } else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
              }
            }
          }
          /**
           * Translate language
           */

        }, {
          key: "setLanguage",
          value: function setLanguage(text, lang, flag) {
            this.countryName = text;
            this.flagvalue = flag;
            this.cookieValue = lang;
            this.languageService.setLanguage(lang);
          }
        }]);

        return TopbarComponent;
      }();

      TopbarComponent.??fac = function TopbarComponent_Factory(t) {
        return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__["AuthfakeauthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]));
      };

      TopbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TopbarComponent,
        selectors: [["app-topbar"]],
        outputs: {
          mobileMenuButtonClicked: "mobileMenuButtonClicked",
          settingsButtonClicked: "settingsButtonClicked"
        },
        decls: 46,
        vars: 0,
        consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["href", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo-sm-dark.png", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20"], ["href", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-sm-light.png", "alt", "", "height", "22"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], ["type", "button", "id", "vertical-menu-btn", 1, "btn", "btn-sm", "px-3", "font-size-24", "header-item", "waves-effect", 3, "click"], [1, "ri-menu-2-line", "align-middle"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "ml-2"], ["type", "button", "ngbDropdownToggle", "", "id", "page-header-search-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon", "waves-effect"], [1, "ri-search-line"], ["aria-labelledby", "page-header-search-dropdown", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right", "p-0"], [1, "p-3"], [1, "form-group", "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], [1, "dropdown", "d-none", "d-lg-inline-block", "ml-1"], ["type", "button", 1, "btn", "header-item", "noti-icon", "waves-effect", 3, "click"], [1, "ri-fullscreen-line"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "ngbDropdownToggle", "", "id", "page-header-notifications-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon", "waves-effect"], [1, "ri-notification-3-line"], [1, "noti-dot"], ["ngbDropdownMenu", "", "aria-labelledby", "page-header-notifications-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right", "p-0"], [1, "row", "align-items-center"], [1, "col"], [1, "m-0"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "user-dropdown"], ["type", "button", "ngbDropdownToggle", "", "id", "page-header-user-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "header-item", "waves-effect"], [1, "d-none", "d-xl-inline-block", "ml-1"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"]],
        template: function TopbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopbarComponent_Template_button_click_14_listener($event) {
              return ctx.toggleMobileMenu($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "form", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopbarComponent_Template_button_click_29_listener() {
              return ctx.fullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h6", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Notifications ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "CEMARIC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownMenu"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2hhcmVkL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TopbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-topbar',
            templateUrl: './topbar.component.html',
            styleUrls: ['./topbar.component.scss']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__["AuthfakeauthenticationService"]
          }, {
            type: _core_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
          }];
        }, {
          mobileMenuButtonClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          settingsButtonClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/layouts/vertical/vertical.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/layouts/vertical/vertical.component.ts ***!
      \********************************************************/

    /*! exports provided: VerticalComponent */

    /***/
    function srcAppLayoutsVerticalVerticalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalComponent", function () {
        return VerticalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/topbar/topbar.component */
      "./src/app/layouts/shared/topbar/topbar.component.ts");
      /* harmony import */


      var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/sidebar/sidebar.component */
      "./src/app/layouts/shared/sidebar/sidebar.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/footer/footer.component */
      "./src/app/layouts/shared/footer/footer.component.ts");

      var VerticalComponent = /*#__PURE__*/function () {
        function VerticalComponent() {
          _classCallCheck(this, VerticalComponent);
        }

        _createClass(VerticalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            document.body.setAttribute('data-sidebar', 'dark');
            document.body.removeAttribute('data-layout-size');
            document.body.removeAttribute('data-layout');
            document.body.removeAttribute('data-topbar');
            document.body.classList.remove('auth-body-bg');
          }
          /**
           * On mobile toggle button clicked
           */

        }, {
          key: "onToggleMobileMenu",
          value: function onToggleMobileMenu() {
            document.body.classList.toggle('sidebar-enable');
            document.body.classList.toggle('vertical-collpsed');

            if (window.screen.width <= 768) {
              document.body.classList.remove('vertical-collpsed');
            }
          }
          /**
           * on settings button clicked from topbar
           */

        }, {
          key: "onSettingsButtonClicked",
          value: function onSettingsButtonClicked() {
            document.body.classList.toggle('right-bar-enabled');
          }
        }]);

        return VerticalComponent;
      }();

      VerticalComponent.??fac = function VerticalComponent_Factory(t) {
        return new (t || VerticalComponent)();
      };

      VerticalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: VerticalComponent,
        selectors: [["app-vertical"]],
        decls: 7,
        vars: 0,
        consts: [["id", "layout-wrapper"], [3, "mobileMenuButtonClicked", "settingsButtonClicked"], [1, "main-content"], [1, "page-content"]],
        template: function VerticalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-topbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("mobileMenuButtonClicked", function VerticalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() {
              return ctx.onToggleMobileMenu();
            })("settingsButtonClicked", function VerticalComponent_Template_app_topbar_settingsButtonClicked_1_listener() {
              return ctx.onSettingsButtonClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_shared_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__["TopbarComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvdmVydGljYWwvdmVydGljYWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VerticalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-vertical',
            templateUrl: './vertical.component.html',
            styleUrls: ['./vertical.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/chart/apex/apex.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/chart/apex/apex.component.ts ***!
      \****************************************************/

    /*! exports provided: ApexComponent */

    /***/
    function srcAppPagesChartApexApexComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApexComponent", function () {
        return ApexComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data */
      "./src/app/pages/chart/apex/data.ts");
      /* harmony import */


      var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/ui/pagetitle/pagetitle.component */
      "./src/app/shared/ui/pagetitle/pagetitle.component.ts");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-apexcharts */
      "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
      /**
       * Apex-chart component
       */


      var ApexComponent = /*#__PURE__*/function () {
        function ApexComponent() {
          _classCallCheck(this, ApexComponent);
        }

        _createClass(ApexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.breadCrumbItems = [{
              label: 'Charts'
            }, {
              label: 'Apex charts',
              active: true
            }];
            /**
             * Fethches the chart data
             */

            this._fetchData();
          }
          /**
           * Fetches the chart data
           */

        }, {
          key: "_fetchData",
          value: function _fetchData() {
            this.linewithDataChart = _data__WEBPACK_IMPORTED_MODULE_1__["linewithDataChart"];
            this.basicColumChart = _data__WEBPACK_IMPORTED_MODULE_1__["basicColumChart"];
            this.columnlabelChart = _data__WEBPACK_IMPORTED_MODULE_1__["columnlabelChart"];
            this.lineColumAreaChart = _data__WEBPACK_IMPORTED_MODULE_1__["lineColumAreaChart"];
            this.basicRadialBarChart = _data__WEBPACK_IMPORTED_MODULE_1__["basicRadialBarChart"];
            this.simplePieChart = _data__WEBPACK_IMPORTED_MODULE_1__["simplePieChart"];
            this.donutChart = _data__WEBPACK_IMPORTED_MODULE_1__["donutChart"];
            this.barChart = _data__WEBPACK_IMPORTED_MODULE_1__["barChart"];
            this.splineAreaChart = _data__WEBPACK_IMPORTED_MODULE_1__["splineAreaChart"];
            this.dashedLineChart = _data__WEBPACK_IMPORTED_MODULE_1__["dashedLineChart"];
          }
        }]);

        return ApexComponent;
      }();

      ApexComponent.??fac = function ApexComponent_Factory(t) {
        return new (t || ApexComponent)();
      };

      ApexComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ApexComponent,
        selectors: [["app-apex"]],
        decls: 67,
        vars: 94,
        consts: [[1, "container-fluid"], ["title", "Apex charts", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "stroke", "dataLabels", "title", "responsive", "legend", "xaxis", "yaxis", "markers"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "dataLabels", "stroke", "colors", "xaxis", "grid", "tooltip", "plotOptions", "fill", "markers", "legend", "yaxis"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "dataLabels", "stroke", "colors", "xaxis", "grid", "tooltip"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "yaxis", "grid", "tooltip", "stroke", "dataLabels", "xaxis", "colors", "fill"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "yaxis", "title", "stroke", "dataLabels", "xaxis", "legend", "colors", "fill"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "dataLabels", "xaxis", "colors", "grid"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "tooltip", "yaxis", "legend", "plotOptions", "grid", "stroke", "xaxis", "colors", "fill", "labels", "markers"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "plotOptions", "labels", "colors"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "labels", "legend", "colors", "responsive"]],
        template: function ApexComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-pagetitle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Line with Data Labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "apx-chart", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Dashed Line");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "apx-chart", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Spline Area");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "apx-chart", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Column Charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "apx-chart", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Column with Data Labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "apx-chart", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Bar Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "apx-chart", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Line, Column & Area Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "apx-chart", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Radial Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "apx-chart", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Pie Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "apx-chart", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Donut Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "apx-chart", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("breadcrumbItems", ctx.breadCrumbItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.linewithDataChart.series)("chart", ctx.linewithDataChart.chart)("colors", ctx.linewithDataChart.colors)("stroke", ctx.linewithDataChart.stroke)("dataLabels", ctx.linewithDataChart.dataLabels)("title", ctx.linewithDataChart.title)("responsive", ctx.linewithDataChart.responsive)("legend", ctx.linewithDataChart.legend)("xaxis", ctx.linewithDataChart.xaxis)("yaxis", ctx.linewithDataChart.yaxis)("stroke", ctx.linewithDataChart.stroke)("markers", ctx.linewithDataChart.markers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.dashedLineChart.series)("chart", ctx.dashedLineChart.chart)("dataLabels", ctx.dashedLineChart.dataLabels)("stroke", ctx.dashedLineChart.stroke)("colors", ctx.dashedLineChart.colors)("xaxis", ctx.dashedLineChart.xaxis)("grid", ctx.dashedLineChart.grid)("tooltip", ctx.dashedLineChart.tooltip)("plotOptions", ctx.dashedLineChart.plotOptions)("fill", ctx.dashedLineChart.fill)("markers", ctx.dashedLineChart.markers)("legend", ctx.dashedLineChart.legend)("yaxis", ctx.dashedLineChart.yaxis)("tooltip", ctx.dashedLineChart.tooltip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.splineAreaChart.series)("chart", ctx.splineAreaChart.chart)("dataLabels", ctx.splineAreaChart.dataLabels)("stroke", ctx.splineAreaChart.stroke)("colors", ctx.splineAreaChart.colors)("xaxis", ctx.splineAreaChart.xaxis)("grid", ctx.splineAreaChart.grid)("tooltip", ctx.splineAreaChart.tooltip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.basicColumChart.series)("chart", ctx.basicColumChart.chart)("plotOptions", ctx.basicColumChart.plotOptions)("yaxis", ctx.basicColumChart.yaxis)("grid", ctx.basicColumChart.grid)("tooltip", ctx.basicColumChart.tooltip)("stroke", ctx.basicColumChart.stroke)("dataLabels", ctx.basicColumChart.dataLabels)("xaxis", ctx.basicColumChart.xaxis)("colors", ctx.basicColumChart.colors)("fill", ctx.basicColumChart.fill);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.columnlabelChart.series)("chart", ctx.columnlabelChart.chart)("plotOptions", ctx.columnlabelChart.plotOptions)("yaxis", ctx.columnlabelChart.yaxis)("title", ctx.columnlabelChart.title)("stroke", ctx.columnlabelChart.stroke)("dataLabels", ctx.columnlabelChart.dataLabels)("xaxis", ctx.columnlabelChart.xaxis)("legend", ctx.columnlabelChart.legend)("colors", ctx.columnlabelChart.colors)("fill", ctx.columnlabelChart.fill);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.barChart.series)("chart", ctx.barChart.chart)("plotOptions", ctx.barChart.plotOptions)("dataLabels", ctx.barChart.dataLabels)("xaxis", ctx.barChart.xaxis)("colors", ctx.barChart.colors)("grid", ctx.barChart.grid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.lineColumAreaChart.series)("chart", ctx.lineColumAreaChart.chart)("tooltip", ctx.lineColumAreaChart.tooltip)("yaxis", ctx.lineColumAreaChart.yaxis)("legend", ctx.lineColumAreaChart.legend)("plotOptions", ctx.lineColumAreaChart.plotOptions)("grid", ctx.lineColumAreaChart.grid)("stroke", ctx.lineColumAreaChart.stroke)("xaxis", ctx.lineColumAreaChart.xaxis)("colors", ctx.lineColumAreaChart.colors)("fill", ctx.lineColumAreaChart.fill)("labels", ctx.lineColumAreaChart.labels)("markers", ctx.lineColumAreaChart.markers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.basicRadialBarChart.series)("chart", ctx.basicRadialBarChart.chart)("plotOptions", ctx.basicRadialBarChart.plotOptions)("labels", ctx.basicRadialBarChart.labels)("colors", ctx.basicRadialBarChart.colors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.simplePieChart.series)("chart", ctx.simplePieChart.chart)("labels", ctx.simplePieChart.labels)("legend", ctx.simplePieChart.legend)("colors", ctx.simplePieChart.colors)("responsive", ctx.simplePieChart.responsive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.donutChart.series)("chart", ctx.donutChart.chart)("labels", ctx.donutChart.labels)("legend", ctx.donutChart.legend)("colors", ctx.donutChart.colors)("responsive", ctx.donutChart.responsive);
          }
        },
        directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__["PagetitleComponent"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0L2FwZXgvYXBleC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApexComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-apex',
            templateUrl: './apex.component.html',
            styleUrls: ['./apex.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/chart/apex/data.ts":
    /*!******************************************!*\
      !*** ./src/app/pages/chart/apex/data.ts ***!
      \******************************************/

    /*! exports provided: linewithDataChart, basicColumChart, columnlabelChart, barChart, splineAreaChart, lineColumAreaChart, simplePieChart, donutChart, basicRadialBarChart, dashedLineChart */

    /***/
    function srcAppPagesChartApexDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "linewithDataChart", function () {
        return linewithDataChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "basicColumChart", function () {
        return basicColumChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnlabelChart", function () {
        return columnlabelChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "barChart", function () {
        return barChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "splineAreaChart", function () {
        return splineAreaChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineColumAreaChart", function () {
        return lineColumAreaChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "simplePieChart", function () {
        return simplePieChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "donutChart", function () {
        return donutChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "basicRadialBarChart", function () {
        return basicRadialBarChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dashedLineChart", function () {
        return dashedLineChart;
      });

      var linewithDataChart = {
        chart: {
          height: 380,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#556ee6', '#34c38f'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          width: [3, 3],
          curve: 'straight'
        },
        series: [{
          name: 'High - 2018',
          data: [26, 24, 32, 36, 33, 31, 33]
        }, {
          name: 'Low - 2018',
          data: [14, 11, 16, 12, 17, 13, 12]
        }],
        title: {
          text: 'Average High & Low Temperature',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['transparent', 'transparent'],
            opacity: 0.2
          },
          borderColor: '#f1f1f1'
        },
        markers: {
          style: 'inverted',
          size: 6
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'Month'
          }
        },
        yaxis: {
          title: {
            text: 'Temperature'
          },
          min: 5,
          max: 40
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        },
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              toolbar: {
                show: false
              }
            },
            legend: {
              show: false
            }
          }
        }]
      };
      var basicColumChart = {
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '45%'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        colors: ['#5664d2', '#1cbb8c', '#fcb92c'],
        series: [{
          name: 'Net Profit',
          data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
        }, {
          name: 'Revenue',
          data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
        }],
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        grid: {
          borderColor: '#f1f1f1'
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return '$ ' + val + ' thousands';
            }
          }
        }
      };
      var dashedLineChart = {
        chart: {
          height: 380,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#5664d2', '#fcb92c', '#1cbb8c'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [3, 4, 3],
          curve: 'straight',
          dashArray: [0, 8, 5]
        },
        series: [{
          name: 'Session Duration',
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        }, {
          name: 'Page Views',
          data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        }, {
          name: 'Total Visits',
          data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
        }],
        title: {
          text: 'Page Statistics',
          align: 'left'
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan']
        },
        tooltip: {
          y: [{
            title: {
              formatter: function formatter(val) {
                return val + ' (mins)';
              }
            }
          }, {
            title: {
              formatter: function formatter(val) {
                return val + ' per session';
              }
            }
          }, {
            title: {
              formatter: function formatter(val) {
                return val;
              }
            }
          }]
        },
        grid: {
          borderColor: '#f1f1f1'
        }
      };
      var columnlabelChart = {
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        colors: ['#5664d2'],
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function formatter(val) {
            return val + '%';
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758']
          }
        },
        series: [{
          name: 'Inflation',
          data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3, 2.4, 4.0, 1.2, 3.5, 0.8]
        }],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          position: 'top',
          labels: {
            offsetY: -18
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true,
            offsetY: -35
          }
        },
        fill: {
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function formatter(val) {
              return val + '%';
            }
          }
        },
        title: {
          text: 'Monthly Inflation in Argentina, 2002',
          floating: true,
          offsetY: 320,
          align: 'center',
          style: {
            color: '#444'
          }
        },
        legend: {
          offsetY: 7
        }
      };
      var barChart = {
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        series: [{
          data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
        }],
        colors: ['#1cbb8c'],
        xaxis: {
          // tslint:disable-next-line: max-line-length
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany']
        },
        grid: {
          borderColor: '#f1f1f1',
          padding: {
            bottom: 5
          }
        }
      };
      var lineColumAreaChart = {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: [0, 2, 4],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        colors: ['#1cbb8c', '#fcb92c', '#5664d2'],
        series: [{
          name: 'Team A',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
          name: 'Team B',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
          name: 'Team C',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        // tslint:disable-next-line: max-line-length
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
        markers: {
          size: 0
        },
        legend: {
          offsetY: -10
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          title: {
            text: 'Points'
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function formatter(y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' points';
              }

              return y;
            }
          }
        },
        grid: {
          borderColor: '#f1f1f1'
        }
      };
      var simplePieChart = {
        chart: {
          height: 320,
          type: 'pie'
        },
        series: [44, 55, 41, 17, 15],
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
        colors: ['#1cbb8c', '#5664d2', '#fcb92c', '#4aa3ff', '#ff3d60'],
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          verticalAlign: 'middle',
          floating: false,
          fontSize: '14px',
          offsetX: 0,
          offsetY: -10
        },
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            }
          }
        }]
      };
      var splineAreaChart = {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        series: [{
          name: 'series1',
          data: [34, 40, 28, 52, 42, 109, 100]
        }, {
          name: 'series2',
          data: [32, 60, 34, 46, 34, 52, 41]
        }],
        colors: ['#556ee6', '#34c38f'],
        xaxis: {
          type: 'datetime',
          // tslint:disable-next-line: max-line-length
          categories: ['2018-09-19T00:00:00', '2018-09-19T01:30:00', '2018-09-19T02:30:00', '2018-09-19T03:30:00', '2018-09-19T04:30:00', '2018-09-19T05:30:00', '2018-09-19T06:30:00']
        },
        grid: {
          borderColor: '#f1f1f1'
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      };
      var donutChart = {
        chart: {
          height: 320,
          type: 'donut'
        },
        series: [44, 55, 41, 17, 15],
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          verticalAlign: 'middle',
          floating: false,
          fontSize: '14px',
          offsetX: 0,
          offsetY: -10
        },
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
        colors: ['#1cbb8c', '#5664d2', '#fcb92c', '#4aa3ff', '#ff3d60'],
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            }
          }
        }]
      };
      var basicRadialBarChart = {
        chart: {
          height: 350,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px'
              },
              value: {
                fontSize: '16px'
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function formatter(w) {
                  // tslint:disable-next-line: max-line-length
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249;
                }
              }
            }
          }
        },
        colors: ['#5664d2', '#fcb92c', '#1cbb8c', '#ff3d60'],
        series: [44, 55, 67, 83],
        labels: ['Computer', 'Tablet', 'Laptop', 'Mobile']
      };
      /***/
    },

    /***/
    "./src/app/pages/chart/chart-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/chart/chart-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ChartRoutingModule */

    /***/
    function srcAppPagesChartChartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartRoutingModule", function () {
        return ChartRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _apex_apex_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./apex/apex.component */
      "./src/app/pages/chart/apex/apex.component.ts");

      var routes = [{
        path: 'apex',
        component: _apex_apex_component__WEBPACK_IMPORTED_MODULE_2__["ApexComponent"]
      }];

      var ChartRoutingModule = /*#__PURE__*/_createClass(function ChartRoutingModule() {
        _classCallCheck(this, ChartRoutingModule);
      });

      ChartRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ChartRoutingModule
      });
      ChartRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ChartRoutingModule_Factory(t) {
          return new (t || ChartRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ChartRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChartRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/chart/chart.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/chart/chart.module.ts ***!
      \*********************************************/

    /*! exports provided: ChartModule */

    /***/
    function srcAppPagesChartChartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartModule", function () {
        return ChartModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-apexcharts */
      "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
      /* harmony import */


      var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/ui/ui.module */
      "./src/app/shared/ui/ui.module.ts");
      /* harmony import */


      var _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chart-routing.module */
      "./src/app/pages/chart/chart-routing.module.ts");
      /* harmony import */


      var _apex_apex_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./apex/apex.component */
      "./src/app/pages/chart/apex/apex.component.ts");

      var ChartModule = /*#__PURE__*/_createClass(function ChartModule() {
        _classCallCheck(this, ChartModule);
      });

      ChartModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ChartModule
      });
      ChartModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ChartModule_Factory(t) {
          return new (t || ChartModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartRoutingModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["NgApexchartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ChartModule, {
          declarations: [_apex_apex_component__WEBPACK_IMPORTED_MODULE_6__["ApexComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartRoutingModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["NgApexchartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChartModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_apex_apex_component__WEBPACK_IMPORTED_MODULE_6__["ApexComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _chart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartRoutingModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["NgApexchartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/dashboard/dashboard.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! leaflet */
      "./node_modules/leaflet/dist/leaflet-src.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jspdf */
      "./node_modules/jspdf/dist/jspdf.es.min.js");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data */
      "./src/app/pages/dashboard/data.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _core_services_Qr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/services/Qr.service */
      "./src/app/core/services/Qr.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/ui/pagetitle/pagetitle.component */
      "./src/app/shared/ui/pagetitle/pagetitle.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-apexcharts */
      "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
      /* harmony import */


      var angularx_qrcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angularx-qrcode */
      "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shared/widget/stat/stat.component */
      "./src/app/shared/widget/stat/stat.component.ts");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js"); // import { FormBuilder, Validators, FormGroup } from '@angular/forms';


      function DashboardComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-stat", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var stat_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("title", stat_r5.title)("value", stat_r5.value)("icon", stat_r5.icon);
        }
      }

      function DashboardComponent_ng_template_68_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "qrcode", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "CERAMIC SERVICES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "BP 8340 Douala ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Tel: 699 438 516 / 651 747 110");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Scannez le QR Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " avec l'application (a telecharger sur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "https://www.app.ceramicsarl.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, ") et beneficiez");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "de 400 Francs CFA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Vos sacs vides sont changes au prix de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "50 Francs CFA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " a la direction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var Code_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("qrdata", Code_r10)("width", 60)("errorCorrectionLevel", "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](Code_r10);
        }
      }

      function DashboardComponent_ng_template_68_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Exporter en PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DashboardComponent_ng_template_68_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "span", 77);
        }
      }

      function DashboardComponent_ng_template_68_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Tickets QR Codes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardComponent_ng_template_68_div_5_Template, 33, 4, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_ng_template_68_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.createPdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, DashboardComponent_ng_template_68_span_8_Template, 2, 0, "span", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, DashboardComponent_ng_template_68_span_9_Template, 1, 0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.ListCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r2.loading == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !!ctx_r2.loading);
        }
      }

      function DashboardComponent_tr_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var paiement_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](paiement_r13.telephone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](paiement_r13.merite);
        }
      }

      function DashboardComponent_tr_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r14.idUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r14.nom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r14.telephone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r14.date_inscription);
        }
      }
      /**
       * Dashboard Component
       */


      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(modalService, Qr, http) {
          _classCallCheck(this, DashboardComponent);

          //   this.http.get('http://localhost:3000/qr_codes').subscribe(data =>{
          //    this.data.push(data);
          //    console.log(this.data);
          //  }, error=> console.error(error));
          this.modalService = modalService;
          this.Qr = Qr;
          this.http = http;
          this.Qrnum = 10;
          this.loading = false;
          this.data = [];
          this.ceramic = "CERAMIC SERVICE";
          this.options = {
            layers: [Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 18,
              attribution: '...'
            })],
            zoom: 6,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])(46.879966, -121.726909)
          };
          this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.breadCrumbItems = [{
              label: 'CERAMIC'
            }, {
              label: 'Dashboard',
              active: true
            }];

            this._fetchData();

            this.Qr.getLastUser().subscribe({
              next: function next(inscriptions) {
                _this7.inscriptions = inscriptions;
              }
            });
          }
        }, {
          key: "_fetchData",
          value: function _fetchData() {
            this.revenueChart = _data__WEBPACK_IMPORTED_MODULE_3__["revenueChart"];
            this.salesAnalytics = _data__WEBPACK_IMPORTED_MODULE_3__["salesAnalytics"];
            this.sparklineEarning = _data__WEBPACK_IMPORTED_MODULE_3__["sparklineEarning"];
            this.sparklineMonthly = _data__WEBPACK_IMPORTED_MODULE_3__["sparklineMonthly"];
            this.chatData = _data__WEBPACK_IMPORTED_MODULE_3__["chatData"]; // this.transactions = transactions;
            // this.CodeList = [];

            this.ListCode = [];
            this.statData = _data__WEBPACK_IMPORTED_MODULE_3__["statData"];
            this.paiements = _data__WEBPACK_IMPORTED_MODULE_3__["paiements"];
          }
        }, {
          key: "generateString",
          value: function generateString() {
            var gen = '';

            for (var i = 0; i < 28; i++) {
              gen += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            }

            return gen;
          } //  public onSend(code: string){
          //   //  console.log(code);
          //   const formData : FormData = new FormData()
          //   formData.set('title', code)
          //   this.Qr.create(formData).subscribe(
          //     res=>{console.log(res);
          //     },
          //     err=>{console.log(err);
          //     }
          //   )
          // }

        }, {
          key: "multiGeneration",
          value: function multiGeneration(nombre) {
            var codes = [];
            console.log('creation de ' + nombre + ' codes');

            for (var j = 0; j < nombre; j++) {
              var qrCode = this.generateString();
              codes.push(qrCode); //  this.loadFriends()
              //  this.onSend(this.generateString());
              //  saveQrCode() {;
              // const Code={
              //   qrCode : this.generateString()
              // }
              // this.Qr.create("Code")
              //   .subscribe(
              //     response => {
              //       console.log(response);
              //     },
              //     error => {
              //       console.log(error);
              //     });
              // this.Qr.getHotels().subscribe({
              //   next: hotels => {
              //    console.log(hotels);
              //   },
              // error: err => this.errorMsg = err
              // });

              this.Qr.create({
                qrCode: qrCode
              }).subscribe(function (res) {
                console.log(res);
              }, function (err) {
                console.log(err);
              }); // }
            }

            return codes;
          }
          /**
          * Open extra large modal
          * @param largeModal extra large modal data
          */

        }, {
          key: "extraLarge",
          value: function extraLarge(largeModal) {
            this.modalService.open(largeModal, {
              size: 'lg',
              scrollable: true
            }); //  this.multiGeneration(this.Qrnum);   

            this.ListCode = this.multiGeneration(this.Qrnum);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalService.dismissAll();
          }
        }, {
          key: "createPdf",
          value: function createPdf() {
            var _this8 = this;

            this.loading = true;
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["jsPDF"]('l', 'pt', 'a4', true);
            var div = document.getElementById('div');
            doc.html(div, {
              callback: function callback(doc) {
                doc.save('Ticket-QR.pdf');

                _this8.closeModal();

                _this8.loading = false;
              }
            });
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.??fac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_services_Qr_service__WEBPACK_IMPORTED_MODULE_5__["QrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
      };

      DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 132,
        vars: 36,
        consts: [[1, "container-fluid"], ["title", "Dashboard", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-8"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "float-right", "d-none", "d-md-inline-block"], [1, "btn-group", "mb-2"], ["type", "button", 1, "btn", "btn-sm", "btn-light"], ["type", "button", 1, "btn", "btn-sm", "btn-light", "active"], [1, "card-title", "mb-4"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "legend", "colors", "labels", "stroke", "plotOptions"], [1, "card-body", "border-top", "text-center"], [1, "col-sm-4"], [1, "d-inline-flex"], [1, "mr-2"], [1, "text-success"], [1, "mdi", "mdi-menu-up", "font-size-14"], [1, "text-muted", "text-truncate", "mb-0"], [1, "mt-4", "mt-sm-0"], [1, "mb-2", "text-muted", "text-truncate"], [1, "mdi", "mdi-circle", "text-primary", "font-size-10", "mr-1"], [1, "mb-0", "mr-2"], [1, "mdi", "mdi-circle", "text-success", "font-size-10", "mr-1"], [1, "mb-0"], [1, "col-xl-4"], [1, "column", "ml-3"], [3, "qrdata", "width", "errorCorrectionLevel"], [1, "row", "ml-5"], ["type", "button", 1, "btn-outline-info", 3, "click"], [1, "d-inline-flex", "ml-3"], ["name", "tickets-table_length", "aria-controls", "tickets-table", "name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "mx-2", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["largeModal", ""], ["ngbDropdown", "", 1, "dropdown", "float-right"], ["href", "javascript: void(0);", "data-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "dropdown-toggle", "arrow-none", "card-drop"], [1, "mdi", "mdi-dots-vertical"], [1, "text-center"], [1, "col-sm-6"], [1, "mb-3"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "labels", "dataLabels", "plotOptions"], [1, "text-muted", "text-truncate", "mb-2"], [1, "mt-5", "mt-sm-0"], [1, "col-lg-4"], [1, "card-title", "mb-3"], [1, "table-responsive", "mt-4"], [1, "table", "table-hover", "mb-0", "table-centered", "table-nowrap"], [4, "ngFor", "ngForOf"], [1, "col-lg-8"], [1, "col-sm-12", "col-md-12"], ["id", "tickets-table_filter", 1, "dataTables_filter", "text-md-right"], [1, "d-inline-flex", "align-items-center"], ["type", "text", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "form-control-sm", "ml-2", 3, "ngModel", "ngModelChange"], [1, "table-responsive"], [1, "table", "table-centered"], [1, "thead-light"], [1, "col-md-4"], [3, "title", "value", "icon"], [1, "modal-header"], [1, "modal-title", "mt-0"], [1, "modal-body"], ["id", "div", 1, "row"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "disabled", "click"], [4, "ngIf"], ["class", "spinner-border text-secondary m-0 width-10 height-10", "role", "status", 4, "ngIf"], [1, "card", "mr-0", "mb-4", "ml-2", "border-top"], [1, "card-body", "mt-0", "mb-0"], [1, "row", "mt-0", "mb-0"], [1, "mr-4", "mt-0", "mb-0", 3, "qrdata", "width", "errorCorrectionLevel"], [1, "column", "font-size-10", "mt-0", "mb-0", "mr-auto", "align-items-center", "mr-center"], [1, "font-size-17", "mt-0", "mb-0", "txt-align-center"], ["src", "assets/images/ceramic-w.jpg", "height", "40", "width", "40", 1, "mr-1", "ml-2"], [1, "container", "mt-1", "mb-1"], [1, "font-size-10", "mt-0", "mb-0", "mr-center", "txt-align-center"], [1, "far", "fa-hand-point-up"], ["role", "status", 1, "spinner-border", "text-secondary", "m-0", "width-10", "height-10"], [2, "width", "60px"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "ri-money-pound-circle-fill"], [1, "font-size-14", "mb-0"], ["id", "spak-chart1"], [1, "text-muted", "mb-0"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-pagetitle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DashboardComponent_div_5_Template, 2, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Revenue Analytics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "apx-chart", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h5", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "$12,253");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "2.2 % ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "This month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " This Year :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h5", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "$ 34,254");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "2.1 % ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Previous Year :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h5", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "$ 32,695");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "qrcode", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DashboardComponent_Template_button_click_56_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](69);

              return ctx.extraLarge(_r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DashboardComponent_Template_select_ngModelChange_59_listener($event) {
              return ctx.Qrnum = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "100");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, DashboardComponent_ng_template_68_Template, 10, 4, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Qr Codes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "apx-chart", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Nombre total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h5", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "4600");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "apx-chart", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Moyenne de scan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h5", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "2.5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h4", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Derniers paiements");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "table", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](105, DashboardComponent_tr_105_Template, 13, 2, "tr", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Dernieres inscriptions sur l'application");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "label", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Rechercher: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_116_listener($event) {
              return ctx.term = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "table", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "thead", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Nom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Telephone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Date d'inscription");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](130, DashboardComponent_tr_130_Template, 9, 4, "tr", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](131, "filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("breadcrumbItems", ctx.breadCrumbItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.statData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.revenueChart.series)("chart", ctx.revenueChart.chart)("legend", ctx.revenueChart.legend)("colors", ctx.revenueChart.colors)("labels", ctx.revenueChart.labels)("stroke", ctx.revenueChart.stroke)("plotOptions", ctx.revenueChart.plotOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("qrdata", ctx.ceramic)("width", 256)("errorCorrectionLevel", "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Generer une liste (", ctx.Qrnum, ") ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.Qrnum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.sparklineEarning.series)("chart", ctx.sparklineEarning.chart)("colors", ctx.sparklineEarning.colors)("labels", ctx.sparklineEarning.labels)("dataLabels", ctx.sparklineEarning.dataLabels)("plotOptions", ctx.sparklineEarning.plotOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("series", ctx.sparklineMonthly.series)("chart", ctx.sparklineMonthly.chart)("colors", ctx.sparklineMonthly.colors)("labels", ctx.sparklineMonthly.labels)("dataLabels", ctx.sparklineMonthly.dataLabels)("plotOptions", ctx.sparklineMonthly.plotOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.paiements);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.term);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](131, 33, ctx.inscriptions, ctx.term));
          }
        },
        directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_7__["PagetitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__["ChartComponent"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_10__["QRCodeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??angular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_12__["StatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
          }, {
            type: _core_services_Qr_service__WEBPACK_IMPORTED_MODULE_5__["QrService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/dashboard/data.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/dashboard/data.ts ***!
      \*****************************************/

    /*! exports provided: revenueChart, salesAnalytics, sparklineEarning, sparklineMonthly, chatData, transactions, statData, paiements */

    /***/
    function srcAppPagesDashboardDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "revenueChart", function () {
        return revenueChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "salesAnalytics", function () {
        return salesAnalytics;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sparklineEarning", function () {
        return sparklineEarning;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sparklineMonthly", function () {
        return sparklineMonthly;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "chatData", function () {
        return chatData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transactions", function () {
        return transactions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "statData", function () {
        return statData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "paiements", function () {
        return paiements;
      });

      var revenueChart = {
        series: [{
          name: '2020',
          type: 'column',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }, {
          name: '2019',
          type: 'line',
          data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16]
        }],
        chart: {
          height: 280,
          type: 'line',
          toolbar: {
            show: true
          }
        },
        stroke: {
          width: [0, 3],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '20%'
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        colors: ['#5664d2', '#1cbb8c'],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      };
      var salesAnalytics = {
        series: [42, 26, 15],
        chart: {
          height: 230,
          type: 'donut'
        },
        labels: ['Product A', 'Product B', 'Product C'],
        plotOptions: {
          pie: {
            donut: {
              size: '75%'
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        colors: ['#5664d2', '#1cbb8c', '#eeb902']
      };
      var sparklineEarning = {
        series: [72],
        chart: {
          type: 'radialBar',
          wight: 60,
          height: 60,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#5664d2'],
        stroke: {
          lineCap: 'round'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: '70%'
            },
            track: {
              margin: 0
            },
            dataLabels: {
              show: false
            }
          }
        }
      };
      var sparklineMonthly = {
        series: [65],
        chart: {
          type: 'radialBar',
          wight: 60,
          height: 60,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#1cbb8c'],
        stroke: {
          lineCap: 'round'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: '70%'
            },
            track: {
              margin: 0
            },
            dataLabels: {
              show: false
            }
          }
        }
      };
      var chatData = [{
        id: 1,
        name: 'Frank Vickery',
        message: 'Hey! I am available',
        image: 'assets/images/users/avatar-2.jpg',
        time: '12:09'
      }, {
        id: 2,
        align: 'right',
        name: 'Ricky Clark',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
      }, {
        text: 'Today'
      }, {
        id: 3,
        name: 'Frank Vickery',
        message: 'Hello!',
        image: 'assets/images/users/avatar-2.jpg',
        time: '10:06'
      }, {
        id: 4,
        name: 'Frank Vickery',
        message: '& Next meeting tomorrow 10.00AM',
        image: 'assets/images/users/avatar-2.jpg',
        time: '10:06'
      }, {
        id: 5,
        align: 'right',
        name: 'Ricky Clark',
        message: 'Wow that\'s great',
        time: '10:07'
      }];
      var transactions = [{
        id: 1,
        date: '28 Mar, 2020',
        billingname: 'Frank Dean',
        telephone: 657345678
      }, {
        id: 2,
        date: '28 Mar, 2020',
        billingname: 'Eddy Torres',
        telephone: 657345678
      }, {
        id: 3,
        date: '29 Mar, 2020',
        billingname: 'Jamison Clark',
        telephone: 657345678
      }, {
        id: 4,
        date: '30 Mar, 2020',
        billingname: 'Jewel Buckley',
        telephone: 657345678
      }, {
        id: 5,
        date: '31 Mar, 2020',
        billingname: 'Jeffrey Waltz',
        telephone: 657345678
      }, {
        id: 6,
        date: '01 Apr, 2020',
        billingname: 'Jefferson Allen',
        telephone: 657345678
      }];
      var statData = [{
        icon: 'ri-team-line',
        title: 'Utilisateurs',
        value: '1452'
      }, {
        icon: 'ri-money-dollar-box-fill',
        title: 'A payer',
        value: '52'
      }, {
        icon: 'ri-briefcase-4-line',
        title: 'Transactions',
        value: '4563'
      }];
      var paiements = [{
        telephone: 6455335262,
        merite: 9044
      }, {
        telephone: 6455335262,
        merite: 9044
      }, {
        telephone: 6455335262,
        merite: 9044
      }, {
        telephone: 6455335262,
        merite: 9044
      }, {
        telephone: 6455335262,
        merite: 9044
      }, {
        telephone: 6455335262,
        merite: 9044
      }, {
        telephone: 6455335262,
        merite: 9044
      }, {
        telephone: 6455335262,
        merite: 9044
      }, {
        telephone: 6455335262,
        merite: 9044
      }, {
        telephone: 6455335262,
        merite: 9044
      }];
      /***/
    },

    /***/
    "./src/app/pages/pages-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/pages-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: PagesRoutingModule */

    /***/
    function srcAppPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
        return PagesRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/pages/dashboard/dashboard.component.ts");

      var routes = [{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }, {
        path: 'charts',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./chart/chart.module */
          "./src/app/pages/chart/chart.module.ts")).then(function (m) {
            return m.ChartModule;
          });
        }
      }, {
        path: 'tables',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./tables/tables.module */
          "./src/app/pages/tables/tables.module.ts")).then(function (m) {
            return m.TablesModule;
          });
        }
      }];

      var PagesRoutingModule = /*#__PURE__*/_createClass(function PagesRoutingModule() {
        _classCallCheck(this, PagesRoutingModule);
      });

      PagesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: PagesRoutingModule
      });
      PagesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function PagesRoutingModule_Factory(t) {
          return new (t || PagesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/pages.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pages/pages.module.ts ***!
      \***************************************/

    /*! exports provided: PagesModule */

    /***/
    function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
        return PagesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/ui/ui.module */
      "./src/app/shared/ui/ui.module.ts");
      /* harmony import */


      var _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/widget/widget.module */
      "./src/app/shared/widget/widget.module.ts");
      /* harmony import */


      var angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angularx-qrcode */
      "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js");
      /* harmony import */


      var _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages-routing.module */
      "./src/app/pages/pages-routing.module.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-apexcharts */
      "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
      /* harmony import */


      var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-drag-drop */
      "./node_modules/ngx-drag-drop/__ivy_ngcc__/fesm2015/ngx-drag-drop.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @asymmetrik/ngx-leaflet */
      "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/pages/dashboard/dashboard.component.ts");
      /* harmony import */


      var _chart_chart_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./chart/chart.module */
      "./src/app/pages/chart/chart.module.ts");
      /* harmony import */


      var _tables_tables_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./tables/tables.module */
      "./src/app/pages/tables/tables.module.ts");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelSpeed: 0.3
      };

      var PagesModule = /*#__PURE__*/_createClass(function PagesModule() {
        _classCallCheck(this, PagesModule);
      });

      PagesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: PagesModule
      });
      PagesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function PagesModule_Factory(t) {
          return new (t || PagesModule)();
        },
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagesRoutingModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DndModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_14__["ChartModule"], _tables_tables_module__WEBPACK_IMPORTED_MODULE_15__["TablesModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__["LeafletModule"], _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PagesModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagesRoutingModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DndModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_14__["ChartModule"], _tables_tables_module__WEBPACK_IMPORTED_MODULE_15__["TablesModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__["LeafletModule"], _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__["QRCodeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagesRoutingModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DndModule"], _chart_chart_module__WEBPACK_IMPORTED_MODULE_14__["ChartModule"], _tables_tables_module__WEBPACK_IMPORTED_MODULE_15__["TablesModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__["LeafletModule"], _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"]],
            providers: [{
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/tables/advancedtable/advanced-sortable.directive.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/tables/advancedtable/advanced-sortable.directive.ts ***!
      \***************************************************************************/

    /*! exports provided: AdvancedSortableDirective */

    /***/
    function srcAppPagesTablesAdvancedtableAdvancedSortableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvancedSortableDirective", function () {
        return AdvancedSortableDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var _rotate = {
        asc: 'desc',
        desc: '',
        '': 'asc'
      };

      var AdvancedSortableDirective = /*#__PURE__*/function () {
        function AdvancedSortableDirective() {
          _classCallCheck(this, AdvancedSortableDirective);

          this.direction = '';
          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(AdvancedSortableDirective, [{
          key: "rotate",
          value: function rotate() {
            this.direction = _rotate[this.direction];
            this.sort.emit({
              column: this.sortable,
              direction: this.direction
            });
          }
        }]);

        return AdvancedSortableDirective;
      }();

      AdvancedSortableDirective.??fac = function AdvancedSortableDirective_Factory(t) {
        return new (t || AdvancedSortableDirective)();
      };

      AdvancedSortableDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: AdvancedSortableDirective,
        selectors: [["th", "sortable", ""]],
        hostVars: 4,
        hostBindings: function AdvancedSortableDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdvancedSortableDirective_click_HostBindingHandler() {
              return ctx.rotate();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
          }
        },
        inputs: {
          sortable: "sortable",
          direction: "direction"
        },
        outputs: {
          sort: "sort"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdvancedSortableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            // tslint:disable-next-line: directive-selector
            selector: 'th[sortable]',
            // tslint:disable-next-line: no-host-metadata-property
            host: {
              '[class.asc]': 'direction === "asc"',
              '[class.desc]': 'direction === "desc"',
              '(click)': 'rotate()'
            }
          }]
        }], function () {
          return [];
        }, {
          sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/tables/advancedtable/advanced.service.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/tables/advancedtable/advanced.service.ts ***!
      \****************************************************************/

    /*! exports provided: AdvancedService */

    /***/
    function srcAppPagesTablesAdvancedtableAdvancedServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvancedService", function () {
        return AdvancedService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data */
      "./src/app/pages/tables/advancedtable/data.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function compare(v1, v2) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
      }
      /**
       * Sort the table data
       * @param tabless Table field value
       * @param column Fetch the column
       * @param direction Sort direction Ascending or Descending
       */


      function sort(tables, column, direction) {
        if (direction === '') {
          return tables;
        } else {
          return _toConsumableArray(tables).sort(function (a, b) {
            var res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
          });
        }
      }
      /**
       * Table Data Match with Search input
       * @param tables Table field value fetch
       * @param term Search the value
       */


      function matches(tables, term, pipe) {
        return pipe.transform(tables.idUser).includes(term) || tables.nom.toLowerCase().includes(term) || pipe.transform(tables.telephone).includes(term) || pipe.transform(tables.scan).includes(term) || pipe.transform(tables.merite).includes(term);
      }

      var AdvancedService = /*#__PURE__*/function () {
        function AdvancedService(http, pipe) {
          var _this9 = this;

          _classCallCheck(this, AdvancedService);

          this.http = http;
          this.pipe = pipe;
          this.baseUrl = 'http://localhost:3000'; // tslint:disable-next-line: variable-name

          this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true); // tslint:disable-next-line: variable-name

          this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // tslint:disable-next-line: variable-name

          this._tables$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]); // tslint:disable-next-line: variable-name

          this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0); // tslint:disable-next-line: variable-name

          this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
            startIndex: 1,
            endIndex: 10,
            totalRecords: 0
          };
          this.data = [];
          this.DataTable = _data__WEBPACK_IMPORTED_MODULE_3__["tableData"];

          this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            return _this9._loading$.next(true);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            return _this9._search();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            return _this9._loading$.next(false);
          })).subscribe(function (result) {
            _this9._tables$.next(result.tables);

            _this9._total$.next(result.total);
          });

          this._search$.next(); // this.http.get<Table>('http://localhost:3000/scan').subscribe(data =>{
          //     this.data.push(data);
          //     console.log(this.data[0]);
          //     // console.log(tableData);
          //   }, error=> console.error(error));

        }

        _createClass(AdvancedService, [{
          key: "fetchAll",
          value: function fetchAll() {
            return this.http.get(this.baseUrl + '/scan', {
              responseType: "json"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              return console.log('fetched all utilisateur');
            }));
          }
          /**
           * Returns the value
           */

        }, {
          key: "tables$",
          get: function get() {
            return this.http.get(this.baseUrl + '/scan', {
              responseType: "json"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              return console.log('fetched utilisateur');
            }));
          } // get tables$() { return this._tables$.asObservable(); }

        }, {
          key: "total$",
          get: function get() {
            return this._total$.asObservable();
          }
        }, {
          key: "loading$",
          get: function get() {
            return this._loading$.asObservable();
          }
        }, {
          key: "page",
          get: function get() {
            return this._state.page;
          },
          set:
          /**
           * set the value
           */
          // tslint:disable-next-line: adjacent-overload-signatures
          function set(page) {
            this._set({
              page: page
            });
          } // tslint:disable-next-line: adjacent-overload-signatures

        }, {
          key: "pageSize",
          get: function get() {
            return this._state.pageSize;
          },
          set: function set(pageSize) {
            this._set({
              pageSize: pageSize
            });
          } // tslint:disable-next-line: adjacent-overload-signatures
          // tslint:disable-next-line: adjacent-overload-signatures

        }, {
          key: "searchTerm",
          get: function get() {
            return this._state.searchTerm;
          },
          set: // tslint:disable-next-line: adjacent-overload-signatures
          function set(searchTerm) {
            this._set({
              searchTerm: searchTerm
            });
          }
        }, {
          key: "startIndex",
          get: function get() {
            return this._state.startIndex;
          },
          set: function set(startIndex) {
            this._set({
              startIndex: startIndex
            });
          } // tslint:disable-next-line: adjacent-overload-signatures

        }, {
          key: "endIndex",
          get: function get() {
            return this._state.endIndex;
          },
          set: function set(endIndex) {
            this._set({
              endIndex: endIndex
            });
          } // tslint:disable-next-line: adjacent-overload-signatures

        }, {
          key: "totalRecords",
          get: function get() {
            return this._state.totalRecords;
          },
          set: function set(totalRecords) {
            this._set({
              totalRecords: totalRecords
            });
          }
        }, {
          key: "sortColumn",
          set: function set(sortColumn) {
            this._set({
              sortColumn: sortColumn
            });
          }
        }, {
          key: "sortDirection",
          set: function set(sortDirection) {
            this._set({
              sortDirection: sortDirection
            });
          }
        }, {
          key: "_set",
          value: function _set(patch) {
            Object.assign(this._state, patch);

            this._search$.next();
          }
          /**
           * Search Method
           */

        }, {
          key: "_search",
          value: function _search() {
            var _this10 = this;

            var _this$_state = this._state,
                sortColumn = _this$_state.sortColumn,
                sortDirection = _this$_state.sortDirection,
                pageSize = _this$_state.pageSize,
                page = _this$_state.page,
                searchTerm = _this$_state.searchTerm; // 1. sort

            var tables = sort(this.DataTable, sortColumn, sortDirection); // 2. filter

            tables = tables.filter(function (table) {
              return matches(table, searchTerm, _this10.pipe);
            });
            var total = tables.length; // 3. paginate

            this.totalRecords = tables.length;
            this._state.startIndex = (page - 1) * this.pageSize + 1;
            this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;

            if (this.endIndex > this.totalRecords) {
              this.endIndex = this.totalRecords;
            }

            tables = tables.slice(this._state.startIndex - 1, this._state.endIndex);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
              tables: tables,
              total: total
            });
          }
        }, {
          key: "updateValidate",
          value: function updateValidate(data) {
            return this.http.put(this.baseUrl + '/validate', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleHttpError));
          }
        }, {
          key: "handleHttpError",
          value: function handleHttpError(err) {
            var error;

            if (err.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', err.error.message);
              error = "An error occurred: ".concat(err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(err.status, ", ") + "body was: ".concat(err.error));
              error = "Backend returned code ".concat(err.status, ", body was: ").concat(err.error);
            } // Return an observable with a user-facing error message.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.' + '\n' + error);
          }
        }]);

        return AdvancedService;
      }();

      AdvancedService.??fac = function AdvancedService_Factory(t) {
        return new (t || AdvancedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]));
      };

      AdvancedService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AdvancedService,
        factory: AdvancedService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdvancedService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/tables/advancedtable/advancedtable.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/tables/advancedtable/advancedtable.component.ts ***!
      \***********************************************************************/

    /*! exports provided: AdvancedtableComponent */

    /***/
    function srcAppPagesTablesAdvancedtableAdvancedtableComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdvancedtableComponent", function () {
        return AdvancedtableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data */
      "./src/app/pages/tables/advancedtable/data.ts");
      /* harmony import */


      var _advanced_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./advanced.service */
      "./src/app/pages/tables/advancedtable/advanced.service.ts");
      /* harmony import */


      var _advanced_sortable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./advanced-sortable.directive */
      "./src/app/pages/tables/advancedtable/advanced-sortable.directive.ts");
      /* harmony import */


      var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/ui/pagetitle/pagetitle.component */
      "./src/app/shared/ui/pagetitle/pagetitle.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      function AdvancedtableComponent_tbody_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdvancedtableComponent_tbody_43_Template_button_click_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var table_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.validate(table_r1.idUser, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Valider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var table_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("result", table_r1.idUser)("term", ctx_r0.service.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("result", table_r1.nom)("term", ctx_r0.service.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("result", table_r1.telephone)("term", ctx_r0.service.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("result", table_r1.scan)("term", ctx_r0.service.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("result", table_r1.merite)("term", ctx_r0.service.searchTerm);
        }
      }
      /**
       * Advanced table component
       */


      var AdvancedtableComponent = /*#__PURE__*/function () {
        function AdvancedtableComponent(service) {
          _classCallCheck(this, AdvancedtableComponent);

          this.service = service;
          this.hideme = []; // Table data

          this.tableData = [];
          this.tables$ = service.tables$;
          console.log(this.tables$);

          if (this.tables$[0] == undefined) {
            this.vide = true;
          } else {
            this.vide = false;
          }

          console.log(this.vide);
          console.log(this.tables$[0]); // this.tables = service.tables$;

          this.total$ = service.total$; // this.service.fetchAll().subscribe({
          //   next: tableData => {
          //     this.tableData = tableData;
          //     // this.filteredHotels = this.hotels;
          //   },
          //   error: err => this.errorMsg = err
          // });
          // console.log("Tableau "+this.tableData);
        }

        _createClass(AdvancedtableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.breadCrumbItems = [{
              label: 'Comptes'
            }, {
              label: 'Utilisateurs',
              active: true
            }];
            /**
             * fetch data
             */
            // this._fetchData();
          }
        }, {
          key: "changeValue",
          value: function changeValue(i) {
            this.hideme[i] = !this.hideme[i];
          }
          /**
           * fetches the table value
           */

        }, {
          key: "_fetchData",
          value: function _fetchData() {
            this.tableData = _data__WEBPACK_IMPORTED_MODULE_2__["tableData"];

            for (var i = 0; i <= this.tableData.length; i++) {
              this.hideme.push(true);
            }
          }
          /**
           * Sort table data
           * @param param0 sort the column
           *
           */

        }, {
          key: "onSort",
          value: function onSort(_ref) {
            var column = _ref.column,
                direction = _ref.direction;
            // resetting other headers
            this.headers.forEach(function (header) {
              if (header.sortable !== column) {
                header.direction = '';
              }
            });
            this.service.sortColumn = column;
            this.service.sortDirection = direction;
          } // public showBadge : boolean = true
          // public toggleIsNewBadge(): void {
          //     this.showBadge = !this.showBadge;
          //   }

        }, {
          key: "validate",
          value: function validate(id, event) {
            // let ress = false
            this.service.updateValidate({
              idUser: id
            }).subscribe(function (res) {
              console.log(res); // this.action(event)
              // this.clicked[id] = true
              // ress = true

              event.target.disabled = true;
            }, function (err) {
              console.log(err);
            }); // this.service.updateValidate().subscribe
            // return ress
          }
        }]);

        return AdvancedtableComponent;
      }();

      AdvancedtableComponent.??fac = function AdvancedtableComponent_Factory(t) {
        return new (t || AdvancedtableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_advanced_service__WEBPACK_IMPORTED_MODULE_3__["AdvancedService"]));
      };

      AdvancedtableComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AdvancedtableComponent,
        selectors: [["app-advancedtable"]],
        viewQuery: function AdvancedtableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_advanced_sortable_directive__WEBPACK_IMPORTED_MODULE_4__["AdvancedSortableDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.headers = _t);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_advanced_service__WEBPACK_IMPORTED_MODULE_3__["AdvancedService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]])],
        decls: 53,
        vars: 15,
        consts: [[1, "container-fluid"], ["title", "Comptes", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "row", "mb-md-2"], [1, "col-sm-12", "col-md-6"], ["id", "tickets-table_length", 1, "dataTables_length"], [1, "d-inline-flex", "align-items-center"], ["name", "tickets-table_length", "aria-controls", "tickets-table", "name", "pageSize", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", "mx-2", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["id", "tickets-table_filter", 1, "dataTables_filter", "text-md-right"], ["type", "text", "name", "searchTerm", "aria-controls", "tickets-table", 1, "form-control", "form-control-sm", "ml-2", 3, "ngModel", "ngModelChange"], [1, "table-responsive"], ["id", "basic-datatable", 1, "table", "table-bordered", "dt-responsive", "nowrap", "datatables", "no-footer", "dtr-inline"], ["sortable", "id", 3, "sort"], ["sortable", "name", 3, "sort"], ["sortable", "telephone", 3, "sort"], ["sortable", "scan", 3, "sort"], ["sortable", "salary", 3, "sort"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-md-between", "align-items-md-center", "mt-2"], [1, "col-sm-12", "col-md-5"], ["id", "tickets-table_info", "role", "status", "aria-live", "polite", 1, "dataTables_info", "mb-2"], [1, "text-md-right", "float-md-right", "pagination-rounded"], [3, "collectionSize", "page", "pageSize", "pageChange"], [3, "result", "term"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
        template: function AdvancedtableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-pagetitle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Utilisateurs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Voir ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AdvancedtableComponent_Template_select_ngModelChange_13_listener($event) {
              return ctx.service.pageSize = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "100");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Rechercher: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AdvancedtableComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.service.searchTerm = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "table", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function AdvancedtableComponent_Template_th_sort_31_listener($event) {
              return ctx.onSort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Identifiants");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function AdvancedtableComponent_Template_th_sort_33_listener($event) {
              return ctx.onSort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function AdvancedtableComponent_Template_th_sort_35_listener($event) {
              return ctx.onSort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Telephone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function AdvancedtableComponent_Template_th_sort_37_listener($event) {
              return ctx.onSort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Scan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sort", function AdvancedtableComponent_Template_th_sort_39_listener($event) {
              return ctx.onSort($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Merite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, AdvancedtableComponent_tbody_43_Template, 15, 10, "tbody", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Utilisateurs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "ngb-pagination", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function AdvancedtableComponent_Template_ngb_pagination_pageChange_51_listener($event) {
              return ctx.service.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](52, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("breadcrumbItems", ctx.breadCrumbItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.pageSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.service.searchTerm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](44, 11, ctx.tables$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](52, 13, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
          }
        },
        directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_5__["PagetitleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _advanced_sortable_directive__WEBPACK_IMPORTED_MODULE_4__["AdvancedSortableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbHighlight"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlcy9hZHZhbmNlZHRhYmxlL2FkdmFuY2VkdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdvancedtableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-advancedtable',
            templateUrl: './advancedtable.component.html',
            styleUrls: ['./advancedtable.component.scss'],
            providers: [_advanced_service__WEBPACK_IMPORTED_MODULE_3__["AdvancedService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]
          }]
        }], function () {
          return [{
            type: _advanced_service__WEBPACK_IMPORTED_MODULE_3__["AdvancedService"]
          }];
        }, {
          headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_advanced_sortable_directive__WEBPACK_IMPORTED_MODULE_4__["AdvancedSortableDirective"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/tables/advancedtable/data.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/tables/advancedtable/data.ts ***!
      \****************************************************/

    /*! exports provided: tableData */

    /***/
    function srcAppPagesTablesAdvancedtableDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tableData", function () {
        return tableData;
      });

      var tableData = [{
        idUser: 1,
        nom: 'Dassi Idriss',
        telephone: 658359950,
        scan: 17,
        merite: 9000
      }, {
        idUser: 2,
        nom: 'Idriss',
        telephone: 658359950,
        scan: 47,
        merite: 3000
      }, {
        idUser: 3,
        nom: 'Dassi',
        telephone: 650359950,
        scan: 7,
        merite: 5000
      }, {
        idUser: 4,
        nom: 'tolarr',
        telephone: 658309950,
        scan: 10,
        merite: 4000
      }];
      /***/
    },

    /***/
    "./src/app/pages/tables/tables-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/tables/tables-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: TablesRoutingModule */

    /***/
    function srcAppPagesTablesTablesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function () {
        return TablesRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _advancedtable_advancedtable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./advancedtable/advancedtable.component */
      "./src/app/pages/tables/advancedtable/advancedtable.component.ts");

      var routes = [{
        path: 'advanced',
        component: _advancedtable_advancedtable_component__WEBPACK_IMPORTED_MODULE_2__["AdvancedtableComponent"]
      }];

      var TablesRoutingModule = /*#__PURE__*/_createClass(function TablesRoutingModule() {
        _classCallCheck(this, TablesRoutingModule);
      });

      TablesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TablesRoutingModule
      });
      TablesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TablesRoutingModule_Factory(t) {
          return new (t || TablesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TablesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TablesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/tables/tables.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/tables/tables.module.ts ***!
      \***********************************************/

    /*! exports provided: TablesModule */

    /***/
    function srcAppPagesTablesTablesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/ui/ui.module */
      "./src/app/shared/ui/ui.module.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _tables_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tables-routing.module */
      "./src/app/pages/tables/tables-routing.module.ts");
      /* harmony import */


      var _advancedtable_advanced_sortable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./advancedtable/advanced-sortable.directive */
      "./src/app/pages/tables/advancedtable/advanced-sortable.directive.ts");
      /* harmony import */


      var _advancedtable_advancedtable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./advancedtable/advancedtable.component */
      "./src/app/pages/tables/advancedtable/advancedtable.component.ts");

      var TablesModule = /*#__PURE__*/_createClass(function TablesModule() {
        _classCallCheck(this, TablesModule);
      });

      TablesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TablesModule
      });
      TablesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TablesModule_Factory(t) {
          return new (t || TablesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_5__["TablesRoutingModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeaheadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TablesModule, {
          declarations: [_advancedtable_advancedtable_component__WEBPACK_IMPORTED_MODULE_7__["AdvancedtableComponent"], _advancedtable_advanced_sortable_directive__WEBPACK_IMPORTED_MODULE_6__["AdvancedSortableDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_5__["TablesRoutingModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeaheadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TablesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_advancedtable_advancedtable_component__WEBPACK_IMPORTED_MODULE_7__["AdvancedtableComponent"], _advancedtable_advanced_sortable_directive__WEBPACK_IMPORTED_MODULE_6__["AdvancedSortableDirective"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_5__["TablesRoutingModule"], _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeaheadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/ui/pagetitle/pagetitle.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/shared/ui/pagetitle/pagetitle.component.ts ***!
      \************************************************************/

    /*! exports provided: PagetitleComponent */

    /***/
    function srcAppSharedUiPagetitlePagetitleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagetitleComponent", function () {
        return PagetitleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function PagetitleComponent_ng_container_7_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.label);
        }
      }

      function PagetitleComponent_ng_container_7_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r1.label, " ");
        }
      }

      function PagetitleComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PagetitleComponent_ng_container_7_li_1_Template, 3, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PagetitleComponent_ng_container_7_li_2_Template, 2, 1, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !item_r1.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r1.active);
        }
      }

      var PagetitleComponent = /*#__PURE__*/function () {
        function PagetitleComponent() {
          _classCallCheck(this, PagetitleComponent);
        }

        _createClass(PagetitleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PagetitleComponent;
      }();

      PagetitleComponent.??fac = function PagetitleComponent_Factory(t) {
        return new (t || PagetitleComponent)();
      };

      PagetitleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PagetitleComponent,
        selectors: [["app-pagetitle"]],
        inputs: {
          breadcrumbItems: "breadcrumbItems",
          title: "title"
        },
        decls: 8,
        vars: 2,
        consts: [[1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"]],
        template: function PagetitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ol", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, PagetitleComponent_ng_container_7_Template, 3, 2, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.breadcrumbItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS9wYWdldGl0bGUvcGFnZXRpdGxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagetitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pagetitle',
            templateUrl: './pagetitle.component.html',
            styleUrls: ['./pagetitle.component.scss']
          }]
        }], function () {
          return [];
        }, {
          breadcrumbItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/ui/ui.module.ts":
    /*!****************************************!*\
      !*** ./src/app/shared/ui/ui.module.ts ***!
      \****************************************/

    /*! exports provided: UiModule */

    /***/
    function srcAppSharedUiUiModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiModule", function () {
        return UiModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pagetitle/pagetitle.component */
      "./src/app/shared/ui/pagetitle/pagetitle.component.ts");

      var UiModule = /*#__PURE__*/_createClass(function UiModule() {
        _classCallCheck(this, UiModule);
      });

      UiModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: UiModule
      });
      UiModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function UiModule_Factory(t) {
          return new (t || UiModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UiModule, {
          declarations: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__["PagetitleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__["PagetitleComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__["PagetitleComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__["PagetitleComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/widget/stat/stat.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/shared/widget/stat/stat.component.ts ***!
      \******************************************************/

    /*! exports provided: StatComponent */

    /***/
    function srcAppSharedWidgetStatStatComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatComponent", function () {
        return StatComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StatComponent = /*#__PURE__*/function () {
        function StatComponent() {
          _classCallCheck(this, StatComponent);
        }

        _createClass(StatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StatComponent;
      }();

      StatComponent.??fac = function StatComponent_Factory(t) {
        return new (t || StatComponent)();
      };

      StatComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: StatComponent,
        selectors: [["app-stat"]],
        inputs: {
          title: "title",
          value: "value",
          icon: "icon"
        },
        decls: 10,
        vars: 5,
        consts: [[1, "card"], [1, "card-body"], [1, "media"], [1, "media-body", "overflow-hidden"], [1, "text-truncate", "font-size-14", "mb-2"], [1, "mb-0"], [1, "text-primary"]],
        template: function StatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("", ctx.icon, " font-size-24");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXQvc3RhdC9zdGF0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-stat',
            templateUrl: './stat.component.html',
            styleUrls: ['./stat.component.scss']
          }]
        }], function () {
          return [];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/widget/widget.module.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/widget/widget.module.ts ***!
      \************************************************/

    /*! exports provided: WidgetModule */

    /***/
    function srcAppSharedWidgetWidgetModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetModule", function () {
        return WidgetModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _stat_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stat/stat.component */
      "./src/app/shared/widget/stat/stat.component.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var WidgetModule = /*#__PURE__*/_createClass(function WidgetModule() {
        _classCallCheck(this, WidgetModule);
      });

      WidgetModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: WidgetModule
      });
      WidgetModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function WidgetModule_Factory(t) {
          return new (t || WidgetModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](WidgetModule, {
          declarations: [_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"]],
          exports: [_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WidgetModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"]],
            exports: [_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        defaultauth: 'fackbackend',
        firebaseConfig: {
          apiKey: '',
          authDomain: '',
          databaseURL: '',
          projectId: '',
          storageBucket: '',
          messagingSenderId: '',
          appId: '',
          measurementId: ''
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Prim's\Documents\git\Ceramic-web-service\front-end\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map