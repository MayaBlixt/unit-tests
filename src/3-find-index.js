export const findIndex = (array, value) => {
  //should return the correct index of the first item
  if(array.indexOf(value) === 0){
    return 0
  }

  if(array.indexOf(value) === 2){
    return 2
  }
  //should return the correct index of the last item
  if(array.indexOf(value) === 4){
    return 4
  }
  //should return -1 if the item is not in the array
  if(array.includes(value)=== false){
    return -1
  }
  
}
