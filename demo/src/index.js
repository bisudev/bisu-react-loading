import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'
import './demo.scss'

let Demo = React.createClass({
  render() {
    return <div>
      <h1>bisu-react-loading Demo</h1>
      <div style={{ width: '200px'}}>
        <Component name="double-bounce" />
      </div>
      <Component name="cube-grid" />
      <Component />
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
