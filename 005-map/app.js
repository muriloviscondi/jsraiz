/*
  - Diferente de objetos que chaves podem ser somente string, numero e symbol, o Map permite qualquer tipo, até objetos e array
- Assim como array, ele mantém a ordem dos elementos (diferente de objetos)
- Você consegue acesso rápido a um valor (semelhante a objetos)
- Acessar a quantidade de elementos
- Tem alguns métodos que te ajudam
*/

const mapa = new Map([['oioioi', 'Hello']]);
mapa.set(0, 'Programador');
mapa.set(true, 'a');

const obj = { slug: 'oi-oi-oi' };

mapa.set(obj, 'bordo');

console.log(mapa.get(0));
console.log(mapa.get(true));

mapa.get('oioioi');

console.log(mapa.get(obj));

console.log(mapa.size);

console.log([1, 2, 3, 4, 5].length);
console.log('Murilo '[2]);

const arr = [];
arr[50] = 'oioi';
console.log(arr.length);

mapa.set(50, 'oioi');
console.log(mapa.size);

/*
* - has
* - delete
* - clear
* - forEach
* - keys
* - values
* - entries

* - size
*/

console.log(mapa.has(50));

mapa.delete(50);

console.log(mapa.has(50));

// mapa.clear

mapa.forEach(function (value, key) {
  console.log(key);
});

for (let [key, value] of mapa) {
  console.log(value);
}

//console.log([...mapa.keys()])

for (let k of mapa.keys()) {
  console.log('id', k);
}

for (let v of mapa.values()) {
  console.log('value', v);
}

console.log(Array.from(mapa.values()));

for (let [key, value] of mapa.entries()) {
  console.log('entry', key, value);
}

console.log(Array.from(mapa.entries()));

const usuarios = new Map();
usuarios.set(0, { nome: 'Murilo', pais: 'Brasil' });
usuarios.set(1, { nome: 'José', pais: 'Uruguai' });
usuarios.set(2, { nome: 'Maria', pais: 'Brasil' });

const usuariosBrasil = Array.from(usuarios.entries()).filter(function (
  usuarioEntrada
) {
  return usuarioEntrada[1].pais === 'Brasil';
});

const mapaUsuariosBrasil = new Map(usuariosBrasil);

console.log(mapaUsuariosBrasil.get(2));
