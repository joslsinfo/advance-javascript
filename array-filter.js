
//méthode array.filter()
const filter = (arrayFilter, callback) => {
  const arrFilter = [];
  for(let i=0; i<arrayFilter.length; i++){
    if(callback(arrayFilter[i], i, arrayFilter)){
      arrFilter.push(arrayFilter[i]);
    }
    
  }
  return arrFilter;
}
const arrayFilter = [2, 3, 4, 5, 6];
console.log(filter(arrayFilter, (elem) => elem > 3)); // [4, 5, 6];
