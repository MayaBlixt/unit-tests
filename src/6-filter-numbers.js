export const filterNumbers = (array, largerThan) => {
  const filterLowerThan = (value) => {
    return value <= largerThan
  }
  return array.filter(filterLowerThan);
}