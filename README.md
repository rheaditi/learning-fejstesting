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

1. NodeJS: [download](https://nodejs.org/en/download/) if you don't have already. 
2. A GitHub :octocat: repository with `npm init`-ed/existing project.
3. [Jasmine](http://jasmine.github.io/)
```
 $ npm install jasmine-core --save-dev
```
4. [Karma](https://karma-runner.github.io) and its plugins:
 ```
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

Create the `.travis.yml` file (mind the leading period - it'll be a hidden file):
```yml
language: node_js
node_js:
  - "5"
before_install:
- export DISPLAY=:99.0
- sh -e /etc/init.d/xvfb start
```

The different parts of this `.travis.yml` file are explained as comments in this repository's `.travis.yml` file. Check it out [here](./.travis.yml).
