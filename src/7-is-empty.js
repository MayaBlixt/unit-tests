
export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  }

    else if (type === 'object') {
    if (stringArrayOrObject.constructor === Array) {
    return Object.keys(stringArrayOrObject).length === 0 && stringArrayOrObject.constructor === Array
    }
    else if (stringArrayOrObject.constructor === Object) {
    return Object.keys(stringArrayOrObject).length === 0 && stringArrayOrObject.constructor === Object
    }
  }

  else {
  return false
}
}

