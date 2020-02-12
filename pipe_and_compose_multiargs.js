const compose = (...fns) => (
  [...fns]
    .reverse()
    .reduce((f, g) => (...args) => g(f(...args)))
)
const pipe = (...fns) => ([...fns].reduce((f, g) => (...args) => g(f(...args))))


const users = [
  { name: "Jefferson", age: 14 },
  { name: "Jack", age: 18 },
  { name: "Mil", age: 22 },
]
const filter = cb => arr => arr.filter(cb);
const map = cb => arr => arr.map(cb);
const sort = cb => arr => arr.sort(cb)

const res = compose(
  sort((a, b) => (a.length - b.length)),
  map(u => u.name),
  filter(u => u.age >= 14)
)(users)

const resPipe = pipe(
  filter(u => u.age >= 14),
  map(u => u.name),
  sort((a, b) => (a.length - b.length)),
)(users)

console.log(res)
console.log(resPipe)