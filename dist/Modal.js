"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function Modal(_ref) {
  var text = _ref.text,
    buttonText = _ref.buttonText,
    open = _ref.open,
    setOpen = _ref.setOpen;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "modal-title"
  }, text), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-button",
    onClick: setOpen
  }, buttonText)));
}
var _default = Modal;
exports.default = _default;