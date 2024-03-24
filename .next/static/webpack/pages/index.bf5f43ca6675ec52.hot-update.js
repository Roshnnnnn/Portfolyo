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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/hello */ \"./pages/api/hello.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ContactForm = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    }), formData = ref[0], setFormData = ref[1];\n    var handleChange = function(e) {\n        var _target = e.target, name = _target.name, value = _target.value;\n        setFormData(_objectSpread({}, formData, _defineProperty({}, name, value)));\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log(formData);\n        setFormData({\n            name: \"\",\n            email: \"\",\n            message: \"\"\n        });\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), media = ref1[0], setMedia = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), social = ref2[0], setSocial = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isSmallScreen = ref3[0], setIsSmallScreen = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchUserData = function() {\n            var _ref = _asyncToGenerator(D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data;\n                return D_Portfolyo_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return (0,_pages_api_hello__WEBPACK_IMPORTED_MODULE_3__.fetchData)();\n                        case 3:\n                            data = _ctx.sent;\n                            setMedia(data.social_handles);\n                            setSocial(data);\n                            _ctx.next = 11;\n                            break;\n                        case 8:\n                            _ctx.prev = 8;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.log(_ctx.t0.message);\n                        case 11:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        8\n                    ]\n                ]);\n            }));\n            return function fetchUserData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUserData();\n        // Check if screen size is small\n        var handleResize = function() {\n            setIsSmallScreen(window.innerWidth <= 600);\n        };\n        // Add event listener for window resize\n        window.addEventListener(\"resize\", handleResize);\n        // Initial check for screen size\n        handleResize();\n        // Remove event listener on component unmount\n        return function() {\n            return window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"contact\",\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                className: \"contactForm\",\n                style: {\n                    margin: \"1rem\",\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    width: \"90vw\",\n                    maxWidth: \"40rem\"\n                },\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        style: {\n                            fontSize: \"medium\",\n                            width: \"100%\",\n                            margin: \"0.5rem\",\n                            padding: \"0.5rem 1rem\",\n                            color: \"#ab5429\",\n                            borderRadius: \"0.5rem\",\n                            background: \"white\"\n                        },\n                        placeholder: \"Name\",\n                        name: \"name\",\n                        value: formData.name,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        style: {\n                            fontSize: \"medium\",\n                            width: \"100%\",\n                            margin: \"0.5rem\",\n                            padding: \"0.5rem 1rem\",\n                            color: \"#ab5429\",\n                            borderRadius: \"0.5rem\",\n                            background: \"white\"\n                        },\n                        placeholder: \"Email\",\n                        name: \"email\",\n                        value: formData.email,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        name: \"message\",\n                        style: {\n                            fontSize: \"medium\",\n                            width: \"100%\",\n                            margin: \"0.5rem\",\n                            padding: \"0.5rem 1rem\",\n                            color: \"#ab5429\",\n                            borderRadius: \"0.5rem\",\n                            background: \"white\"\n                        },\n                        cols: 30,\n                        rows: 10,\n                        placeholder: \"Your message\",\n                        value: formData.message,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        style: {\n                            background: \"white\",\n                            border: \"none\",\n                            borderRadius: \"0.5rem\",\n                            margin: \"2rem\",\n                            padding: \"0.75rem 3.5rem\"\n                        },\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            !isSmallScreen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                    margin: \"4rem\",\n                    marginRight: \"1rem\"\n                },\n                children: [\n                    media.map(function(item, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: item.url,\n                            style: {\n                                marginRight: \"20px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: item.image.url,\n                                alt: item.platform,\n                                style: {\n                                    width: \"40px\",\n                                    height: \"40px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                                lineNumber: 141,\n                                columnNumber: 15\n                            }, _this1)\n                        }, index, false, {\n                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                            lineNumber: 140,\n                            columnNumber: 13\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            style: {\n                                fontSize: \"2rem\",\n                                color: \"white\",\n                                marginTop: \"1rem\"\n                            },\n                            href: \"mailto:infomaya.tonni@gmail.com\",\n                            children: social.email\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                            lineNumber: 152,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                        lineNumber: 151,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"copyright\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                \"\\xa9 \",\n                                new Date().getFullYear(),\n                                \" by\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"https://themeforest.net/user/codeefly\",\n                                    target: \"_blank\",\n                                    rel: \"noreferrer\",\n                                    children: \"Codeefly.\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                                    lineNumber: 162,\n                                    columnNumber: 15\n                                }, _this),\n                                \" \",\n                                \"All rights reserved.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                            lineNumber: 160,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                        lineNumber: 159,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n                lineNumber: 138,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portfolyo\\\\src\\\\components\\\\ContactForm.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContactForm, \"IIRnk5verdY9A4UE8lTTtezn9EE=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkMsR0FBRyxFQUFFTixJQUFJLENBQUNPLEtBQUssQ0FBQ0gsR0FBRztnQ0FDbkJJLEdBQUcsRUFBRVIsSUFBSSxDQUFDUyxRQUFRO2dDQUNsQnBDLEtBQUssRUFBRTtvQ0FDTFEsS0FBSyxFQUFFLE1BQU07b0NBQ2I2QixNQUFNLEVBQUUsTUFBTTtpQ0FDZjs7Ozs7c0NBQ0Q7MkJBUm9CVCxLQUFLOzs7O2tDQVN6QjtxQkFDTCxDQUFDO2tDQUNGLDhEQUFDVSxNQUFJO2tDQUNILDRFQUFDVCxHQUFDOzRCQUNBN0IsS0FBSyxFQUFFO2dDQUFFYSxRQUFRLEVBQUUsTUFBTTtnQ0FBRUUsS0FBSyxFQUFFLE9BQU87Z0NBQUV3QixTQUFTLEVBQUUsTUFBTTs2QkFBRTs0QkFDOURULElBQUksRUFBQyxpQ0FBaUM7c0NBRXJDN0MsTUFBTSxDQUFDZCxLQUFLOzs7OztpQ0FDWDs7Ozs7NkJBQ0M7a0NBQ1AsOERBQUMyQixLQUFHO3dCQUFDTSxTQUFTLEVBQUMsV0FBVztrQ0FDeEIsNEVBQUNvQyxHQUFDOztnQ0FBQyxPQUNDO2dDQUFDLElBQUlDLElBQUksRUFBRSxDQUFDQyxXQUFXLEVBQUU7Z0NBQUMsS0FBRztnQ0FBQyxHQUFHOzhDQUNuQyw4REFBQ2IsR0FBQztvQ0FDQUMsSUFBSSxFQUFDLHVDQUF1QztvQ0FDNUNyRCxNQUFNLEVBQUMsUUFBUTtvQ0FDZmtFLEdBQUcsRUFBQyxZQUFZOzhDQUNqQixXQUVEOzs7Ozt5Q0FBSTtnQ0FBQyxHQUFHO2dDQUFDLHNCQUVYOzs7Ozs7aUNBQUk7Ozs7OzZCQUNBOzs7Ozs7cUJBQ0Y7Ozs7OzthQUVKLENBQ047Q0FDSDtHQTVLSzFFLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQThLakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcz9mZTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9oZWxsb1wiO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc29jaWFsLCBzZXRTb2NpYWxdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc1NtYWxsU2NyZWVuLCBzZXRJc1NtYWxsU2NyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YSgpO1xyXG4gICAgICAgIHNldE1lZGlhKGRhdGEuc29jaWFsX2hhbmRsZXMpO1xyXG4gICAgICAgIHNldFNvY2lhbChkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFVzZXJEYXRhKCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgc2NyZWVuIHNpemUgaXMgc21hbGxcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0SXNTbWFsbFNjcmVlbih3aW5kb3cuaW5uZXJXaWR0aCA8PSA2MDApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHdpbmRvdyByZXNpemVcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgLy8gSW5pdGlhbCBjaGVjayBmb3Igc2NyZWVuIHNpemVcclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG5cclxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjb21wb25lbnQgdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvbnRhY3RcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdEZvcm1cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW46IFwiMXJlbVwiLFxyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjkwdndcIixcclxuICAgICAgICAgIG1heFdpZHRoOiBcIjQwcmVtXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCJtZWRpdW1cIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtIDFyZW1cIixcclxuICAgICAgICAgICAgY29sb3I6IFwiI2FiNTQyOVwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwibWVkaXVtXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbSAxcmVtXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNhYjU0MjlcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwibWVkaXVtXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbSAxcmVtXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNhYjU0MjlcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY29scz17MzB9XHJcbiAgICAgICAgICByb3dzPXsxMH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5tZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIycmVtXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMC43NXJlbSAzLjVyZW1cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgeyFpc1NtYWxsU2NyZWVuICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCI0cmVtXCIsIG1hcmdpblJpZ2h0OiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgIHttZWRpYS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSBrZXk9e2luZGV4fSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5wbGF0Zm9ybX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIycmVtXCIsIGNvbG9yOiBcIndoaXRlXCIsIG1hcmdpblRvcDogXCIxcmVtXCIgfX1cclxuICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOmluZm9tYXlhLnRvbm5pQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c29jaWFsLmVtYWlsfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICDCqSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBieXtcIiBcIn1cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L3VzZXIvY29kZWVmbHlcIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvZGVlZmx5LlxyXG4gICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsIkNvbnRhY3RGb3JtIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJtZWRpYSIsInNldE1lZGlhIiwic29jaWFsIiwic2V0U29jaWFsIiwiaXNTbWFsbFNjcmVlbiIsInNldElzU21hbGxTY3JlZW4iLCJmZXRjaFVzZXJEYXRhIiwiZGF0YSIsInNvY2lhbF9oYW5kbGVzIiwiZXJyb3IiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJpZCIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZm9ybSIsImNsYXNzTmFtZSIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJtYXhXaWR0aCIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwiY29scyIsInJvd3MiLCJidXR0b24iLCJib3JkZXIiLCJtYXJnaW5SaWdodCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImEiLCJocmVmIiwidXJsIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwbGF0Zm9ybSIsImhlaWdodCIsInNwYW4iLCJtYXJnaW5Ub3AiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ContactForm.js\n");

/***/ })

});