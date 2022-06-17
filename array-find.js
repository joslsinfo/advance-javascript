// //méthode array.find()

const find = (arrayFind, callback) => {
    let arrFind;
    for(let i = 0; i < arrayFind.length; i++){
        if(callback(arrayFind[i], i, arrayFind)) {
            arrFind = arrayFind[i];
            break;
            
        }
        
    }
    return arrFind;
   
}
//Retourne le premier element trouvé qui est divisé par 5 et supérieur à 2
const arrayFind = [4, 9, 16, 25, 36, 2, 3, 4, 5, 6];
console.log(find(arrayFind, (elem) => elem /5 > 2 )); // 16