#!/usr/bin/env node
const pop= {
	i: 1,
	[ Symbol.iterator]: function(){ return this},
	next(){
		const val= this.i++, is3= val% 3== 0? "Fizz": "", is5= val% 5== 0? is3+ "Buzz": is3|| val
		return { value: is5, done: val> 100}
	}
}

module.exports= Array.from(pop)
if( typeof require!== "undefined"&& require.main=== module){
	console.log( module.exports.join( process.env.IFS|| " "))
}
