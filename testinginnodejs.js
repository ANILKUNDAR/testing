1)install mocha 

npm install -g mocha        

2)File Format should be in

test
|-- test.js
|-- package.json

3)add in package.json

"scripts": {
    "test": "mocha"
  }

4)In your test.js file, copy the following:
  var assert = require('assert');
  describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function(){
        assert.equal(-1, [1,2,3].indexOf(4));
      });
    });
  });

5)Run using 
  npm test

6)you should get the following:

Array
  #indexOf()
    ✓ should return -1 when the value is not present

1 passing (9ms)


