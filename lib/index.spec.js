'use strict';

const BaseJoi = require('joi');
const Extension = require('../');
const Joi = BaseJoi.extend(Extension);

describe('maxWords', () => {

  test('should pass validation undefined', (done) => {

    const schema = Joi.string().maxWords(5);

    schema.validate(undefined, (err, value) => {
      expect(err).toBeFalsy;
      done();
    });
  });

  test('should pass validation correct number of words', (done) => {

    const schema = Joi.string().maxWords(5);
    const text = 'Hello world!'
    schema.validate(text, (err, value) => {
      expect(err).toBeFalsy;
      expect(value).toEqual(text)
      done();
    });
  });

  test('should NOT pass validation max words exceeded', (done) => {

    const schema = Joi.string().maxWords(5);

    schema.validate('Hello world Hello world Hello world Hello world', (err, value) => {
      expect(err).toBeTruthy;
      done();
    });
  });
});