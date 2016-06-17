# Position

## Installation

    npm install --save @zubry/position

## Methods

### constructor

Accepts an angle (in degrees) or an object with keys x and y.

```javascript
const angle = new Position(90);
const coordinates = new Position({ x: 1, y: 1 });
```

### shift(amount)

Shifts the position by the given amount by adding the two positions together.

```javascript
const a = new Position({ x: 1, y: 2});
const b = new Position({ x: 2, y: 3});

// (3, 5)
console.log(a.shift(b));
```

### rotate(angle)

Rotates the position by the given angle around the origin. The angle is represented by a position object.

```javascript
const angle = new Position(90);
const pos = new Position({ x: 2, y: 1});

// (-1, 2)
console.log(pos.rotate(angle));
```

### rotateAround(angle, point)

Rotates the position by the given angle around the given point. The angle is represented by a position object.
