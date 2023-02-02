"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentCmWrapperSiderComponent;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Sider
} = _antd.Layout;
function ComponentCmWrapperSiderComponent() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cm-wrapper-sider",
    width: 48
  });
}
module.exports = exports.default;