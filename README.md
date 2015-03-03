# argon [![Build Status](https://travis-ci.org/geuis/argon.svg?branch=master)](https://travis-ci.org/geuis/argon)
Store and retrieve actual values from local and session storage in the browser.

When using localStorage or sessionStorage natively, values are converted to strings when they're stored. Retrieving information requires parsing the strings from storage to the correct data type. 

Argon adds type hints for each native javascript data type when you store a piece of data. The type hint is used during retrieval to automatically return your data in its native form. This even works for functions.

## Installation
Clone the repo or install via bower

    bower install argon

## Usage
Argon adds itself as a global variable accessed as 'argon'.

###Local and session storage are accessed via:
- argon.local.*
- argon.session.*

###Commands for both local/session stores are:
- get - Requires a 'key' argument to retrieve a value.
- set - Requires a 'key' and 'value' to store.
- remove - Requires a key argument to remove a stored value.
- clear - No arguments. Clears all keys in the store.

###The special case of functions:
Functions can be stored too. The internal values in an existing function cannot be stored, but retrieving a function from storage returns a new instance. 

# Testing
For local testing, run a static server from the root directory and load /test/test.html.

Remote tests are run in TravisCI on each commit to master.

###Current Status

[![Build Status](https://travis-ci.org/geuis/argon.svg?branch=master)](https://travis-ci.org/geuis/argon)

##Code samples
Store some data

```javascript

    argon.local.set('abc', 123);
    argon.local.get('abc'); // 123

```

Store, retrieve, and run a function.

```javascript

    argon.local.set('fn', function () {
      console.log('This runs from a stored function.');
    });
    var fn = argon.local.get('fn');
    fn(); //This runs from a stored function.

```