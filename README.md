![logo](https://cdn.rawgit.com/thisisbd/panelify/975101663ecd8afa707706ba5d991514eccc4122/panelify-logo.svg)

[![Build Status](https://travis-ci.org/thisisbd/panelify.svg?branch=master)](https://travis-ci.org/thisisbd/panelify)

Smooth vertical sliding panels using Waypoints.

# Installation

`npm i panelify --save`

# Basic Usage

Quickstart: see the demo at `dist/demo`

### HTML ###

Panelify requires markup using the following (a `transparent-padder` element is needed to fill the space when overlaying panels):
  
```html
<div id="transparent-padder"></div>

<div class="panelify">
    Panel 1 content... 
</div>
<div class="panelify">
    Panel 2 content...
</div>
<div class="panelify">
    Panel 3 content...
</div>
```

### CSS ###

Customize as you wish, but a nice and simple example can be found in the [demo css](dist/demo/demo.css).

### JavaScript ###

This is a front end package and the current easiest way to implement it is:

`<script src="[Path to node_modules goes here]/panelify/dist/panelify.js"></script>`

Then you can call it in your own script like:

```javascript
// grab and initialize the waypoint offset to 0% (top of panel)
var panelify = new Panelify('0%');
```
If you're using Node and want it in CommonJS syntax (`require('./panelify')`), change the `libraryTarget` in `webpack.config.js` from `var` to `commonjs2` and then build.

### Options ###

`offset`: either `0%` or `bottom-in-view` (default: `bottom-in-view`)

* `0%`: this triggers the panelify event as soon as the top of the panel is in the viewport (nicer for short content that fits in one 'screen')

    1. **Example**: `var panelify = new Panelify('0%');`

* `bottom-in-view` (**default**): this triggers the panelify event when the bottom of the current panel comes into the viewport (better for longer content).

    1. **Example**: `let panelify = new Panelify();`
    2. **Example**: `let panelify = new Panelify('bottom-in-view');`
  
# Build

`src/panelify.js` transpiles, minifies and is copied to `dist/panelify.js`.

### Basic ###

* Clone/download repo
* `cd` to the `panelify/` directory
* `npm install`

### Development ###

* `webpack` - for building once for development
* `webpack --watch` - for continuous incremental build in development

### Production ###

* `webpack -p` - for building for production (minification)


# Browser Support

**Desktop**: Chrome, Firefox, Safari, Edge, IE9+

**Tablet/Mobile**: None currently (issues with the built-in URL/Navigation bars have meant this is still under development).

# Contributing

  See [issues](https://github.com/thisisbd/Panelify/issues); general feature improvements also welcome!
  
# License

  Panelify is licensed under the [MIT License](LICENSE.txt).