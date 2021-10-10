"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import GitHubSVG from "../svg/github.svg";
// import WhatsAppSVG from "../svg/whatsapp.svg";
// import TelegramSVG from "../svg/telegram.svg";
// import SoundcloudSVG from "../svg/soundcloud.svg";
// const socialLinks = [
//   {
//     Component: TelegramSVG,
//     href: "https://t.me/juestin_taim",
//     title: "Telegram",
//   },
//   {
//     Component: WhatsAppSVG,
//     href: "/whatsapp",
//     title: "WhatsApp",
//   },
//   {
//     Component: SoundcloudSVG,
//     href: "http://soundcloud.com/m4ss1ck",
//     title: "SoundCloud",
//   },
//   {
//     Component: GitHubSVG,
//     href: "https://github.com/M4ss1ck",
//     title: "GitHub",
//   },
// ];
const Footer = (socialLinks, texto) => {
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "bg-gray-800"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col md:flex-row items-center md:justify-between py-6 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl space-y-6 md:space-y-0"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-300"
  }, texto), /*#__PURE__*/_react.default.createElement("ul", {
    className: "inline-flex space-x-6"
  }, socialLinks.map((_ref, index) => {
    let {
      Component,
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
    }, /*#__PURE__*/_react.default.createElement(Component, {
      className: "h-6 w-6"
    })));
  }))));
};

var _default = Footer;
exports.default = _default;