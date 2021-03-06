let assert = require('assert')
let should = require('should')
let kmp = require('../index.js')


describe('kmp', () => {
	describe('#indexOf', () => {		
		// string
		it('should find a substring in a string', () => {
			kmp.indexOf('substring', 'contains a substring').should.be.exactly(11)
		})
		it('should not find a substring in a string', () => {
			kmp.indexOf('not here', 'contains a substring').should.be.exactly(-1)
		})		
		
		// array of values	
		it('should find an array<primitive> in an array<primitive>', () => {
			kmp.indexOf([1,2,3], [0,1,2,3,4,5]).should.be.exactly(1)
		})
		it('should not find an array<primitive> in an array<primitive>', () => {
			kmp.indexOf([9,9,9], [0,1,2,3,4,5]).should.be.exactly(-1)
		})
		
		// array by predicate
		it('should find an array<predicate> in an array<primitive>', () => {
			kmp.indexOf([q => q == 1,q => q == 2,q => q == 3], [0,1,2,3,4,5]).should.be.exactly(1)
		})
		it('should not find an array<predicate> in an array<primitive>', () => {
			kmp.indexOf([q => q == 9,q => q == 9,q => q == 9], [0,1,2,3,4,5]).should.be.exactly(-1)
		})
		
		// array by predicate, predicate
		it('should find an array<predicate, predicate> in an array<primitive>', () => {
			kmp.indexOf([(a, b) => a == 1 && b == 2], [0,1,2,3,4,5]).should.be.exactly(1)
		})
		it('should not find an array<predicate, predicate> in an array<primitive>', () => {
			kmp.indexOf([(a, b) => a == 9 && b == 9], [0,1,2,3,4,5]).should.be.exactly(-1)
		})
	})
})