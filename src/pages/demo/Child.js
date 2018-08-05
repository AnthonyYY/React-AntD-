import React from 'react'

export default class Child extends React.Component {
  componentWillMount () {
    console.log('will mount')
  }

  componentDidMount () {
    console.log('did mount')
  }

  componentWillReceiveProps (props) {
    console.log('will receive props' + props.name)
  }

  shouldComponentUpdate () {
    console.log('should update')
    return true
  }

  componentWillUpdate () {
    console.log('will update')
  }

  componentDidUpdate () {
    console.log('did update')
  }

  componentWillUnmount () {
    console.log('will unmount')
  }

  render () {
    return <div>{this.props.name}</div>
  }
}
