react-recompose-pagination ( Newest version 0.1.2 )
======================================

> Fully customizable react pagination component 

PROPS
================================

| Name | Type | Default value | Description |
| ---  | ---  | ---           | ---         |
| total | Number |  | REQUIRED - Total page count |
| currentPage | Number |  | REQUIRED - Current active page |
| onChange | Function |  | REQUIRED - Handler callback function |
| displayRange | Number | 3 | Number of page to display from left and right of current page |
| containerClass | String | 'react-recompose-pagination' | Container class name |
| PageEl | String | 'li' | Element type for page |
| pageClassName | String | 'react-recompose-pagination__page' | Page class name |
| first | String or Element or Node | 'First' | First button content |
| firstClassName | String | 'react-recompose-pagination__first' | First button class name |
| renderFirst | Function | () => {} | Render props function for first button |
| last | String or Element or Node | 'Last' | Last button content |
| firstClassName | String | 'react-recompose-pagination__last' | Last button class name |
| renderFirst | Function | () => {} | Render props function for last button |
| prev | String or Element or Node | '\u00AB' | Prev button content |
| prevClassName | String | 'react-recompose-pagination__prev' | Prev button class name |
| renderPrev | Function | () => {} | Render props function for prev button |
| next | String or Element or Node | '\u00BB' | Next button content |
| nextClassName | String | 'react-recompose-pagination__next' | Next button class name |
| renderNext | Function | () => {} | Render props function for next button |
| prevSet | String or Element or Node | '...' | Prev set content |
| prevSetClassName | String | 'react-recompose-pagination__prev-set' | Prev set class name |
| renderPrevSet | Function | () => {} | Render props function for prev set |
| nextSet | String or Element or Node | '...' | Next set content |
| nextSetClassName | String | 'react-recompose-pagination__next-set' | Next set class name |
| renderNextSet | Function | () => {} | Render props function for next set |
| hideFirstAndLast | Boolean | false | Check render first and last button |

DEMO
====

You can see the demo with example code [HERE](http://kidjp85.github.io/react-recompose-pagination/)

## Installation
By npm

```bash
npm install --save react-recompose-pagination
```

By Yarn
```bash
yarn add react-recompose-pagination
```

## You can also use the standalone UMD build
```html
<script src="https://unpkg.com/react-recompose-pagination@0.1.2/lib/react-recompose-pagination.js"></script>
<script src="https://unpkg.com/react-recompose-pagination@0.1.2/lib/react-recompose-pagination.min.js"></script>
```

## License

MIT
