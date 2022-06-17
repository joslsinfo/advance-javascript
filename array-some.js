//méthode array.some() pour vérifier si les éléments du tableau respectent une condition ou pas

const some = (arrSome, callback) => {
  for (let i=0; i<arrSome.length; i++){
    if(callback(arrSome[i], i, arrSome)){
      return true;
    }
  }
  return false;
}
const arrayProducts2 = [
  { name: "Tablet", price: 400 },
  { name: "iphoneX", price: 900 },
  { name: "Laptop", price: 850 },
  { name: "TV", price: 450 },
];
console.log(some(arrayProducts2, (elem) => elem.price > 400)); //true