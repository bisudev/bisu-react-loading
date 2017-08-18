import React from 'react'
import Pulse from 'better-react-spinkit/dist/Pulse'
import cn from 'classnames'

const BisuReactLoading = ({ text, overlay, size, ...props }) => {
  const cl = cn('bisu--react-loading', { is_overlay: overlay })
  return (
    <div className={cl}>
      <div>
        <Pulse
          size={size}
          {...props}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      </div>
      <div className="text-center">
        <small>
          <em>
            {text}
          </em>
        </small>
      </div>
    </div>
  )
}

BisuReactLoading.defaultProps = {
  size: 50,
  text: 'Loading...',
}

export default BisuReactLoading
