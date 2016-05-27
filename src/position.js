import { Record as record } from 'immutable';
import check, { assert } from 'check-types';

import ComplexNumber from '@zubry/complexnumber';

class Position extends ComplexNumber {
  constructor(props) {
    if(check.number(props)){
      const rad = props * Math.PI / 180;
      super({ real: Math.cos(rad), imaginary: Math.sin(rad) });
    } else {
      super({ real: props.x, imaginary: props.y });
    }
  }

  get x() {
    return this.real;
  }

  get y() {
    return this.imaginary;
  }

  set x(newX) {
    return this
      .set('real', newX);
  }

  set y(newY) {
    return this
      .set('imaginary', newY);
  }

  shift(amount) {
    return this
      .add(amount);
  }

  rotate(angle) {
    return this
      .multiply(angle.normalize());
  }

  rotateAround(angle, point) {
    return this
      .subtract(point)
      .rotate(angle)
      .add(point);
  }
}

export default (Base) => class extends Base {
  Position() { }
};
