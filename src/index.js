import React from 'react'
import { string } from 'prop-types'
import Spinner from 'react-spinkit'
import cn from 'classnames'

const BisuReactLoading = ({ name, overlay, text }) => {
  const cl = cn('bisu--react-loading', { overlay })
  return (
    <div className={cl}>
      <Spinner spinnerName={name} noFadeIn />
      <div className="text-center"><small><em>{text}</em></small></div>
    </div>
  )
}

BisuReactLoading.defaultProps = {
  name: 'cube-grid',
}

export default BisuReactLoading
