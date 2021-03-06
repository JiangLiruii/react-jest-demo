import React, { Component } from 'react'
import {Button} from '../component/button'

/**
 * Button container
 * 
 * @type {React.ClassicComponent<{},{text: string}>}
 */
export class Buttons extends Component {
  constructor() {
    super()
    this.state = {
      text: 'hello world'
    }
  }
  handleOnClick= () => {
    this.setState({
      text: 'hello you'
    })
  }
  render() {
    return <div onClick={this.handleOnClick}>
      <Button text={this.state.text} />
    </div>
  }
}