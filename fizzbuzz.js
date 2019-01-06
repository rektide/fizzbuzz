#!/usr/bin/env node
const pop= {
	i: 1,
	[ Symbol.iterator]: function(){ return this},
	next(){
		const val= this.i++, is3= val% 3== 0? "Fizz": "", is5= val% 5== 0? is3+ "Buzz": is3|| val
		return { value: is5, done: val> 100}
	}
}
console.log( Array.from( pop).join( " "))
