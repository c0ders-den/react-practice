import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

class HourglassApp extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          Root Application
        </div>
      </Provider>
    )
  }
}

export default HourglassApp
