import React from 'react'

import Loading from '../../src'

const Default = () =>
  <div>
    <h3>Default Loading</h3>
    <div className="row">
      <div className="col-sm-3">Sidebar</div>
      <div className="col-sm-9">
        <Loading />
      </div>
    </div>
  </div>

export default Default
