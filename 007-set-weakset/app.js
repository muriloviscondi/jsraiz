const obj = { name: 'oioi' };
const set = new Set([100, obj, 'hello world', true, 100, true, 'hello world', obj]);

/*
* - size
*
* - add
* - has
* - delete
* - clear
* - values
* - entries
* - forEach
*/

set.add('Teshima');
set.add(['red', 'green', 'blue']);

console.log(set.size);
console.log(set.has('Teshima'));

console.log('oio', Array.from(set.entries()))

// União
// Interseção
// Diferença

{
  // União
  const conjunto1 = new Set([1, 'hello', false, 100]);
  const conjunto2 = new Set(['hello', 200, true, 1]);
    
  const set = new Set([...conjunto1, ...conjunto2]);
  
  console.log(set);
}

{
  // Interseção
  const conjunto1 = new Set([1, 'hello', false, 100, true]);
  const conjunto2 = new Set(['hello', 200, true, 1]);
  
  const intersecao = new Set([...conjunto1].filter(function(valor) {
    return conjunto2.has(valor);
  }))
  
  console.log(intersecao);
  
}

{
  // Diferença
  const conjunto1 = new Set([1, 'hello', false, 100, true]);
  const conjunto2 = new Set(['hello', 200, true, 1]);
  
  const diferenca = new Set([...conjunto1].filter(function(valor) {
    return !conjunto2.has(valor);
  }))
  
  console.log(diferenca);
}

{
  const ws = new WeakSet;
  ws.add(123)
  ws.has(123)
  // add
  // has
  // delete
}




