function canIterate(obj) {
  if (obj === null || obj === undefined) { return false; }
  return typeof (obj[Symbol.iterator]) === 'function';
}

console.log(canIterate(undefined));
console.log(canIterate(null));
console.log(canIterate(new Set()));
console.log(canIterate(10));
console.log(canIterate(new Map()));
