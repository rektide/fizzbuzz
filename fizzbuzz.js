#!/usr/bin/env node
// available at https://github.com/rektide/fizzbuzz

/** Return an iterator that will fizzbuzz */
function fizzBuzz({ fizz, buzz, iterations}= defaults()){
	return {
		i: 1,
		[ Symbol.iterator]: function(){ return this},
		next(){
			const
			  val= this.i++,
			  is3= val% 3== 0? fizz: "",
			  is5= val% 5== 0? is3+ buzz: is3|| val
			return { value: is5, done: val> iterations}
		}
	}
}

/** Run fizzbuzz and output it to console */
function main( opts= defaults()){
	// create an array with every element of fizzbuzz
	const fizzBuzzArray= [ ...fizzBuzz( opts)]
	console.log( fizzBuzzArray.join( opts.ifs|| " "))
}

function defaults( env= process.env){
	return {
	  fizz: env.FB_FIZZ|| "Fizz",
	  buzz: env.FB_BUZZ|| "Buzz",
	  iterations: Number.parseInt( env.FB_ITERATIONS|| 100),
	  ifs: env.FB_IFS|| env.IFS|| " " // fallback to standard IFS (internal field separator) then space
	}
}

// run main if this file is being directly run by node, vs being required()'d by someone else
if( typeof require!== "undefined"&& require.main=== module){
	main()
}

module.exports= fizzBuzz
module.exports.fizzBuzz= fizzBuzz
module.exports.main= main
