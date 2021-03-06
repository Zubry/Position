import check from 'check-types';

import ComplexNumber from '@zubry/complexnumber';

export default class Position extends ComplexNumber {
  constructor(props) {
    if (check.number(props)) {
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
