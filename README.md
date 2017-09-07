# availity-mobx-reactstrap-validation

[Mobx](https://mobx.js.org) wrapper lib around [availity-reactstrap-validation](https://github.com/availity/availity-reactstrap-validation)

**Use this lib instead of `availity-reactstrap-validation` if your React project uses Mobx**

## Installation

Install `availity-mobx-reactstrap-validation` via NPM

```sh
npm install --save availity-mobx-reactstrap-validation
```

If applicable, install a `Promise` polyfill.  For example:

```sh
npm install es6-promise --save
```

The polyfill can be applied into your web application by using tools like Webpack or Babel.

Import the components you need, example:

```js
import { AvField } from 'availity-mobx-reactstrap-validation';
```

## Documentation & Examples

See [here](https://github.com/Availity/availity-reactstrap-validation/tree/master/docs/lib/examples):

But, rather than import from `availity-reactstrap-validation`, import from `availity-mobx-reactstrap-validation`

## Acknowledgements

This project simply wraps [availity-reactstrap-validation](https://github.com/availity/availity-reactstrap-validation) components in `observers` from `mobx-react` to resolve conflicting `shouldComponentUpdate()` methods when using React context with Mobx.

## Disclaimer
Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License
Copyright (c) 2017 Availity, LLC
