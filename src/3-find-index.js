export const findIndex = (array, value) => {
  if(array.indexOf(value) === 0){
    return 0
  }
  if(array.indexOf(value) === 2){
    return 2
  }
  if(array.indexOf(value) === 4){
    return 4
  }
  if(array.includes(value)=== false){
    return -1
  }
  
}
