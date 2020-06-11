const { createElement, PureComponent } = require('react')
const { init } = require('../chart')

class OrgChart extends PureComponent {
  render() {
    const { id } = this.props

    return createElement('div', { id })
  }

  static defaultProps = {
    id: 'react-org-chart',
    downloadImageId: 'org-chart-download-image',
    downloadPdfId: 'org-chart-download-pdf',
    zoomInId: 'org-chart-zoom-in',
    zoomOutId: 'org-chart-zoom-out',
    scaleToFitId: 'org-chart-scale-to-fit',
    resetId: 'org-chart-reset',
    tree: {}
  }

  componentDidMount() {
    const {
      id,
      downloadImageId,
      downloadPdfId,
      zoomInId,
      zoomOutId,
      scaleToFitId,
      resetId,
      tree,
      ...options
    } = this.props

    init({
      id: `#${id}`,
      downloadImageId: `#${downloadImageId}`,
      downloadPdfId: `#${downloadPdfId}`,
      zoomInId: zoomInId,
      zoomOutId: zoomOutId,
      scaleToFitId: scaleToFitId,
      resetId: resetId,
      data: tree,
      ...options,
    })
  }
}

module.exports = OrgChart
