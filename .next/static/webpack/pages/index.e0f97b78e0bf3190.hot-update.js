"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar About = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), skills = ref[0], setSkills = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), about = ref1[0], setAbout = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchUserData = function() {\n            var _ref = _asyncToGenerator(D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data, filteredSkills;\n                return D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.fetchData)();\n                        case 3:\n                            data = _ctx.sent;\n                            filteredSkills = data.skills.filter(function(item) {\n                                return item.enabled === true;\n                            });\n                            setSkills(filteredSkills);\n                            setAbout(data.about);\n                            _ctx.next = 12;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(\"Error fetching user data:\", _ctx.t0);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        9\n                    ]\n                ]);\n            }));\n            return function fetchUserData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUserData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"tonni_tm_section\",\n        id: \"about\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tonni_tm_about\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"about_inner\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"left_inner\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"year\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                children: about.exp_year\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"rounded\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"img/about/flower.png\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"experience\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                children: \"+\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: \"years experience\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"shape\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    src: \"img/about/dots.png\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                className: \"circle_shape\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                    className: \"svg\",\n                                                    src: \"img/svg/icon1.svg\",\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"right\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"title\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: about.quote\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            children: about.subTitle\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"text\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: about.description\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"q6SQlJ/iF1m3MjZnOaQqY4kTJYI=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxPQUFPOztzREFDcEIsOERBQUNJLE1BQUk7c0RBQUVmLEtBQUssQ0FBQ29CLEtBQUs7Ozs7O2lEQUFRO3NEQUMxQiw4REFBQ0MsSUFBRTs7OztpREFBRztzREFDTiw4REFBQ1IsSUFBRTtzREFBRWIsS0FBSyxDQUFDc0IsUUFBUTs7Ozs7aURBQU07Ozs7Ozt5Q0FDckI7OENBQ04sOERBQUNaLEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxNQUFNOzhDQUNuQiw0RUFBQ1EsR0FBQztrREFBRW5CLEtBQUssQ0FBQ3VCLFdBQVc7Ozs7OzZDQUFLOzs7Ozt5Q0FDdEI7Ozs7OztpQ0FFRjs7Ozs7O3lCQUNGOzs7OztxQkE4QkY7Ozs7O2lCQUNGOzs7OzthQUNGLENBQ047Q0FDSDtHQTdGSzFCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQStGWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fib3V0LmpzP2U1ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi4vLi4vcGFnZXMvYXBpL2hlbGxvXCI7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBbc2tpbGxzLCBzZXRTa2lsbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthYm91dCwgc2V0QWJvdXRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRTa2lsbHMgPSBkYXRhLnNraWxscy5maWx0ZXIoXHJcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5lbmFibGVkID09PSB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRTa2lsbHMoZmlsdGVyZWRTa2lsbHMpO1xyXG4gICAgICAgIHNldEFib3V0KGRhdGEuYWJvdXQpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFVzZXJEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b25uaV90bV9zZWN0aW9uXCIgaWQ9XCJhYm91dFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvbm5pX3RtX2Fib3V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfaW5uZXJcIj5cclxuICAgICAgICAgICAgey8qIExlZnQgc2VjdGlvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInllYXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPnthYm91dC5leHBfeWVhcn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYWJvdXQvZmxvd2VyLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz4rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+eWVhcnMgZXhwZXJpZW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hYm91dC9kb3RzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2lyY2xlX3NoYXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdmdcIiBzcmM9XCJpbWcvc3ZnL2ljb24xLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIFJpZ2h0IHNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57YWJvdXQucXVvdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2Fib3V0LnN1YlRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD57YWJvdXQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiBTa2lsbHMgc2VjdGlvbiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNraWxscy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNraWxscy1saXN0XCI+XHJcbiAgICAgICAgICAgICAge3NraWxscy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uX2lkfSBjbGFzc05hbWU9XCJza2lsbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2tpbGwtcHJvZ3Jlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZT17aXRlbT8ucGVyY2VudGFnZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNraWxsLXByb2dyZXNzLWZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7aXRlbT8ucGVyY2VudGFnZX0lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNraWxsLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0/LmltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJza2lsbC1wZXJjZW50YWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5wZXJjZW50YWdlfSAlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoRGF0YSIsIkFib3V0Iiwic2tpbGxzIiwic2V0U2tpbGxzIiwiYWJvdXQiLCJzZXRBYm91dCIsImZldGNoVXNlckRhdGEiLCJkYXRhIiwiZmlsdGVyZWRTa2lsbHMiLCJmaWx0ZXIiLCJpdGVtIiwiZW5hYmxlZCIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaDMiLCJleHBfeWVhciIsInNwYW4iLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwicXVvdGUiLCJociIsInN1YlRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/About.js\n");

/***/ })

});