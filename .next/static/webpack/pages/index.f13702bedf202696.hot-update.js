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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar About = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), skills = ref[0], setSkills = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), about = ref1[0], setAbout = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchUserData = function() {\n            var _ref = _asyncToGenerator(D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data, filteredSkills;\n                return D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.fetchData)();\n                        case 3:\n                            data = _ctx.sent;\n                            filteredSkills = data.skills.filter(function(item) {\n                                return item.enabled === true;\n                            });\n                            setSkills(filteredSkills);\n                            setAbout(data.about);\n                            _ctx.next = 12;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(\"Error fetching user data:\", _ctx.t0);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        9\n                    ]\n                ]);\n            }));\n            return function fetchUserData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUserData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"tonni_tm_section\",\n        id: \"about\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tonni_tm_about\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"about_inner\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"left_inner\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"year\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                    children: about.exp_year\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 34,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                    className: \"rounded\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                        src: \"img/about/flower.png\",\n                                                        alt: \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"experience\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                    children: \"+\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                    children: \"years experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                    className: \"shape\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                        src: \"img/about/dots.png\",\n                                                        alt: \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                    className: \"circle_shape\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                        className: \"svg\",\n                                                        src: \"img/svg/icon1.svg\",\n                                                        alt: \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"title\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                children: about.quote\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                children: about.subTitle\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"text\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: about.description\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"dodo_progress\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            children: skills.map(function(item) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"progress_inner skillsInner___\",\n                                        \"data-value\": item.percentage,\n                                        \"data-color\": \"green\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"background\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                className: \"bar\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    className: \"bar_in\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 25\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 23\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, item._id, false, {\n                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 17\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"q6SQlJ/iF1m3MjZnOaQqY4kTJYI=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDLE9BQU87OzBEQUNwQiw4REFBQ0ksTUFBSTswREFBRWYsS0FBSyxDQUFDb0IsS0FBSzs7Ozs7cURBQVE7MERBQzFCLDhEQUFDQyxJQUFFOzs7O3FEQUFHOzBEQUNOLDhEQUFDUixJQUFFOzBEQUFFYixLQUFLLENBQUNzQixRQUFROzs7OztxREFBTTs7Ozs7OzZDQUNyQjtrREFDTiw4REFBQ1osS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLE1BQU07a0RBQ25CLDRFQUFDUSxHQUFDO3NEQUFFbkIsS0FBSyxDQUFDdUIsV0FBVzs7Ozs7aURBQUs7Ozs7OzZDQUN0Qjs7Ozs7O3FDQUNGOzs7Ozs7NkJBQ0Y7a0NBK0JOLDhEQUFDYixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZUFBZTtrQ0FDNUIsNEVBQUNhLElBQUU7c0NBQ0ExQixNQUFNLENBQUMyQixHQUFHLENBQUMsU0FBQ25CLElBQUk7cURBQ2YsOERBQUNvQixJQUFFOzhDQUNELDRFQUFDaEIsS0FBRzt3Q0FDRkMsU0FBUyxFQUFDLCtCQUErQjt3Q0FDekNnQixZQUFVLEVBQUVyQixJQUFJLENBQUNzQixVQUFVO3dDQUMzQkMsWUFBVSxFQUFFLE9BQU87a0RBRW5CLDRFQUFDbkIsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLFlBQVk7c0RBQ3pCLDRFQUFDRCxLQUFHO2dEQUFDQyxTQUFTLEVBQUMsS0FBSzswREFDbEIsNEVBQUNELEtBQUc7b0RBQUNDLFNBQVMsRUFBQyxRQUFROzs7OzswREFBRzs7Ozs7c0RBQ3RCOzs7OztrREFDRjs7Ozs7OENBQ0Y7bUNBWENMLElBQUksQ0FBQ3dCLEdBQUc7Ozs7MENBWVo7NkJBQ04sQ0FBQzs7Ozs7aUNBQ0M7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGOzs7OzthQUNGLENBQ047Q0FDSDtHQWhIS2pDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQWtIWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fib3V0LmpzP2U1ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi4vLi4vcGFnZXMvYXBpL2hlbGxvXCI7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBbc2tpbGxzLCBzZXRTa2lsbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthYm91dCwgc2V0QWJvdXRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRTa2lsbHMgPSBkYXRhLnNraWxscy5maWx0ZXIoXHJcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5lbmFibGVkID09PSB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRTa2lsbHMoZmlsdGVyZWRTa2lsbHMpO1xyXG4gICAgICAgIHNldEFib3V0KGRhdGEuYWJvdXQpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFVzZXJEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b25uaV90bV9zZWN0aW9uXCIgaWQ9XCJhYm91dFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvbm5pX3RtX2Fib3V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfaW5uZXJcIj5cclxuICAgICAgICAgICAgey8qIExlZnQgc2VjdGlvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInllYXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPnthYm91dC5leHBfeWVhcn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYWJvdXQvZmxvd2VyLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz4rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+eWVhcnMgZXhwZXJpZW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hYm91dC9kb3RzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2lyY2xlX3NoYXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdmdcIiBzcmM9XCJpbWcvc3ZnL2ljb24xLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIFJpZ2h0IHNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57YWJvdXQucXVvdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2Fib3V0LnN1YlRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD57YWJvdXQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2tpbGxzLWxpc3RcIj5cclxuICAgICAgICAgICAgICB7c2tpbGxzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5faWR9IGNsYXNzTmFtZT1cInNraWxsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJza2lsbC1wcm9ncmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbHVlPXtpdGVtPy5wZXJjZW50YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2tpbGwtcHJvZ3Jlc3MtZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtpdGVtPy5wZXJjZW50YWdlfSVgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2tpbGwtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbT8uaW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNraWxsLXBlcmNlbnRhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnBlcmNlbnRhZ2V9ICVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9kb19wcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge3NraWxscy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzX2lubmVyIHNraWxsc0lubmVyX19fXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbHVlPXtpdGVtLnBlcmNlbnRhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1jb2xvcj17XCJncmVlblwifVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9pblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmZXRjaERhdGEiLCJBYm91dCIsInNraWxscyIsInNldFNraWxscyIsImFib3V0Iiwic2V0QWJvdXQiLCJmZXRjaFVzZXJEYXRhIiwiZGF0YSIsImZpbHRlcmVkU2tpbGxzIiwiZmlsdGVyIiwiaXRlbSIsImVuYWJsZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImgzIiwiZXhwX3llYXIiLCJzcGFuIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsInF1b3RlIiwiaHIiLCJzdWJUaXRsZSIsImRlc2NyaXB0aW9uIiwidWwiLCJtYXAiLCJsaSIsImRhdGEtdmFsdWUiLCJwZXJjZW50YWdlIiwiZGF0YS1jb2xvciIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/About.js\n");

/***/ })

});