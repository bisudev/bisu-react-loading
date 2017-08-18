import React from 'react'

import Loading from '../../src'

const Overlay = () =>
  <div>
    <h3>Overlay Loading</h3>
    <div className="box">
      <Loading text="Loading good items..." overlay />
      <h4>This is a box full of text</h4>
      <p>The quick brown fox jumps over the lazy dog.</p>
      <h1>Hello this is a placeholder</h1>
      <h1>Hello this is a placeholder</h1>
      <h1>Hello this is a placeholder</h1>
      <h1>Hello this is a placeholder</h1>
      <h1>Hello this is a placeholder</h1>
    </div>
  </div>

export default Overlay
