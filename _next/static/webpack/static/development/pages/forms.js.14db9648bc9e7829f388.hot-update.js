webpackHotUpdate("static\\development\\pages\\forms.js",{

/***/ "./pages/forms/index.tsx":
/*!*******************************!*\
  !*** ./pages/forms/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/AppLayout */ "./app/AppLayout.tsx");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "../node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "../node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "../node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "../node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "../node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "C:\\Git\\GitHub\\pdf-forms-filler\\src\\pages\\forms\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var data1 = {
  id: '2011201908482221234',
  organization: 'My Organization',
  partner: {
    firstName: 'Sabrina',
    middleName: 'Yoshida',
    lastName: 'Rodriques',
    phone: '+1 419 486 2104',
    ext: '056',
    email: 'SabrinaLRodriques@dayrep.com',
    oralEnglish: false,
    oralFrench: true,
    writtenEnglish: false,
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
var data2 = {
  id: '2093461908482221234',
  organization: 'My Organization',
  partner: {
    firstName: 'Sabrina',
    middleName: 'Yoshida',
    lastName: 'Rodriques',
    phone: '+1 419 486 2104',
    ext: '056',
    email: 'SabrinaLRodriques@dayrep.com',
    oralEnglish: false,
    oralFrench: true,
    writtenEnglish: false,
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
var data3 = {
  id: '2011232019048521234',
  organization: 'My Organization',
  partner: {
    firstName: 'Sabrina',
    middleName: 'Yoshida',
    lastName: 'Rodriques',
    phone: '+1 419 486 2104',
    ext: '056',
    email: 'SabrinaLRodriques@dayrep.com',
    oralEnglish: false,
    oralFrench: true,
    writtenEnglish: false,
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
var db = [data1, data2, data3];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["createStyles"])({
    paper: {
      width: '100%',
      overflowX: 'auto'
    },
    table: {
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      minWidth: 600
    }
  });
});

function createData(id, firstName, middleName, lastName, phone, email) {
  return {
    id: id,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    phone: phone,
    email: email
  };
}

var Forms = function Forms() {
  var classes = useStyles(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["useTheme"])());
  var rows = db.map(function (rec) {
    return createData(rec.id, rec.partner.firstName, rec.partner.middleName, rec.partner.lastName, rec.partner.phone, rec.partner.email);
  });
  return __jsx(_app_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "PDF Forms Filler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.table,
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "ID"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Fist Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Last Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Phone"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Email"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, rows.map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: row.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, row.firstName), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, row.middleName), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, row.lastName), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, row.phone), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, row.email));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=forms.js.14db9648bc9e7829f388.hot-update.js.map