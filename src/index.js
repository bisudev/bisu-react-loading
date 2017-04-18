import React from 'react'
import { string } from 'prop-types'
import Spinner from 'react-spinkit'

const BisuReactLoading = ({ name }) => (
  <div className="bisu--react-loading">
    <Spinner spinnerName={name} noFadeIn />
  </div>
)

BisuReactLoading.defaultProps = {
  name: 'cube-grid',
}

export default BisuReactLoading
