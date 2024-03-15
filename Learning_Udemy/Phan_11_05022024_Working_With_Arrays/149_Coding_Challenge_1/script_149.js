'use strict';

// TODO 1)
const checkDogs = function (dogsJulia,dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice();
  // dogsJuliaCorrected.splice(1,3); //Cách 1
  dogsJuliaCorrected.splice(0,1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  // TODO 2)
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  // TODO 3)
  dogs.forEach(
         function(value, index){
            console.log((value >= 3) ? `Chó số ${index+1} là người lớn và ${value} tuổi` : `Chó số ${index+1} vẫn là chó con �` );
  });

};

// TODO 4)
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
console.log('=============================================');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

