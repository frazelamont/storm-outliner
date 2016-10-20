#Storm Outliner

[![Build Status](https://travis-ci.org/mjbp/storm-outliner.svg?branch=master)](https://travis-ci.org/mjbp/storm-outliner)
[![codecov.io](http://codecov.io/github/mjbp/storm-outliner/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-outliner?branch=master)
[![npm version](https://badge.fury.io/js/storm-outliner.svg)](https://badge.fury.io/js/storm-outliner)

Hide CSS outline on mouse interactions, show on keyboard interactions.

##Usage

JS
```
npm i -S storm-outliner
```
either using es6 import
```
import Outliner from 'storm-outiner';

```
or es5 commonjs (legacy)
```
var Outliner = require('storm-outliner');

```


##Example
[https://mjbp.github.io/storm-outliner](https://mjbp.github.io/storm-outliner)


##API
####`Load([url])`
Loads an array of scripts asynchronously, returning a promise

####`Load([url], false)`
Loads an array of scripts synchronously (in order), returning a promise

##Tests
```
npm run test
```

##Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

ie9+ is supported out the box, ie8+ will work with addEventListener polyfill.

##Dependencies
None

##License
MIT