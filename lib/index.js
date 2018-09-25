'use strict';

module.exports = (joi) => ({
  base: joi.string(),
  name: 'string',
  language: {
    maxWords: 'must have less than {{max}} words',
  },
  rules: [
    {
      name: 'maxWords',
      params: {
        max: joi.number().required()
      },
      validate(params, value, state, options) {
        const { max = 0 } = params || {}

        const getArrayWords = (text) => {
          return text.trim().split(/\s+/).filter(word => word !== '')
        }
        if (getArrayWords(value).length > max) {
          return this.createError('string.maxWords', { max }, state, options)
        }
        return value
      }
    },
  ]
})