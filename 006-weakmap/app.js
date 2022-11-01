// WeakMap
let obj = { id: '122'};
// já seu o obj
// não uso o obj em nenhum lugar mais pq já usei

const wMapa = new WeakMap;
const obj2 = {};
wMapa.set(obj, 'valor 1');
wMapa.set(obj2, 'valor 2')

console.log(wMapa.get(obj))
console.log(wMapa.get(obj2));