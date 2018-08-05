import React from 'react'
import Child from './Child'

export default class Life extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Anthony'
    }
  }

  chaneName (event) {
    console.log(event)
  }

  render () {
    return (
      <div>
        <p>React 生命周期介绍</p>
        <input
          ref={node => (this.node = node)}
          type='text'
          onChange={this.changeName}
        />
        <Child name={this.state.name} />
      </div>
    )
  }
}
