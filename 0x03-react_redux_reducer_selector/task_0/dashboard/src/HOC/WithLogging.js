import React from 'react'
import propTypes from 'prop-types'

class WithLogging extends React.Component {
  constructor(props) {
    super(props)
    let wrappedCName = React.Children.toArray(props.children)[0].className
    if (wrappedCName == undefined) wrappedCName = 'Component'
  }
  componentDidMount() {
    console.log(`Component ${wrappedCName} is mounted`)
  }
  
  componentWillUnmount() {
    console.log(`Component ${wrappedCName} is going to unmount`)
  }
  displayName = `WithLogging(${wrappedCName})`
}