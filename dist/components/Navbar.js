"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@headlessui/react");

var _outline = require("@heroicons/react/outline");

require("../styles/styles.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(" ");
} // props: logo, navigation, notification, profile


const Navbar = props => {
  return /*#__PURE__*/_react.default.createElement(_react2.Disclosure, {
    as: "nav",
    className: "bg-gray-800"
  }, _ref => {
    let {
      open
    } = _ref;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "relative flex items-center justify-between h-16"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
    }, /*#__PURE__*/_react.default.createElement(_react2.Disclosure.Button, {
      className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "sr-only"
    }, "Open main menu"), open ? /*#__PURE__*/_react.default.createElement(_outline.XIcon, {
      className: "block h-6 w-6",
      "aria-hidden": "true"
    }) : /*#__PURE__*/_react.default.createElement(_outline.MenuIcon, {
      className: "block h-6 w-6",
      "aria-hidden": "true"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
    }, props.logo ? /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-shrink-0 flex items-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "block lg:hidden h-8 w-auto",
      src: props.logo.src_small ? props.logo.src_small : props.logo.src,
      alt: props.logo.alt
    }), /*#__PURE__*/_react.default.createElement("img", {
      className: "hidden lg:block h-8 w-auto",
      src: props.logo.src,
      alt: props.logo.alt
    })) : null, /*#__PURE__*/_react.default.createElement("div", {
      className: "hidden sm:block sm:ml-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "flex space-x-4"
    }, props.navigation.map(item => /*#__PURE__*/_react.default.createElement("a", {
      key: item.name,
      href: item.href,
      className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium"),
      "aria-current": item.current ? "page" : undefined
    }, item.name))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
    }, props.notification ? /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "sr-only"
    }, "View notifications"), /*#__PURE__*/_react.default.createElement(_outline.BellIcon, {
      className: "h-6 w-6",
      "aria-hidden": "true"
    })) : null, props.profile ? /*#__PURE__*/_react.default.createElement(_react2.Menu, {
      as: "div",
      className: "ml-3 relative"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_react2.Menu.Button, {
      className: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "sr-only"
    }, "Open user menu"), /*#__PURE__*/_react.default.createElement("img", {
      className: "h-8 w-8 rounded-full",
      src: props.profile.src,
      alt: props.profile.alt ? props.profile.alt : ""
    }))), /*#__PURE__*/_react.default.createElement(_react2.Transition, {
      as: _react.Fragment,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95"
    }, /*#__PURE__*/_react.default.createElement(_react2.Menu.Items, {
      className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    }, props.profile.menu.map(item => /*#__PURE__*/_react.default.createElement(_react2.Menu.Item, {
      key: item.name
    }, _ref2 => {
      let {
        active
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement("a", {
        href: item.link,
        className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")
      }, item.name);
    }))))) : null))), /*#__PURE__*/_react.default.createElement(_react2.Disclosure.Panel, {
      className: "sm:hidden"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "px-2 pt-2 pb-3 space-y-1"
    }, props.navigation.map(item => /*#__PURE__*/_react.default.createElement("a", {
      key: item.name,
      href: item.href,
      className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium"),
      "aria-current": item.current ? "page" : undefined
    }, item.name)))));
  });
};

var _default = Navbar;
exports.default = _default;