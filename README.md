
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

[![Build Status](https://travis-ci.org/Palmabit-IT/joi-max-words.svg?branch=master)](https://travis-ci.org/Palmabit-IT/joi-max-words)

# DEPRECATED

This is no longer supported, please use https://github.com/Palmabit-IT/joi-words-extension instead.

# Install

```js
npm install @palmabit/joi-max-words
```

# Usage

Usage is a two steps process. First, a schema is constructed using the provided types and constraints:

```js
const BaseJoi = require('joi');
const Extension = require('@palmabit/joi-max-words');
const Joi = BaseJoi.extend(Extension);

const schema = Joi.string().maxWords(500);
```