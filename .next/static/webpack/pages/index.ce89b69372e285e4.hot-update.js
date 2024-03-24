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

/***/ "./src/components/ContactForm.js":
/*!***************************************!*\
  !*** ./src/components/ContactForm.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ContactForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), media = ref[0], setMedia = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), social = ref1[0], setSocial = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    }), formData = ref2[0], setFormData = ref2[1];\n    var handleChange = function(e) {\n        var _target = e.target, name = _target.name, value = _target.value;\n        setFormData(_objectSpread({}, formData, _defineProperty({}, name, value)));\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log(formData);\n        setFormData({\n            name: \"\",\n            email: \"\",\n            message: \"\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchUserData = function() {\n            var _ref = _asyncToGenerator(D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data;\n                return D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return fetchData();\n                        case 3:\n                            data = _ctx.sent;\n                            setMedia(data.social_handles);\n                            setSocial(data);\n                            _ctx.next = 11;\n                            break;\n                        case 8:\n                            _ctx.prev = 8;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.log(_ctx.t0.message);\n                        case 11:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        8\n                    ]\n                ]);\n            }));\n            return function fetchUserData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUserData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"contact\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            className: \"contactForm\",\n            style: {\n                margin: \"1rem\",\n                display: \"flex\",\n                flexDirection: \"column\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                width: \"90vw\",\n                maxWidth: \"60rem\"\n            },\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    style: {\n                        fontSize: \"medium\",\n                        width: \"100%\",\n                        maxWidth: \"40rem\",\n                        margin: \"0.5rem\",\n                        padding: \"0.5rem 1rem\",\n                        color: \"#ab5429\",\n                        borderRadius: \"0.5rem\",\n                        background: \"white\"\n                    },\n                    placeholder: \"Name\",\n                    name: \"name\",\n                    value: formData.name,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    style: {\n                        fontSize: \"medium\",\n                        width: \"100%\",\n                        maxWidth: \"40rem\",\n                        margin: \"0.5rem\",\n                        padding: \"0.5rem 1rem\",\n                        color: \"#ab5429\",\n                        borderRadius: \"0.5rem\",\n                        background: \"white\"\n                    },\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    value: formData.email,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                    name: \"message\",\n                    style: {\n                        fontSize: \"medium\",\n                        width: \"100%\",\n                        maxWidth: \"40rem\",\n                        margin: \"0.5rem\",\n                        padding: \"0.5rem 1rem\",\n                        color: \"#ab5429\",\n                        borderRadius: \"0.5rem\",\n                        background: \"white\"\n                    },\n                    cols: 30,\n                    rows: 10,\n                    placeholder: \"Your message\",\n                    value: formData.message,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    style: {\n                        background: \"white\",\n                        border: \"none\",\n                        borderRadius: \"0.5rem\",\n                        margin: \"2rem\",\n                        padding: \"0.75rem 3.5rem\"\n                    },\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContactForm, \"KgqLTN9kvkWsmjqEYiMA7wpeWKk=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFNUMsSUFBTUUsV0FBVyxHQUFHLFdBQU07O0lBQ3hCLElBQTBCRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBSHhDLEtBR2MsR0FBY0EsR0FBWSxHQUExQixFQUhkLFFBR3dCLEdBQUlBLEdBQVksR0FBaEI7SUFDdEIsSUFBNEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFKMUMsTUFJZSxHQUFlQSxJQUFZLEdBQTNCLEVBSmYsU0FJMEIsR0FBSUEsSUFBWSxHQUFoQjtJQUN4QixJQUFnQ0EsSUFJOUIsR0FKOEJBLCtDQUFRLENBQUM7UUFDdkNPLElBQUksRUFBRSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxFQUFFO1FBQ1RDLE9BQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQyxFQVRKLFFBS2lCLEdBQWlCVCxJQUk5QixHQUphLEVBTGpCLFdBSzhCLEdBQUlBLElBSTlCLEdBSjBCO0lBTTVCLElBQU1ZLFlBQVksR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDMUIsSUFBd0JBLE9BQVEsR0FBUkEsQ0FBQyxDQUFDQyxNQUFNLEVBQXhCUCxJQUFJLEdBQVlNLE9BQVEsQ0FBeEJOLElBQUksRUFBRVEsS0FBSyxHQUFLRixPQUFRLENBQWxCRSxLQUFLO1FBQ25CSixXQUFXLENBQUMsa0JBQ1BELFFBQVEsRUFDWCxvQkFBQ0gsSUFBSSxFQUFHUSxLQUFLLEVBQ2QsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0gsQ0FBQyxFQUFLO1FBQzFCQSxDQUFDLENBQUNJLGNBQWMsRUFBRSxDQUFDO1FBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsUUFBUSxDQUFDLENBQUM7UUFDdEJDLFdBQVcsQ0FB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WUFBWTs7Ozs7eUJBQ3RCOzhCQUNGLDhEQUFDc0MsUUFBTTtvQkFDTFgsSUFBSSxFQUFDLFFBQVE7b0JBQ2JWLEtBQUssRUFBRTt3QkFDTGUsVUFBVSxFQUFFLE9BQU87d0JBQ25CTyxNQUFNLEVBQUUsTUFBTTt3QkFDZFIsWUFBWSxFQUFFLFFBQVE7d0JBQ3RCYixNQUFNLEVBQUUsTUFBTTt3QkFDZFcsT0FBTyxFQUFFLGdCQUFnQjtxQkFDMUI7OEJBQ0YsUUFFRDs7Ozs7eUJBQVM7Ozs7OztpQkFDSjs7Ozs7YUFDSCxDQUNOO0NBQ0g7R0EzSEt2QyxXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUE2SGpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanM/ZmUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc29jaWFsLCBzZXRTb2NpYWxdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YSgpO1xyXG4gICAgICAgIHNldE1lZGlhKGRhdGEuc29jaWFsX2hhbmRsZXMpO1xyXG4gICAgICAgIHNldFNvY2lhbChkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFVzZXJEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWN0Rm9ybVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1hcmdpbjogXCIxcmVtXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCI5MHZ3XCIsXHJcbiAgICAgICAgICBtYXhXaWR0aDogXCI2MHJlbVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwibWVkaXVtXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiNDByZW1cIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbSAxcmVtXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNhYjU0MjlcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIm1lZGl1bVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjQwcmVtXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW0gMXJlbVwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjYWI1NDI5XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIm1lZGl1bVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjQwcmVtXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW0gMXJlbVwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjYWI1NDI5XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNvbHM9ezMwfVxyXG4gICAgICAgICAgcm93cz17MTB9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbWVzc2FnZVwiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubWVzc2FnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAuNzVyZW0gMy41cmVtXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhY3RGb3JtIiwibWVkaWEiLCJzZXRNZWRpYSIsInNvY2lhbCIsInNldFNvY2lhbCIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hVc2VyRGF0YSIsImRhdGEiLCJmZXRjaERhdGEiLCJzb2NpYWxfaGFuZGxlcyIsImVycm9yIiwiZGl2IiwiaWQiLCJmb3JtIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWF4V2lkdGgiLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImZvbnRTaXplIiwicGFkZGluZyIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIiwiYm9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ContactForm.js\n");

/***/ })

});