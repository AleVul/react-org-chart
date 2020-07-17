import React from 'react'
import './App.css'
import OrgChart from '@smartprocure/react-org-chart'
import { BrowserRouter, Route } from 'react-router-dom'
import { tree } from './Tree'
import avatarPersonnel from './assets/avatar-personnel.svg'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tree: tree,
      downloadingChart: false,
      config: {},
    }
  }

  handleDownload = () => {
    this.setState({ downloadingChart: false })
  }

  handleOnChangeConfig = config => {
    this.setState({ config: config })
  }

  handleLoadConfig = () => {
    const { config } = this.state
    return config
  }

  render() {
    const { tree, downloadingChart } = this.state

    //For downloading org chart as image or pdf based on id
    const downloadPdfId = 'org-chart-download-pdf'
    const downloadImageId = 'org-chart-download-image'

    return (
      <BrowserRouter basename="/react-org-chart">
        <Route exact path="/">
          <>
            <div className="org-chart-zoom-buttons">
              <button
                className="btn btn-outline-primary org-chart-zoom-button"
                id="org-chart-zoom-in"
              >
                Zoom In
              </button>
              <button
                className="btn btn-outline-primary org-chart-zoom-button"
                id="org-chart-zoom-out"
              >
                Zoom Out
              </button>
              <button
                className="btn btn-outline-primary org-chart-zoom-button"
                id="org-chart-scale-to-fit"
              >
                Scale to Fit
              </button>
              <button
                className="btn btn-outline-primary org-chart-zoom-button"
                id="org-chart-reset"
              >
                Reset
              </button>
            </div>
            <div className="org-chart-download-buttons">
              <button className="btn btn-outline-primary" id="org-chart-download-image">
                Download as image
              </button>
              <button className="btn btn-outline-primary" id="org-chart-download-pdf">
                Download as PDF
              </button>
              <a
                className="github-link"
                href="https://github.com/smartprocure/react-org-chart"
              >
                Github
              </a>
              {downloadingChart && <div>Downloading chart</div>}
            </div>
            <OrgChart
              style={{height: "100%"}}
              tree={tree}
              downloadPdfId={downloadPdfId}
              downloadImageId={downloadImageId}
              onConfigChange={config => this.setState({ config })}
              loadConfig={() => this.state.config}
              downloadedOrgChart={d => {
                this.handleDownload()
              }}
              loadImage={d => {
                return Promise.resolve(avatarPersonnel)
              }}
              loadParent={d => {
                const parentData = this.getParent(d)
                return parentData
              }}
              loadChildren={d => {
                const childrenData = this.getChild(d.id)
                return childrenData
              }}
            />
          </>
        </Route>
      </BrowserRouter>
    )
  }
}
