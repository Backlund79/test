const assert = require('chai').assert
const index = require('../index')

describe('index', function() {
    it('returns "Hello World!"', function(){
      assert.equal(index(), 'Hello World!')
    })
  })
