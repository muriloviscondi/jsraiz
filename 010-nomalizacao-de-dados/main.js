import data from "./data/restaurant.js";

// Colocar como chave um identificador para acesso rápido
// Desaninhar a estrutura

// new Map([
//   ['chave', ' valor']
//   ['chave', ' valor']
//   ['chave', ' valor']
// ])

// const newData = data.reduce((acc, cur) => {
//     const { menus, ...restaurantRest } = cur;
//     acc.restaurants.push([
//       cur.id,
//       { ...restaurantRest, menus: menus.map((menu) => menu.id) },
//     ]);
//     acc.menus = [
//       ...acc.menus,
//       ...menus.map((menu) => {
//         return [menu.id, { ...menu, restaurantId: cur.id }];
//       }),
//     ];

//     return acc;
//   },
//   { restaurants: [], menus: [] }
// );

// Refactoring
const newData = data.reduce(
  (acc, { menus, ...rest }) => ({
    ...acc,
    restaurants: [
      ...acc.restaurants,
      [rest.id, { ...rest, menus: menus.map((menu) => menu.id) }],
    ],
    menus: [
      ...acc.menus,
      ...menus.map((menu) => [menu.id, { ...menu, restaurantId: rest.id }]),
    ],
  }),
  { restaurants: [], menus: [] }
);

const restaurants = new Map(newData.restaurants);
const menus = new Map(newData.menus);

// console.log(restaurants);
console.log(menus);

// const restaurants = new Map(
//   data.map(({ menus, ...restaurant }) => {
//     return [
//       restaurant.id,
//       { ...restaurant, menus: menus.map((menu) => menu.id) },
//     ];
//   })
// );

// const menus = new Map(
//   data.flatMap((restaurant) => {
//     return restaurant.menus.map((menu) => {
//       return [menu.id, { ...menu, restaurantId: restaurant.id }];
//     });
//   })
// );

// console.log(restaurants.get("324181a1-c153-47f6-a466-1ca1b0bcf707"));

// const restaurantId = menus.get(
//   "b91e5b07-df6c-4b3f-8028-ab39471ae0e9"
// ).restaurantId;

// console.log(restaurants.get(restaurantId));
