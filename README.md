
# joi-max-words

Joi extensions for max words.

# Usage

Usage is a two steps process. First, a schema is constructed using the provided types and constraints:

```js
const BaseJoi = require('joi');
const Extension = require('@palmabit/joi-max-words');
const Joi = BaseJoi.extend(Extension);

const schema = Joi.string().maxWords(500);
```