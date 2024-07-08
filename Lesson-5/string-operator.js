// String Operator
// Concatenation
let a = 'Hello';
let b = 'World';
console.log(a + b);
console.log(a + ' ' + b);
console.log(a + ' World');
console.log('Hello ' + b);
console.log('Hello' + ' ' + 'World');

console.log(a + ' + ' + b);
console.log(`${a} + ${b}`);

// Length
let c = 'Hello World';
console.log(c.length);

// Index
let d = 'Hello World';
console.log(d[0]);
console.log(d[5]);
    
// Include
let e = 'Hello World';
if (e.includes('Hello')) {
  console.log('Hello');
}

// Slice
let f = 'Hello World';
console.log(f.slice(0, 5));
    
// Split
let g = 'Hello World';
let h = g.split(' ');
for (let i = 0; i < h.length; i++) {
  console.log(h[i]);
}
    
// Trim
let i = 'Hello World';
i = i.trim();
i = i.trimStart();
i = i.trimEnd();
    
// Replace
let j = 'Hello World';
j = j.replace('Hello', 'Hi');
j = j.replace('World', 'Universe');
    
// Match
let k = 'Hello World';
               