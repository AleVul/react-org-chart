let _ = require('lodash')

let getName = data => _.get(data, 'entity.name')

let getTitle = data => _.get(data, 'entity.title')

let getSubTitle = data => _.get(data, 'entity.subTitle')

let getCount = data => {
  let count = _.get(data, 'entity.totalReports')
  if (!count) { return '' }
  let pluralEnding = count > 1 ? 's' : ''
  return `${count} supervisee${pluralEnding}`
}

let getCursorForNode = data =>
  data.children || data._children || data.hasChild
    ? 'pointer'
    : 'default'

let customOnClick = (fn, onClick, config) => data => {
  if (_.isFunction(fn)) {
    if (fn(data, d3.event)) {
      onClick(config)
    } else {
      d3.event.stopPropagation()
    }
  }
}

module.exports = {
  getName,
  getTitle,
  getSubTitle,
  getCount,
  getCursorForNode,
  customOnClick
}