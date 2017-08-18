import React from 'react'

import Loading from '../../src'

const WithText = () =>
  <div>
    <h3>WithText Loading</h3>
    <div className="box">
      <Loading text="Loading good items..." />
    </div>
  </div>

export default WithText
