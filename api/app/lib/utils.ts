const typeOf = (value: any): any => {
  if (value === null) return 'null'
  return typeof(value) === 'object' ? {
    '[object Object]': 'Object',
    '[object Array]': 'Array'
  }[Object.prototype.toString.call(value)] : typeof(value) 
}

const formatParams = (data: any, appkey?: string): string => {
  if (typeOf(data) !== 'Object') {
    throw new Error('参数data必须是对象')
  }

  //  ?a=1&b=2&appKey=...
  let paramsStr: string = '?'
  for (let key in data) {
    paramsStr += `${key}=${data[key]}&`
  }
  return appkey ? paramsStr + 'key=' + appkey : paramsStr.slice(0, -1)
}

export default {
  typeOf,
  formatParams
}