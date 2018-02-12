'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _setPropTypes = require('recompose/setPropTypes');

var _setPropTypes2 = _interopRequireDefault(_setPropTypes);

var _setDisplayName = require('recompose/setDisplayName');

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _defaultProps = require('recompose/defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var PageEl = _ref.PageEl,
      isHidden = _ref.isHidden,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      className = _ref.className,
      children = _ref.children,
      handleClick = _ref.handleClick;

  if (isHidden) return false;

  var pageClassName = (0, _classnames2.default)(className, {
    'is-active': isActive,
    'is-disabled': isDisabled
  });

  return _react2.default.createElement(
    PageEl,
    { onClick: handleClick, className: pageClassName },
    children
  );
};

exports.default = (0, _compose2.default)((0, _setDisplayName2.default)('Page'), (0, _defaultProps2.default)({
  PageEl: 'li'
}), (0, _setPropTypes2.default)({
  PageEl: _propTypes2.default.string,
  isActive: _propTypes2.default.bool,
  isDisabled: _propTypes2.default.bool,
  isHidden: _propTypes2.default.bool,
  className: _propTypes2.default.string
}), _pure2.default)(Page);