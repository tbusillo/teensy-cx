<br/>
<h1 align="center">
  Teensy Tiny Cx 
</h1>
<p align="middle">
  A lightweight utility for managing conditional classnames in React.
  </p>
<br/>
<p align="center">
  <a href="https://github.com/tbusillo/teensy-typescript-package/actions/workflows"><img src="https://github.com/tbusillo/teensy-typescript-package/actions/workflows/test.yml/badge.svg" alt="CI status"></a>
</p>
<br/>

## Features

- 1kb gzip

## Installation

```bash
pnpm add @tbusillo/teensy-cx
```

## Usage

```js
import cx from '@tbusillo/teensy-cx'

type CompProps = {
  children: React.ReactNode;
}

const Component = ({ children }): CompProps => {
  return(<div className={cx('first-class', hasProp ? 'conditional-class' : 'falsy class', { 'aria-invalid': ariaInvalid })}>)
}
```

Assuming `hasProp` and `ariaInvalid` evaluate to `truthy` values, the result would be `first-class conditional-class aria-invalid`.

## License

MIT License

Copyright (c) 2022 Tom
