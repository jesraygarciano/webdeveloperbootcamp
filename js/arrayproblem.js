function printReverse(arr){
  for(var i = arr.length - 1;i>=0;i--  ){
    console.log(arr[i]);
  }
}
printReverse([3,6,2,5]);


function isUniform(arr){
  var first = arr[0];
  for(var i = 1; i<arr.length; i++){
    if(arr[i]!==first){
      return false;
    }
  }
  return true;
}

// function isUniform(arr){
//   var first=arr[0];
//   arr.forEach(function(element){
//     if(element!==first){
//       return false;
//     }
//   });
//   return true;
// }

// function sumArray(arr){
//   var total=0;
//   for (var i=total; i<arr.length; i++){
//     return total + i;
//     return total;
//   }
// }


function maxArray(arr){
  var max=arr[0];
  for(var i=0; i<arr.length; i++){
    if(max<arr[i]){
      max = arr[i];
    }
  }
  return max;
}
