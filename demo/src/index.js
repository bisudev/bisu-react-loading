import React from 'react'
import { render } from 'react-dom'

import Default from './default'
import WithText from './with-text'
import Overlay from './overlay'

import './demo.scss'

const Demo = () =>
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h1>bisu-react-loading Demo</h1>
        <hr />
        <Default />
        <hr />
        <WithText />
        <hr />
        <Overlay />
      </div>
    </div>
  </div>

/*import React from "react"
import { render } from "react-dom"

import Component from "../../src"
import "./demo.scss"

let Demo = React.createClass({
  render() {
    return (
      <div>
        <h1>bisu-react-loading Demo</h1>
        <div style={{ width: "200px", background: "yellow" }}>
          <Component name="double-bounce" />
        </div>
        <Component name="cube-grid" />
        <h3>Overlay example</h3>
        <div className="overlay-container">
          <p>Some text here</p>
          <Component text="Processing..." overlay />
        </div>
        <Component />
      </div>
    )
  },
})*/

render(<Demo />, document.querySelector('#demo'))
