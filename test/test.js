import {assert} from 'chai';
import should from 'should';

import Position from './../lib/';

describe('Position', function() {
  describe('#rotate(angle)', function () {
    it('should rotate a position by the specified amount', function () {
      const angle = new Position(90);

      const pos = new Position({ x: 2, y: 1});

      const test = pos.rotate(angle);

      test.x.should.approximately(-1, Number.EPSILON);
      test.y.should.approximately(2, Number.EPSILON);
    });
  });
});
