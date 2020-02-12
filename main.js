
const compose = (f, g,k) => (a) => f(g(k(a)))
const pipe = (f, g,k) => (a) => k(g(f(a)))


const users = [
  { name: "Jefferson", age: 14 },
    { name: "Jacke", age: 18 }, 
    { name: "Milady", age: 22 },
]
const filter = cb => arr => arr.filter(cb);
const map = cb => arr => arr.map(cb);
const sort=cb=>arr=>arr.sort(cb)

compose(
  sort((a,b)=>(a.length-b.length)),
  map(u => u.name),
  filter(u => u.age >= 14)
  
)(users) //["Jack", "Milady"]

pipe(  
  filter(u => u.age >= 14),
  map(u => u.name),
    sort((a,b)=>(a.length-b.length))
)(users) //["Jack", "Milady"]
