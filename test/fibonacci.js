const chai = require('chai');
const program = require('../algos/fibonacci');

describe('Fibonacci', function() {
    it('errors if arg is not an integer', function() {
        chai.expect(() => program.getNthFib(3.33)).to.throw();
    })

    it('errors if arg is not a valid number', function() {
        chai.expect(() => program.getNthFib(-3)).to.throw();
    })

    it('1st item', function() {
        chai.expect(program.getNthFib(1)).to.deep.equal(0);
    });

    it('2nd item', function() {
        chai.expect(program.getNthFib(2)).to.deep.equal(1);
    });

    it('6th item', function() {
        chai.expect(program.getNthFib(6)).to.deep.equal(5);
    });

    it('10th item', function() {
        chai.expect(program.getNthFib(10)).to.deep.equal(34);
    });
})