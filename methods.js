var { db } = require("./db");

// Busca un elemento / devuelve el objeto
let Find = db.find((data) => data.id === 1);
console.log("Find: ");
console.log(Find);
console.log("");

// Busca algun elemento / devuelve booleano
let Some = db.some((data) => data.id === 4);
console.log("Some: ");
console.log(Some);
console.log("");

// Busca en todos los elementos / devuelve booleano
let Every = db.every((data) => data.tags.includes("javascript"));
console.log("Every: ");
console.log(Every + "\n");
console.log("");

// Mapea todo el array / deveuelve array
let Map = db.map((data) => data.image);
console.log("Map: ");
console.log(Map);
console.log("");

// Busca todos los objetos que cumplan la condicion / devuelve array
let Filter = db.filter((data) => data?.image);
console.log("Filter: ");
console.log(Filter);
console.log("");

// Muestra todos los elementos y los agrega a un nuevo array / devuelve array
let Reduce = db.reduce((allData, data) => {
  return [...allData, ...data.tags];
}, []);
console.log("Reduce: ");
console.log(Reduce);
console.log("");

// Muestra todos los elementos y los agrega a un nuevo array (no se repiten) / devuelve array
let ReduceSin = db.reduce((allData, data) => {
  return Array.from(new Set([...allData, ...data.tags]));
}, []);
console.log("Reduce sin repeticion: ");
console.log(ReduceSin);
console.log("");
