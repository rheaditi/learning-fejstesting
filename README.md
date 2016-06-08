[![Build Status](https://travis-ci.org/rheaditi/BT03.svg?branch=master)](https://travis-ci.org/rheaditi/BT03)

# BT-03 - Javascript Unit Testing

Just a demonstrative repository (a [breakable toy](http://chimera.labs.oreilly.com/books/1234000001813/ch05.html#breakable_toys), if you will) while & for learning Front-End Javascript testing using Karma, Jasmine and TravisCI.

## How-To: Run this locally

* Fork/clone this repo.
* Run `npm install`
* Run `npm test`

## How-To: Set Up for Yourself

From here on, are the steps I've followed from different tutorials around the web and the docs of the frameworks used. :smile:

### 1. Grab the Pre-Requisites

* NodeJS: [download](https://nodejs.org/en/download/) if you don't have already. 
* A GitHub :octocat: repository with `npm init`-ed/existing project.
* [Jasmine](http://jasmine.github.io/) `$ npm install jasmine-core --save-dev`
* [Karma](https://karma-runner.github.io) and its plugins:
 ```sh
 # Install Karma-CLI for global usage
 $ npm install -g karma-cli
 
 # Check if that worked
 $ karma --version
 
 # Install Karma for the project:
 $ npm install karma --save-dev

 # Install plugins:
 $ npm install karma-jasmine karma-chrome-launcher --save-dev
 ```

### 2. Configuring Karma

The simplest way is to generate the configuration file with `karma init`. By default, this file generated is called `karma.conf.js`. Lets run:
```
$ karma init
```

It poses a series of questions to help set up the inital configuration.  
Example answers I used (in case there's any confusion):
```
Which testing framework do you want to use ?
> jasmine

Do you want to use Require.js ?
> no

Do you want to capture any browsers automatically ?
> Firefox

What is the location of your source and test files ?
> js/*.js
> tests/**/*.js
08 06 2016 17:43:14.925:WARN [init]: There is no file matching this pattern.
> 

Should any of the files included by the previous patterns be excluded ?
> 

Do you want Karma to watch all the files and run the tests on change ?
> no
Config file generated at "/path/to/project/karma.conf.js".
```

The warning `no file matching this pattern` comes only if you don't have the `js` and `tests` directories and/or their files. We can ignore this for now.

### 3. Configuring Travis
First, login to [Travis CI](https://travis-ci.org/) and add your repository to it.

Create the `.travis.yml` file (mind the leading period):
```yml
language: node_js
node_js:
  - "5"
before_install:
- export DISPLAY=:99.0
- sh -e /etc/init.d/xvfb start
```

The different parts of this `.travis.yml` file are explained as comments in this repository's `.travis.yml` file. Check it out [here](./.travis.yml).

### 4. Testable Code

According to how we've currently configured Karma, the input files are in `js/` directory and the test specs are in `tests/`.
Here's some sample code to be tested, `js/hello.js`:

```js
/* A tiny simple javascript fuction that says hello if you pass it your name as a String. It just returns the corresponding greeting as a String too. */
function sayHello(name){
	return 'Hello there, ' + name + '!';
}
```

### 5. Writing the Test Suite with Specs

Now, we're using Jasmine to write code that will test our previous code. This, now, goes in `tests/testHello.js`:
```js
/* A test suite 'Testing Hello Sayer' which tests if it 'Says Hello'. */
describe('Testing Hello Sayer', function(){

	it('Says Hello', function(){
		var helloString = sayHello('Aditi');
		expect(helloString).toBeDefined()
		expect(helloString).not.toBeNull();
		expect(helloString).toBe('Hello there, Aditi!');

		helloString = sayHello('Rhea');
		expect(helloString).toBeDefined()
		expect(helloString).not.toBeNull();
		expect(helloString).toBe('Hello there, Rhea!');
	});

});
```

There's more info given as comments in the actual file in this repository. Check it out [here](./tests/testHello.js).

### 6. Setting up the tests to work with npm

 Add this line to your `package.json`:
 ```json
 // ...
 "scripts": {
   "test": "karma start --single-run --no-auto-watch --browsers Firefox"
  }
  // ...
  ```

This lets npm know how to run tests for this particular project.

### 7. Run the Tests

Finally, we should now be in a position to run `npm test` or `karma start` in order to execute and see the test results.
Running it, we might get some output like:
```sh
08 06 2016 19:49:12.443:INFO [karma]: Karma v0.13.22 server started at http://localhost:9876/
08 06 2016 19:49:12.461:INFO [launcher]: Starting browser Firefox
08 06 2016 19:49:16.563:INFO [Firefox 45.0.0 (XXX)]: Connected on socket XXX with id XXX
Firefox 45.0.0 (XXX): Executed 1 of 1 SUCCESS (0.004 secs / 0.002 secs)
```

Nice. Success! =)

### 8. On Push

Once Travis is configured, it listens for pushes on the master branch. For a new push, it tries to execute the build (in this case karma) and you can see this activity on your Travis dashboard.

## Notes

* To get the build status badge. For eg: [![Build Status](https://travis-ci.org/rheaditi/BT03.svg?branch=master)](https://travis-ci.org/rheaditi/BT03)  
 You need to go to your Travis dashboard, go to the corresponding repository, and click on the build badge next to the name of the repo. From there, Travis will give you options on how to get the badge for use in different places. Select markdown to get it for GitHub markdown, and it can be added to your `README.md` file. =)

* See any errors? Want to suggest some changes? Fork and submit a pull request. =)

## Sources
- [SitePoint post](https://www.sitepoint.com/testing-javascript-jasmine-travis-karma/)
- [Jasmine Docs](http://jasmine.github.io/2.4/introduction.html)
- [TravisCI Docs](https://docs.travis-ci.com/)
- [Karma Docs](https://karma-runner.github.io/0.13/intro/installation.html)
