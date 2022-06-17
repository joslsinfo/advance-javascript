// //méthode array.map()

// /*utilisation de la méthode map() pour transformer chacun des éléments dans le tableau
//  en racine carrée dans un nouveau tableau en y considérant le même nombre d'éléments.
//  */



const mapForSquareRoot = (arraySquareRoot, callback) => {
  const arr = [];
  for (let i = 0; i < arraySquareRoot.length; i++) {
    arr.push(callback(arraySquareRoot[i]), i, arraySquareRoot);
  }
  return arr;
};
const arraySquareRoot = [4, 9, 16, 25, 36];
console.log(mapForSquareRoot(arraySquareRoot, (elem) => Math.sqrt(elem))); // [2, 3, 4, 5, 6];