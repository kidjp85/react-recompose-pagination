'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _defaultProps = require('recompose/defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _setDisplayName = require('recompose/setDisplayName');

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _withState = require('recompose/withState');

var _withState2 = _interopRequireDefault(_withState);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _setPropTypes = require('recompose/setPropTypes');

var _setPropTypes2 = _interopRequireDefault(_setPropTypes);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elementPropTypes = (0, _propTypes.oneOfType)([_propTypes.element, _propTypes.string, _propTypes.node]);

var ReactRecomposePagination = function ReactRecomposePagination(props) {
  var ContainerEl = props.ContainerEl,
      PageEl = props.PageEl,
      containerClassName = props.containerClassName,
      firstClassName = props.firstClassName,
      lastClassName = props.lastClassName,
      prevClassName = props.prevClassName,
      nextClassName = props.nextClassName,
      prevSetClassName = props.prevSetClassName,
      nextSetClassName = props.nextSetClassName,
      first = props.first,
      last = props.last,
      prev = props.prev,
      next = props.next,
      prevSet = props.prevSet,
      nextSet = props.nextSet,
      isPrevDisabled = props.isPrevDisabled,
      isNextDisabled = props.isNextDisabled,
      visibleRange = props.visibleRange,
      hideFirstAndLast = props.hideFirstAndLast,
      renderFirst = props.renderFirst,
      renderLast = props.renderLast,
      renderPrev = props.renderPrev,
      renderNext = props.renderNext,
      renderPrevSet = props.renderPrevSet,
      renderNextSet = props.renderNextSet,
      goFirst = props.goFirst,
      goLast = props.goLast,
      goPrev = props.goPrev,
      goNext = props.goNext,
      isNextSetHidden = props.isNextSetHidden,
      isPrevSetHidden = props.isPrevSetHidden,
      renderPage = props.renderPage;


  return _react2.default.createElement(
    ContainerEl,
    { className: containerClassName },
    renderFirst({ first: first, firstClassName: firstClassName, goFirst: goFirst, isPrevDisabled: isPrevDisabled, hideFirstAndLast: hideFirstAndLast, PageEl: PageEl }),
    renderPrev({ prev: prev, prevClassName: prevClassName, goPrev: goPrev, isPrevDisabled: isPrevDisabled, PageEl: PageEl }),
    renderPrevSet({ prevSet: prevSet, prevSetClassName: prevSetClassName, isPrevSetHidden: isPrevSetHidden, PageEl: PageEl }),
    visibleRange.map(renderPage),
    renderNextSet({ nextSet: nextSet, nextSetClassName: nextSetClassName, isNextSetHidden: isNextSetHidden, PageEl: PageEl }),
    renderNext({ next: next, nextClassName: nextClassName, goNext: goNext, isNextDisabled: isNextDisabled, PageEl: PageEl }),
    renderLast({ last: last, lastClassName: lastClassName, goLast: goLast, isNextDisabled: isNextDisabled, hideFirstAndLast: hideFirstAndLast, PageEl: PageEl })
  );
};

exports.default = (0, _compose2.default)((0, _setDisplayName2.default)('Pagination'), (0, _setPropTypes2.default)({
  total: _propTypes.number.isRequired,
  currentPage: _propTypes.number.isRequired,
  displayRange: _propTypes.number.isRequired,
  onChange: _propTypes.func.isRequired,
  renderFirst: _propTypes.func,
  renderLast: _propTypes.func,
  renderPrev: _propTypes.func,
  renderNext: _propTypes.func,
  renderPrevSet: _propTypes.func,
  renderNextSet: _propTypes.func,
  ContainerEl: _propTypes.string,
  containerClassName: _propTypes.string,
  PageEl: _propTypes.string,
  pageClassName: _propTypes.string,
  first: elementPropTypes,
  last: elementPropTypes,
  prev: elementPropTypes,
  next: elementPropTypes,
  prevSet: elementPropTypes,
  nextSet: elementPropTypes,
  firstClassName: _propTypes.string,
  lastClassName: _propTypes.string,
  prevClassName: _propTypes.string,
  nextClassName: _propTypes.string,
  prevSetClassName: _propTypes.string,
  nextSetClassName: _propTypes.string,
  hideFirstAndLast: _propTypes.bool
}), (0, _defaultProps2.default)({
  ContainerEl: 'ul',
  PageEl: 'li',
  first: 'First',
  last: 'Last',
  prev: '\xAB',
  next: '\xBB',
  prevSet: '...',
  nextSet: '...',
  containerClassName: 'react-recompose-pagination',
  pageClassName: 'react-recompose-pagination__page',
  firstClassName: 'react-recompose-pagination__first',
  lastClassName: 'react-recompose-pagination__last',
  prevClassName: 'react-recompose-pagination__prev',
  nextClassName: 'react-recompose-pagination__next',
  prevSetClassName: 'react-recompose-pagination__prev-set',
  nextSetClassName: 'react-recompose-pagination__next-set',
  hideFirstAndLast: false,
  renderFirst: function renderFirst(_ref) {
    var first = _ref.first,
        firstClassName = _ref.firstClassName,
        goFirst = _ref.goFirst,
        isPrevDisabled = _ref.isPrevDisabled,
        hideFirstAndLast = _ref.hideFirstAndLast,
        PageEl = _ref.PageEl;
    return _react2.default.createElement(
      _page2.default,
      {
        PageEl: PageEl,
        isHidden: hideFirstAndLast,
        handleClick: goFirst,
        className: firstClassName,
        isDisabled: isPrevDisabled
      },
      first
    );
  },
  renderLast: function renderLast(_ref2) {
    var last = _ref2.last,
        goLast = _ref2.goLast,
        lastClassName = _ref2.lastClassName,
        isNextDisabled = _ref2.isNextDisabled,
        hideFirstAndLast = _ref2.hideFirstAndLast,
        PageEl = _ref2.PageEl;
    return _react2.default.createElement(
      _page2.default,
      {
        PageEl: PageEl,
        isHidden: hideFirstAndLast,
        handleClick: goLast,
        className: lastClassName,
        isDisabled: isNextDisabled
      },
      last
    );
  },
  renderPrev: function renderPrev(_ref3) {
    var goPrev = _ref3.goPrev,
        prevClassName = _ref3.prevClassName,
        prev = _ref3.prev,
        isPrevDisabled = _ref3.isPrevDisabled,
        PageEl = _ref3.PageEl;
    return _react2.default.createElement(
      _page2.default,
      {
        handleClick: goPrev,
        className: prevClassName,
        PageEl: PageEl,
        isDisabled: isPrevDisabled
      },
      prev
    );
  },
  renderNext: function renderNext(_ref4) {
    var goNext = _ref4.goNext,
        nextClassName = _ref4.nextClassName,
        next = _ref4.next,
        isNextDisabled = _ref4.isNextDisabled,
        PageEl = _ref4.PageEl;
    return _react2.default.createElement(
      _page2.default,
      {
        handleClick: goNext,
        className: nextClassName,
        PageEl: PageEl,
        isDisabled: isNextDisabled
      },
      next
    );
  },
  renderPrevSet: function renderPrevSet(_ref5) {
    var prevSet = _ref5.prevSet,
        prevSetClassName = _ref5.prevSetClassName,
        isPrevSetHidden = _ref5.isPrevSetHidden,
        PageEl = _ref5.PageEl;
    return _react2.default.createElement(
      _page2.default,
      { className: prevSetClassName, PageEl: PageEl, isHidden: isPrevSetHidden },
      prevSet
    );
  },
  renderNextSet: function renderNextSet(_ref6) {
    var nextSet = _ref6.nextSet,
        nextSetClassName = _ref6.nextSetClassName,
        isNextSetHidden = _ref6.isNextSetHidden,
        PageEl = _ref6.PageEl;
    return _react2.default.createElement(
      _page2.default,
      { className: nextSetClassName, PageEl: PageEl, isHidden: isNextSetHidden },
      nextSet
    );
  }
}), (0, _withState2.default)('selected', 'toggleSelected', function (_ref7) {
  var currentPage = _ref7.currentPage;
  return currentPage || 1;
}), (0, _withProps2.default)(function (props) {
  var total = props.total,
      selected = props.selected,
      displayRange = props.displayRange;

  var pagesArr = Array.from(new Array(total), function (val, index) {
    return index + 1;
  });
  var visibleRange = (0, _util.calculateRange)(selected - 1, displayRange, pagesArr);

  return {
    visibleRange: visibleRange,
    isPrevDisabled: selected === pagesArr[0],
    isNextDisabled: selected === pagesArr[pagesArr.length - 1],
    isPrevSetHidden: visibleRange[0] === pagesArr[0],
    isNextSetHidden: visibleRange[visibleRange.length - 1] === pagesArr[pagesArr.length - 1]
  };
}), (0, _withHandlers2.default)({
  handleClick: function handleClick(_ref8) {
    var onChange = _ref8.onChange,
        toggleSelected = _ref8.toggleSelected;
    return function (page) {
      return function () {
        toggleSelected(page);
        onChange(page);
      };
    };
  }
}), (0, _withHandlers2.default)({
  goFirst: function goFirst(_ref9) {
    var handleClick = _ref9.handleClick,
        isPrevDisabled = _ref9.isPrevDisabled;
    return function () {
      if (isPrevDisabled) return;
      handleClick(1)();
    };
  },
  goLast: function goLast(_ref10) {
    var handleClick = _ref10.handleClick,
        total = _ref10.total,
        isNextDisabled = _ref10.isNextDisabled;
    return function () {
      if (isNextDisabled) return;
      handleClick(total)();
    };
  },
  goPrev: function goPrev(_ref11) {
    var handleClick = _ref11.handleClick,
        selected = _ref11.selected,
        isPrevDisabled = _ref11.isPrevDisabled;
    return function () {
      if (isPrevDisabled) return;
      handleClick(selected - 1)();
    };
  },
  goNext: function goNext(_ref12) {
    var handleClick = _ref12.handleClick,
        selected = _ref12.selected,
        isNextDisabled = _ref12.isNextDisabled;
    return function () {
      if (isNextDisabled) return;
      handleClick(selected + 1)();
    };
  },
  renderPage: function renderPage(_ref13) {
    var handleClick = _ref13.handleClick,
        selected = _ref13.selected,
        pageClassName = _ref13.pageClassName;
    return function (pageIndex) {
      return _react2.default.createElement(
        _page2.default,
        {
          key: '' + pageIndex,
          isActive: selected === pageIndex,
          className: pageClassName,
          handleClick: handleClick(pageIndex)
        },
        pageIndex
      );
    };
  }
}), _pure2.default)(ReactRecomposePagination);