/* global Should, describe, beforeEach, it */
/* eslint no-unused-expressions:0, new-cap:0 */

'use strict';

// global window
describe('Argon test suite', function () {
  beforeEach(function (done) {
    window.localStorage.clear();
    window.sessionStorage.clear();
    done();
  });

  describe('Basics', function () {
    it('should be a global variable called argon', function (done) {
      window.argon.should.be.an.instanceof(Object);
      done();
    });

    it('should have local and session interfaces', function (done) {
      window.argon.should.have.property('local');
      window.argon.should.have.property('session');
      done();
    });

    it('local and session interfaces should be objects', function (done) {
      window.argon.local.should.be.type('object');
      window.argon.session.should.be.type('object');
      done();
    });

    it('local and session interfaces should have methods get, set, remove, and clear', function (done) {
      window.argon.local.set.should.be.a.Function;
      window.argon.local.get.should.be.a.Function;
      window.argon.local.remove.should.be.a.Function;
      window.argon.local.clear.should.be.a.Function;
      done();
    });

    // local and session use the same code. So we only need to test one to make
    // sure both work.
    it('set should store a value', function (done) {
      window.argon.local.set('abc', 123);
      window.localStorage.abc.should.equal('n123');
      done();
    });

    it('get should retrieve a value and it should be the same', function (done) {
      var val = 123;
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      resp.should.equal(val);
      done();
    });

    it('remove should remove a key from storage', function (done) {
      window.argon.local.set('key', 123);
      window.argon.local.remove('key');
      window.localStorage.length.should.equal(0);
      done();
    });

    it('clear should remove all keys from storage', function (done) {
      window.argon.local.set('key', 123);
      window.argon.local.set('key2', 123);
      window.argon.local.set('key3', 123);
      window.argon.local.clear();
      window.localStorage.length.should.equal(0);
      done();
    });
  });

  describe('Types', function () {
    it('should store and retrieve a number', function (done) {
      var val = 1;
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      resp.should.be.Number;
      done();
    });

    it('should store and retrieve a string', function (done) {
      var val = 'abc';
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      resp.should.be.String;
      done();
    });

    it('should store and retrieve a boolean', function (done) {
      var val = true;
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      resp.should.be.Boolean;
      done();
    });

    it('should store and retrieve a string', function (done) {
      var val = {};
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      resp.should.be.Object;
      done();
    });

    it('should store and retrieve an array', function (done) {
      var val = [];
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      resp.should.be.Array;
      done();
    });

    it('should store and retrieve a date', function (done) {
      var val = new Date();
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      resp.should.be.Date;
      done();
    });

    it('should store and retrieve a function', function (done) {
      var val = function () {};
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      resp.should.be.Function;
      done();
    });

    it('should store and retrieve a NaN', function (done) {
      var val = NaN;
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      resp.should.be.NaN;
      done();
    });

    it('should store and retrieve an undefined', function (done) {
      var val;
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      Should(resp).equal(undefined);
      done();
    });

    it('should store and retrieve a null', function (done) {
      var val = null;
      window.argon.local.set('key', val);
      var resp = window.argon.local.get('key');
      Should(resp).be.null;
      done();
    });
  });
});
