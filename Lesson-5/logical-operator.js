// And, Or, Xor, Not

// And

let x = true;
let y = true;

if (x && y) {
  console.log('x and y');
}
else {
  console.log('x or y');
}

// Or

let a = true;
let b = false;

if (a || b) {
  console.log('a or b');
}
else {
  console.log('a and b');
}

// Xor

let c = true;
let d = false;

if (c ^ d) {
  console.log('c xor d');
}
else {
  console.log('c or d');
}

// Not

let e = true;
let f = false;

if (!e) {
  console.log('e');
}
else {
  console.log('f');
}    