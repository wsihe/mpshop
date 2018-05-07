function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function isObj (x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

/* eslint-disable no-useless-escape */

export function mobile (value) {
  value = value.replace(/[^-|\d]/g, '')
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9\-]{10,13}$/.test(value)
}

/**
 * url 格式化
 * @param url [url模板]
 * @param map [参数]
 */
export function formatUrl (url, map) {
  map = map || {}
  return url.replace(/{(\w+)}/g, function (match, key) {
    let value = map[key]
    return typeof value !== 'undefined' ? encodeURIComponent(value + '') : match
  })
}

