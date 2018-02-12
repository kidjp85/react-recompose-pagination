import React from 'react';
import { element, string, func, node, oneOfType, number, bool } from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import defaultProps from 'recompose/defaultProps';
import setDisplayName from 'recompose/setDisplayName';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
import setPropTypes from 'recompose/setPropTypes';
import Page from './page';
import { calculateRange } from './util';

const elementPropTypes = oneOfType([element, string, node]);

const ReactRecomposePagination = props => {
  const {
    ContainerEl,
    PageEl,
    containerClassName,
    firstClassName,
    lastClassName,
    prevClassName,
    nextClassName,
    prevSetClassName,
    nextSetClassName,
    first,
    last,
    prev,
    next,
    prevSet,
    nextSet,
    isPrevDisabled,
    isNextDisabled,
    visibleRange,
    hideFirstAndLast,
    renderFirst,
    renderLast,
    renderPrev,
    renderNext,
    renderPrevSet,
    renderNextSet,
    goFirst,
    goLast,
    goPrev,
    goNext,
    isNextSetHidden,
    isPrevSetHidden,
    renderPage
  } = props;

  return (
    <ContainerEl className={containerClassName}>
      {renderFirst({ first, firstClassName, goFirst, isPrevDisabled, hideFirstAndLast, PageEl })}
      {renderPrev({ prev, prevClassName, goPrev, isPrevDisabled, PageEl })}
      {renderPrevSet({ prevSet, prevSetClassName, isPrevSetHidden, PageEl })}
      {visibleRange.map(renderPage)}
      {renderNextSet({ nextSet, nextSetClassName, isNextSetHidden, PageEl })}
      {renderNext({ next, nextClassName, goNext, isNextDisabled, PageEl })}
      {renderLast({ last, lastClassName, goLast, isNextDisabled, hideFirstAndLast, PageEl })}
    </ContainerEl>
  );
};

export default compose(
  setDisplayName('Pagination'),
  setPropTypes({
    total: number.isRequired,
    currentPage: number.isRequired,
    displayRange: number.isRequired,
    onChange: func.isRequired,
    renderFirst: func,
    renderLast: func,
    renderPrev: func,
    renderNext: func,
    renderPrevSet: func,
    renderNextSet: func,
    ContainerEl: string,
    containerClassName: string,
    PageEl: string,
    pageClassName: string,
    first: elementPropTypes,
    last: elementPropTypes,
    prev: elementPropTypes,
    next: elementPropTypes,
    prevSet: elementPropTypes,
    nextSet: elementPropTypes,
    firstClassName: string,
    lastClassName: string,
    prevClassName: string,
    nextClassName: string,
    prevSetClassName: string,
    nextSetClassName: string,
    hideFirstAndLast: bool
  }),
  defaultProps({
    ContainerEl: 'ul',
    PageEl: 'li',
    first: 'First',
    last: 'Last',
    prev: '\u00AB',
    next: '\u00BB',
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
    renderFirst: ({ first, firstClassName, goFirst, isPrevDisabled, hideFirstAndLast, PageEl }) => (
      <Page
        PageEl={PageEl}
        isHidden={hideFirstAndLast}
        handleClick={goFirst}
        className={firstClassName}
        isDisabled={isPrevDisabled}
      >
        {first}
      </Page>
    ),
    renderLast: ({ last, goLast, lastClassName, isNextDisabled, hideFirstAndLast, PageEl }) => (
      <Page
        PageEl={PageEl}
        isHidden={hideFirstAndLast}
        handleClick={goLast}
        className={lastClassName}
        isDisabled={isNextDisabled}
      >
        {last}
      </Page>
    ),
    renderPrev: ({ goPrev, prevClassName, prev, isPrevDisabled, PageEl }) => (
      <Page
        handleClick={goPrev}
        className={prevClassName}
        PageEl={PageEl}
        isDisabled={isPrevDisabled}
      >
        {prev}
      </Page>
    ),
    renderNext: ({ goNext, nextClassName, next, isNextDisabled, PageEl }) => (
      <Page
        handleClick={goNext}
        className={nextClassName}
        PageEl={PageEl}
        isDisabled={isNextDisabled}
      >
        {next}
      </Page>
    ),
    renderPrevSet: ({ prevSet, prevSetClassName, isPrevSetHidden, PageEl }) => (
      <Page className={prevSetClassName} PageEl={PageEl} isHidden={isPrevSetHidden}>
        {prevSet}
      </Page>
    ),
    renderNextSet: ({ nextSet, nextSetClassName, isNextSetHidden, PageEl }) => (
      <Page className={nextSetClassName} PageEl={PageEl} isHidden={isNextSetHidden}>
        {nextSet}
      </Page>
    )
  }),
  withState('selected', 'toggleSelected', ({ currentPage }) => currentPage || 1),
  withProps(props => {
    const { total, selected, displayRange } = props;
    const pagesArr = Array.from(new Array(total), (val, index) => index + 1);
    const visibleRange = calculateRange(selected - 1, displayRange, pagesArr);

    return {
      visibleRange,
      isPrevDisabled: selected === pagesArr[0],
      isNextDisabled: selected === pagesArr[pagesArr.length - 1],
      isPrevSetHidden: visibleRange[0] === pagesArr[0],
      isNextSetHidden: visibleRange[visibleRange.length - 1] === pagesArr[pagesArr.length - 1]
    };
  }),
  withHandlers({
    handleClick: ({ onChange, toggleSelected }) => page => () => {
      toggleSelected(page);
      onChange(page);
    }
  }),
  withHandlers({
    goFirst: ({ handleClick, isPrevDisabled }) => () => {
      if (isPrevDisabled) return;
      handleClick(1)();
    },
    goLast: ({ handleClick, total, isNextDisabled }) => () => {
      if (isNextDisabled) return;
      handleClick(total)();
    },
    goPrev: ({ handleClick, selected, isPrevDisabled }) => () => {
      if (isPrevDisabled) return;
      handleClick(selected - 1)();
    },
    goNext: ({ handleClick, selected, isNextDisabled }) => () => {
      if (isNextDisabled) return;
      handleClick(selected + 1)();
    },
    renderPage: ({ handleClick, selected, pageClassName }) => pageIndex => (
      <Page
        key={`${pageIndex}`}
        isActive={selected === pageIndex}
        className={pageClassName}
        handleClick={handleClick(pageIndex)}
      >
        {pageIndex}
      </Page>
    )
  }),
  pure
)(ReactRecomposePagination);
