"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_user_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/user.module.scss */ \"./style/user.module.scss\");\n/* harmony import */ var _style_user_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_user_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSP = true;\nfunction User(param) {\n    let { user  } = param;\n    _s();\n    console.log(\"this is userSSS\", user);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { query  } = router;\n    const { address  } = user;\n    console.log(\"this is aderaasdqw\", address);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        keywords: user.name,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_user_module_scss__WEBPACK_IMPORTED_MODULE_3___default().block),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Пользователь number \".concat(query.id)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Name User: \".concat(user.name),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"n\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 19,\n                            columnNumber: 49\n                        }, this),\n                        \"Address: \".concat(address.city)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = User;\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFzQztBQUNVO0FBQ1c7O0FBRTVDLFNBQVNHLEtBQU0sS0FBTSxFQUFFO1FBQVIsRUFBQ0MsS0FBSSxFQUFDLEdBQU47O0lBQzFCQyxRQUFRQyxHQUFHLENBQUMsbUJBQW1CRjtJQUMvQixNQUFNRyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTSxFQUFDUSxNQUFLLEVBQUMsR0FBR0Q7SUFFaEIsTUFBTyxFQUFFRSxRQUFPLEVBQUUsR0FBR0w7SUFDckJDLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JHO0lBQ2xDLHFCQUNJLDhEQUFDUCxpRUFBYUE7UUFBQ1EsVUFBVU4sS0FBS08sSUFBSTtrQkFDOUIsNEVBQUNDO1lBQUlDLFdBQVdaLHNFQUFXOzs4QkFDdkIsOERBQUNjOzhCQUNJLHVCQUFnQyxPQUFUUCxNQUFNUSxFQUFFOzs7Ozs7OEJBRXBDLDhEQUFDSjs7d0JBQ0ssY0FBdUIsT0FBVlIsS0FBS08sSUFBSTt3QkFBRztzQ0FBQyw4REFBQ007Ozs7O3dCQUMzQixZQUF3QixPQUFiUixRQUFRUyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0MsQ0FBQztHQXZCdUJmOztRQUVMSCxrREFBU0E7OztLQUZKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlL3VzZXIubW9kdWxlLnNjc3NcIlxyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyICh7dXNlcn0pIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB1c2VyU1NTXCIsIHVzZXIpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge3F1ZXJ5fSA9IHJvdXRlcjtcclxuXHJcbiAgICBjb25zdCAgeyBhZGRyZXNzIH0gPSB1c2VyO1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgYWRlcmFhc2RxdycsIGFkZHJlc3MpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYWluQ29udGFpbmVyIGtleXdvcmRzPXt1c2VyLm5hbWV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMIG51bWJlciAke3F1ZXJ5LmlkfWB9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7YE5hbWUgVXNlcjogJHt1c2VyLm5hbWV9YH0gPG4vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgQWRkcmVzczogJHthZGRyZXNzLmNpdHl9YH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gKVxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHt1c2VyfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGUiLCJNYWluQ29udGFpbmVyIiwiVXNlciIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwicXVlcnkiLCJhZGRyZXNzIiwia2V5d29yZHMiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvY2siLCJoMSIsImlkIiwibiIsImNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});