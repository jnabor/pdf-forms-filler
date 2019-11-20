webpackHotUpdate("static\\development\\pages\\forms\\EDSC-EMP5624-2019-10-001-E.js",{

/***/ "./pages/forms/EDSC-EMP5624-2019-10-001-E/index.tsx":
/*!**********************************************************!*\
  !*** ./pages/forms/EDSC-EMP5624-2019-10-001-E/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/AppLayout */ "./app/AppLayout.tsx");
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/app-context */ "./context/app-context.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/GetApp */ "../node_modules/@material-ui/icons/GetApp.js");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_FormatIndentIncrease__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/FormatIndentIncrease */ "../node_modules/@material-ui/icons/FormatIndentIncrease.js");
/* harmony import */ var _material_ui_icons_FormatIndentIncrease__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatIndentIncrease__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "C:\\Git\\GitHub\\pdf-forms-filler\\src\\pages\\forms\\EDSC-EMP5624-2019-10-001-E\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
    content: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(2)
    }
  });
});

var Auth = function Auth() {
  var classes = useStyles(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])());

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loading: false,
    generated: false
  }),
      state = _useState[0],
      setState = _useState[1];

  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_app_context__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);

  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    console.log('submit', e);
  };

  var data = {
    id: '2011201908482221234',
    organization: 'My Organization',
    partner: {
      firstName: 'Sabrina',
      middleName: 'Yoshida',
      lastName: 'Rodriques',
      phone: '+` 419 486 2104',
      ext: '056',
      email: 'sonabstudios@gmail.com',
      oralEnglish: true,
      oralFrench: true,
      writtenEnglish: true,
      writtenFrench: true
    },
    alternative: {
      firstName: 'Chris',
      middleName: 'Castro',
      lastName: 'Holley',
      phone: '+1 903 372 9902',
      ext: '000',
      email: 'ChrisEHolley@rhyta.com',
      oralEnglish: true,
      oralFrench: false,
      writtenEnglish: true,
      writtenFrench: false
    }
  };

  var handleFillClick = function handleFillClick() {
    if (!state.loading) {
      appContext.postFillForm(data);
    }
  };

  return __jsx(_app_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "PDF Forms Filler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: classes.button,
    color: "primary",
    variant: "outlined",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Save"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: classes.button,
    color: "primary",
    variant: "outlined",
    endIcon: __jsx(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }),
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Download"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: classes.button,
    variant: "outlined",
    component: "span",
    color: "primary",
    disabled: state.loading,
    endIcon: __jsx(_material_ui_icons_FormatIndentIncrease__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }),
    onClick: function onClick() {
      return handleFillClick();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "FILL TO FORM"));
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ })

})
//# sourceMappingURL=EDSC-EMP5624-2019-10-001-E.js.d10ecdcdf90d18b27285.hot-update.js.map