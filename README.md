# kyv-styrbord

A (test) component library for React using Storybook

This is a simple wrapper of designsystemet.no.

## Installation

To install, add a file called ```.npmrc``` next to your ```package.json```.

It should contain the following line:

```.env
@kystverket:registry=https://npm.pkg.github.com
```

Now you should be able to run

```npm i @kystverket/styrbord```

## Usage

```js
import '@kystverket/styrbord/style.css';
import { Heading, Ingress, Tabs } from '@kystverket/styrbord';
```

The CSS can be imported once globally.