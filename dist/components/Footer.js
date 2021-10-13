"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../styles/styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = props => {
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "bg-gray-800"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col md:flex-row items-center md:justify-between py-6 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl space-y-6 md:space-y-0"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-300"
  }, props.texto), /*#__PURE__*/_react.default.createElement("ul", {
    className: "inline-flex space-x-6"
  }, props.socialLinks.map((_ref, index) => {
    let {
      image,
      href,
      title
    } = _ref;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: href,
      target: "_blank",
      className: "block text-gray-300 hover:text-white p-1 text-sm",
      rel: "noopener noreferrer",
      title: title
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "h-6 w-6",
      src: image,
      alt: title
    })));
  }))));
};

var _default = Footer;
exports.default = _default;