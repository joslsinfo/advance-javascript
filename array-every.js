//méthode array.every() pour vérifier si tous les éléments du tableau respectent une certaine condition ou pas

const every = (arrSome, callback) => {
  for (let i=0; i<arrSome.length; i++){
    if(callback(arrSome[i], i, arrSome)){
      return true;
    }
  }
  return false;
}
const arrayProducts = [
  { name: "Tablet", price: 455 },
  { name: "iphoneX", price: 900 },
  { name: "Laptop", price: 850 },
  { name: "TV", price: 450 },
];
console.log(every(arrayProducts, (elem) => elem.price % 2 == 200)); //false