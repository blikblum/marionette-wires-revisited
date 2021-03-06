Marionette Wires - Revisited
============================

An opinionated example application built with Marionette.js. 

## Overview

This is a fork of [Marionette Wires](https://github.com/thejameskyle/marionette-wires), with the following differences:

* Use [Marionette](http://marionettejs.com/) v4 instead of v2
* Use [marionette.routing](https://github.com/blikblum/marionette.routing) instead of [backbone.routing](https://github.com/thejameskyle/backbone-routing)
* Use [webpack](http://webpack.github.io/) instead of browserify and gulp
* No server, just client side

#### New features

* Code splitting of colors routes (open network tab of dev tools and go to colors section)
* Remember last selected book
* Live webserver for development (auto reload on source change)
* Animated page transitions (determined dynamically)
* Animated book selection change
* Colors list implemented with [snabbdom](https://github.com/snabbdom/snabbdom) / [JSX](https://github.com/Swizz/snabbdom-pragma)
* Pagination implemented as a web component (using [skatejs](https://github.com/skatejs/skatejs/))
 
 Check the [live version](https://blikblum.github.io/marionette-wires-revisited/dist/)
 
 Scaffold a new project with similar setup using [generator-mn](https://github.com/blikblum/generator-mn)

## Quick start

[Clone](http://git-scm.com/docs/git-clone) or [download](https://github.com/blikblum/marionette.routing/archive/master.zip) this repo.

```sh
git clone https://github.com/blikblum/marionette-wires-revisited.git && cd marionette-wires-revisited
```

Make sure [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) are
[installed](http://nodejs.org/download/). Installation of [Yarn](https://yarnpkg.com/) is recommended but not required 

Install
```sh
yarn
//or
npm install
```

Develop
```sh
npm run dev
```

Build
```sh
npm run prod
```

Once that's done, open up dist/index.html in a browser using a static server.

## Guide

As a general rule, be sure to read through all of the source code yourself and make sure you understand what is happening.

| Directories | Purpose |
| ---:|:--- |
| [api](./api) | Mock api routes |
| [dist](./dist) | Built assets |
| [src](./src) | Source files |
| [test](./test) | Test files |

===

&copy; 2014 James Kyle. Distributed under [ISC license](LICENSE.md).

&copy; 2018 Marionette v3/v4 port + new features by Luiz Américo
