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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_user_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../style/user.module.scss */ \"./style/user.module.scss\");\n/* harmony import */ var _style_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_user_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* harmony import */ var _mock_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mock/state */ \"./mock/state.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction User(param) {\n    let { user  } = param;\n    _s();\n    const { name , addressUser , street , positionLAT , PositionLNG  } = _mock_state__WEBPACK_IMPORTED_MODULE_3__.sizeData.infoUser;\n    const [checkBorder, setCheckBorder] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { query  } = router;\n    const { address  } = user;\n    const myContainer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const setChangeBorder = (e)=>{\n        console.log(\"this is ref\", myContainer);\n        const curretnColor1 = myContainer.current;\n        // curretnColor.style.backgroundColor = \"red\"\n        let selector = document.getElementsByClassName(\".avatarList\");\n        console.log(\"this is selector\", selector);\n        console.log(e.target);\n        if (!checkBorder) {\n            _mock_state__WEBPACK_IMPORTED_MODULE_3__.sizeData.height = _mock_state__WEBPACK_IMPORTED_MODULE_3__.sizeData.height.slice(+checkBorder, _mock_state__WEBPACK_IMPORTED_MODULE_3__.sizeData.height.length - 1);\n            if (_mock_state__WEBPACK_IMPORTED_MODULE_3__.sizeData.height.length === 0) {\n                return _mock_state__WEBPACK_IMPORTED_MODULE_3__.sizeData.height[0];\n            }\n        }\n        setCheckBorder(!checkBorder);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        keywords: user.name,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().block),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"\".concat(_mock_state__WEBPACK_IMPORTED_MODULE_3__.sizeData.infoUser.numberUser, \" \").concat(query.id)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text_info),\n                    children: [\n                        \"\".concat(name, \": \").concat(user.name, \" \\n\"),\n                        \"\".concat(addressUser, \": \").concat(address.city, \" \\n\"),\n                        \"\".concat(street, \": \").concat(address.street)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().positions_geo),\n                    children: [\n                        \"\".concat(positionLAT, \": \").concat(address.geo.lat, \"\\n\"),\n                        \"\".concat(PositionLNG, \": \").concat(address.geo.lng)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_style_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().avatarListBorder),\n                    children: _mock_state__WEBPACK_IMPORTED_MODULE_3__.sizeData.height.map((el, idx)=>{\n                        return !checkBorder ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: setChangeBorder,\n                            className: (_style_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().avatarList),\n                            style: {\n                                height: \"\".concat(_mock_state__WEBPACK_IMPORTED_MODULE_3__.sizeData.height[idx])\n                            }\n                        }, idx, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 60,\n                            columnNumber: 44\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: curretnColor,\n                            className: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 62,\n                            columnNumber: 35\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\test_task_freelance\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(User, \"xzvbflFlYYAmIvnee3FfLQMhoJ4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = User;\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFzQztBQUNVO0FBQ1c7QUFDakI7QUFDSDs7QUFFeEIsU0FBU00sS0FBSyxLQUFNLEVBQUU7UUFBUixFQUFDQyxLQUFJLEVBQUMsR0FBTjs7SUFFekIsTUFBTSxFQUFDQyxLQUFJLEVBQUVDLFlBQVcsRUFBRUMsT0FBTSxFQUFFQyxZQUFXLEVBQUVDLFlBQVcsRUFBQyxHQUFHVCwwREFBaUI7SUFFL0UsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTVcsU0FBU2hCLHNEQUFTQTtJQUN4QixNQUFNLEVBQUNpQixNQUFLLEVBQUMsR0FBR0Q7SUFDaEIsTUFBTSxFQUFDRSxRQUFPLEVBQUMsR0FBR1g7SUFFbEIsTUFBTVksY0FBY2YsNkNBQU1BLENBQUMsSUFBSTtJQUcvQixNQUFNZ0Isa0JBQWtCLENBQUNDLElBQU07UUFFM0JDLFFBQVFDLEdBQUcsQ0FBQyxlQUFlSjtRQUUzQixNQUFNSyxnQkFBZUwsWUFBWU0sT0FBTztRQUV4Qyw2Q0FBNkM7UUFFekMsSUFBSUMsV0FBV0MsU0FBU0Msc0JBQXNCLENBQUM7UUFDbkROLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JHO1FBQ2hDSixRQUFRQyxHQUFHLENBQUNGLEVBQUVRLE1BQU07UUFFcEIsSUFBSSxDQUFDZixhQUFhO1lBQ2RYLHdEQUFlLEdBQUdBLDhEQUFxQixDQUFDLENBQUNXLGFBQWFYLCtEQUFzQixHQUFHO1lBQy9FLElBQUlBLCtEQUFzQixLQUFLLEdBQUc7Z0JBQzlCLE9BQU9BLDJEQUFrQjtZQUM3QixDQUFDO1FBQ0wsQ0FBQztRQUNEWSxlQUFlLENBQUNEO0lBQ3BCO0lBRUEscUJBQ0ksOERBQUNaLGlFQUFhQTtRQUFDK0IsVUFBVTFCLEtBQUtDLElBQUk7a0JBQzlCLDRFQUFDMEI7WUFBSUMsV0FBV2xDLHNFQUFXOzs4QkFDdkIsOERBQUNvQzs4QkFDSSxHQUFtQ3BCLE9BQWhDZCxxRUFBNEIsRUFBQyxLQUFZLE9BQVRjLE1BQU1zQixFQUFFOzs7Ozs7OEJBRWhELDhEQUFDTDtvQkFBSUMsV0FBV2xDLDBFQUFlOzt3QkFDekIsR0FBV00sT0FBVEMsTUFBSyxNQUFjLE9BQVZELEtBQUtDLElBQUksRUFBQzt3QkFDckIsR0FBa0JVLE9BQWhCVCxhQUFZLE1BQWlCLE9BQWJTLFFBQVF1QixJQUFJLEVBQUM7d0JBQy9CLEdBQWF2QixPQUFYUixRQUFPLE1BQW1CLE9BQWZRLFFBQVFSLE1BQU07Ozs7Ozs7OEJBR2pDLDhEQUFDd0I7b0JBQUlDLFdBQVdsQyw4RUFBbUI7O3dCQUM3QixHQUFrQmlCLE9BQWhCUCxhQUFZLE1BQW9CLE9BQWhCTyxRQUFReUIsR0FBRyxDQUFDQyxHQUFHLEVBQUM7d0JBQ2xDLEdBQWtCMUIsT0FBaEJOLGFBQVksTUFBb0IsT0FBaEJNLFFBQVF5QixHQUFHLENBQUNFLEdBQUc7Ozs7Ozs7OEJBR3ZDLDhEQUFDWDtvQkFBSUMsV0FBV2xDLGlGQUFzQjs4QkFDakNFLDREQUFtQixDQUFDLENBQUM2QyxJQUFJQyxNQUFRO3dCQUM5QixPQUNJLENBQUNuQyw0QkFBYyw4REFBQ29COzRCQUFjZ0IsU0FBUzlCOzRCQUFpQmUsV0FBV2xDLDJFQUFnQjs0QkFDaEVBLE9BQU87Z0NBQUM2QixRQUFRLEdBQXdCLE9BQXJCM0Isd0RBQWUsQ0FBQzhDLElBQUk7NEJBQUU7MkJBRG5DQTs7OztpREFFbkIsOERBQUNmOzRCQUFJa0IsS0FBSzVCOzRCQUFjVyxXQUFVOzs7OztnQ0FBUztvQkFFekQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3BCLENBQUM7R0FsRXVCN0I7O1FBS0xOLGtEQUFTQTs7O0tBTEpNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGUvdXNlci5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXJcIjtcclxuaW1wb3J0IHtzaXplRGF0YX0gZnJvbSBcIi4uLy4uL21vY2svc3RhdGVcIjtcclxuaW1wb3J0IHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoe3VzZXJ9KSB7XHJcblxyXG4gICAgY29uc3Qge25hbWUsIGFkZHJlc3NVc2VyLCBzdHJlZXQsIHBvc2l0aW9uTEFULCBQb3NpdGlvbkxOR30gPSBzaXplRGF0YS5pbmZvVXNlcjtcclxuXHJcbiAgICBjb25zdCBbY2hlY2tCb3JkZXIsIHNldENoZWNrQm9yZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtxdWVyeX0gPSByb3V0ZXI7XHJcbiAgICBjb25zdCB7YWRkcmVzc30gPSB1c2VyO1xyXG5cclxuICAgIGNvbnN0IG15Q29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHJcbiAgICBjb25zdCBzZXRDaGFuZ2VCb3JkZXIgPSAoZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyByZWYnLCBteUNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmV0bkNvbG9yID0gbXlDb250YWluZXIuY3VycmVudFxyXG5cclxuICAgICAgICAvLyBjdXJyZXRuQ29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIi5hdmF0YXJMaXN0XCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgc2VsZWN0b3InLCBzZWxlY3RvcilcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuXHJcbiAgICAgICAgaWYgKCFjaGVja0JvcmRlcikge1xyXG4gICAgICAgICAgICBzaXplRGF0YS5oZWlnaHQgPSBzaXplRGF0YS5oZWlnaHQuc2xpY2UoK2NoZWNrQm9yZGVyLCBzaXplRGF0YS5oZWlnaHQubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgaWYgKHNpemVEYXRhLmhlaWdodC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzaXplRGF0YS5oZWlnaHRbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGVja0JvcmRlcighY2hlY2tCb3JkZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbkNvbnRhaW5lciBrZXl3b3Jkcz17dXNlci5uYW1lfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICB7YCR7c2l6ZURhdGEuaW5mb1VzZXIubnVtYmVyVXNlcn0gJHtxdWVyeS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZXh0X2luZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtuYW1lfTogJHt1c2VyLm5hbWV9IFxcbmB9XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake2FkZHJlc3NVc2VyfTogJHthZGRyZXNzLmNpdHl9IFxcbmB9XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake3N0cmVldH06ICR7YWRkcmVzcy5zdHJlZXR9YH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wb3NpdGlvbnNfZ2VvfT5cclxuICAgICAgICAgICAgICAgICAgICB7YCR7cG9zaXRpb25MQVR9OiAke2FkZHJlc3MuZ2VvLmxhdH1cXG5gfVxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtQb3NpdGlvbkxOR306ICR7YWRkcmVzcy5nZW8ubG5nfWB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYXZhdGFyTGlzdEJvcmRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpemVEYXRhLmhlaWdodC5tYXAoKGVsLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjaGVja0JvcmRlciA/IDxkaXYga2V5PXtpZHh9IG9uQ2xpY2s9e3NldENoYW5nZUJvcmRlcn0gY2xhc3NOYW1lPXtzdHlsZS5hdmF0YXJMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiBgJHtzaXplRGF0YS5oZWlnaHRbaWR4XX1gfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiByZWY9e2N1cnJldG5Db2xvcn0gY2xhc3NOYW1lPVwiXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gKVxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHt1c2VyfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGUiLCJNYWluQ29udGFpbmVyIiwic2l6ZURhdGEiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlVzZXIiLCJ1c2VyIiwibmFtZSIsImFkZHJlc3NVc2VyIiwic3RyZWV0IiwicG9zaXRpb25MQVQiLCJQb3NpdGlvbkxORyIsImluZm9Vc2VyIiwiY2hlY2tCb3JkZXIiLCJzZXRDaGVja0JvcmRlciIsInJvdXRlciIsInF1ZXJ5IiwiYWRkcmVzcyIsIm15Q29udGFpbmVyIiwic2V0Q2hhbmdlQm9yZGVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZXRuQ29sb3IiLCJjdXJyZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0YXJnZXQiLCJoZWlnaHQiLCJzbGljZSIsImxlbmd0aCIsImtleXdvcmRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvY2siLCJoMSIsIm51bWJlclVzZXIiLCJpZCIsInRleHRfaW5mbyIsImNpdHkiLCJwb3NpdGlvbnNfZ2VvIiwiZ2VvIiwibGF0IiwibG5nIiwiYXZhdGFyTGlzdEJvcmRlciIsIm1hcCIsImVsIiwiaWR4Iiwib25DbGljayIsImF2YXRhckxpc3QiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});