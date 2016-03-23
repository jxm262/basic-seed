var main = require('../src/main')
var chai = require('chai');
var should = chai.should()

describe('main', function () {
    describe('hello', function () {
        it('returns world', function () {
            main.hello().should.equal('world')
        });
    });
});