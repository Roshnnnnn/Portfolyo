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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar About = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), skills = ref[0], setSkills = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), about = ref1[0], setAbout = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchUserData = function() {\n            var _ref = _asyncToGenerator(D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data, filteredSkills;\n                return D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.fetchData)();\n                        case 3:\n                            data = _ctx.sent;\n                            filteredSkills = data.skills.filter(function(item) {\n                                return item.enabled === true;\n                            });\n                            setSkills(filteredSkills);\n                            setAbout(data.about);\n                            _ctx.next = 12;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(\"Error fetching user data:\", _ctx.t0);\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        9\n                    ]\n                ]);\n            }));\n            return function fetchUserData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUserData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"tonni_tm_section\",\n        id: \"about\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"tonni_tm_about\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"about_inner\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"left\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"left_inner\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"year\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                    children: about.exp_year\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 34,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                    className: \"rounded\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                        src: \"img/about/flower.png\",\n                                                        alt: \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"experience\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                    children: \"+\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                    children: \"years experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                    className: \"shape\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                        src: \"img/about/dots.png\",\n                                                        alt: \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                    className: \"circle_shape\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                        className: \"svg\",\n                                                        src: \"img/svg/icon1.svg\",\n                                                        alt: \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"title\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                children: about.quote\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                children: about.subTitle\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"text\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: about.description\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"dodo_progress\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            children: skills.map(function(item) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"progress_inner skillsInner___\",\n                                        \"data-value\": item.percentage,\n                                        \"data-color\": \"green\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, item._id, false, {\n                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 17\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\About.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(About, \"q6SQlJ/iF1m3MjZnOaQqY4kTJYI=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDLE9BQU87OzBEQUNwQiw4REFBQ0ksTUFBSTswREFBRWYsS0FBSyxDQUFDb0IsS0FBSzs7Ozs7cURBQVE7MERBQzFCLDhEQUFDQyxJQUFFOzs7O3FEQUFHOzBEQUNOLDhEQUFDUixJQUFFOzBEQUFFYixLQUFLLENBQUNzQixRQUFROzs7OztxREFBTTs7Ozs7OzZDQUNyQjtrREFDTiw4REFBQ1osS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLE1BQU07a0RBQ25CLDRFQUFDUSxHQUFDO3NEQUFFbkIsS0FBSyxDQUFDdUIsV0FBVzs7Ozs7aURBQUs7Ozs7OzZDQUN0Qjs7Ozs7O3FDQUNGOzs7Ozs7NkJBQ0Y7a0NBK0JOLDhEQUFDYixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZUFBZTtrQ0FDNUIsNEVBQUNhLElBQUU7c0NBQ0ExQixNQUFNLENBQUMyQixHQUFHLENBQUMsU0FBQ25CLElBQUk7cURBQ2YsOERBQUNvQixJQUFFOzhDQUNELDRFQUFDaEIsS0FBRzt3Q0FDRkMsU0FBUyxFQUFDLCtCQUErQjt3Q0FDekNnQixZQUFVLEVBQUVyQixJQUFJLENBQUNzQixVQUFVO3dDQUMzQkMsWUFBVSxFQUFFLE9BQU87Ozs7OzhDQUNkO21DQUxBdkIsSUFBSSxDQUFDd0IsR0FBRzs7OzswQ0FNWjs2QkFDTixDQUFDOzs7OztpQ0FDQzs7Ozs7NkJBQ0Q7Ozs7OztxQkFDRjs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBMUdLakMsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBNEdYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanM/ZTU4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCIuLi8uLi9wYWdlcy9hcGkvaGVsbG9cIjtcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtza2lsbHMsIHNldFNraWxsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEoKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFNraWxscyA9IGRhdGEuc2tpbGxzLmZpbHRlcihcclxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmVuYWJsZWQgPT09IHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFNraWxscyhmaWx0ZXJlZFNraWxscyk7XHJcbiAgICAgICAgc2V0QWJvdXQoZGF0YS5hYm91dCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVXNlckRhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvbm5pX3RtX3NlY3Rpb25cIiBpZD1cImFib3V0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9ubmlfdG1fYWJvdXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9pbm5lclwiPlxyXG4gICAgICAgICAgICB7LyogTGVmdCBzZWN0aW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2Fib3V0LmV4cF95ZWFyfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hYm91dC9mbG93ZXIucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2VcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPis8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD55ZWFycyBleHBlcmllbmNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Fib3V0L2RvdHMucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGVfc2hhcGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInN2Z1wiIHNyYz1cImltZy9zdmcvaWNvbjEuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogUmlnaHQgc2VjdGlvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnthYm91dC5xdW90ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxoMz57YWJvdXQuc3ViVGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwPnthYm91dC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJza2lsbHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIHtza2lsbHMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLl9pZH0gY2xhc3NOYW1lPVwic2tpbGwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNraWxsLXByb2dyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9e2l0ZW0/LnBlcmNlbnRhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJza2lsbC1wcm9ncmVzcy1maWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke2l0ZW0/LnBlcmNlbnRhZ2V9JWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJza2lsbC1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtPy5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2tpbGwtcGVyY2VudGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8ucGVyY2VudGFnZX0gJVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2RvX3Byb2dyZXNzXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7c2tpbGxzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3NfaW5uZXIgc2tpbGxzSW5uZXJfX19cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9e2l0ZW0ucGVyY2VudGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWNvbG9yPXtcImdyZWVuXCJ9XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoRGF0YSIsIkFib3V0Iiwic2tpbGxzIiwic2V0U2tpbGxzIiwiYWJvdXQiLCJzZXRBYm91dCIsImZldGNoVXNlckRhdGEiLCJkYXRhIiwiZmlsdGVyZWRTa2lsbHMiLCJmaWx0ZXIiLCJpdGVtIiwiZW5hYmxlZCIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaDMiLCJleHBfeWVhciIsInNwYW4iLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwicXVvdGUiLCJociIsInN1YlRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1bCIsIm1hcCIsImxpIiwiZGF0YS12YWx1ZSIsInBlcmNlbnRhZ2UiLCJkYXRhLWNvbG9yIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/About.js\n");

/***/ })

});