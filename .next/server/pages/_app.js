"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/trpc */ \"./src/utils/trpc.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_trpc__WEBPACK_IMPORTED_MODULE_1__]);\n_utils_trpc__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/PerraInmutable/github/code.it/src/pages/_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_trpc__WEBPACK_IMPORTED_MODULE_1__.trpc.withTRPC(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ3FDO0FBRXJDLE1BQU1DLEtBQUssR0FBWSxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDbkQscUJBQU8sOERBQUNELFNBQVM7UUFBRSxHQUFHQyxTQUFTOzs7OztpQkFBSSxDQUFDO0FBQ3RDLENBQUM7QUFFRCxpRUFBZUgsc0RBQWEsQ0FBQ0MsS0FBSyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLml0Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBUeXBlIH0gZnJvbSAnbmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMnO1xuaW1wb3J0IHsgdHJwYyB9IGZyb20gJy4uL3V0aWxzL3RycGMnO1xuXG5jb25zdCBNeUFwcDogQXBwVHlwZSA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cnBjLndpdGhUUlBDKE15QXBwKTtcbiJdLCJuYW1lcyI6WyJ0cnBjIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoVFJQQyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/trpc.ts":
/*!***************************!*\
  !*** ./src/utils/trpc.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"trpc\": () => (/* binding */ trpc)\n/* harmony export */ });\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/next */ \"./node_modules/@trpc/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nfunction getBaseUrl() {\n    if (false) {}\n    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;\n    if (process.env.RENDER_INTERNAL_HOSTNAME) return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;\n    // assume localhost\n    return `http://localhost:${process.env.PORT ?? 3000}`;\n}\nconst trpc = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.createTRPCNext)({\n    config ({ ctx  }) {\n        return {\n            links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({\n                    /**\n           * If you want to use SSR, you need to use the server's full URL\n           * @link https://trpc.io/docs/ssr\n           **/ url: `${getBaseUrl()}/api/trpc`\n                }), \n            ]\n        };\n    },\n    /**\n   * @link https://trpc.io/docs/ssr\n   **/ ssr: false\n}); // => { useQuery: ..., useMutation: ...}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdHJwYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkM7QUFDRDtBQUc1QyxTQUFTRSxVQUFVLEdBQUc7SUFDcEIsSUFBSSxLQUE2QixFQUMvQixFQUFVO0lBRVosSUFBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsRUFDeEIsT0FBTyxDQUFDLFFBQVEsRUFBRUYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFN0MsSUFBSUYsT0FBTyxDQUFDQyxHQUFHLENBQUNFLHdCQUF3QixFQUN0QyxPQUFPLENBQUMsT0FBTyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Usd0JBQXdCLENBQUMsQ0FBQyxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU5RSxtQkFBbUI7SUFDbkIsT0FBTyxDQUFDLGlCQUFpQixFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUVNLE1BQU1DLElBQUksR0FBR1AsMERBQWMsQ0FBWTtJQUM1Q1EsTUFBTSxFQUFDLEVBQUVDLEdBQUcsR0FBRSxFQUFFO1FBQ2QsT0FBTztZQUNMQyxLQUFLLEVBQUU7Z0JBQ0xYLDJEQUFhLENBQUM7b0JBQ1o7OztZQUdFLEdBQ0ZZLEdBQUcsRUFBRSxDQUFDLEVBQUVWLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQztpQkFDaEMsQ0FBQzthQUNIO1NBS0YsQ0FBQztJQUNKLENBQUM7SUFDRDs7SUFFRSxHQUNGVyxHQUFHLEVBQUUsS0FBSztDQUNYLENBQUMsQ0FBQyxDQUNILHdDQUF3QyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGUuaXQvLi9zcmMvdXRpbHMvdHJwYy50cz8xMWM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0dHBCYXRjaExpbmsgfSBmcm9tICdAdHJwYy9jbGllbnQnO1xuaW1wb3J0IHsgY3JlYXRlVFJQQ05leHQgfSBmcm9tICdAdHJwYy9uZXh0JztcbmltcG9ydCB0eXBlIHsgQXBwUm91dGVyIH0gZnJvbSAnLi4vcGFnZXMvYXBpL3RycGMvW3RycGNdJztcblxuZnVuY3Rpb24gZ2V0QmFzZVVybCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSAvLyBicm93c2VyIHNob3VsZCB1c2UgcmVsYXRpdmUgcGF0aFxuICAgIHJldHVybiAnJztcblxuICBpZiAocHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCkgLy8gcmVmZXJlbmNlIGZvciB2ZXJjZWwuY29tXG4gICAgcmV0dXJuIGBodHRwczovLyR7cHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTH1gO1xuXG4gIGlmIChwcm9jZXNzLmVudi5SRU5ERVJfSU5URVJOQUxfSE9TVE5BTUUpIC8vIHJlZmVyZW5jZSBmb3IgcmVuZGVyLmNvbVxuICAgIHJldHVybiBgaHR0cDovLyR7cHJvY2Vzcy5lbnYuUkVOREVSX0lOVEVSTkFMX0hPU1ROQU1FfToke3Byb2Nlc3MuZW52LlBPUlR9YDtcblxuICAvLyBhc3N1bWUgbG9jYWxob3N0XG4gIHJldHVybiBgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LlBPUlQgPz8gMzAwMH1gO1xufVxuXG5leHBvcnQgY29uc3QgdHJwYyA9IGNyZWF0ZVRSUENOZXh0PEFwcFJvdXRlcj4oe1xuICBjb25maWcoeyBjdHggfSkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5rczogW1xuICAgICAgICBodHRwQmF0Y2hMaW5rKHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB5b3Ugd2FudCB0byB1c2UgU1NSLCB5b3UgbmVlZCB0byB1c2UgdGhlIHNlcnZlcidzIGZ1bGwgVVJMXG4gICAgICAgICAgICogQGxpbmsgaHR0cHM6Ly90cnBjLmlvL2RvY3Mvc3NyXG4gICAgICAgICAgICoqL1xuICAgICAgICAgIHVybDogYCR7Z2V0QmFzZVVybCgpfS9hcGkvdHJwY2AsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIC8qKlxuICAgICAgICogQGxpbmsgaHR0cHM6Ly9yZWFjdC1xdWVyeS12My50YW5zdGFjay5jb20vcmVmZXJlbmNlL1F1ZXJ5Q2xpZW50XG4gICAgICAgKiovXG4gICAgICAvLyBxdWVyeUNsaWVudENvbmZpZzogeyBkZWZhdWx0T3B0aW9uczogeyBxdWVyaWVzOiB7IHN0YWxlVGltZTogNjAgfSB9IH0sXG4gICAgfTtcbiAgfSxcbiAgLyoqXG4gICAqIEBsaW5rIGh0dHBzOi8vdHJwYy5pby9kb2NzL3NzclxuICAgKiovXG4gIHNzcjogZmFsc2UsXG59KTtcbi8vID0+IHsgdXNlUXVlcnk6IC4uLiwgdXNlTXV0YXRpb246IC4uLn1cbiJdLCJuYW1lcyI6WyJodHRwQmF0Y2hMaW5rIiwiY3JlYXRlVFJQQ05leHQiLCJnZXRCYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlZFUkNFTF9VUkwiLCJSRU5ERVJfSU5URVJOQUxfSE9TVE5BTUUiLCJQT1JUIiwidHJwYyIsImNvbmZpZyIsImN0eCIsImxpbmtzIiwidXJsIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/trpc.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-ssr-prepass":
/*!************************************!*\
  !*** external "react-ssr-prepass" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-ssr-prepass");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/react":
/*!******************************!*\
  !*** external "@trpc/react" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@trpc/react");;

/***/ }),

/***/ "@trpc/react/shared":
/*!*************************************!*\
  !*** external "@trpc/react/shared" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@trpc/react/shared");;

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_extends.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_extends.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _extends)\n/* harmony export */ });\nfunction extends_() {\n  extends_ = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return extends_.apply(this, arguments);\n}\n\nfunction _extends() {\n  return extends_.apply(this, arguments);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fZXh0ZW5kcy5tanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZS5pdC8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvc3JjL19leHRlbmRzLm1qcz9lYjFjIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGV4dGVuZHNfKCkge1xuICBleHRlbmRzXyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIGV4dGVuZHNfLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICByZXR1cm4gZXh0ZW5kc18uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_extends.mjs\n");

/***/ }),

/***/ "./node_modules/@trpc/next/dist/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/@trpc/next/dist/index.mjs ***!
  \************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTRPCNext\": () => (/* binding */ createTRPCNext),\n/* harmony export */   \"withTRPC\": () => (/* binding */ withTRPC)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_extends.mjs */ \"./node_modules/@swc/helpers/src/_extends.mjs\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _trpc_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/react */ \"@trpc/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_ssr_prepass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ssr-prepass */ \"react-ssr-prepass\");\n/* harmony import */ var _trpc_react_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @trpc/react/shared */ \"@trpc/react/shared\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _trpc_react__WEBPACK_IMPORTED_MODULE_1__, _trpc_react_shared__WEBPACK_IMPORTED_MODULE_4__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _trpc_react__WEBPACK_IMPORTED_MODULE_1__, _trpc_react_shared__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction transformQueryOrMutationCacheErrors(result) {\n    const error = result.state.error;\n    if (error instanceof Error && error.name === 'TRPCClientError') {\n        const newError = {\n            message: error.message,\n            data: error.data,\n            shape: error.shape\n        };\n        return {\n            ...result,\n            state: {\n                ...result.state,\n                error: newError\n            }\n        };\n    }\n    return result;\n}\nfunction withTRPC(opts) {\n    const { config: getClientConfig  } = opts;\n    return (AppOrPage)=>{\n        const trpc = (0,_trpc_react__WEBPACK_IMPORTED_MODULE_1__.createReactQueryHooks)();\n        const WithTRPC = (props)=>{\n            const [prepassProps] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(()=>{\n                if (props.trpc) {\n                    return props.trpc;\n                }\n                const config = getClientConfig({});\n                const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient(config.queryClientConfig);\n                const trpcClient = trpc.createClient(config);\n                return {\n                    abortOnUnmount: config.abortOnUnmount,\n                    queryClient,\n                    trpcClient,\n                    ssrState: opts.ssr ? 'mounting' : false,\n                    ssrContext: null\n                };\n            });\n            const { queryClient , trpcClient , ssrState , ssrContext  } = prepassProps;\n            const hydratedState = trpc.useDehydratedState(trpcClient, // eslint-disable-next-line @typescript-eslint/no-explicit-any\n            props.pageProps.trpcState);\n            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(trpc.Provider, {\n                abortOnUnmount: prepassProps.abortOnUnmount ?? false,\n                client: trpcClient,\n                queryClient: queryClient,\n                ssrState: ssrState,\n                ssrContext: ssrContext\n            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClientProvider, {\n                client: queryClient\n            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.Hydrate, {\n                state: hydratedState\n            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(AppOrPage, (0,_swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, props)))));\n        };\n        if (AppOrPage.getInitialProps || opts.ssr) {\n            WithTRPC.getInitialProps = async (appOrPageCtx)=>{\n                const AppTree = appOrPageCtx.AppTree;\n                // Determine if we are wrapping an App component or a Page component.\n                const isApp = !!appOrPageCtx.Component;\n                const ctx = isApp ? appOrPageCtx.ctx : appOrPageCtx;\n                // Run the wrapped component's getInitialProps function.\n                let pageProps = {};\n                if (AppOrPage.getInitialProps) {\n                    const originalProps = await AppOrPage.getInitialProps(appOrPageCtx);\n                    const originalPageProps = isApp ? originalProps.pageProps ?? {} : originalProps;\n                    pageProps = {\n                        ...originalPageProps,\n                        ...pageProps\n                    };\n                }\n                const getAppTreeProps = (props)=>isApp ? {\n                        pageProps: props\n                    } : props;\n                if (typeof window !== 'undefined' || !opts.ssr) {\n                    return getAppTreeProps(pageProps);\n                }\n                const config = getClientConfig({\n                    ctx\n                });\n                const trpcClient = (0,_trpc_react__WEBPACK_IMPORTED_MODULE_1__.createTRPCClient)(config);\n                const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient(config.queryClientConfig);\n                const trpcProp = {\n                    config,\n                    trpcClient,\n                    queryClient,\n                    ssrState: 'prepass',\n                    ssrContext: ctx\n                };\n                const prepassProps = {\n                    pageProps,\n                    trpc: trpcProp\n                };\n                // Run the prepass step on AppTree. This will run all trpc queries on the server.\n                // multiple prepass ensures that we can do batching on the server\n                while(true){\n                    // render full tree\n                    await react_ssr_prepass__WEBPACK_IMPORTED_MODULE_3__(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(AppTree, prepassProps));\n                    if (!queryClient.isFetching()) {\n                        break;\n                    }\n                    // wait until the query cache has settled it's promises\n                    await new Promise((resolve)=>{\n                        const unsub = queryClient.getQueryCache().subscribe((event)=>{\n                            if (event?.query.getObserversCount() === 0) {\n                                resolve();\n                                unsub();\n                            }\n                        });\n                    });\n                }\n                const dehydratedCache = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.dehydrate)(queryClient, {\n                    shouldDehydrateQuery () {\n                        // makes sure errors are also dehydrated\n                        return true;\n                    }\n                });\n                // since error instances can't be serialized, let's make them into `TRPCClientErrorLike`-objects\n                const dehydratedCacheWithErrors = {\n                    ...dehydratedCache,\n                    queries: dehydratedCache.queries.map(transformQueryOrMutationCacheErrors),\n                    mutations: dehydratedCache.mutations.map(transformQueryOrMutationCacheErrors)\n                };\n                // dehydrate query client's state and add it to the props\n                pageProps.trpcState = trpcClient.runtime.transformer.serialize(dehydratedCacheWithErrors);\n                const appTreeProps = getAppTreeProps(pageProps);\n                const meta = opts.responseMeta?.({\n                    ctx,\n                    clientErrors: [\n                        ...dehydratedCache.queries,\n                        ...dehydratedCache.mutations\n                    ].map((v)=>v.state.error).flatMap((err)=>err instanceof Error && err.name === 'TRPCClientError' ? [\n                            err\n                        ] : [])\n                }) || {};\n                for (const [key, value] of Object.entries(meta.headers || {})){\n                    if (typeof value === 'string') {\n                        ctx.res?.setHeader(key, value);\n                    }\n                }\n                if (meta.status && ctx.res) {\n                    ctx.res.statusCode = meta.status;\n                }\n                return appTreeProps;\n            };\n        }\n        const displayName = AppOrPage.displayName || AppOrPage.name || 'Component';\n        WithTRPC.displayName = `withTRPC(${displayName})`;\n        return WithTRPC;\n    };\n}\n\nfunction createTRPCNext(opts) {\n    const hooks = (0,_trpc_react_shared__WEBPACK_IMPORTED_MODULE_4__.createHooksInternal)();\n    // TODO: maybe set TSSRContext to `never` when using `WithTRPCNoSSROptions`\n    const _withTRPC = withTRPC(opts);\n    const proxy = new Proxy(()=>{\n    // no-op\n    }, {\n        get (_obj, name) {\n            if (name === 'useContext') {\n                return ()=>{\n                    const context = hooks.useContext();\n                    // create a stable reference of the utils context\n                    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n                        return (0,_trpc_react_shared__WEBPACK_IMPORTED_MODULE_4__.createReactQueryUtilsProxy)(context);\n                    }, [\n                        context\n                    ]);\n                };\n            }\n            if (name === 'withTRPC') {\n                return _withTRPC;\n            }\n            if (typeof name === 'string') {\n                return (0,_trpc_react_shared__WEBPACK_IMPORTED_MODULE_4__.createReactProxyDecoration)(name, hooks);\n            }\n            throw new Error('Not supported');\n        }\n    });\n    return proxy;\n}\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHRycGMvbmV4dC9kaXN0L2luZGV4Lm1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUN3QztBQUN2QjtBQUNOO0FBQ3JCO0FBQ3NFOztBQUVqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkJBQTJCO0FBQ3ZDO0FBQ0EscUJBQXFCLGtFQUFxQjtBQUMxQztBQUNBLG1DQUFtQywrQ0FBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsd0NBQXdDLDhEQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isb0JBQW9CLG9EQUFvRDtBQUN4RTtBQUNBO0FBQ0EsaUNBQWlDLGdEQUFtQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0IsZ0RBQW1CLENBQUMsc0VBQW1CO0FBQ3BFO0FBQ0EsYUFBYSxnQkFBZ0IsZ0RBQW1CLENBQUMsMERBQU87QUFDeEQ7QUFDQSxhQUFhLGdCQUFnQixnREFBbUIsWUFBWSx3RUFBUSxHQUFHO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixtQ0FBbUMsNkRBQWdCO0FBQ25ELHdDQUF3Qyw4REFBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQVUsZUFBZSxvREFBYTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSx3Q0FBd0MsZ0VBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix1RUFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBTztBQUNsQywrQkFBK0IsOEVBQTBCO0FBQ3pELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhFQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLml0Ly4vbm9kZV9tb2R1bGVzL0B0cnBjL25leHQvZGlzdC9pbmRleC5tanM/OWZhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQHN3Yy9oZWxwZXJzL3NyYy9fZXh0ZW5kcy5tanMnO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIGRlaHlkcmF0ZSwgUXVlcnlDbGllbnRQcm92aWRlciwgSHlkcmF0ZSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBjcmVhdGVSZWFjdFF1ZXJ5SG9va3MsIGNyZWF0ZVRSUENDbGllbnQgfSBmcm9tICdAdHJwYy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlRWxlbWVudCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3NyUHJlcGFzcyBmcm9tICdyZWFjdC1zc3ItcHJlcGFzcyc7XG5pbXBvcnQgeyBjcmVhdGVIb29rc0ludGVybmFsLCBjcmVhdGVSZWFjdFF1ZXJ5VXRpbHNQcm94eSwgY3JlYXRlUmVhY3RQcm94eURlY29yYXRpb24gfSBmcm9tICdAdHJwYy9yZWFjdC9zaGFyZWQnO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1RdWVyeU9yTXV0YXRpb25DYWNoZUVycm9ycyhyZXN1bHQpIHtcbiAgICBjb25zdCBlcnJvciA9IHJlc3VsdC5zdGF0ZS5lcnJvcjtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5uYW1lID09PSAnVFJQQ0NsaWVudEVycm9yJykge1xuICAgICAgICBjb25zdCBuZXdFcnJvciA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICBkYXRhOiBlcnJvci5kYXRhLFxuICAgICAgICAgICAgc2hhcGU6IGVycm9yLnNoYXBlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5zdGF0ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogbmV3RXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHdpdGhUUlBDKG9wdHMpIHtcbiAgICBjb25zdCB7IGNvbmZpZzogZ2V0Q2xpZW50Q29uZmlnICB9ID0gb3B0cztcbiAgICByZXR1cm4gKEFwcE9yUGFnZSk9PntcbiAgICAgICAgY29uc3QgdHJwYyA9IGNyZWF0ZVJlYWN0UXVlcnlIb29rcygpO1xuICAgICAgICBjb25zdCBXaXRoVFJQQyA9IChwcm9wcyk9PntcbiAgICAgICAgICAgIGNvbnN0IFtwcmVwYXNzUHJvcHNdID0gdXNlU3RhdGUoKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMudHJwYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMudHJwYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0gZ2V0Q2xpZW50Q29uZmlnKHt9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudChjb25maWcucXVlcnlDbGllbnRDb25maWcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRycGNDbGllbnQgPSB0cnBjLmNyZWF0ZUNsaWVudChjb25maWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGFib3J0T25Vbm1vdW50OiBjb25maWcuYWJvcnRPblVubW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LFxuICAgICAgICAgICAgICAgICAgICB0cnBjQ2xpZW50LFxuICAgICAgICAgICAgICAgICAgICBzc3JTdGF0ZTogb3B0cy5zc3IgPyAnbW91bnRpbmcnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNzckNvbnRleHQ6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB7IHF1ZXJ5Q2xpZW50ICwgdHJwY0NsaWVudCAsIHNzclN0YXRlICwgc3NyQ29udGV4dCAgfSA9IHByZXBhc3NQcm9wcztcbiAgICAgICAgICAgIGNvbnN0IGh5ZHJhdGVkU3RhdGUgPSB0cnBjLnVzZURlaHlkcmF0ZWRTdGF0ZSh0cnBjQ2xpZW50LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnRycGNTdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBSZWFjdC5jcmVhdGVFbGVtZW50KHRycGMuUHJvdmlkZXIsIHtcbiAgICAgICAgICAgICAgICBhYm9ydE9uVW5tb3VudDogcHJlcGFzc1Byb3BzLmFib3J0T25Vbm1vdW50ID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNsaWVudDogdHJwY0NsaWVudCxcbiAgICAgICAgICAgICAgICBxdWVyeUNsaWVudDogcXVlcnlDbGllbnQsXG4gICAgICAgICAgICAgICAgc3NyU3RhdGU6IHNzclN0YXRlLFxuICAgICAgICAgICAgICAgIHNzckNvbnRleHQ6IHNzckNvbnRleHRcbiAgICAgICAgICAgIH0sIC8qI19fUFVSRV9fKi8gUmVhY3QuY3JlYXRlRWxlbWVudChRdWVyeUNsaWVudFByb3ZpZGVyLCB7XG4gICAgICAgICAgICAgICAgY2xpZW50OiBxdWVyeUNsaWVudFxuICAgICAgICAgICAgfSwgLyojX19QVVJFX18qLyBSZWFjdC5jcmVhdGVFbGVtZW50KEh5ZHJhdGUsIHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogaHlkcmF0ZWRTdGF0ZVxuICAgICAgICAgICAgfSwgLyojX19QVVJFX18qLyBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcE9yUGFnZSwgX2V4dGVuZHMoe30sIHByb3BzKSkpKSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChBcHBPclBhZ2UuZ2V0SW5pdGlhbFByb3BzIHx8IG9wdHMuc3NyKSB7XG4gICAgICAgICAgICBXaXRoVFJQQy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwT3JQYWdlQ3R4KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IEFwcFRyZWUgPSBhcHBPclBhZ2VDdHguQXBwVHJlZTtcbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgaWYgd2UgYXJlIHdyYXBwaW5nIGFuIEFwcCBjb21wb25lbnQgb3IgYSBQYWdlIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0FwcCA9ICEhYXBwT3JQYWdlQ3R4LkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBpc0FwcCA/IGFwcE9yUGFnZUN0eC5jdHggOiBhcHBPclBhZ2VDdHg7XG4gICAgICAgICAgICAgICAgLy8gUnVuIHRoZSB3cmFwcGVkIGNvbXBvbmVudCdzIGdldEluaXRpYWxQcm9wcyBmdW5jdGlvbi5cbiAgICAgICAgICAgICAgICBsZXQgcGFnZVByb3BzID0ge307XG4gICAgICAgICAgICAgICAgaWYgKEFwcE9yUGFnZS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxQcm9wcyA9IGF3YWl0IEFwcE9yUGFnZS5nZXRJbml0aWFsUHJvcHMoYXBwT3JQYWdlQ3R4KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxQYWdlUHJvcHMgPSBpc0FwcCA/IG9yaWdpbmFsUHJvcHMucGFnZVByb3BzID8/IHt9IDogb3JpZ2luYWxQcm9wcztcbiAgICAgICAgICAgICAgICAgICAgcGFnZVByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3JpZ2luYWxQYWdlUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wYWdlUHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0QXBwVHJlZVByb3BzID0gKHByb3BzKT0+aXNBcHAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIH0gOiBwcm9wcztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgfHwgIW9wdHMuc3NyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRBcHBUcmVlUHJvcHMocGFnZVByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0gZ2V0Q2xpZW50Q29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgY3R4XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJwY0NsaWVudCA9IGNyZWF0ZVRSUENDbGllbnQoY29uZmlnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudChjb25maWcucXVlcnlDbGllbnRDb25maWcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRycGNQcm9wID0ge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgICAgIHRycGNDbGllbnQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LFxuICAgICAgICAgICAgICAgICAgICBzc3JTdGF0ZTogJ3ByZXBhc3MnLFxuICAgICAgICAgICAgICAgICAgICBzc3JDb250ZXh0OiBjdHhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXBhc3NQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVByb3BzLFxuICAgICAgICAgICAgICAgICAgICB0cnBjOiB0cnBjUHJvcFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gUnVuIHRoZSBwcmVwYXNzIHN0ZXAgb24gQXBwVHJlZS4gVGhpcyB3aWxsIHJ1biBhbGwgdHJwYyBxdWVyaWVzIG9uIHRoZSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgLy8gbXVsdGlwbGUgcHJlcGFzcyBlbnN1cmVzIHRoYXQgd2UgY2FuIGRvIGJhdGNoaW5nIG9uIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICB3aGlsZSh0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyIGZ1bGwgdHJlZVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzc3JQcmVwYXNzKC8qI19fUFVSRV9fKi8gY3JlYXRlRWxlbWVudChBcHBUcmVlLCBwcmVwYXNzUHJvcHMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFxdWVyeUNsaWVudC5pc0ZldGNoaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgdGhlIHF1ZXJ5IGNhY2hlIGhhcyBzZXR0bGVkIGl0J3MgcHJvbWlzZXNcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnN1YiA9IHF1ZXJ5Q2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5zdWJzY3JpYmUoKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudD8ucXVlcnkuZ2V0T2JzZXJ2ZXJzQ291bnQoKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc3ViKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkZWh5ZHJhdGVkQ2FjaGUgPSBkZWh5ZHJhdGUocXVlcnlDbGllbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkRGVoeWRyYXRlUXVlcnkgKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZXMgc3VyZSBlcnJvcnMgYXJlIGFsc28gZGVoeWRyYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBzaW5jZSBlcnJvciBpbnN0YW5jZXMgY2FuJ3QgYmUgc2VyaWFsaXplZCwgbGV0J3MgbWFrZSB0aGVtIGludG8gYFRSUENDbGllbnRFcnJvckxpa2VgLW9iamVjdHNcbiAgICAgICAgICAgICAgICBjb25zdCBkZWh5ZHJhdGVkQ2FjaGVXaXRoRXJyb3JzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5kZWh5ZHJhdGVkQ2FjaGUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJpZXM6IGRlaHlkcmF0ZWRDYWNoZS5xdWVyaWVzLm1hcCh0cmFuc2Zvcm1RdWVyeU9yTXV0YXRpb25DYWNoZUVycm9ycyksXG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uczogZGVoeWRyYXRlZENhY2hlLm11dGF0aW9ucy5tYXAodHJhbnNmb3JtUXVlcnlPck11dGF0aW9uQ2FjaGVFcnJvcnMpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBkZWh5ZHJhdGUgcXVlcnkgY2xpZW50J3Mgc3RhdGUgYW5kIGFkZCBpdCB0byB0aGUgcHJvcHNcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHMudHJwY1N0YXRlID0gdHJwY0NsaWVudC5ydW50aW1lLnRyYW5zZm9ybWVyLnNlcmlhbGl6ZShkZWh5ZHJhdGVkQ2FjaGVXaXRoRXJyb3JzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBUcmVlUHJvcHMgPSBnZXRBcHBUcmVlUHJvcHMocGFnZVByb3BzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhID0gb3B0cy5yZXNwb25zZU1ldGE/Lih7XG4gICAgICAgICAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50RXJyb3JzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5kZWh5ZHJhdGVkQ2FjaGUucXVlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRlaHlkcmF0ZWRDYWNoZS5tdXRhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgXS5tYXAoKHYpPT52LnN0YXRlLmVycm9yKS5mbGF0TWFwKChlcnIpPT5lcnIgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnIubmFtZSA9PT0gJ1RSUENDbGllbnRFcnJvcicgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICAgICAgICAgICAgICBdIDogW10pXG4gICAgICAgICAgICAgICAgfSkgfHwge307XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YS5oZWFkZXJzIHx8IHt9KSl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgucmVzPy5zZXRIZWFkZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1ldGEuc3RhdHVzICYmIGN0eC5yZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJlcy5zdGF0dXNDb2RlID0gbWV0YS5zdGF0dXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhcHBUcmVlUHJvcHM7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gQXBwT3JQYWdlLmRpc3BsYXlOYW1lIHx8IEFwcE9yUGFnZS5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgICAgICBXaXRoVFJQQy5kaXNwbGF5TmFtZSA9IGB3aXRoVFJQQygke2Rpc3BsYXlOYW1lfSlgO1xuICAgICAgICByZXR1cm4gV2l0aFRSUEM7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVFJQQ05leHQob3B0cykge1xuICAgIGNvbnN0IGhvb2tzID0gY3JlYXRlSG9va3NJbnRlcm5hbCgpO1xuICAgIC8vIFRPRE86IG1heWJlIHNldCBUU1NSQ29udGV4dCB0byBgbmV2ZXJgIHdoZW4gdXNpbmcgYFdpdGhUUlBDTm9TU1JPcHRpb25zYFxuICAgIGNvbnN0IF93aXRoVFJQQyA9IHdpdGhUUlBDKG9wdHMpO1xuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KCgpPT57XG4gICAgLy8gbm8tb3BcbiAgICB9LCB7XG4gICAgICAgIGdldCAoX29iaiwgbmFtZSkge1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICd1c2VDb250ZXh0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gaG9va3MudXNlQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzdGFibGUgcmVmZXJlbmNlIG9mIHRoZSB1dGlscyBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZW1vKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUmVhY3RRdWVyeVV0aWxzUHJveHkoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnd2l0aFRSUEMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF93aXRoVFJQQztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUmVhY3RQcm94eURlY29yYXRpb24obmFtZSwgaG9va3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJveHk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRSUENOZXh0LCB3aXRoVFJQQyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@trpc/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();