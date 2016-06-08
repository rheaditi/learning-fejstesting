/* Jasmine test suite example:
	describe("A suite", function() {
	  it("contains spec with an expectation", function() {
	    expect(true).toBe(true);
	  });
	});
*/

describe('Testing Hello Sayer', function(){

	it('Says Hello', function(){
		var helloString = sayHello('Aditi');
		expect(helloString).toBeDefined()
		expect(helloString).not.toBeNull();
		expect(helloString).toBe('Hello there, Aditi!');
	});

});

/* Some Jasmine things:
* Each of `describe` and `it` are functions.
* `describe` describes a test suite (which could have multiple test specifications or specs)
* `it` provides one specification

* `expect`:
* Expectations are built with the function `expect` which takes a value, called the actual. 
* It is chained with a Matcher function, which takes the expected value.
*
* Can have positive and negative cases:
*	expect(true).toBe(true);
* 	expect(false).not.toBe(true);
* Can have regular expressions:
* 	expect(message).toMatch(/bar/);
*	expect(message).not.toMatch(/foo/);
* Can check defined status:
*	expect(a.foo).toBeDefined();
*   expect(a.bar).not.toBeDefined();
* Or null status:
*   expect(null).toBeNull();
*   expect(foo).not.toBeNull();
* Boolean cases:
*	expect(foo).toBeTruthy();
*	expect(a).not.toBeTruthy();
*	expect(foo).toBeTruthy();
*	expect(a).not.toBeTruthy();
* etc. Check the Jasmine docs for more.
*/













